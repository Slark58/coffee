import './BestCard.scss';
import card_1 from '../../Img/card_1.png';
import card_2 from '../../Img/card_2.png';
import card_3 from '../../Img/card_3.png';

const Card = () => {
    return (
        <div className="Card__wrapper">
            <div className="Card__wrapper-item">
                <img src={card_1} alt="coffee" />
                <div className="Card__wrapper-item-text">Solimo Coffee Beans 2 kg</div>
                <div className="Card__wrapper-item-salary">10.73$</div>
            </div>
            <div className="Card__wrapper-item">
                <img src={card_2} alt="coffee" />
                <div className="Card__wrapper-item-text">Presto Coffee Beans 1 kg</div>
                <div className="Card__wrapper-item-salary">15.99$</div>
            </div>
            <div className="Card__wrapper-item">
                <img src={card_3} alt="coffee" />
                <div className="Card__wrapper-item-text">AROMISTICO Coffee 1 kg</div>
                <div className="Card__wrapper-item-salary">6.99$</div>
            </div>
        </div>
    )
}

export default Card;