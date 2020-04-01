import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { FC } from "react";
import { Country } from "../../models/country";
import './index.scss';

interface CountryComponent {
  name: string | undefined;
  borderCountries: Country[];
}

const CountryComponent: FC<CountryComponent> = ({ name, borderCountries }) => {

  return (
    <>
      <div className="country-heading">{name} - Border Countries</div>
      <TableContainer>
        <Table aria-label="regions">
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>Population</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {borderCountries.map((row: Country) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.capital}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.population}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default CountryComponent;