import React from 'react';
import Popup from 'react-popup';
import Helmet from 'react-helmet';

// import Calculator from "./Calculator/Calculator";
import Person from './Person/Person';

import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';
import './Popup.css';

const App = () => (
  <div className="App">
    <Helmet
      title="Chapter 3"
      meta={[
        { name: 'title', content: 'Chapter 3' },
        { name: 'description', content: 'This recipe talks about React Cookbook' }
      ]}
    />

    <Header title="Welcome to new App" />
    <Content>
      {/* <Calculator /> */}
      <Person />
    </Content>
    <Footer />

    <Popup />
  </div>
);

export default App;
