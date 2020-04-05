import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Title from "antd/lib/typography/Title";

export default ({ steps }) => (
  <Switch>
    {steps.map((step, index) => (
      <Route key={index} exact={step.exact} path={step.path}>
        <div className="container banner">
          <Title id="page-progress-title" level={2}>
            {step.pageTitle}
          </Title>
        </div>
        <div className="container main">
          {step.content}
        </div>
      </Route>
    ))}
  </Switch>
)