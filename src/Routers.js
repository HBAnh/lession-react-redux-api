import ProductNavForm from "./pages/ProductActionPage/ProductNavForm";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import App from "./App";


export default function Routers() {
    return <Router>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="products" element={<ProductListPage />} />
                        <Route path="products/add" element={<ProductNavForm />} />
                        <Route path="products/:id/edit" element={<ProductNavForm />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Router>
}
