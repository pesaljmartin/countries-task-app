export interface CountryCode {
  [key: string]: string;
}

export interface RegionalBlocModel {
  value: string;
  label: string;
}

export interface Country {
  name: string;
  topLevelDomain: Array<string>;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: Array<string>;
  capital: string;
  altSpellings: Array<string>;
  region: string;
  subregion: string;
  population: number
  latlng: Array<number>;
  demonym: string;
  area: number;
  gini: number;
  timezones: Array<string>;
  borders: Array<string>;
  nativeName: string;
  numericCode: string;
  currencies: Array<Currency>;
  languages: Array<Language>;
  translations: Translations;
  flag: string;
  regionalBlocs: Array<RegionalBloc>;
  cioc: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Translations {
  [key: string]: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: Array<string>;
  otherNames: Array<string>;
}