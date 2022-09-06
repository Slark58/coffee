import React, { Component, Fragment } from 'react';
import Cards from '../Filter/Cards/Cards';
import Filter from '../Filter/Filter';
import Footer from '../Footer/footer'
import Navigation2 from '../Header2/Header2';
import Info from '../Info/Info';



const OurCoffee = ({data, onUpdateSearch, filter, onFilterSelect}) => {



        
        
        const visibleData = data


        return (
            <div>
                <Navigation2/>
                <Info/>
                <Filter data={visibleData} onUpdateSearch={onUpdateSearch} filter={filter} onFilterSelect={onFilterSelect}/>
                <Footer/>
            </div>
           
        );
    
}

export default OurCoffee;
