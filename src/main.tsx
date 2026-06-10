import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './config/fontAwesomeConfig'
import './i18n'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CategoryPage } from './pages/CategoryPage.tsx'
import { TombolaPage } from './pages/TombolaPage.tsx'
import { CartPage } from './pages/CartPage.tsx'
import { TopUpPage } from './pages/TopUpPage.tsx'
import { CartProvider } from './context/CartContext/CartProvider.tsx'
import { UserProvider } from './context/UserContext/UserProvider.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/category/:categoryId",
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
    path: "/top-up",
    element: <TopUpPage />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider>
  </StrictMode>
)
