import { Component } from 'react'


import './App.css';
import Links from '../Links/Links';
import Avaible from '../Avaible/Avaible';
import Footer from '../Footer/footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Kenya', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Columbia', price: 8},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'America', price: 16.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Kenya', price: 6.99},
                {title: 'AROMISTICO Coffee 1 kg', name: 'Columbia', price: 6.99}
            ],
            term: '',
            filter: '',
        }
    }



    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onSearcEmp = (data, term) => {
        if (term.lenght === 0) {
            return data;
        }

        return data.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }   

    onFilter = (items, filter) => {
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

    onFilterSelect = (filter) => {
        this.setState({filter})
    }
    


    render() {

        const {data, term, filter} = this.state;

        const visibleData = this.onFilter(this.onSearcEmp(data, term), filter);

        return (
            <div className="app">
                <Links data={visibleData} onUpdateSearch={this.onUpdateSearch} filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
        )
    }
    
}

export default App;
