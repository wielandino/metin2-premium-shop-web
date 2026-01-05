import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ItemDescriptionPage from './pages/ItemDescriptionPage.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/item", element: <ItemDescriptionPage />}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
