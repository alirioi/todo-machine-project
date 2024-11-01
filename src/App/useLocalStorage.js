import React from 'react';

function useLocalStorage(key, initialValue) {
  const localStorageItem = localStorage.getItem(key);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(key, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(key, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
