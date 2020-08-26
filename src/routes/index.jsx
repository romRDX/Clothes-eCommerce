import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/contact" component={Contact} exact />
    <Route path="/blog" component={Blog} exact />
    <Route path="/shop" component={Shop} exact />
    <Route path="/cart" component={Cart} exact />
    <Route path="/product/:id" component={Product} />
  </Switch>
);

export default Routes;
