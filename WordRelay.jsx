const React = require('react');
const { Component } = React;

class WordRelay extends Component{
    state = {
        'text':"hi its me"
    };
    render(){
        return <h1>{this.state.text}</h1>
    };

}

module.exports = WordRelay;