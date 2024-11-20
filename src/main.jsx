import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { ThemeUpdater } from './Services/ThemeUpdater.jsx';
import { UserProvider } from './Context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <ThemeUpdater />
        <App />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)
