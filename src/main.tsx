import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

// // start mock server (MirageJS)
// if (import.meta.env.DEV) {
//   import('./mocks/server').then(({ makeServer }) => {
//     makeServer({ environment: 'development' })
//   })
// }

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)