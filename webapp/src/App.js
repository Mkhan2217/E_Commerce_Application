import "./App.css";
import ListAllProducts from "./components/ListAllProducts";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import {About} from '../src/components/About'
import AddProducts from "./components/AddProducts.js";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" Component={ListAllProducts} />
        <Route path="/about" Component={About} />
        <Route path="/addproducts" Component={AddProducts} />
        <Route path="/updateproduct/:id" Component={AddProducts} />
        <Route path="/cart" Component={Cart} />
        <Route path="/payment" Component={Payment} />
      </Routes>

  
    </div>
  );
}

export default App;
