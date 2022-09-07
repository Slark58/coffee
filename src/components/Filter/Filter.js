import React, { Component } from 'react';
import Cards from './Cards/Cards';
import './Filter.scss'


class Filter extends Component{
        constructor(props) {
            super(props);
            this.state = {
                term: '',
                active: false   
            }
        }

        

        onMitting = (e) => {
            const term = e.target.value;
            this.setState({term})
            this.props.onUpdateSearch(term)
            // console.log(this.state.term)
        }

        
        
        

        handleClick = (e) => {

            
            
            if(e.target.className === 'activeButton') {
                e.target.className = 'filter__search-countries-btn';
                console.log('remove')
            } else {
                e.target.className = 'activeButton';
                console.log('add class')
            }

                
          };


        onReset = ({name, title, price}) => {
            const foo = document.querySelectorAll("filter__search-countries-btn ");

            

            foo.forEach(button => {
                button.classList.remove('activeButton')

            })
        }


        render() {
            const {data, filter, onFilterSelect} = this.props;

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

            

            const elements = data.map(item => {
                const {name, title, price} = item
                return (
                    <Cards name={name} title={title} price={price}/>
                )
            })

            console.log('render')

            return (
                <section className='filter'>
                    <div className="filter__search">
                        <div className="filter__search-text">
                            <div className="filter__search-text-title">Lookiing for</div>
                            <input value={this.state.term} onChange={this.onMitting} className="filter__search-text-input" placeholder='start typing here...'></input>
                        </div>
                        <div onClick={this.onStyle} className="filter__search-countries">
                            <div className="filter__search-countries-title">Filter</div>
                            {buttons}
                            <buttons onClick={() => onFilterSelect('')} className={`filter__search-countries-btn reset`}>reset</buttons>
                            {/* <button onClick={this.handleClick} className={"filter__search-countries-btn Brazil"}>Brazil</button>
                            <button onClick={this.handleClick} className={"filter__search-countries-btn Columbia"}>Columbia</button>
                            <button onClick={this.handleClick} className={"filter__search-countries-btn Kenya"}>Kenya</button> */}
                        </div>
                    </div>
    
    
                    <div className="filter__wrapper">
                        {elements}
                    </div>
    
                </section>
                
            );
        }
}

export default Filter;
