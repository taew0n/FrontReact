import React, { Component } from "react";

class Try extends Component{
    render(){
        return (
            <li>
                <div>{this.props.tyInfo.try}</div>
                <div>{this.props.tyInfo.result}</div>
            </li>
        )
    }
}

export default Try;