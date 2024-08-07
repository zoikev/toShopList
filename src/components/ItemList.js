import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Item from './Item';

// Componente para mostrar la lista completa de productos
const ItemList = () => {
  const [items, setItems] = useState([]);

  // Escucha cambios en la colección 'items' de Firestore en tiempo real
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'items'), (snapshot) => {
      const itemsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsList);
    });

    // Limpieza al desmontar el componente
    return () => unsubscribe();
  }, []);

  // Función para marcar un producto como comprado/no comprado
  const handleToggle = async (id) => {
    const itemRef = doc(db, 'items', id);
    const item = items.find((item) => item.id === id);
    await updateDoc(itemRef, { purchased: !item.purchased });
  };

  // Función para eliminar un producto de la lista
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'items', id));
  };

  return (
    <div  className="shopList">
      {items.map((item) => (
        <Item key={item.id} item={item} onToggle={() => handleToggle(item.id)} onDelete={() => handleDelete(item.id)} />
      ))}
    </div>
  );
};

export default ItemList;
