import React, { Component } from 'react';
import './App.css';
import Flexi from './Flexi';
import {flexiConfig} from "./flexiConfig";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Flexi config={flexiConfig}/>
            </div>
        );
    }
}


export default App;
