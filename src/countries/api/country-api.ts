import { Country } from "../models/country";

export const getAllCountries = (): Promise<Country[]> => {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .catch(function (error) {
      console.log(error);
    });
}

export const getBlocCounties = (param: string): Promise<Country[]> => {
  return fetch(`https://restcountries.eu/rest/v2/regionalbloc/${param}`)
    .then(response => response.json())
    .catch(function (error) {
      console.log(error);
    });
}