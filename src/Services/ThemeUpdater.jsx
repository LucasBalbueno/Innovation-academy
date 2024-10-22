import { useEffect, useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext.jsx';

export const ThemeUpdater = () => {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'light') {
            root.style.setProperty('--main-color', '#ffffff');
            root.style.setProperty('--background-color', '#e9e9e9');
            root.style.setProperty('--gray-color', '#ababab');
            root.style.setProperty('--text-color', '#000000');
            root.style.setProperty('--text-red', '#FF4040');
        } else {
            root.style.setProperty('--main-color', '#121214');
            root.style.setProperty('--background-color', '#1E1E1E');
            root.style.setProperty('--gray-color', '#3D3D3D');
            root.style.setProperty('--text-color', '#FFFFFF');
            root.style.setProperty('--text-red', '#FF4040');
        }
    }, [theme]);

    return null;
};