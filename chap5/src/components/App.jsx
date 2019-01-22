import React from 'react';

import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';

const App = props => (
    <div className="App">
      <Header title="Welcome to new App" />
      <Content>
          {props.children}
      </Content>
      <Footer />
    </div>
);

export default App;
