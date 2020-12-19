import React from 'react';
import styles from './App.module.css';
import  { fetchData } from './api';


import { Cards, Chart, CountryPicker} from './components';


class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        //fetchData
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country : country })
        console.log(country)

        //set the Data

    }
    
    render() {
        const { data, country } = this.state;
        return (
        <div className = {styles.container}>
            < Cards data = {data} />
            < CountryPicker handleCountryChange = {this.handleCountryChange}/>
            < Chart data = {data} country = {country}/>
        </div>
        )}
}

export default App;