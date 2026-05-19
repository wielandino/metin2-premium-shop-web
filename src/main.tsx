import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './config/fontAwesomeConfig'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CategoryPage } from './pages/CategoryPage.tsx'
import { TombolaPage } from './pages/TombolaPage.tsx'
import { UserProvider } from './context/UserContext.tsx'
import { CartPage } from './pages/CartPage.tsx'
import { MetinHuntPage } from './pages/MetinHuntPage.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/category/:categoryId",
    element: <CategoryPage />
  },
  {
    path: "/category/:categoryId?cat=:subCategoryId",
    element: <CategoryPage />
  },
  {
    path: "/tombola",
    element: <TombolaPage />
  },
  {
    path: "/cart",
    element: <CartPage />
  },
  {
    path: "/metin-hunt",
    element: <MetinHuntPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
)
