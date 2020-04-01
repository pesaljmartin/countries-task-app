import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AutoSizer, List } from 'react-virtualized';
import { Country } from '../../models/country';
import { Option } from '../../models/option';
import BorderFilterSelect from '../BorderFilter';
import './index.scss';

interface CountriesList {
  countries: Country[];
  options: Option[];
  handleNameChange: any;
  handleBorderChange: (value: string) => void;
}

interface Row {
  index: number;
  key: string;
  style: any;
}

const CountriesListComponent: FC<CountriesList> = ({ countries, options, handleNameChange, handleBorderChange }) => {
  const config = {
    listHeight: 500,
    listRowHeight: 40,
    overscanRowCount: 10,
    rowCount: countries.length,
  };

  const rowRenderer = ({ index, key, style }: Row) => {
    return (
      <div className="countries-list__item" style={style} key={key}>
        <Link to={`/countries/${countries[index].alpha3Code}`}>
          {countries[index].name}
        </Link>
      </div>
    )
  }

  return (
    <div>
      <TextField label="Search by name" type="search" onChange={handleNameChange} />
      <BorderFilterSelect options={options} handleChange={handleBorderChange} />
      <div className="countries-list">
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              height={config.listHeight}
              overscanRowCount={config.overscanRowCount}
              rowCount={config.rowCount}
              rowHeight={config.listRowHeight}
              rowRenderer={rowRenderer}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );

}

export default CountriesListComponent;