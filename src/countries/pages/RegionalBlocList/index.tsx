import React, { FC } from 'react';
import RegionalBlocListComponent from '../../components/RegionalBlocListComponent';
import { countriesBlocs } from '../../constants/countries-blocs';

const RegionalBlocList: FC = () => {

  return (
    <RegionalBlocListComponent blocs={countriesBlocs} />
  );

}

export default RegionalBlocList;