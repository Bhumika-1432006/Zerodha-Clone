import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup.js';
import Aboutpage from  './landing_page/about/AboutPage.js';
import Productpage from './landing_page/products/ProductsPage.js';
import Supportpage from './landing_page/support/SupportPage.js';
import Pricingpage from './landing_page/pricing/PrincingPage.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
import NotFound from './landing_page/NotFound.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
{/* we have used navbar outside the Routes because it has to be common for all the below pages */}
  <Navbar />
<Routes>

  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/about" element={<Aboutpage/>}></Route>
  <Route path="/product" element={<Productpage/>}></Route>
  <Route path="/support" element={<Supportpage/>}></Route>
  <Route path="/pricing" element={<Pricingpage/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
  

</Routes>
{/* we have used Footer outside the Routes because it has to be common for all the below pages */}
<Footer /> 
</BrowserRouter>
);

