import React, { useMemo, useState } from 'react';
import Cards from './Cards/Cards';
import './Filter.scss'


const Filter = (props) => {


        const [term, setTerm] = useState('');
        const [active, setActive] = useState(false);


        
        

        const onMitting = (e) => {
            setTerm(e.target.value)
            props.onUpdateSearch(term)
        }


        
        

     


        
            const {data, filter, onFilterSelect} = props;

            const buttonsData = [
                {name: 'Brazil' },
                {name: 'Columbia' },
                {name: 'Kenya' },   
                {name: 'America' },
            ];

            const buttons = buttonsData.map(({name}) => {
                const active = filter === name;
                const clazz = active ? 'activeButton' : '';

                return (
                    <button onClick={() => onFilterSelect(name)} className={`filter__search-countries-btn ${clazz}`}>{name}</button>
                )
            })

            

            const elements = useMemo(() => {
                    return data.map(item => {
                        const {name, title, price} = item
                        return (
                            <Cards name={name} title={title} price={price}/>
                    )
                })
            }, [term, filter])

            console.log('render')

            return (
                <section className='filter'>
                    <div className="filter__search">
                        <div className="filter__search-text">
                            <div className="filter__search-text-title">Lookiing for</div>
                            <input value={term} onChange={onMitting} className="filter__search-text-input" placeholder='start typing here...'></input>
                        </div>
                        <div  className="filter__search-countries">
                            <div className="filter__search-countries-title">Filter</div>
                            {buttons}
                            <button onClick={() => onFilterSelect('')} className={`filter__search-countries-btn reset`}>reset</button>
                        </div>
                    </div>
                            
                    
    
                    <div className="filter__wrapper">
                        {elements}
                    </div>
    
                </section>
                
            );
        }


export default Filter;
