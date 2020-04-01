import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import React, { FC, useEffect } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { useStores } from './countries/hooks/index';
import CountriesList from './countries/pages/CountriesList';
import Country from './countries/pages/Country';
import RegionalBloc from './countries/pages/RegionalBloc';
import RegionalBlocList from './countries/pages/RegionalBlocList';

const App: FC = observer(() => {
  const { rootStore } = useStores();

  useEffect(() => {
    rootStore.countriesStore.setCountries();
  });

  return (
    <main className="app-content">
      <div>
        <Link to="/regional-bloc">
          <Button color="primary">
            Regions
          </Button>
        </Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="/countries">
          <Button color="primary">
            All countries
          </Button>
        </Link>
      </div>
      <Switch>
        <Route exact path="/regional-bloc" component={RegionalBlocList} />
        <Route exact path="/countries" component={CountriesList} />
        <Route path="/regional-bloc/:value" component={RegionalBloc} />
        <Route path="/countries/:value" component={Country} />
        <Redirect from="/" to="/regional-bloc" />
      </Switch>
    </main>
  );
})

export default App;