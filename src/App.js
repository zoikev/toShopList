import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import './styles.css';

const App = () => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
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
