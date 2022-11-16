import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Page_Home"
import Sub from "./pages/Page_Sub";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/world" element={<Sub />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
