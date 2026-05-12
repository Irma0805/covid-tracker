import axios from 'axios'

const BASE_URL = 'https://disease.sh/v3/covid-19'

export const getGlobalData = () => {
  return axios.get(`${BASE_URL}/all`)
    .then(response => response.data)
}

export const getAllCountries = () => {
  return axios.get(`${BASE_URL}/countries?sort=cases`)
    .then(response => response.data)
}

export const getCountryData = (country) => {
  return axios.get(`${BASE_URL}/countries/${country}`)
    .then(response => response.data)
}

