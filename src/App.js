import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from "./pages";
import { project } from "./ProjectProperties";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path={project.nav.homepage} exact>
          <HomePage />
        </Route>
        <Route path={project.nav.products} exact>
          <ProductsPage />
        </Route>
        <Route path={project.nav.about} exact>
          <AboutPage />
        </Route>
        <Route path={project.nav.cart} exact>
          <CartPage />
        </Route>
        <PrivateRoute path={project.nav.checkout} exact>
          <CheckoutPage />
        </PrivateRoute>
        <Route
          path={project.nav.singleProduct}
          children={<SingleProductPage />}
          exact
        />
        <Route path={project.nav.error}>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
