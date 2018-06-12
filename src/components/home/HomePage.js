import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <h3>React, Redux and React Router in ES6 for ultra-responsive web apps.</h3>
                <Link to="about" className="btn btn-primary btn-lg" id="link">Learn more</Link>
                <br /><br />
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                     sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        );
    }
} 

export default HomePage;