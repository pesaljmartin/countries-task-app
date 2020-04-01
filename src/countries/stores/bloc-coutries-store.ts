import { action, observable } from 'mobx';
import { getBlocCounties } from '../api/country-api';
import { Country, CountryCode } from '../models/country';
import { RootStore } from './root-store';

export class BlocCountriesStore {
  rootStore: RootStore
  getBlocCounties: void

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable
  blocCountries = [] as Country[];

  @action
  setBlocCountries(param: string) {
    this.getCountriesBloc(param);
  }

  getCountriesBloc = (param: string) => {
    getBlocCounties(param).then((items: Country[]) => {
      const codes = items.reduce((item: CountryCode, current: Country) => Object.assign({}, item, { [current.alpha3Code]: true }), {});
      this.blocCountries = this.rootStore.countriesStore.countries.filter((country: Country) => codes[country.alpha3Code]);
    });
  }
}