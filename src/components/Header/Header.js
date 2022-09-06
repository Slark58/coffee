
import './Header.scss';
import coffee from '../../icons/noWhite.svg'

import { Component } from 'react';

class Navigation extends Component {
    render () {
        return (

                <header className="header">
                        
            
                        
                        <h1 className='header__title'>Everything You Love About Coffee</h1>
        
                        <div className="line">
                            <span className="line__Left White"></span>
                            <img src={coffee} alt="coffee" />
                            <span className="line__Right White"></span>
                        </div>
        
                        <h2 className="header__subtitle1">We makes every day full of energy and taste</h2>
                        <h2 className="header__subtitle2">Want to try our beans?</h2>
                        
                        <div className="header__btn"><button className="header__button"><span>More</span></button></div>
        
                </header>
            
                    
            
        )
        
    }
    
}

export default Navigation;
