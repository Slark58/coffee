import {  Routes, Route, Link} from 'react-router-dom';

import coffee2 from '../../icons/Withe.svg'


import Coffeehouse from '../pages/Coffee house';
import Ourcoffee from '../pages/Our coffee';
import Foryourpleasure from '../pages/For your pleasure';
import { Fragment } from 'react';


const Links = ({data, onUpdateSearch, filter, onFilterSelect}) => {

    // console.log(data)


    return (
        <Fragment> 
        <nav className="nav indent">
            <Link to="/" className="nav__link WhiteText"><img src={coffee2} alt="coffee"/>Coffee house</Link>
            <ul className="nav__list">
                <li className="nav__lists"><Link className="nav__link WhiteText" to="/ourcoffee">Our coffee</Link></li>
                <li className="nav__lists"><Link className="nav__link WhiteText" to="/foryourpleasure">For your pleasure</Link></li>
            </ul>
        </nav>


        <Routes>
            <Route  path="/" element={<Coffeehouse/>}/>
            <Route  path="/ourcoffee" element={<Ourcoffee data={data} onUpdateSearch={onUpdateSearch} filter={filter} onFilterSelect={onFilterSelect}/>}/>
            <Route  path="/foryourpleasure" element={<Foryourpleasure/>}/>
        </Routes>
        </Fragment>
    )
}

export default Links;