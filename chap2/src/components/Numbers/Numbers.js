import React, { Component } from 'react';
import Result from './Result';

import './Numbers.css';

class Numbers extends Component {
    state = {
        numbers: '',
        results: []
    };

    handleNumberChange = e => {
        const { target: { value } } = e;

        // Converting the string value to array
        // "12345" => ["1", "2", "3", "4", "5"]
        const numbers = Array.from(value);

        // Summing all numbers from the array
        // ["1", "2", "3", "4", "5"] => 15
        const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

        this.setState({ numbers: value, results: [...this.state.results, result] });
    };

    render() {
        return (
            <div className="Numbers">
                <h3>Pure components (Sum all numbers)</h3>

                <input
                    type="number"
                    value={this.state.numbers}
                    onChange={this.handleNumberChange}
                />

                <ul>
                    {this.state.results.map((result, i) => (
                        <Result key={i} result={result} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Numbers;