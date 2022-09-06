import React, { Component } from 'react';
import '../AboutUs/AboutUs.scss';
import coffeeBlack from '../../icons/fullBlack.svg';
import woman from '../../Img/woman__2.png';

import './Info.scss';

class Info extends Component {
    render() {
        return (
            <section className='info'>
                <div className="info__wrapper">
                    <div className="info__img"><img src={woman} alt="woman" /></div>
                    <div className="info__block">
                        <div className="info__block-title">About our beans</div>
                        <div className="line">
                            <span className="line__Left Black"></span>
                            <img src={coffeeBlack} alt="coffee" />
                            <span className="line__Right Black"></span>
                        </div>
                        <div className="info__block-text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
                            Afraid at highly months do things on at. Situation  recommend objection do intention<br/>
                            so questions. <br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel <br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went <br/>
                            is song that held help face.
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Info;
