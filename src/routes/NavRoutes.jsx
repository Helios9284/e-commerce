import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequiresAuth } from "../components/requires-auth/RequiresAuth";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Login } from "../pages/auth/Login/Login";
import { Signup } from "../pages/auth/Signup/Signup";
import { Logout } from "../pages/auth/Logout/Logout";
import { ProductListing } from "../pages/ProductListing/ProductListing";
import { Wishlist } from "../pages/Wishlist/Wishlist";

export const NavRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={ 
                <RequiresAuth>
                     <Cart />
                </RequiresAuth>
                }
            />
            <Route
                path="/wishlist"
                element={
                <RequiresAuth>
                    <Wishlist />
                </RequiresAuth>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product-listing" element={<ProductListing />} />
        </Routes>
    )
}