import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Switch, Route } from 'react-router-dom';

import BodyHome from './BodyHome';
import TienPhat from './TienPhat';
import SachMuon from './SachMuon';
import SachTra from './SachTra';
import Account from './Account';
import Book from './Book';
import Users from './Users';
import StatisticsByCategory from './StatisticsByCategory'
import StatisticsByDelay from './StatisticsByDelay'
import Setting from './Setting'
import BookCreate from '../Components/BookCreate'
import BookRemove from '../Components/BookRemove'
import UsersCreate from '../Components/UsersCreate'
import UsersRemove from '../Components/UsersRemove'
import StyleList from '../Components/StyleList'

function WebSite() {
  return (
    <React.Fragment>
      <Header />

      <BookCreate />
      <BookRemove />
      <UsersCreate />
      <UsersRemove />
      <StyleList />

      <Switch>
        <Route exact path="/thuvien"><BodyHome /></Route>
        <Route path="/thuvien/tienphat"><TienPhat /></Route>
        <Route path="/thuvien/sachmuon"><SachMuon /></Route>
        <Route path="/thuvien/sachtra"><SachTra /></Route>
        <Route path="/thuvien/account"><Account /></Route>
        <Route path="/thuvien/sach"><Book /></Route>
        <Route path="/thuvien/nguoidung/"><Users /></Route>
        <Route path="/thuvien/thongketheloai/"><StatisticsByCategory /></Route>
        <Route path="/thuvien/thongketratre/"><StatisticsByDelay /></Route>
        <Route path="/thuvien/caidat/"><Setting /></Route>
      </Switch>
      
      <Footer />
    </React.Fragment>
  )
}

export default WebSite;
