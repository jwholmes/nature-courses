import React from 'react';
import { Seventies, Eighties } from './Decades';
import Header from './Header';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Seventies />
                <Eighties />
            </div>
        )
    }
}