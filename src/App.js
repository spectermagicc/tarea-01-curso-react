import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';

// components
import Header from './components/header/header';
import ArcticMonkeys from './components/arcticMonkeys/arcticMonkeys';
import Coldplay from './components/coldplay/coldplay';
import Mgmt from './components/mgmt/mgmt';


// pages
import MainPage from './pages/mainpage/mainPage';
import AlbumsPage from './pages/albumspage/albumsPage';

import './App.css'

function App() {
  return(
    <Fragment>

      <Header />

      <Switch>

        <Route exact path="/" component = { MainPage } />
        <Route path="/albums-page" component = { AlbumsPage } />
        <Route path="/arctic-monkeys" component = { ArcticMonkeys } />
        <Route path="/coldplay" component = { Coldplay } />
        <Route path="/mgmt" component = { Mgmt } />

      </Switch>
    </Fragment>
  );
}; 

export default App;