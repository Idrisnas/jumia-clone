import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import "./index.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Help from "./pages/Help"; 
import SignUp from "./pages/SignUp";
import Electronics from "./pages/Electronics";
import Admin from "./components/Admin";
import AdminDashboard from "./components/AdminDashboard";
import AddProduct from "./components/AddProduct";
import FProductPage from "./components/FproductPage";
import Category from "./components/Category";
import AdminSingIn from "./components/AdminSignIn";
import CategoryPage from "./components/CategoryPage";
import Productpage from "./components/Productpage";
import { CartProvider } from "./context/CartContext";
import LoginForm from "./pages/LoginForm";
import NewArrival from "./pages/NewArrival";
import ClearanceSale from "./pages/ClearanceSale";
import AppDeals from "./pages/AppDeals";
import PhoneandTabs from "./pages/PhoneandTabs";
import UpDiscount from "./pages/UpDiscount";
import CheckOut from "./components/CheckOut";

// This wrapper will check the current path
function LayoutWrapper({ children }) {
  const location = useLocation();
  

  const hideNavAndFooterPaths = [
    '/signin', // Admin SignIn page
    '/admin', // Admin Dashboard or Admin landing page
    '/dashboard', // Admin Dashboard
    '/category', // Admin Category management page
    '/checkout', // Checkout page
    '/profile', // Profile page
    '/AddProduct'
  ];

  // If the current path is in the hideNavAndFooterPaths array, do not show Nav and Footer
  const showNavAndFooter = !hideNavAndFooterPaths.includes(location.pathname);


  // console.log('Current Path:', location.pathname); 

  return (
    <>
      {showNavAndFooter && <Nav />}
      {children}
      {showNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help" element={<Help />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/newarrival" element={<NewArrival />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/clearance" element={<ClearanceSale />} />
            <Route path="/appdeals" element={<AppDeals />} />
            <Route path="/updiscount" element={<UpDiscount />} />
            <Route path="/phones&tab" element={<PhoneandTabs />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signin" element={<AdminSingIn />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/category" element={<Category />} />
            <Route path="/display-categories" element={<FProductPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/product/:id" element={<Productpage />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/login" element={<LoginForm />} />

          </Routes>
        </LayoutWrapper>
      </Router>
    </CartProvider>
  );
}

export default App;
