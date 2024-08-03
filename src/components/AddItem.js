import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !quantity) return;

        onAdd({ name, quantity, id: Date.now(), purchased: false });
        setName('');
        setQuantity('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            className='inputNumber'
            type="number"
            placeholder="Cantidad"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
        />
        <input
            type="text"
            placeholder="Producto"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Agregar</button>
        </form>
    );
};

export default AddItem;
