import React, { Component } from 'react';
import Avaible from '../Avaible/Avaible';
import Footer from '../Footer/footer';
import Header3 from '../Header3/Header3';
import Info2 from '../Info/info2';

class ForYourPleasure extends Component {
    render() {
        return (
            <div>
                <Header3/>
                <Info2/>
                <Avaible/>
                <Footer/>
            </div>
        );
    }
}

export default ForYourPleasure;
