import React from 'react';
import Headers from './header';
import Home from "./home";
import  About from "./about";
const HomePage: React.FC = () => {

    return(
      <div>
        <Home/>
        <About/>
        <Headers/>
      </div>
    )
}
export default  HomePage;

