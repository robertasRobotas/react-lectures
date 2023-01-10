import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Currency from "./pages/currency/Currency";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currency/:id" element={<Currency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
