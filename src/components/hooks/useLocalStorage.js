import React, { useState } from 'react'

const useLocalStorage = (key, initialValues) => {
    const [storedValue, setStoredValue] = useState(()=> {
      if(localStorage.getItem(key)) {
        return(JSON.parse(localStorage.getItem(key)));
      } else {
        localStorage.setItem(key, JSON.stringify(initialValues));
        return(initialValues);
      }
    });
    const setValue = value => {
      // Save state
      setStoredValue(value);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
  
  
  }

  export default useLocalStorage;