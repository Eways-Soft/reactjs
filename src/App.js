import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Header from './components/pages/includes/header';
import Footer from './components/pages/includes/footer';
import Home from './components/pages/postlogin/home';
import Make from './components/pages/postlogin/make';
import Dine from './components/pages/postlogin/dine';
import Try from './components/pages/postlogin/try';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/make" component={Make} exact/>
      <Route path="/dine" component={Dine} exact/>
			<Route path="/try" component={Try} exact/>
			<Route component={Error}/>
		</Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
