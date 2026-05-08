import axios from "axios"; //Esto le dice, necesito usar axios 

//Guardamos la dirección base de la API en una variable. Todas las peticiones empiezan por esta URL

const BASE_URL = 'https://disease.sh/v3/covid-19';

//Export significa"otros archivos pueden usar esta función", sin export la función solo existiría aquí dentro y nadie más podría usarla, con const getGlobalData, le damos el nombre a la función, =>arrow function es la forma moderna de escribir funciones en JavaScript, axios.get le dice a axios "ve a esta URL y traéme lo que haya", `${BASE_URL}/all` los backticks (`) permiten meter variables dentro del texto. Esto se convierte en https://disease.sh/v3/covid-19/all. Es la url, return devuelve los datos que trajo axios al componente que llamó a esta función

export const getGlobalData = () => {
    return axios.get(`${BASE_URL}/all`);
};


///countries?sort=cases, trae la lista de todos los países ordenados por número de casos. El ?sort=cases le dice a la API órdenalos de más a menos

export const getAllCountries = () => {
    return axios.get(`${BASE_URL}/countries?sort=cases`);
};


//Recibe un parámetro country. Cuando la llames le pasas un nombre de país y va a buscarlo, la URL se convierte en https://disease.sh/v3/covid-19/countries/Spain
export const getCountryData = (country) => {
    return axios.get(`${BASE_URL}/countries/${country}`);
};

//Todo este archivo es el mensajero del proyecto. Tiene 3 funciones, cada una va a una URL diferente de disease.sh. El sidebar usará las funciones 1 y 2, y el tracker1 usará la función 3