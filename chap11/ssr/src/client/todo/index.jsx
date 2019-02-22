import React from 'react';

import { fetchTodo } from './actions';

import Container from './container';

const Main = props => <Container {...props} />;

Main.initialAction = () => fetchTodo();

export default Main;
