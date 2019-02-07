import React, { Component } from 'react';

// import Todo from './Todo';
// import Animations from './Animations';
import AnimationsPose from './AnimationsPose';

import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title="Welcome to new App" />

                <Content>
                    {/*<Todo />*/}
                    {/*<Animations />*/}
                    <AnimationsPose />
                </Content>
                <Footer />
            </div>
        );
    }
}

export default App;
