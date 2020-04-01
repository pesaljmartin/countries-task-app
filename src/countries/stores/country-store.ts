import { action, observable } from 'mobx';
import { Country } from '../models/country';
import { RootStore } from './root-store';

export class CountryStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable
  country = {} as Country | undefined;

  @observable
  borderCountries = [] as Country[];

  @action
  setCountry(code: string) {
    this.country = this.rootStore.countriesStore.countries.find((country: Country) => country.alpha3Code === code);
    this.setBorderCountries(code);
  }

  @action
  setBorderCountries(code: string) {
    this.borderCountries = this.rootStore.countriesStore.countries.filter((country: Country) => country.borders.indexOf(code) > -1);
  }
}