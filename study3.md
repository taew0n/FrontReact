# import와 require 비교
- 많은 소스코드가 require보다 import를 많이 쓴다.
- module.exports 를 통해 다른 파일에서 require할 수 있다.
- 구조분해 문법 : export 되는 것이 객체나 배열인 경우
- export default를 module.exports대신 쓰면 된다.
-> default는 한 번만 쓰면 되고 const 같은 변수를 쓰는 경우 import {hello} 이렇게 하면 된다.

- 노드 모듈 시스템에서
module.exports = { hello : 'hh' }
exports.hello = 'hh'
이 둘은 같다.

- babel이 import를 require로 자동으로 바꿔준다.
- webpack은 노드가 돌리기 때문에 const를 써줘야 한다.
- 기본적으로 require 쓰면 되지만 react에서는 import도 많이 쓴다.

# 리액트 반복문 map, key
- map이 바로 react에서의 반복문이다
-> 1. 반복되는 것을 배열로 만든다
-> [a,b,c].map( (v) => { return <li>{v}</li> } );
- 배열에 중복되지 않는 key가 꼭 있어야 한다. 이 때문에 react에서 반복문이 어렵다.
- 화살표 함수에서는 return을 굳이 안 해줘도 된다.
- i는 index로 순서라 고유하기 때문에 key에 i를 넣기도 한다. 그러나 key의 역할은 성능 최적화이기 때문에 i만 쓰면 안된다. key 정하는 게 은근히 귀찮다.
- 배열의 순서가 바뀔지도 몰라서 key를 i로 하지 않는 게 좋다.

# 컴포넌트 분리와 props
- 반복문에서 성능 문제가 많이 발생한다.
- 긴 코드는 다른 파일로 따로 빼주는 것이 가독성이 좋다.
- HTML에서는 attribute, react에서는 pros
-> 다른 컴포넌트에서 정보를 받아오는 것
- 코드간의 연결고리를 만들어 주는 것이다.
- <Try value={v} index={i}/> 이렇게 Try 클래스를 외부 파일로 뺐을 때 v, i를 전달해준다.
- props를 쓰면 컴포넌트가 부모 - 자식 관계가 된다. / props를 쓰면 부모를 꼭 찾아야 한다.
- 초보일 때는 복잡한 것도 하나에 다 쓰고 나중에 분리한다.

# 주석처리와 바인딩
- /* 이것이 바로 jsx에서의 주석 처리 */
- 화살표 함수를 안 쓰면 this를 못 쓴다.
- 화살표 함수는 bind를 자동으로 해주는 것이었다!

# 숫자야구 만들기
- react에서는 array에 push를 하면 안된다.
- 참조가 바뀌어야 새롭게 render 하는데 push를 하면 참조했을 때 그대로가 나오기 때문이다!
-> 따라서 새로운 놈을 만들어서 원래 내용을 복사하고 새로운 내용을 추가해야 한다.

# React Devtools
- pros를 쓸 때 rendering이 너무 많이 실행되어서 나오는 문제
- chrome extension에서 React Developer Tools를 사용하여 component 단위로 분석 가능
- 