import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';  // Asegúrate de importar db desde tu archivo firebase.js

// Componente para agregar un nuevo producto a la lista
const AddItem = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity,
      purchased: false,
    };

    try {
      const docRef = await addDoc(collection(db, 'items'), newItem);
      onAdd({ ...newItem, id: docRef.id });
      setName('');
      setQuantity('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
