import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Component/Header";
import ProductList from "./Component/ProductList";
import ProductDetails from "./Component/ProductDetails";
import Home from "./Component/home";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
