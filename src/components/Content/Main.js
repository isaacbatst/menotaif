import React from 'react'
import { Switch, Route } from 'react-router-dom';
import steps from '../../constants/steps';
import Step from './Step';

export default () => (
  <Switch>
    <Route exact path={steps.first.path}>
      <Step step={steps.first} />
    </Route>
    <Route path={steps.second.path}>
      <Step step={steps.second} />
    </Route>
  </Switch>
)