import { useState } from "react";
//local storage needs a key and a value
export function useLocalStorage(key, initialValue) {
  //setting up a state properity
  const [storedValue, setStoredValue] = useState(() => {
    //state property is going to take a function as
    //it's initial value. When we do this, whatever that
    //callback function  returns is what gets set
    //as the intialValue for the state property
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // const setValue = value => {
  //   setStoredValue(value);
  //   window.localStorage.setItem(key, JSON.stringify(value))
  // }

  const customSetter = newValue => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, customSetter];
}
