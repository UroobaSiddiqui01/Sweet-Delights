import React from 'react';
import Home from "./home";
import  About from "./about";
import Order from './order';
const HomePage: React.FC = () => {

    return(
      <div>
        <Home/>
        <About/>
        <Order/>
      </div>
    )
}
export default  HomePage;

