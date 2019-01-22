import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Header = props => {
  const {
    title = 'Welcome to App',
    url = 'http://localhost:3000'
  } = props;

  return (
    <header className="App-header">
      <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <h1 className="App-title">{title}</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/coins">Coins</Link></li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;
