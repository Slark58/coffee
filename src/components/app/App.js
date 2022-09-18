import { Component, useState} from 'react'


import './App.css';
import Links from '../Links/Links';


const App = () => {
        
            const [data, setData] = useState([
                {title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Kenya', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Columbia', price: 8},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'America', price: 16.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Kenya', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Columbia', price: 6.99}
            ]);
            const [term, setTerm] = useState('');
            const [filter, setFilter] = useState('');
        
    



    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const onSearcEmp = (data, term) => {
        if (term.lenght === 0) {
            return data;
        }

        return data.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }   

    const onFilter = (items, filter) => {
        switch(filter) {
            case 'Brazil':
                return items.filter(item => item.name == 'Brazil');
            case 'Columbia':    
                return items.filter(item => item.name == 'Columbia');
            case 'Kenya':
                return items.filter(item => item.name == 'Kenya');
            case 'America':
                return items.filter(item => item.name == 'America');
            default:
                return items;
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }
    




        // const {data, term, filter} = this.state;

        const visibleData = onFilter(onSearcEmp(data, term), filter);

        return (
            <div className="app">
                <Links data={visibleData} onUpdateSearch={onUpdateSearch} filter={filter} onFilterSelect={onFilterSelect}/>
            </div>
        )

    
}

export default App;
