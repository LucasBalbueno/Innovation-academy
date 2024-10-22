import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { ThemeUpdater } from './Services/ThemeUpdater.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeUpdater />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
