import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
    constructor() {
        // We need to define super() at the beginning of the constructor to have access to 'this'
        super();

        this.state = {
            name: 'Carlos'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: 'Daniel' });
        }, 3000);
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid black'
        };

        console.log('Name:', this.state.name);

        return (
            <div className="Home">
                <h1>Welcome</h1>

                <p>Hi my name is {this.state.name}</p>

                <p>
                    <button style={buttonStyle}>
                        Click me!
                    </button>
                </p>
            </div>
        );
    }
}

export default Home;