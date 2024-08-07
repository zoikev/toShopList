import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import './styles.css';

// Componente principal de la aplicación
const App = () => {
  const [items, setItems] = useState([]);

  // Escucha cambios en la colección 'items' de Firestore en tiempo real
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'items'), (snapshot) => {
      const itemsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsList);
    });

    return () => unsubscribe();
  }, []);

  // Función para agregar un nuevo producto a la lista localmente
  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Función para marcar un producto como comprado/no comprado
  const toggleItem = async (id) => {
    const itemRef = doc(db, 'items', id);
    const item = items.find((item) => item.id === id);
    await updateDoc(itemRef, { purchased: !item.purchased });
  };

  // Función para eliminar un producto de la lista
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'items', id));
  };

  return (
    <div className="app">
      <Header />
      <AddItem onAdd={addItem} />
      <ItemList items={items} onToggle={toggleItem} onDelete={deleteItem} />
    </div>
  );
};

export default App;

