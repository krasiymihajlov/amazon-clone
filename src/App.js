import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    // BEM convention
    <BrowserRouter>
      <Header />

        <Routes>
         <Route path="/" element={<div className="app"><Home /></div>} />     
         <Route path="checkout" element={<div className="checkout"> <Checkout /></div>} />     
       </Routes>
       
    </BrowserRouter>




      // <div className="app">
      //   <Header />
      //   <Home />
      // </div>
  );
}

export default App;
