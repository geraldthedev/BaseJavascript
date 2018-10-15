import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    render(){
        return(
            <div className="app-content">
            <h1> works</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));