import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { NavigationProvider } from './context/NavigationContext'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
