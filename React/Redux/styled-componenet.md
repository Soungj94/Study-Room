# styled-component

1. Yarn add styled-components (insert in terminal)
2. 조건부 스타일링이 가능하며,
   ex.
   const StBox = styled.div`  width: 100px;
height: 100px;
border: 1px solid ${(props) => props.borderColor}; // 4.부모 컴포넌트에서 보낸 props를 받아 사용합니다. 
margin: 20px;`;

- 이걸보면 위쪽에 div 테그에 이 설정을 먹여줬다는걸 알 수 있다.(내가 원하는 html 태그를 넣어줄 수 있다 \*백틱을 이용한게 포인트

```
// src/App.js

import React from "react";
import styled from "styled-components";

// 1. styled-components를 만들었습니다.
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor}; // 4.부모 컴포넌트에서 보낸 props를 받아 사용합니다.
  margin: 20px;
`;

const App = () => {
  return (
    <div>
			{/* 2. 그리고 위에서 만든 styled-components를 사용했습니다. */}
			{/* 3. 그리고 props를 통해 borderColor라는 값을 전달했습니다. */}
      <StBox borderColor="red">빨간 박스</StBox>
      <StBox borderColor="green">초록 박스</StBox>
      <StBox borderColor="blue">파랑 박스</StBox>
    </div>
  );
};

export default App;
```

```
// src/App.js

import React from "react";
import styled from "styled-components";

// 1. styled-components를 만들었습니다.
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor}; // 4.부모 컴포넌트에서 보낸 props를 받아 사용합니다.
  margin: 20px;
`;
const boxList = ["red", "green", "blue"];

// 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간 박스";
    case "green":
      return "초록 박스";
    case "blue":
      return "파란 박스";
    default:
      return "검정 박스";
  }
};

const App = () => {
  return (
    <div>
      {boxList.map((box) => (
        <StBox borderColor={box}>{getBoxName(box)}</StBox>
      ))}
    </div>
  );
};

export default App;

```

```
  {boxList.map((box) => (
        <StBox borderColor={box}>{getBoxName(box)}</StBox>
      ))}
      //뜯어서 보면, 박스리스트를 map 돌려서 box라는걸 만들어줬고
      스타일박스 태그를 만들어 보더칼러를 props로 받아서 box 라는 color 를 입혀준 뒤 getboxname를 호출해주었다.
```
