import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Charts from './components/Charts/Charts';
import { getCoronaVirusData } from './api';
import COVID19Image from './image.png'

function App() {

  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  async function getData() {
    const result = await getCoronaVirusData();
    setData(result);
  }

  const handleCountryChange = async (country) => {
    const result = await getCoronaVirusData(country);
    setData(result);
    setCountry(country);
    //
  }

  console.log('selected country: ', country)

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className={style.container}>
      <img src={COVID19Image} alt="Covid 19 image" className={style.image} />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  );
}

export default App;
