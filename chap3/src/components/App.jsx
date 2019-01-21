import React from 'react';
import Popup from 'react-popup';
import Helmet from 'react-helmet';
import { element } from 'prop-types';

// import Calculator from "./Calculator/Calculator";
// import Person from './Person/Person';

import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';
import './Popup.css';

const App = props => (
  <div className="App">
    <Helmet
      title="Chapters 3 and 4"
      meta={[
        { name: 'title', content: 'Chapters 3 and 4' },
        { name: 'description', content: 'This recipe talks about React Cookbook' }
      ]}
    />

    <Header title="Welcome to new App" />
    <Content>
      {/* <Calculator /> */}
      {/*<Person />*/}
      {props.children}
    </Content>
    <Footer />

    <Popup />
  </div>
);

App.propTypes = {
  children: element
};

export default App;
