import React from 'react';
import Headers from "./header";
import Home from "./home";
import  About from "./about";
import Order from './order';
const HomePage: React.FC = () => {

    return(
      <div>
         <Headers/>
        <Home/>
        <About/>
        <Order/>
      </div>
    )
}
export default  HomePage;

