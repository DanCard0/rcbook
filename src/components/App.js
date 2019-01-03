import React, { Component } from 'react';

// import Home from './Home/Home';
//import Todo from './Todo/Todo';
// import Timer from './Pomodoro/Timer';
// import Coins from './Coins/Coins';
// import Notes from './Notes/Notes';
// import Chart from './Chart/Chart';
// import Animation from './Animation/Animation';
import Numbers from './Numbers/Numbers';

import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

/* For Notes Component */
// import { notes1, notes2 } from './Notes/data';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            /* For Notes Component */
            // notes: notes1
            chartType: 'line'
        };

        /* For Chart Component */
        // this.columns = [
        //     ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
        //     ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
        //     ['XRP', 100, 200, 300, 500, 400, 300],
        // ];
    }

    componentDidMount() {
        /* For Notes Component */
        // setTimeout(() => {
        //     this.setState({ notes: [...this.state.notes, ...notes2] });
        // }, 10000);
    }

    /* For Chart Component */
    // setBarChart = () => {
    //     this.setState({ chartType: 'bar' });
    // };

    /* For Chart Component */
    // setLineChart = () => {
    //     this.setState({ chartType: 'line' });
    // };

    render() {
        return (
            <div className="App">
                <Header title="Welcome to new App" />

                <Content>
                    {/*<Home />*/}
                    {/*<Todo />*/}
                    {/*<Timer />*/}
                    {/*<Coins />*/}
                    {/*<Notes notes={this.state.notes} />*/}

                    {/*<div>
                        <Chart columns={this.columns} chartType={this.state.chartType} />
                        <p>
                            Chart Type
                            <button onClick={this.setBarChart}>Bar</button>
                            <button onClick={this.setLineChart}>Line</button>
                        </p>
                    </div>*/}

                    {/*<Animation />*/}
                    <Numbers />
                </Content>
                <Footer />
            </div>
        );
    }
}

export default App;
