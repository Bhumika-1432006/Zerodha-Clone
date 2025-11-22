import React from 'react';
import Hero  from './Hero';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';



function Homepage() {
    return (
        <>
           {/*<Navbar />*/}
            <Hero /> 
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            {/*< Footer />*/}
        </>
      );
}

export default Homepage;