import axios from 'axios';

const coronaVirusURL = 'https://covid19.mathdro.id/api';


export const getCoronaVirusData = async (country) => {
    var countryCoronaVirusCasesURL = coronaVirusURL;
    console.log('sel: ', country)
    if (country) {
        countryCoronaVirusCasesURL = `${coronaVirusURL}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(countryCoronaVirusCasesURL);
        const coronaVirusData = { confirmed, recovered, deaths, lastUpdate }
        console.log('corona data: ', coronaVirusData);
        return coronaVirusData;
    } catch (error) {
        console.log('error while fetching data: ', error);
    }
}

export const getDailyCoronaVirusData = async () => {
    try {
        const { data } = await axios.get(`${coronaVirusURL}/daily`);
        const dailyData = data.map((item) => ({
            confirmed: item.confirmed.total,
            deaths: item.deaths.total,
            date: item.reportDate
        }))
        return dailyData
    } catch (error) {
        console.log('error while getting daily cases: ', error)
    }
}

export const getCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${coronaVirusURL}/countries`);
        return countries.map(country => country.name);
    } catch (error) {
        console.log('error while fetching countries: ', error);
    }
}