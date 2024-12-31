import React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Main from './components/Main';
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';  // Import the ProductDetails component
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="product/:id" element={<ProductDetails />} /> {/* Route for product details */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
