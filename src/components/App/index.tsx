import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormSendCV from "../../pages/formSendCV";
import CvList from "../../pages/cvLists";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Layout from "./Layout";

const App = () => {
  const LayoutRoutes = () => {
    return (
      <>
        <Switch>
          <Route exact path="/" render={(props) => <FormSendCV {...props} />} />
          <Route
            exact
            path="/cv-list"
            render={(props) => <CvList {...props} />}
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
