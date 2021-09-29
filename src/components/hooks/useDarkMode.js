import useLocalStorage from "./useLocalStorage";
import React from 'react';

const useDarkMode = initialState => {

    const [value, setValue] = useLocalStorage('modes', initialState)

    return ([value, setValue]);
}

export default useDarkMode;