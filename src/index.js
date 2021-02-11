import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Layout from './components/Layout';
import Table from './components/Table';
import App from './AppGit';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron />
    <Layout />
    <Table 
      title="Table of projects"
    />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
