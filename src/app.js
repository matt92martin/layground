import React, { Component } from 'react'
import { connect } from 'react-redux'


class App extends Component{

    render(){
        return (
            <div>
                React app
            </div>
        );
    }
}


export default connect()(App)