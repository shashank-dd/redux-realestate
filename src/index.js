import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Basicinfo from './Components/basicinfo';
import Generalinfo from './Components/generalinfo';
import Homepage from './Components/homepage';
import LocationInfo from './Components/Locationinfo';
import Login from './Components/Login';
import Property from './Components/property';
import Register from './Components/Register';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/homepage'element={<Homepage/>}/>
      <Route path='/basicinfo'element={<Basicinfo/>}/>


    </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
