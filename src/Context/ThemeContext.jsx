import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const handleThemeChange = (theme) => {
        setTheme(theme);
    };

    return <ThemeContext.Provider value={{ theme, handleThemeChange }}>{children}</ThemeContext.Provider>
}