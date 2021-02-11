import React, { Component } from 'react'; 

class Table extends Component{
    render(){
        return(
            <div className="container">
                <h2 className="title"> { this.props.title } </h2>
                <table className="table table-hover table-active">
                    <thead>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Title Project 1</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</td>
                        </tr>
                        <tr>
                            <th scpe="row">2</th>
                            <td>Title Project 2</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Title Project 3</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Table;