import React, { Component } from 'react';

import Navigation from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../Best/Best';
import Footer from '../Footer/footer';

class CoffeeHouse extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <AboutUs/>
                <OurBest/>
                <Footer/>
            </div>
        );
    }
}

export default CoffeeHouse;
