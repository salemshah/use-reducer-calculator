import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'


// calculator
import Main from './calculator/Main'


function App() {
    return (
        <>
            <h2 className="text-center text-danger">I use (useReduce, useContext, localStorage and useEffect)</h2>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/Products">
                        <Products/>
                    </Route>
                    <Route exact path="/Contact">
                        <Contact/>
                    </Route>
                    <Route exact path="/About">
                        <About/>
                    </Route>
                </Switch>
            </Router>
            <hr/>


            <div className="container text-center">
                <h2 className="text-center text-danger">Calculator</h2>
                <Main/>
            </div>
        </>
    );
}

export default App;
