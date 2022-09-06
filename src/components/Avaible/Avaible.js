import React, { Component } from 'react';
import cardImg from '../../Img/card_3.png'
import '../Filter/Filter.scss'


class Avaible extends Component {
    render() {
        return (
             <section className='filter'>

                <div className="filter__wrapper">
                    <div className="filter__wrapper-card">
                        <div className="imgg"><img src={cardImg} alt="coffee" className="filter__wrapper-card-img" /></div>
                        <div className="filter__wrapper-card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="filter__wrapper-card-subtitle">Brazil</div>
                        <div className="filter__wrapper-card-price">6.99$</div>
                    </div>
                    <div className="filter__wrapper-card">
                        <div className="imgg"><img src={cardImg} alt="coffee" className="filter__wrapper-card-img" /></div>
                        <div className="filter__wrapper-card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="filter__wrapper-card-subtitle">Kenya</div>
                        <div className="filter__wrapper-card-price">6.99$</div>
                    </div>
                    <div className="filter__wrapper-card">
                        <div className="imgg"><img src={cardImg} alt="coffee" className="filter__wrapper-card-img" /></div>
                        <div className="filter__wrapper-card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="filter__wrapper-card-subtitle">Columbia</div>
                        <div className="filter__wrapper-card-price">6.99$</div>
                    </div>
                    <div className="filter__wrapper-card">
                        <div className="imgg"><img src={cardImg} alt="coffee" className="filter__wrapper-card-img" /></div>
                        <div className="filter__wrapper-card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="filter__wrapper-card-subtitle">Brazil</div>
                        <div className="filter__wrapper-card-price">6.99$</div>
                    </div>
                    <div className="filter__wrapper-card">
                        <div className="imgg"><img src={cardImg} alt="coffee" className="filter__wrapper-card-img" /></div>
                        <div className="filter__wrapper-card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="filter__wrapper-card-subtitle">Brazil</div>
                        <div className="filter__wrapper-card-price">6.99$</div>
                    </div>
                    <div className="filter__wrapper-card">
                        <div className="imgg"><img src={cardImg} alt="coffee" className="filter__wrapper-card-img" /></div>
                        <div className="filter__wrapper-card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="filter__wrapper-card-subtitle">Brazil</div>
                        <div className="filter__wrapper-card-price">6.99$</div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Avaible;
