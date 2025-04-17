import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequiresAuth } from "../components/requires-auth/RequiresAuth";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";

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
        </Routes>
    )
}