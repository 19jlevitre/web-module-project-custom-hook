import useLocalStorage from "./useLocalStorage";
import React from 'react';

const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('modes')

    return [darkMode];
}

export default useDarkMode;