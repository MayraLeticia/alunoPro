import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Login, Home, Register} from '../screens'

const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />} path="/" />
            <Route element={<Home />} path="/home" />
            <Route element={<Register />} path="/register" />
        </Routes>
    </BrowserRouter>
)

export default RoutesComponent;