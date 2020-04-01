import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { FC } from "react";
import { Link } from 'react-router-dom';
import { RegionalBlocModel } from "../../models/country";

interface Blocs {
  blocs: RegionalBlocModel[];
}

const RegionalBlocListComponent: FC<Blocs> = ({ blocs }) => {

  return (
    <TableContainer>
      <Table aria-label="regions">
        <TableHead>
          <TableRow>
            <TableCell>REGIONAL BLOC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blocs.map((row) => (
            <TableRow key={row.label}>
              <TableCell component="th" scope="row">
                <Link to={`/regional-bloc/${row.value}`}>
                  {row.label}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RegionalBlocListComponent;