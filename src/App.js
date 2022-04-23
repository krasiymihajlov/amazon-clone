import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Payment from './Payment.js';
import Login from './Login';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, {useEffect} from 'react'
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders';

const promise = loadStripe("pk_test_51Kr3orDh5Za2PlpOE4GbyLEd5AaM4onuBH3AZyaw9q3Ze0mPedCNkGvZTK0WSaQucajmUpG3XyhXvERaPiqqrNeX00XmN3Q6f8"); //API key - Publishable

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component loads... 
    //We atach this listener(observer) to the login on client
    onAuthStateChanged(auth, user => {
      if(user){
          //If logged in put it in reducer
          dispatch({
            type: 'SET_USER',
            user: user
          })
      } else {
        //the user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])

  return (
    // BEM convention
    <BrowserRouter>     
      <div className='app'>
        <Routes>
          <Route path="/orders" element={
            <div className='orders'>
                <Header />
                <Orders/>
            </div> }/>
          <Route path="payment" element={
            <div className='payment'>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
            </div>}/>
          <Route path="/login" element={
            <div className="login">
              <Login />
            </div>} />    
          <Route path="/checkout" element={
            <div className="checkout">
              <Header />              
              <Checkout />
            </div>}/>     
          <Route path="/" element={
            <div className="app">          
              <Header />
              <Home />
            </div>
          }/>
          <Route path="*" element={
            <Navigate to="/" replace/>
          } />     
       </Routes>       
      </div>
    </BrowserRouter>
  );
}

export default App;
