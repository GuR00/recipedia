import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home";
import Favs  from "./pages/favs";
import Profile from "./pages/profile";




const App = () => (
    <Router>
        <div>

        <Route component={Profile} >
            <Route exact path="/profile"/>
        </Route>
        <Route component={Favs}>
            <Route exact path="/favs"/>
        </Route>
       
            {/* <Route component={Home}>
                <Route exact path="/about-us" component={About} />
            </Route> */}

            <Footer />
        </div>
    </Router>
);

export default App;