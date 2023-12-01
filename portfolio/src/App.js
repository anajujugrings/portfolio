import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";


import Home from "./pages/home/home.js";

import JavaScript from "./pages/javascript/javascript.js";
import TypeScript from "./pages/typescript/typescript.js";
import Reactt from "./pages/reactt/reactt.js";


export default function App() {
   return (
    <BrowserRouter>
    <Routes>
   
        <Route element = { <Home></Home> }  path="/"/>
       
        <Route element = { <JavaScript></JavaScript> }  path="/javascript" />
        <Route element = { <TypeScript></TypeScript>}  path="/typescript" />
        <Route element = { <Reactt></Reactt>}  path="/reactt" />

    </Routes>
</BrowserRouter>

   );
  
  
  
  
}