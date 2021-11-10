import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Switch, Route } from 'react-router-dom';
import BodyHome from './BodyHome';

function WebSite() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/thuvien/"><BodyHome /></Route>
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default WebSite;
