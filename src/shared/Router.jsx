import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dex" element={<Dex />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
