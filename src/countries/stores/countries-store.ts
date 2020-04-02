import { action, observable, runInAction } from 'mobx';
import { getAllCountries } from '../api/country-api';
import { Country } from '../models/country';
import { RootStore } from './root-store';

export class CountriesStore {

  constructor(private rootStore: RootStore) { }

  @observable
  countries = [] as Country[];

  @action
  setCountries() {
    getAllCountries().then(items => {
      runInAction(() => {
        this.countries = items
      })
    });
  }
}