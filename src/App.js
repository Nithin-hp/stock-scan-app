import React from "react";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
      </Routes>
      <Routes>
        <Route path="/details/:id" element={<DetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
