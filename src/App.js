import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    // BEM convention
    <BrowserRouter>     
        <Routes>

          <Route path="/login" element={
            <div className="login">
              <Login />
            </div>} />    
          <Route path="/checkout" element={   
            <div className="checkout">              
              <Header />
              <Checkout />
            </div>
          }/>     
          <Route path="/" element={
             <div className="app">          
              <Header />
              <Home />
            </div>
          }/>     
       </Routes>
       
    </BrowserRouter>




      // <div className="app">
      //   <Header />
      //   <Home />
      // </div>
  );
}

export default App;
