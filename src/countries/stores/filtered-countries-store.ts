import { action, computed, observable } from "mobx";
import { Country } from "../models/country";
import { RootStore } from "./root-store";

export class FilteredCountriesStore {

  constructor(private rootStore: RootStore) { }

  @observable
  filteredCountries = this.rootStore.countriesStore.countries;

  @computed get
    borderFilterOptions() {
    return this.rootStore.countriesStore.countries.map((item: Country) => {
      return {
        label: item.name,
        value: item.alpha3Code
      }
    });
  }

  @action
  filterCountriesByName(value: string) {
    if (value.length > -1) {
      this.filteredCountries = this.rootStore.countriesStore.countries.filter((item: Country) => item.name.toLowerCase().indexOf(value) > -1)
    } else {
      this.filteredCountries = this.rootStore.countriesStore.countries;
    }
  }

  @action
  filterCountriesByBorder(value: string) {
    if (value === 'reset') {
      this.filteredCountries = this.rootStore.countriesStore.countries;
    } else {
      this.filteredCountries = this.rootStore.countriesStore.countries.filter((item: Country) => item.borders.indexOf(value) > -1)
    }
  }
}