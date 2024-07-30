import React,  { useState } from "react";
import { fetchCountries } from "./api/api";
import './app.css'
import img from './images/image.png'
import { fetchData } from "./api/api";
import Cards from './component/cards/cards'
import Chart from './component/chart/chart'
import CountryPicker from './component/countryPicker/countryPicker'

class App extends React.Component {
  state={
    data: {},
    country: ''
  }

  async componentDidMount(){
    const data = await fetchData()
    this.setState({data})
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country)
    this.setState({data, country: country})
  }

  render(){
    const {data, country} = this.state
    return(
    <div className="container">
    <img className="image" src={img} alt="COVID-19" />
    <Cards data={data}/>
    <CountryPicker handleCountryChange={this.handleCountryChange}/>
    <Chart data={data} country={country}/>
   </div>
    )
  }
}

export default App;
