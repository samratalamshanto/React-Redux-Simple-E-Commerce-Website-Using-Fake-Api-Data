import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Component/Header";
import ProductList from "./Component/ProductList";
import ProductComponents from "./Component/ProductComponents";
import ProductDetails from "./Component/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
