import * as React from "react";
import Layout from "./components/Views/Layout/Layout";
import Accessories from "./components/Views/Jewelery/Jewelery";
import Electronics from "./components/Views/Electronics/Electronics";
import MensClothing from "./components/Views/MensClothing/MensClothing";
import WomensClothing from "./components/Views/WomensClothing/WomensClothing";
import Register from "./components/Views/Register/Register";
import Login from "./components/Views/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/Views/StartPage/StartPage";
import ProductPage from "./components/Views/ProductPage/ProductPage";
import Account from "./components/Views/Account/Account";
import PrivateRoute from "./components/hocs/PrivateRoute";
import UnPrivateRoute from "./components/hocs/UnPrivateRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />}></Route>
            <Route path="startpage" element={<StartPage />}></Route>
            <Route path="products" element={<ProductPage />}></Route>
            <Route path="products/:id" element={<ProductPage />}></Route>
            <Route path="mens-clothing" element={<MensClothing />}></Route>
            <Route path="womens-clothing" element={<WomensClothing />}></Route>
            <Route path="accessories" element={<Accessories />}></Route>
            <Route path="electronics" element={<Electronics />}></Route>
            <Route
              path="account"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="account/:firstname/:lastname"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="login"
              element={
                <UnPrivateRoute>
                  <Login />
                </UnPrivateRoute>
              }
            ></Route>

            <Route
              path="register"
              element={
                <UnPrivateRoute>
                  <Register />
                </UnPrivateRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
