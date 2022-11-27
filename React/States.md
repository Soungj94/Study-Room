States

state는 컴포넌트 내부에서 바뀔 수 있는 값을 나타냅니다.

그럼 기존변수인 let 과 const 가 있는데 왜 굳이 states 를 사용해야 하는건가?

우리가 배운 컴포넌트에는 life cycle 이라는 개념이 있고, lifecycle 에 따라서, 이 화면이 값이 변했을때, 그 변화 된 값을 화면에 리랜더링 시켜주기 위한 조건들이 있다.

1.  그 조건들 중 하나가 state 가 변경 되었을때 인데 : let을 사용하게 되면, 화면에 바로 인식을 못 한다. (State 가 바뀌었다고 인식하지 못 한다. React 에서 변화를 감지하고,리렌더링 해서 바로바로 화면에 보여주기 위해서는 state 를 사용한다.
    Usestate 는 state 를 만들어주기 위해서 React에서 재공하는 기능입니다. 이런걸 훅이라고 부른다 (hook)
    // const[value, setValue] = useState(초기값)
    //const [name, setName] = useState(“김할아”) 이것이 state를 생성하는 코드

Const 와 usestates 의 차이점
Usestates 외에도 무슨 hook 들이 있는지
Lifecycle 과 components 의 관계를 알아보고
————————————————————————————————————————————————————————————————————————

// src/App.js

import React, { useState } from "react";

function Child(props) {
return (
<div>
<button
onClick={() => {
props.setName("박할아");
}} >
{" "}
할아버지 이름 바꾸기
</button>
<div>{props.grandFatherName}</div>
</div>
);
}

function Mother(props) {
return (
<Child grandFatherName={props.grandFatherName} setName={props.setName} /> // 받아서 다시 주고
);
}

function GrandFather() {
const [name, setName] = useState("김할아");
return <Mother grandFatherName={name} setName={setName} />; // 주고
}

function App() {
return <GrandFather />;
}

export default App;

//

————————————————————————————————————————————————————————————————————————

// src/App.js

import React from "react";

function App() {
function onClickHandler() {
console.log("hello world");
}
return (
<div>
<button onClick={onClickHandler}>버튼</button>
</div>
);
}

export default App; //hello world

————————————————————————————————————————————————————————————————————————

// src/App.js

import React, { useState } from "react";

function App() {
function onClickHandler() {
setName("흰둥이 ");
}
const [name, setName] = useState("길동이");
return (
<div>
{name}
<button onClick={onClickHandler}>버튼</button>
</div>
);
}

export default App;

————————————————————————————————————————————————————————————————————————

// src/App.js

import React, { useState } from "react";

const App = () => {
const [value, setValue] = useState("");
const onchangeHandler = (event) => {
const inputValue = event.target.value;
setValue(inputValue);
console.log(value);
};
return (
<div>
<input type="text" onChange={onchangeHandler} value={value} />
</div>
);
};

export default App; //text를 온체인지해서, 그 value가 바뀌는걸 보여주는 코드
————————————————————————————————————————————————————————————————————————

불변성

Ex.1
Let number = 1
그리고
Let secondNumber = 1

서로다른 변수 이름을 갖고있지만, 같은 곳을 참조하게 됨, 만약에 let number =2 를 추가로 선언하게 되면 더이상 둘이 같은 메모리를 참조하지 않는다.
이둘을 비교하는 값을 구하면 true 가 찍힌다.

하지만
원시데이터가 아닌, 객체, 배열, 함수 같은경우는 불변성이 없습니다.

Ex2.
Let obj_1 = {name: “Kim”}
Let obj_2 = {name: “Kim”}
이지만, 결국 겍체라는게 객체를 선언할때부터 메모리 공간을 차지하게 되고, 그안에서 서로다른 메모리공간을 value 로 쓰기에 결국 둘은 같은 메모리를 참조하는게 아니다.
이둘을 비교하는 값을 구하면 false 를 뱉어준다.

React 에서는 왜 불변성이 중요한가? 그이유는 화면을 리렌더링 할지 말지 결정할때, state 의 변화를 확인한다, 변했으면 리렌더링 하는거고, 안 변했으면 안 한다.
State 가 변했는지 안 했는지 확인하는건, 변화 전 후 의 메모리 주소를 확인 해 주는 것이다
만약 원시데이터가 아닌 데이터를 수정할 때, 불변성을 지켜주지 않고 직접 수정해버리면, 값은 바뀌지만, 메모리 주소에는 변함이 없기때문에, 본인은 값을 바꿧다고 인지하겠지만, react 는 인지하지 못 한다.
