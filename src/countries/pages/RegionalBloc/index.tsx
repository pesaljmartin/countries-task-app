import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { FC, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { countriesBlocs } from '../../constants/countries-blocs';
import { useStores } from '../../hooks';
import { Country } from '../../models/country';
import { TParams } from '../../models/params';

const RegionalBloc: FC<RouteComponentProps<TParams>> = observer(({ match }) => {
  const { rootStore } = useStores();

  useEffect(() => {
    rootStore.blocCountriesStore.setBlocCountries(match.params.value)
  }, [rootStore.countriesStore.countries, rootStore, match]);

  const region = countriesBlocs.find(item => item.value === match.params.value)

  return (
    <TableContainer>
      <Table aria-label="countries">
        <TableHead>
          <TableRow>
            <TableCell>{region && region.label}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rootStore.blocCountriesStore.blocCountries.map((row: Country) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Link to={`/countries/${row.alpha3Code}`}>
                  {row.name}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

})

export default RegionalBloc;