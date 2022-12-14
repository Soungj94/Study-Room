# 컴포넌트와 렌더링

지금까지는 실제 예제를 통해 리액트 코드를 작성하며 스파르타식으로 리액트를 배워봤는데요, 이번 챕터에서는 조금 더 추상적인 개념들을 소개해드리고자 합니다.

1. Component
   ![picture](https://cdn.discordapp.com/attachments/1046343861129191446/1046343940917444629/table.png)

컴포넌트는 리액트의 핵심 빌딩 블록 중 하나입니다. 즉 **리액트에서 개발할 모든 애플리케이션은 컴포넌트라는 조각으로 구성되죠. 컴포넌트는 UI 구축 작업을 훨씬 쉽게 만들어줍니다.** 그렇지만 우리 모두, 리액트 이전에 프론트엔드 개발 환경을 경험하시지 못했다면 무엇이 불편했고 리액트와 같은 컴포넌트 기반의 UI 라이브러리가 무엇을 편하게 해주는지 모르실 거에요.

시작하면서 얘기드렸듯, 컴포넌트란 리액트의 핵심 빌딩 블록 중 하나로, UI 요소를 표현하는 최소한의 단위이며 화면의 특정 부분이 어떻게 생길지 정하는 **선언체입니다**. 말이 조금 어려운데, 이전 실습에서 경험했듯이 컴포넌트를 생성하고 보여지고자 하는 UI 요소를 컴포넌트 내부에서 JSX를 통해 선언하면 이를 리액트가 화면에 그려주었죠. 리액트 컴포넌트가 **선언체라는** 개념은 아주 중요합니다.

그 이유는 리액트의 컴포넌트기반 개발 이전에는 브라우저에서 동적으로 변하는 UI를 표현하기 위해 직접 DOM 객체를 조작하는 명령형 프로그래밍 방식으로 구현했습니다. 그렇다면 기존 명령형 프로그래밍과 리액트 컴포넌트의 선언적 프로그래밍은 어떻게 다를까요?

```
💡 명령형은 어떻게(How)를 중요시여겨서 프로그램의 제어의 흐름과 같은 방법을 제시하고 목표를 명시하지 않는 형태입니다. 선언형은 무엇(What)을 중요시 여겨서
 제어의 흐름보다는 원하는 목적을 중요시 여기는 형태입니다.

```

헷갈리시죠..? 아래 예시 코드를 통해 알아보죠.

### DOM (명령형 프로그래밍)

명령형으로 작성된 코드의 경우 Hello, World!를 출력하기 위해 컴퓨터가 수행하는 절차를 일일히 코드로 작성해주어야 합니다.

```
// Hello, World! 화면에 출력하기
// 순수 javaScript 명령형 코드
const root = document.getElementById('root');
const header = document.createElement('h1');
const headerContent = document.createTextNode(
	'Hello, World!'
);

header.appendChild(headerContent);
root.appendChild(header);
```

### 리액트 (선언형 프로그래밍)

리액트 코드는 어떤가요? React 코드의 경우 내가 UI을 선언하고 render 함수를 호출하면 React가 알아서 절차를 수행해 화면에 출력해주죠. 즉, 화면에 `어떻게` 그려야할지는 React 내부에 잘 숨겨져 추상화되어 있습니다.

```
// React 코드 (선언적인)
const header = <h1>Hello World</h1>; // jsx
ReactDOM.render(header, document.getElementById('root'));
```

DOM을 직접 조작하여 명령형 프로그래밍 방식으로 작성하던 코드가 나쁘다는게 아닙니다. 카운터 예시와 같이 격리된 예제에서는 차라리 리액트와 같은 UI 라이브러리를 사용하지 않고 만드는게 더 빠르고 전체적인 번들 사이즈 측면에서도 더 효율적인 방법일수 있습니다. 그치만 더 복잡한 UI 시스템에서는 관리하기가 기하급수적으로 어려워집니다.

## 2. 렌더링이란?

지금까지 학습 자료를 공부하시면서 렌더링이라는 단어를 계속해서 들으셨을 텐데요 렌더링이란 무엇일까요?

리액트에서 렌더링이란, 컴포넌트가 현재 `props`와 `state`의 상태에 기초하여 UI를 어떻게 구성할지 컴포넌트에게 요청하는 작업을 의미합니다. \*\*\*\*

렌더링을 쉽게 설명하기 위해서 HTTP 통신을 배우실 때 많이 보시는 주방장과 웨이터 예시를 사용해 설명해보겠습니다. 이제부터 컴포넌트를 주방에서 요리를 준비하는 **주방장**이라고 생각해볼까요? 그리고 리액트는 손님으로부터 주문받아 주방에 전달하고 완성된 요리를 손님에게 서빙하는 **웨이터**로 가정해보겠습니다. 그리고 손님이 주문하고 주방장이 만드는것이 요리가 아닌 **UI**라고 하겠습니다.

- UI - 음식
- 컴포넌트 - 음식을 만드는 주방장
- 리액트 - 웨이터

자 그럼 렌더링이 일어나는 프로세스를 아래와 같이 설명할 수 있을 것 같습니다.

1. 렌더링 일으키는 것은 (**triggering**)- UI를 주문하고 주방으로 전달하는 것
2. 렌더링한다는 것은 (**rendering**)- 주방에서 컴포넌트가 UI를 만들고 준비하는 것
3. 렌더링 결과는 실제 DOM에 커밋한다는 것은 (**commit**) - 리액트가 준비된 UI를 손님 테이블에 올려놓는 것
   ![picture](https://cdn.discordapp.com/attachments/1046343861129191446/1046345774436466718/Screenshot_2022-11-27_at_5.44.24_PM.png)

### 1. 렌더링 트리거

앞선 학습자료에서 렌더링이 발생하는 경우를 다뤘었는데 혹시 기억하고 계신가요?

1. 첫 리액트 앱을 실행했을 때
2. 현재 리액트 내부에 어떤 상태(state)에 변경이 발생했을 때.
   - 컴포넌트 내부 state가 변경되었을 때
   - 컴포넌트에 새로운 props가 들어올 때,
   - 상위 부모 컴포넌트에서 위에 두 이유로 렌더링이 발생했을 때

리액트 앱이 실행되고 첫 렌더링이 일어나면 리액트는 컴포넌트의 루트에서 시작하여 아래쪽으로 쭉 훑으며 컴포넌트가 반환하는 JSX 결과물을 DOM 요서에 반영합니다.

### 2. 리렌더링

첫 렌더링은 자동으로 일어난 것이었습니다. 리액트 앱이 실행되면 리액트는 전체 컴포넌트를 렌더링하고 결과물을 DOM에 반영해 브라우저상에 보여주죠. 첫 렌더링을 끝난 이후에 추가로 렌더링을 트리거 하려면 상태를 변경해주면 됩니다. 저희는 지금까지 setState 함수만을 다뤘지만 몇 가지가 더 있습니다. 이 부분은 숙련과 심화 과정을 통해 배워볼 예정입니다.

컴포넌트 상태에 변화가 생기면 리렌더링이 발생합니다. 이때 여러 상태가 변경됐다면 리액트는 이를 큐 자료구조에 넣어 순서를 관리합니다.

1. 주방 예시를 다시 들어보면 리렌더링은 음식점 손님이 첫 주문 이후에 갈증이 생겨 추가로 음료를 주문하거나 처음 받은 음식이 마음에 들지 않아 새로운 메뉴를 주문하는 것과 같습니다.
2. 새로운 UI주문(**리렌더링**)이 일어나면 리액트가 변경된 내용을 주방에 있는 요리사인 컴포넌트에 전달하고 **컴포넌트**는 새로운 변경된 주문을 토대로 새로운 요리(**UI**)를 만듭니다.
3. 새롭게 만들어진 요리(렌러딩 결과)는 리액트에 의해 다시 손님 테이블에 올려집니다(DOM에 반영 - commit phase).
   ![picture](https://cdn.discordapp.com/attachments/1046343861129191446/1046346158206877716/Screenshot_2022-11-27_at_5.45.56_PM.png)

## 3. 브라우저 렌더링

브라우저의 렌더링과 리액트의 렌더링은 엄연히 다른 독립적인 프로세스입니다. 렌더링이 완료되고 React가 DOM을 업데이트한 후 브라우저는 화면을 그립니다. 이 프로세스를 "브라우저 렌더링"이라고 하지만 혼동을 피하기 위해 **페인팅**이라고도 합니다. 브라우저 렌더링에 자세히 알아보고 싶다면 [브라우저는 어떻게 동작하는가?](https://d2.naver.com/helloworld/59361)를 참고해보세요!

---

#### 숫자를 빼고 더하는 카운터 만들어보기

```
import React, { useState } from "react";

function App() {
const [number, setNumber] = useState(0);
return (

<div>
{number}
<button
onClick={() => {
setNumber(number + 1);
}} > +
</button>
<button
onClick={() => {
setNumber(number - 1);
}} > -
</button>
</div>
);
}

export default App;

//익명함수를 이용해서 바로 넣어줬음
```

#### 반복되는 컴포넌트 처리하기

```

import React from "react";
import "./App.css";

const App = () => {
const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];
return (

<div className="app-style">
{vegetables.map((vegetableName) => {
return (
<div className="square-style" key={vegetableName}>
{vegetableName}
</div>
);
})}
</div>
);
};

export default App;

//map 을 활용하여, 반복되는 상황 만들어주기
```

#### 혹은 다른 방법으론

```
import React from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

function User(props) {
return (

<div className="square-style">
{props.user.age}살 -{props.user.name}
</div>
);
}

const App = () => {
const users = [
{ id: 1, age: 30, name: "송중기" },
{ id: 2, age: 24, name: "송강" },
{ id: 3, age: 21, name: "김유정" },
{ id: 4, age: 29, name: "구교환" },
];
return (

<div className="app-style">
{users.map((user) => {
return <User user={user} key={user.id}></User>;
})}
</div>
);
};

export default App;
// 이코드는 usestate를 사용하지 않았지만, 다른방법으로 컴포넌트를 만드는 방법이다.

```

#### 추가하기 삭제하기 25이상 null 표현 기능구현하기

```
import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

function CustomButton(props) {
const { color, onClick, children } = props;
if (color) {
return (
<button
style={{ backgroundColor: color, color: "white" }}
onClick={onClick} >
{children}
</button>
);
}
return <button onClick={onClick}>{children}</button>;
}

function User(props) {
return (

<div className="square-style">
{props.user.age}살 -{props.user.name}
<CustomButton
color="red"
onClick={() => {
props.handleDelete(props.user.id);
}} >
삭제하기
</CustomButton>
</div>
);
}

const App = () => {
const [users, setUsers] = useState([
{ id: 1, age: 30, name: "송중기" },
{ id: 2, age: 24, name: "송강" },
{ id: 3, age: 21, name: "김유정" },
{ id: 4, age: 29, name: "구교환" },
]);
const [name, setName] = useState("");
const [age, setAge] = useState("");

const addUserHandler = () => {
const newUser = {
id: users.length + 1,
age: age,
name: name,
};
setUsers([...users, newUser]);
};
const deleteUserHandler = (id) => {
const newUserList = users.filter((user) => user.id !== id);
setUsers(newUserList);
};
return (

<div>
<div className="app-style">
{users.map((user) => {
if (user.age < 25) {
return (
<User
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id}
              ></User>
);
} else {
return null;
}
})}
</div>
<input
value={name}
placeholder="이름을 입력해주세요"
// 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
onChange={(e) => setName(e.target.value)}
/>
<input
value={age}
placeholder="나이를 입력해주세요"
// 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
onChange={(e) => setAge(e.target.value)}
/>
<CustomButton color="green" onClick={addUserHandler}>
추가하기
</CustomButton>
</div>
);
};

export default App;

```

##### 해당 css

```
.app-style {
padding: 100px;
display: flex;
gap: 12px;
}

.square-style {
width: 100px;
height: 100px;
border: 1px solid Green;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
}

```

##### 컴포넌트 분리하기

위와 같이 코딩을 했을시 발생하는 문제점

1.App.js 역할이 명확하지 않다
2.component 분리를 통해서 가독성을 높였지만, 두컴포넌트의 사이즈가 커지거나 혹은 또 다른 컴포넌트를 작성하게 된다면, 가독성은 금방 떨어지게 됩니다. 3.현재 구조에서 user component 와 button component 를 찾기가 힘듭니다. 특히 작성자가 아닌 다른개발자가 봤을때 이러한 컴포넌트가 여기있구나 하는게 쉽지않다.
우리는 여러번 렌더링해서 여러번 사용하는것 들은 따로 분리해놓기로 한다.
