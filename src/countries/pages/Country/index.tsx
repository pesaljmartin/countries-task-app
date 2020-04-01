import { observer } from 'mobx-react';
import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CountryComponent from '../../components/CountryComponent';
import { useStores } from '../../hooks';
import { TParams } from '../../models/params';

const Country: FC<RouteComponentProps<TParams>> = observer(({ match }) => {
  const { rootStore } = useStores();

  useEffect(() => {
    rootStore.countryStore.setCountry(match.params.value)
  }, [rootStore.countriesStore.countries, rootStore, match]);

  return <CountryComponent
    name={rootStore.countryStore.country && rootStore.countryStore.country.name}
    borderCountries={rootStore.countryStore.borderCountries} />;

})

export default Country;