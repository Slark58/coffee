import './Best.scss';
import Card  from '../Best__cards/BestCard';



const OurBest = () => {
    return (
        <section className="best">
            <h2 className="best__title">Our best</h2>
            
            <div className="block">
                <Card/>
            </div>

        </section>
    )
}

export default OurBest;

