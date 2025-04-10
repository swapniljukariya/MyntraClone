import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ProductDetails from "./components/ProductDetails"; // Product details page
import ProductPage from "./components/ProductPage"; // Individual product page
import MenPage from "./components/MenPage.js"; // Men category page
import WomenPage from "./components/WomenPage"; // Women category page
import KidsPage from "./components/KidsPage"; // Kids category page
import HomeLivingPage from "./components/HomeLivingPage"; // Home & Living category page
import StudioPage from "./components/StudioPage"; // Studio page
import Profile from "./components/Profile.js"; // Profile page
import Wishlist from "./components/WishListPage"; // Wishlist page
import Bag from "./components/Bag"; // Shopping bag page
import {Outlet} from "react-router-dom";
import FilteredResults from "./components/FilteredResults";
import Login from './components/Login'
import ModelPage from "./components/Model";


function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content - Ensure it grows to fill space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Home page */}
      <Route index element={<Main />} />

      {/* Product details and individual product page */}
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="/product-page/:id" element={<ProductPage />} />




      {/* Navigation paths for each category */}
      <Route path="men" element={<MenPage />} />
      <Route path="women" element={<WomenPage />} />
      <Route path="kids" element={<KidsPage />} />
      <Route path="home-living" element={<HomeLivingPage />} />
      <Route path="studio" element={<StudioPage />} />
      <Route path="profile" element={<Login />} />
      {/* Additional pages */}
      <Route path="profile" element={<Profile />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="bag" element={<Bag />} />
      <Route path="/filtered-results" element={<FilteredResults />} />
      <Route path="/influencer/:id" element={<ModelPage />} />

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
