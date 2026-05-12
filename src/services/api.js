import axios from "axios";


const BASE_URL = 'https://disease.sh/v3/covid-19';

export const getGlobalData = () => {
    return axios.get(`${BASE_URL}/all`);
};



export const getAllCountries = () => {
    return axios.get(`${BASE_URL}/countries?sort=cases`);
};



export const getCountryData = (country) => {
    return axios.get(`${BASE_URL}/countries/${country}`);
