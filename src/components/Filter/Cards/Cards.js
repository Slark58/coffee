import React, { Component } from 'react';
import cardImg from '../../../Img/card_3.png'

const Cards = (props) => {

    const {title, name, price} = props;
        
        return (
            <div className="filter__wrapper-card">
                <div className="imgg"><img src={cardImg} alt="coffee" className="filter__wrapper-card-img" /></div>
                <div className="filter__wrapper-card-title">{title}</div>
                <div className="filter__wrapper-card-subtitle">{name}</div>
                <div className="filter__wrapper-card-price">{price + "$"}</div>
            </div>
        );

}

export default Cards;
