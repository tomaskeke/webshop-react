import * as React from "react";
import Layout from "./components/Views/Layout/Layout";
import Accessories from "./components/Views/Jewelery/Jewelery";
import Electronics from "./components/Views/Electronics/Electronics";
import MensClothing from "./components/Views/MensClothing/MensClothing";
import WomensClothing from "./components/Views/WomensClothing/WomensClothing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/Views/StartPage/StartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />}></Route>
            <Route path="mens-clothing" element={<MensClothing />}></Route>
            <Route path="womens-clothing" element={<WomensClothing />}></Route>
            <Route path="accessories" element={<Accessories />}></Route>
            <Route path="electronics" element={<Electronics />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
