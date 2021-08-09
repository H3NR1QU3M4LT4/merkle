import React from 'react';
import './App.css';
import Logo from "./Logo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormSendCV from "../../pages/formSendCV";
import Home from "../../pages/home";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Layout from "./Layout";

const App = () => {
  const LayoutRoutes = () => {
    return (
      <>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path={"/application"}
            render={(props) => <FormSendCV {...props} />}
          />
        </Switch>
      </>
    );
  };
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Layout>
            <LayoutRoutes />
          </Layout>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
