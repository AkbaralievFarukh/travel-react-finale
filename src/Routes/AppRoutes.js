import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../View/Home/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
        </Routes>
    );
};

export default AppRoutes;