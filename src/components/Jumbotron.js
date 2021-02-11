import React, { Component } from 'react';

class Jumbotron extends Component{
    render(){
        return(
            <div className="banner">
            <div className="text-center banner-content">
                <h1 className="display-3 title"> Main Title </h1>
                <p className="lead">Litle description of the project</p>
                <a className="btn btn-primary btn-lg my-2">First Button</a>
            </div>
        </div>
        );
    };
}

export default Jumbotron;