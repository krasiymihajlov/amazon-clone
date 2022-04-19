import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, {useEffect} from 'react'
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component loads... 
    //We atach this listener(observer) to the login on client
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser)

      if(authUser){
          //If logged in put it in reducer
          dispatch({
            type: 'SET_USER',
            user: authUser
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
      </div>
    </BrowserRouter>




      // <div className="app">
      //   <Header />
      //   <Home />
      // </div>
  );
}

export default App;
