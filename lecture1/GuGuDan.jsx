const React = require('react');
const { Component } = React;

class GuGuDan extends Component{
    constructor(pros){
        super(pros);
        this.state ={
            first : Math.ceil(Math.random()*9),
            second : Math.ceil(Math.random()*9),
            value:'',
            result:'',
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first*this.state.second){
            this.setState((prevState)=>{
                return {
                result : prevState.value+'는 정답',
                first : Math.ceil(Math.random()*9),
                second : Math.ceil(Math.random()*9),
                value:'',
                }
            })
        } else {
            this.setState({
                result:'땡',
                value:''
            })
        } this.input.focus()
    }

    input;
    onRefInput = (c) => { this.input = c; }; 

    render(){
        return(
            <div>
                <div>{this.state.first} 곱하기 {this.state.second}는? </div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})} />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </div>
        )
    }
}


module.exports = GuGuDan;