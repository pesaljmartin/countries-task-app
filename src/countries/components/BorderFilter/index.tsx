import { Button, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import React, { ChangeEvent, FC, useState } from "react";
import { Option } from '../../models/option';
import './index.scss';

interface BorderFilter {
  options: Option[],
  handleChange: (value: string) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 166,
    },
  }),
);

const BorderFilterSelect: FC<BorderFilter> = ({ options, handleChange }) => {
  const classes = useStyles();
  const [state, setState] = useState<string>('');

  const onChange = (event: ChangeEvent<{ value: unknown }>): void => {
    setState(event.target.value as string);

    handleChange(event.target.value as string);
  };

  const clearSelect = (): void => {
    setState('' as string);
    handleChange('reset')
  }

  return (
    <div className="border-filter">
      <FormControl className={classes.formControl}>
        <InputLabel id="border-filter">Filter by Border</InputLabel>
        <Select
          labelId="border-filter"
          value={state}
          onChange={onChange}
        >
          {options && options.map((option: Option) => {
            return <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          })}
        </Select>
      </FormControl>
      <Button color="primary" onClick={clearSelect}>X</Button>
    </div>
  );
}

export default BorderFilterSelect;