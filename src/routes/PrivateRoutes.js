import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Form from '../pages/Form'

function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/add" exact component={Form} />
        <Route path="/edit/:noteId" exact component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default PrivateRoutes;