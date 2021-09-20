import React, { Component } from "react";
import Try from './Try'

// function getNumbers(){ // 겹치지 않는 숫자 네개 만드는 함수
//     const candidate = [1,2,3,4,5,6,7,8,9];
//     const array=[];
//     for (let i=0;i<4;i+=1){
//         const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
//         array.push(chosen);
//     }
//     return array;
// };

class NumberBaseball extends Component {

    state={
        result:'키키',
        value:'히히',
        tries:[],
    };


    /* 이것이 바로 jsx에서의 주석 처리 */

    render(){
        return (
            <>
                <h1>hi</h1>
                ${this.state.result}
                ${this.state.value}
            </>
        );
    }

}

export default NumberBaseball;