import React, { useState, useEffect } from 'react'
import './countryPicker.css'
import { fetchCountries } from './../../api/api';
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryPicker = ({handleCountryChange}) => {
  const [country, setCountry] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setCountry(await fetchCountries())
    }
    fetchApi()
  }, [])

  return (
    <FormControl className='formControl'>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=''>United State</option>
        {country.map((name, i) => <option key={i} value={name}>{name}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
