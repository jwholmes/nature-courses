import React from 'react';
import { Seventies, Eighties } from './Decades';
import Header from './Header';

export default class App extends React.Component {

    handlePick = () => {
        console.log('test')
    }

    render() {
        return (
            <div>
                <Header />
                <Seventies />
                <Eighties
                    handlePick={this.handlePick}
                />
            </div>
        )
    }
}