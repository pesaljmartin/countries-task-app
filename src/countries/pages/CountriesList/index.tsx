import { observer } from 'mobx-react';
import React, { ChangeEvent, FC, useEffect } from 'react';
import CountriesListComponent from '../../components/CountriesListComponent';
import { useStores } from '../../hooks';

const CountriesList: FC = observer(() => {
  const { rootStore } = useStores();

  useEffect(() => {
    rootStore.filteredCountriesStore.filterCountriesByName('');
  }, [rootStore.countriesStore.countries, rootStore]);

  const getFilteredCountriesByName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    rootStore.filteredCountriesStore.filterCountriesByName(value);
  }

  const getFilteredCountriesByBorders = (value: string): void => {
    rootStore.filteredCountriesStore.filterCountriesByBorder(value);
  }

  return <CountriesListComponent
    countries={rootStore.filteredCountriesStore.filteredCountries}
    options={rootStore.filteredCountriesStore.borderFilterOptions}
    handleNameChange={getFilteredCountriesByName}
    handleBorderChange={getFilteredCountriesByBorders} />

})

export default CountriesList;