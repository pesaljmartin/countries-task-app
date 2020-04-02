import { Country } from "../models/country";

export const getAllCountries = (): Promise<Country[]> => {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
}

export const getBlocCountries = (param: string): Promise<Country[]> => {
  return fetch(`https://restcountries.eu/rest/v2/regionalbloc/${param}`)
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
}