#### 1. 자바스크립트에서 유사배열과 배열의 차이는 무엇일까요?

[ 유사배열 ]

브라우저에서 데이터를 주는 방식 ( 객체지만 배열같이 생긴 데이터를 준다.)

![images_onezerokang_post_e8cd1360-5537-41cf-8f2f-43c98112b073_image.png](https://cdn.discordapp.com/attachments/1046343861129191446/1048156643969478676/Screenshot_2022-12-02_at_5.39.59_PM.png)

→ 이걸 코드로 풀어보면 이런 모양

```jsx
{
  0: div.text,
  1: div.text,
  2: div.text,
  3: div.text,
  length: 4,
}
```

```jsx
u4array = {
  0: "안녕히",
  1: "계세요",
  2: "여러분",
  length: 3,
};
```

- [ ]로 감싸져있지만 배열이 아님
- 객체안의 요소들이 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있기 때문에

       배열같이 생겼다고 표현.  사실 객체임 (Array.isArray로 검사해보면 false나옴)

```jsx
console.log(Array.isArray(u4array)); // false
```

- 반드시 length가 필요하다
- for문으로 순회할 수도 있다.
-

```jsx
for (let i = 0, i < u4array.length; i++) {
  console.log(u4array[i])
}  // '안녕히' '계세요' '여러분'
```

- 인덱스 번호가 0부터 시작해서 1씩 증가해야 한다

[ 배열 ]

- 단일 변수에 여러 값을 순차적으로 저장할 때 사용됨
- 각 값은 숫자로 된 인덱스를 가지며 모든 데이터 유형이 저장 가능

[ 유사배열과 배열의 차이점 ]

- 유사배열은 배열에 쓸 수 있는 ‘forEach, map, filter, reduce’ 같은 메서드 사용X
-

```jsx
배열과 차이점
map, push, join 같은 메서드 사용 x
u4array.push('떠납니다')   -> TypeError 뜸
```

#### 유사배열의 각 요소를 수정하고 싶다면 어떤 과정을 거쳐야할까요?

[ 유사배열 요소의 수정방법 ]

- 새롭게 배열로 만들어서 사용
- Array.from()
- Array.prototype.slice.call()
- Array.prototype.push.apply()

```jsx
const arr = Array.from(u4array);
console.log(arr); // ['안녕히', '계세요', '여러분' ]
```

결론

[ ] 로 감싸져있다고 다 배열이 아니다.

브라우저가 유사배열식으로 데이터를 주기 때문에 알아놓는거지, 직접 사용할 이유는 없다.

#### 부모 컴포넌트 A와 자식 컴포넌트 B가 있습니다. 컴포넌트 A는 state로 {name: "르탄이"}를 가지고 있고, 자식인 컴포넌트 B에게 name 값을 넘겨주었습니다. 컴포넌트 B는 받아온 name을 화면에 뿌려주고 있습니다.

```jsx
// App.js

import React, { useState } from "react";
import Child from "./Child";

export function App(props) {
  const [name, setName] = useState("르탄이");

  const changeNameHandler = () => {
    setName("진도사우르스");
  };

  return (
    <div className="App" style={{ backgroundColor: "gray" }}>
      <h1>Hello React.</h1>
      <Child setName={setName} name={name}></Child>
      <button style={{ backgroundColor: "red" }} onClick={changeNameHandler}>
        button
      </button>
    </div>
  );
}
```

```jsx
// Child.js

import React from "react";

export function Child(props) {
  return (
    <div style={{ backgroundColor: "blue" }} className="App">
      {props.name}
    </div>
  );
}

export default Child;
```

#### 컴포넌트 A의 state가 {name: "진도사우르스"}로 바뀌었을 때, 어떤 과정을 거쳐 바뀐 값을 화면에 보여주는 지 라이프 사이클 흐름을 그려볼까요?

Life cycle: Component가 계속 존재하는것이 아니라, 시간의 흐름에 따라 생성, 업데이트, 소멸되는것

A(부모생성) → B(자식생성) → 상태변화(부모,자식 소멸) → A(부모생성) → B(자식생성)

부모 → 자식 setState를 내려주는 방법

자식 → 부모 매개변수로 함수실행 하는 방법

#### 양방향 바인딩은 무엇일까요? 양방향 바인딩을 사용하는 경우 리렌더링이 어떻게 이루어질 지 그려보세요. #### (부모 컴포넌트 A와 자식 컴포넌트 B가 있음을 가정하고 그려봅시다.)

뷰와 백단의 데이터를 동기화하는 것을 `양반향 바인딩`이라고 한다.

양방향 바인딩을 사용하는 경우 다음과 같이 리렌더링이 이루어진다.

![Untitled](https://cdn.discordapp.com/attachments/1046343861129191446/1048157564728246282/Screenshot_2022-12-02_at_5.43.47_PM.png)

양방향 바인딩은 **사용자의 입력값이 곧바로 변수에 바인딩**이 됩니다.

즉 백과 프론트의 데이터가 일치 합니다.

양방향 바인딩은 데이터의 변경을 감지하고 있다가 데이터가 변경되는 시점에 DOM객체에 렌더링을 해주거나 모델의 변경을 감지해 JavaScript 실행부에서 변경을 합니다.

**자식 컴포넌트에 데이터 보내기 (with props)**

부모에서 자식으로 데이터를 전달하기 위해서 props를 사용합니다.

데이터를 받을 자식 컴포넌트에 prorp를 선언해줍니다.

**부모 컴포넌트에 데이터 보내기 (with 함수)**

데이터 흐름이 꼬일 수 있기 때문에 부모와 자식 간에는 단반향 바인딩만 가능합니다.(자식은 props를 사용해서 부모에게 데이터를 건네줄 수 없다.)

따라서 부모가 함수를 넣어 props로 자식에게 넘겨주면, 자식이 데이터를 파라미터로 넣어 호출하는 방식으로 동작한다.

즉, 부모가 props로 함수를 넣어주면 자식이 그 함수를 이용해 값을 건네주는 방식이다.

양방향 바인딩은 **사용자의 입력값이 곧바로 변수에 바인딩**이 됩니다.

즉 백과 프론트의 데이터 일치가 모두 가능합니다.

양방향 바인딩은 데이터의 변경을 감지하고 있다가 데이터가 변경되는 시점에 DOM객체에 렌더링을 해주거나 모델의 변경을 감지해 JavaScript 실행부에서 변경을 합니다.

**자식 컴포넌트에 데이터 보내기 (with props)**

부모에서 자식으로 데이터를 전달하기 위해서 props를 사용합니다.

데이터를 받을 자식 컴포넌트에 prorp를 선언해줍니다.

**부모 컴포넌트에 데이터 보내기 (with emit)**

데이터 흐름이 꼬일 수 있기 때문에 부모와 자식 간에는 단반향 바인딩만 가능합니다.

자식은 부모의 데이터에 접근하거나 직접적으로 데이터를 변경할 수 없지만, emit은 자식이 부모에게 데이터를 전달하기 위해서 이벤트를 발생시키는 것입니다.

따라서 부모가 함수를 넣어 props로 자식에게 넘겨주면, 자식이 데이터를 파라미터로 넣어 호출하는 방식으로 동작한다.

즉, 부모가 props로 함수를 넣어주면 자식이 그 함수를 이용해 값을 건네주는 방식이다.

함수형 클래스에서는 `useEffect`의 내부 함수의 return값으로 **removeEventListener**를 통해 해제해주면 된다.

#### event listener는 등록되면 반드시 해제되어야 합니다. 클래스형 컴포넌트에서는 컴포넌트가 화면에서 사라질 때(unmount 될 때) event listener를 해제합니다. (componentWillUnmount에서요!)

#### 그럼 라이프사이클 메소드를 사용할 수 없는 함수형 컴포넌트에서는 event listener를 해제할 때 어떻게 해야할까요?

- 클래스형 컴포넌트에서 componentDidMount() 역할 → 함수형 컴포넌트에서 useEffect()훅
- useEffect의 return구문에서 clean up함수 적용 (useEffect()에서 parameter로 넣은 함수의 return 함수) component의 unmount이전 / update직전에 어떤 작업을 수행하고 싶다면 clean-up함수를 반환해 주어야한다.
  - unmount 될 때useEffect(func, [])
  - 특정값 update 직전useEffect(func, [특정값])
- clean-up함수를 사용하게되면, 작동 순서

```
re-render -> 이전 effect clean-up -> effect
```

#### 리액트에서는 DOM 요소에 접근하기 위해 주로 ref를 씁니다. domcument.getElementsByClassName 등을 쓰는 게 아니라 ref를 쓰는 이유는 무엇일까요?

### 1. ref란?

일반 HTML에서 DOM요소에 이름을 달 때는 id를 사용한다.**리액트 프로젝트 내부에서 DOM에 이름을 다는 방법**이 ref 이다.

### 2. ref를 사용하는 이유?

id는 유일해야 하지만 컴포넌트 재사용을 한다면 **중복될 가능성**이 있다.ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동한다.

ref는 언제 쓰는가?

**DOM element 에 접근하기** 가장 많이 쓰이는 예시.ref를 활용하면 전체 컴포넌트를 렌더링 시키지 않고, dom에만 접근하여 내가 원하는 효과를 주는게 가능해 집니다.**즉, dom element에 접근하여 원하는 작업을 하였지만 컴포넌트 전체에 영향을 끼치지 않고, 원하는 작업을 할 수 있게 됩니다.**그래서 주로 **focus**나 **텍스트를 선택할 때** 주로 많이 사용하게 됩니다.

`React`에서 `Ref`를 배우다보면, `Ref`는 `DOM Element`에 접근할 때만 사용하는 생각하는 분들이 많은 것 같습니다. 그래서 오늘은 `Ref`에 대해서 오해를 풀어 보는 시간을 가져보도록 하겠습니다.

`Ref`는 간단히 말해 컴포넌트 라이프 사이클(마운트와 언마운트) 내에서 유지되는 변경이 가능한 변수이며, 변수가 변할 때 렌더링이 추가로 되지 않습니다. 비슷한 것을 어디서 많이 보지 않으셨나요?

그렇습니다. `state`는 컴포넌트 라이프 사이클 내에서 유지 되는 변경이 가능한 변수이지만, `state`가 변할 때는 렌더링이 발생합니다.

다시 `state`와 `ref`를 정리하면

state

- 컴포넌트 라이프 사이클 내에서 유지가 되며, 변경이 가능한 변수
- 값이 변할 때 렌더링이 다시 된다.

ref

- 컴포넌트 라이플 사이클 내에서 유지가 되며, 변경이 가능한 변수
- 값이 변할 때 렌더링이 되지 않는다.

-

#### SPA 방식과 MPA 방식은 무엇인가요?

[ SPA ]

- ‘Single Page Application’ 의 약자
- 웹 어플리케이션에 필요한 모든 정적 리소스를 최초 한번에 다운로드

       → 그 이후 새로운 페이지 요청이 있을 경우 페이지 갱신에 필요한 데이터만 받아 페이지를 갱신

[ MPA ]

- ‘Multi Page Application’ 의 약자
- 페이지가 요청될 때 마다, 서버로부터 전체 페이지를 받아옴

      → 이후에 데이터의 수정이나 조회가 필요할 때 완전히 다른 페이지로 이동

- MPA: ‘Multi Page Application’ 의 약자로 페이지가 요청될 때 마다, 서버로부터 전체 페이지를 받아오고,

이후에 데이터의 수정이나 조회가 필요할 때 완전히 다른 페이지로 이동하는 것을 말한다.

---

#DIY Section

1. useState
2. useEffect
3. useRef
4. useReducer
5. 클래스형-함수형 컴포넌트 , 리액트 훅

**클래스형 컴포넌트와 함수형 컴포넌트의 차이**

리액트에서는 컴포넌트를 선언할 떄는

**클래스형 컴포넌트**

와,

**함수형 컴포넌트**

가 있다.

**함수형 컴포넌트에 훅(Hook)이 나오기 전에는 클래스형 컴포넌트를 많이 사용했다.**

하지만 현재는 리액트 공식문서에도 **함수형 컴포넌트를 사용하기를 권장**하고 있다.
**1. 선언 방식 🟣**

> 클래스형 컴포넌트
>
> - state 기능 및 라이프 사이클 기능을 사용할 수 있다
> - Component로 상속
> - render 함수가 꼭 있어야 함
> - class 키워드 필요
> - 함수형보다 메모리 자원을 더 사용한다.

```
import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = '리액트';
    return <div>{name}</div>;
  }
}

export default App;
```

**함수형 컴포넌트**

- 기존의 일반적인 함수 선언 방식(ES6의 화살표 함수(arrow function) 방식도 있다)
- 파라미터로 전달할 때 유용
- 클래스형 컴포넌트보다 선언하기가 좀 더 편하다
- 메모리 자원을 덜 사용한다는 장점이 있다
- state와 라이프사이클 API를 사용할 수 없다는 단점이 있었는데 **React Hook을 도입하면서 해결**

```
function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function() {
      console.log(this.name + ': 멍멍!');
    }
  }
}

const blackDog = new Blackdog();
blackDog.bark(); // 검둥이: 멍멍!

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ': 멍멍!');
    }
  }
}

const whiteDog = new Whitedog();
whiteDog.bark(); // 흰둥이: 멍멍!
```

### 2. state 🟣

**state**
는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.

**클래스형 컴포넌트**
에서는 클래스 내의 **constructor 메서드에서 state의 초기값을 생성**
해 주어야 한다. 그리고 **constructor를 작성할 때 super(props)를 반드시 호출**
해 주어야 한다. **state를 조회할 때는 this.state**
로 조회하며, **state의 값을 변경하고 싶을 때는 this.setState 함수**
를 통해서 바꾸어 준다.

```
this.state = {
  monsters: [],
  userInput: "",
}
```

**함수형 컴포넌트에서**는 **리액트 훅**을 사용하여 **useState** 함수를 통해 state 값을 불러오고 변경할 수 있다

```
const [value, setValue] = useState('');
```

### 3. props 🟣

> 부모 컴포넌트가 설정해서 자식 컴포넌트는 읽기만 할 수 있는 값

**클래스형 컴포넌트**는 this.props로 통해 값을 불러올 수 있다.

**함수형 컴포넌트**는 props를 불러올 필요 없이 바로 호출 할 수 있다

### 4. 이벤트 핸들링 🟣

**클래스형 컴포넌트**

- 함수 선언시 화살표 함수로 바로 선언 가능하다.
- 요소에 적용할때 this.를 붙여줘야한다.

```
class App extends Component {
	constructor (props) {
    super (props)
    this.state = {
   	 number : 1
    }
}
onClickFunc = () =>{
	this.setState({number : number+1})
}

<button onClick={this.	onClickFunc}>+1</button>
```

**함수형 컴포넌트**

- const + 함수 형태로 선언해야 한다.
- this를 적지 않아도 된다.

```
const [number, setNumber] = usetState('')

const onClickFunc = () => {
setNumber( number + 1)

<button onClick={onClickFunc}> +1 </button>
```
