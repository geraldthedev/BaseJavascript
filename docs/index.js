import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }
    render(){
        return(
            <div>
            <button> Increment </button>
            {this.state.count}
            </div>
        );
    }
}

export default App;