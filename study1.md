# 1. 구구단

# 리액트 사용 이유
1. 사용자 경험
2. 재사용 컴포넌트
3. 데이터 - 화면 일치

웹팩은 쪼개진 js 파일을 html이 실행할 수 있는 js파일로 합쳐준다.

- react, react-dom 을 바로 설치해야 한다.

- ReactDOM이 실제로 화면에 렌더링을 해준다.

- 상태 (state)는 바뀌는 부분이다. / 바뀔 수 있는 부분이다.
-> setState()를 사용한다.

- React 확장 프로그램으로, element 단위가 아닌 component 단위로 볼 수 있다.
- camel Case로 작성해야 한다. html로 js 함수를 작성할 때는!

# JSX와 바벨
- class 하나가 component 하나
- type = "text/babel" , js 실험적 문법을 쓸 수 있다.
- JSx = JS + XML / 문법이 더 엄격하다

# 구구단
- 바뀌는 건 state, 안 바뀌는 건 tag

# fragment
- <React.fragment>로 감싸주면 필요없는 맨 바깥 div 태그를 안 쓸 수 있다.
- button 태그에는 onclick, form 태그에는 onsubmit

# setState
- 기존 값을 사용해서 새로운 값을 사용할 때는
this.setState((prevState)=>{ value: prevState +1 } 처럼 기존 값을 인자로 받아 새로운 값을 return 하는 식으로 만들어준다.

# ref, render
- setState는 render()를 실행하므로 최적화 할 때 중요하다.
- render가 계속 실행되기 때문에 함수는 jsx 안에 넣지 않고 class 안에 따로 빼주는게 좋다.
