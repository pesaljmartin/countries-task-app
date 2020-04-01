import { action, observable } from 'mobx';
import { getAllCountries } from '../api/country-api';
import { Country } from '../models/country';
import { RootStore } from './root-store';

export class CountriesStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable
  countries = [] as Country[];

  @action
  setCountries(): void {
    getAllCountries().then(items => this.countries = items);
  }
}