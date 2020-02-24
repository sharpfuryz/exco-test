/**
 * This component implements entry point for the app with initial data fetch
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ItemPage from './pages/ItemPage';
import ItemsList from './ItemsList/ItemsList';
import Navbar from '../components/Navbar/Navbar';
import './App.css'

/**
 * JSON data will be imported on compile time
 * so we don't need a lazy loader
 */
const data = require("../data/datasource.json");

const App = () => {
    return (<div className="app">
        <Navbar />
        <main>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <ItemsList items={data.items} />
                    </Route>
                    <Route path={`/item/:itemId`} component={ItemPage} />
                </Switch>
            </Router>
        </main>
    </div>)
};

export default App;