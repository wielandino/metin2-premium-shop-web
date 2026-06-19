import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './config/fontAwesomeConfig'
import './i18n'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RouterErrorFallback } from './components/common/ErrorBoundary/RouterErrorFallback.tsx'
import { CategoryPage } from './pages/CategoryPage.tsx'
import { TombolaPage } from './pages/TombolaPage.tsx'
import { CartPage } from './pages/CartPage.tsx'
import { TopUpPage } from './pages/TopUpPage.tsx'
import { CartProvider } from './context/CartContext/CartProvider.tsx'
import { UserProvider } from './context/UserContext/UserProvider.tsx'
import { ErrorBoundary } from './components/common/ErrorBoundary/ErrorBoundary.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const wrap = (element: React.ReactElement) => <ErrorBoundary>{element}</ErrorBoundary>;

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RouterErrorFallback />,
    children: [
      { index: true, element: wrap(<App />) },
      { path: "category/:categoryId", element: wrap(<CategoryPage />) },
      { path: "tombola", element: wrap(<TombolaPage />) },
      { path: "cart", element: wrap(<CartPage />) },
      { path: "top-up", element: wrap(<TopUpPage />) },
    ],
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <CartProvider>

            <RouterProvider router={router} />

          </CartProvider>
        </UserProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
)
