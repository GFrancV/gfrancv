import React, { Component } from 'react';

class Jumbotron extends Component{
    render(){
        return(
            <div className="banner">
            <div className="text-center banner-content">
                <h1 className="display-3 title"> Gabriel Villa </h1>
                <p className="lead">Junior developer web!</p>
                <a className="btn btn-primary btn-lg my-2">More Inormation</a>
            </div>
        </div>
        );
    };
}

export default Jumbotron;