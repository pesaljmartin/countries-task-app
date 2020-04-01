import { BlocCountriesStore } from './bloc-coutries-store';
import { CountriesStore } from './countries-store';
import { CountryStore } from './country-store';
import { FilteredCountriesStore } from './filtered-countries-store';

export class RootStore {
  countriesStore: CountriesStore;
  filteredCountriesStore: FilteredCountriesStore;
  blocCountriesStore: BlocCountriesStore;
  countryStore: CountryStore;

  constructor() {
    this.countriesStore = new CountriesStore(this)
    this.filteredCountriesStore = new FilteredCountriesStore(this)
    this.blocCountriesStore = new BlocCountriesStore(this)
    this.countryStore = new CountryStore(this)
  }
}