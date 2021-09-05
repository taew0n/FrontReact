# 1. 구구단 마무리

## Hooks, functional Component
- 함수 컴포넌트에서도 state, ref를 쓸 수 있게 한 것이 바로 react hooks
- react는 hooks를 더욱 권장
- useState와 같이 use로 시작하는 애들이 hooks
- setSate가 없어지고 각각 value를 직접 바꿔줘야 한다.

## Class와 Hooks의 차이 
- Hooks를 쓰면 코드가 짧아지는 경향이 있다.
- Hooks는 state를 바꾸면 함수 자체가 통째로 새로 실행된다. 조금 더 느릴 수 있다.
- React에서 못 쓰는 속성으로는 class=>className, for =>htmlFor 이 있다.
- Hooks에서도 state를 객체화 시키지 않는 이유는 setState할 때 불편해서이다. 일부분만 바꿀 수가 없다.
- setState를 한번에 처리하는 비동기 방식이다.

# 2. 끝말잇기

## WebPack
- 마법같은 도구,,,
- 수천개로 쪼개진 자바스크립트 파일들을 쪼개진 것
- node는 server, backend만 사용하는 것이 아니고 js 실행기일 뿐이다. -> webpack을 실행하기 위해 노드가 필요하다.
- react, react-dom 설치, webpack, webpack-cli 설치 (-D는 개발할 때만 사용한다는 것을 의미)
- create-react-app은 수동으로 하는 여러가지 작업을 자동으로 해주는 것이다. 쪼개서 아는 것도 중요하다!
- jsx 파일로 만들면 jsx 문법을 쓸 수 있기 때문에, 웬만하면 js파일보다 jsx파일로 만들어주는 것이 좋다. (jsx 문법을 사용할 것이라면!)

## 모듈 시스템, 환경설정
- 컴포넌트를 여러 개로 나눌 때에는 그때그때 필요한 모듈을 불러와야 한다.
```
const React = require('react'); // 패키지나 라이브러리 불러오는 것
module.exports = WordRelay; // 컴포넌트를 밖에서 쓸 수 있게 export 하는것
```
- html script 태그 src에서는 한 개의 js 파일밖에 사용하지 못한다.

## 웹팩으로 빌드하기
- 웹팩을 실행하는 방법 1. npx webpack, 2. package.json의 script 작성
- jsx는 js 문법이 아니다. webpack에도 babel을 처리해줘야 한다.
- npm package로 @babel/core -> 기본적인 문법, 
@babel/preset-env -> 우리 환경에 맞게 바꿔주는 것, @babel/preset-react -> jsx 쓸 수 있게
babel-loader 설치 -> babel과 웹팩 연결
- webpack 요소에 entry, module, output 순서로 설정해주는 것이 좋다.

## 구구단 웹팩으로 빌드하기

## @babel/preset-env와 plugins
- entry에 babel-loader를 적용하는 것이다. plugin들의 모임이 preset이다.
- preset-env가 자동으로 옛 브라우저를 적용하는 것인데 이때 옵션을 바로 뒤에 적용 가능
- babel 작업량이 늘기 때문에 정확히 타겟을 작성하는 것이 중요하다.
- 이 때 도움이 되는 것이 browserslist 페이지를 활용하자!
- entry, module, output 사이에 plugins! (module 안의 plugins와 다르다)
- 실무 코드에 plugin이 10개정도 끼어있기도 하다. plugin을 빼보면서 필요한
것들을 차례로 찾아보는 것이 좋다.
- 