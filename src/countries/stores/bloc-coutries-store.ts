import { action, observable, runInAction } from 'mobx';
import { getBlocCountries } from '../api/country-api';
import { Country, CountryCode } from '../models/country';
import { RootStore } from './root-store';

export class BlocCountriesStore {

  constructor(private rootStore: RootStore) { }

  @observable
  blocCountries = [] as Country[];

  @action
  setBlocCountries(param: string) {
    getBlocCountries(param).then((items: Country[]) => {
      runInAction(() => {
        const codes = items.reduce((item: CountryCode, current: Country) => Object.assign({}, item, { [current.alpha3Code]: true }), {});
        this.blocCountries = this.rootStore.countriesStore.countries.filter((country: Country) => codes[country.alpha3Code]);
      })
    });
  }
}