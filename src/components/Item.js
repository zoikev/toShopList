import React from 'react';

// Componente para mostrar cada producto en la lista
const Item = ({ item, onToggle, onDelete }) => {
    return (
        <div>
        <input
            type="checkbox"
            checked={item.purchased}
            onChange={() => onToggle(item.id)}
        />
        <span style={{ textDecoration: item.purchased ? 'line-through' : 'none' }}>
            {item.quantity} - {item.name}
        </span>
        <button onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
    );
};

export default Item;
