import React, { useState, useEffect } from 'react';
import { getCountries } from '../../api';
import { NativeSelect, FormControl } from '@material-ui/core';
import style from './CountryPicker.module.css';



export default function CountryPicker({ handleCountryChange }) {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchingCountries = async () => {
            setCountries(await getCountries())
        }

        fetchingCountries();
    }, [setCountries])

    return (
        <FormControl className={style.formControl}>
            <NativeSelect defaultValue="" onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((item, id) => <option key={id} value={item}>{item}</option>)}
            </NativeSelect>
        </FormControl>
    )
}