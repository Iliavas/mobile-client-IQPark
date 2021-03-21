import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from "react-router-dom"

import {AppRouting} from "./AppRouting/AppRouting";

import {ApolloProvider} from "@apollo/client";
import client from "./client";

ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <AppRouting></AppRouting>
      </Router>
    </ApolloProvider>

,
  document.getElementById('root')
);