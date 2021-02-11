import React, { Component } from "react";

class AppGit extends Component{
    queryApi = () => {
        const url = "https://api.github.com/users/gfrancv/repos"
        fetch(url)
            .then(respuesta => respuesta.json())
    }

    render() {
        return(
            <div className="container text-center">
            <div className="container-rep">
                <a ref={ this.queryApi }></a>
            </div>
            <p className="text">Hola</p>
        </div>
        );
    }
}

export default AppGit;