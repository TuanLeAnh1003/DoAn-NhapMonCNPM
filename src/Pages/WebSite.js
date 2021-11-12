import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Switch, Route } from 'react-router-dom';
import BodyHome from './BodyHome';
import TienPhat from './TienPhat';
import SachMuon from './SachMuon';
import SachTra from './SachTra';
import Account from './Account';

function WebSite() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/thuvien"><BodyHome /></Route>
        <Route path="/thuvien/tienphat"><TienPhat /></Route>
        <Route path="/thuvien/sachmuon"><SachMuon /></Route>
        <Route path="/thuvien/sachtra"><SachTra /></Route>
        <Route path="/thuvien/account"><Account /></Route>
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default WebSite;
