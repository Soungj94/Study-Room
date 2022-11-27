#Basics and props

###SPA란?

```
    SPA 이전 Multi-Page-Application (MPA) 아키텍처에서는 페이지마다 서버에 해당 페이지의 HTML 파일을 요청하고 이를 브라우저가 응답으로 받아 유저가 볼 수 있도록 그려주는 구조였습니다.

    무슨 말인지 살짝 헷갈리시죠..?😅

    - 만약 기존 MPA에서 유저가 브라우저에서 [www.naver.com](http://www.naver.com)/으로 들어가면 서버에 해당 페이지를 표현하는 HTML를 요청하고 이를 응답으로 받아 화면에 그려줍니다.
    - 이때 유저가 [www.naver.com/mypage로](http://www.naver.com/mypage로) 이동하면 브라우저는 다시금 서버에 해당 페이지를 표현하는 또 다른 HTML를 요청하고 이를 유저에게 보내주는
    형태였죠.

    **SPA는 서버에서 HTML 페이지들을 일일이 다운로드하는 것이 아니라,** 하나의 마크업(markup) HTML 파일을 받아 클라이언트에서 데이터를 직접 로딩해 동적으로 화면을 표시합니다. 이로 인해
    사용자가 페이지를 다시 로딩할 필요도 없어진거죠! 즉, 페이지를 이동할 때마다 발생하는 깜빡임🤯이 없는 거죠.
```

```
📌 프론트엔드 개발을 공부하시면서 DOM이라는 단어를 들어봤을 텐데요, HTML 마크업 구조를 자바스크립트로 조작이 가능한 객체 형태로 모델링한 것을
 Document Object Model이라고 합니다.
 DOM은 웹 페이지를 저희가 사용하는 **자바스크립트와 같은 프로그래밍 언어와 연결해주어** 화면에 그려진 UI 요소들을 조작할 수 있게 도와주는 역할을 하는 거죠.

위에서 설명했듯이 저희는 웹 페이지에 그려진 화면(UI)을 조작하기 위해서는 DOM이라는 것을 조작해야 하는데요,
우리가 만약 어떤 **DOM 요소를 변경하게 되면 브라우저는 새롭게 변경된 DOM을 토대로 새로운 화면을 그리는 것이지요**.

DOM 요소의 변화가 생기면 브라우저는 이 변화를 화면에 새롭게 표현하기 위해 여러 가지 과정을 거치는데요, 이때 가장 큰 연산 비용이 많이 드는 단계는 DOM 요소의 변화 이후
 요소들의 위치를 계산하는 레이아웃 단계와 새로운 화면을 다시 그리는 페인트 단계가 있습니다.

위에서 “Virtual DOM을 활용하여 업데이트해야 하는 DOM 요소를 찾아서 해당 부분만 업데이트하기 때문에, 리렌더링이 잦은 동적인 모던 웹에서 향상된 퍼포먼스를 낼 수 있습니다”라고 말씀드렸는데요,
가상 돔의 필요성을 알기 위해서는 🙋 왜 리렌더링이 잦은 동적인 모던 웹에서 퍼포먼스의 개선이 필요했는지를 알아야 합니다.

JavaScript를 이용해 DOM을 직접 조작하면, 변경 사항이 있을 때마다 레이아웃 단계와 페인트 단계를 초래하게 됩니다. 만약 10개의 DOM 노드를 for 문으로 일일이 수정하게 되면, 하나의 노드에
수정 사항이 생길 때마다 화면을 다시 그리는 과정을 거쳐야 할 수 있습니다.
- 즉 10개를 한 번에 수정하는 것이 아니라, 하나씩 수정된 노드가 10번에 걸쳐서 다시 화면에 그려질 수 있다는 이야기입니다. 때문에 일반적으로 DOM을 직접 조작하는 것은 비용이 크다고 이야기하죠.

한편 가상 DOM은 실제로 렌더링 되지는 않았지만,
실제 DOM 구조를 반영한 상태로 메모리에 있는 가상의 DOM입니다.
❗️여기서 메모리에 있다는 것은 우리가 선언한 `let a = 123` 과 같이 값으로 메모리라는 저장 공간에 있다는 것이죠.

메모리 상에 있는게 무엇이 중요하냐고요? 😅 

- 위에서 언급했듯이 실제 DOM은 조작이 일어나면 이는 바로 브라우저를 통해 위에서 여러가지 랜더링 단계를 거치게 됩니다.
- 그렇지만 메모리상에 그냥 값으로 존재하는 가상 돔은 변경이 일어나도 이것이 브라우저 렌더링과는 직접 적으로 연결되어 있지 않습니다.
즉, 만약 **리액트가 가상 돔의 변화를 실제 DOM에 적용하지 않는 한 아무리 많은 조작이 가상 돔에 일어나도 이는 브라우저의 렌더링을 일으키지 않죠**

가상 DOM은 이러한 특징을 바탕으로 위에서 말한 , for문으로 10개의 DOM 요소를 수정하는것과 같은, 변경 사항들을 한 번에 묶어서 실제 DOM에 반영을 합니다
(이를 👉batching이라고 합니다.)
```

- 컴포넌트 밖에는 **import** 할 수 있는 구역 **상단**
- 자바스크립트를 쓸 수 있는 영역
- **Jsx** 를 쓸 수 있는 구역: 리엑트에서 html 을 사용하기 위해 문법이 따로 있다
- 내가 만든 컴포넌트를 밖으로 빼는 구역 **Export** **하단**

###Jsx 문법:
컴포넌트의 생김새를 정의할때 사용하는 문법
화면에서의 **레이아웃 구조**, DOM객체의 위치/얼핏보면 html 같이 생김 하지만 이건 **babel** 이라는 라이브러리가 자바스크립트로 변환해주기 때문에
Jsx 는 js 이다

####나올 수 있는 애러:

1. Unterminated jsx contents: 태그가 재대로 닫혀있는지 확인
2. Jsx 에서는 무조건 1개의 element 를 반환할 수 있다
   - 무조건적으로 하나의 Div 태그로 묶어서 보여줘야한다.
3. Jsx 안에서 자바스크립트 코드를 가져오려면, {} 중괄호를 써줘야한다.
4. Class 대신 className 을 사용해야한다.
5. Html 태그에 스타일을 직접넣을 수 없다.
   ````
   - Inline 으로 주고싶으면
    <p style = “color:orange; font-size: 20px;”>orange<p/> 이거는 더이상 안되고
   -  <p style = {{color:’orange’; font-size: ‘20px’}}>orange<p/> json형식의 스타일이거나
   - Const = style{color:’orange’; font-size: ‘20px’} 변수로 사용하는 방법이 있다.
    ```
   ####아주 간단한 클릭 메세지 띄우기:
   ````

```
import React from "react";
function App() {
  // <---- 자바스크립트 영역 ---->
  const handleClick = () => {
    alert("클릭!");
  };
  return (
    /* <---- HTML/JSX 영역  ---->*/
    <div
      style={{
        height: "100vh",
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>'이것은 내가 만든 App 컴포넌트 입니다'</span>
      <button onClick={handleClick}>클릭!</button>
    </div>
  );
}

export default App;
```

####부모자식 관계:

```

// src/App.js
import React from "react";

function Child() {
  return <div>연결성공!</div>;
}

function Mother() {
  return <Child />;
}
function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App;

Props 라는건 부모 컴포넌트에서 가져온 데이터라고 했는데요,
부모 컴포넌트에서 자식 컴포넌트로 데이터를 내려보내기 위해서 props 라는걸 사용하는데
Props 는 부모 컴포넌트에서 내려오는 모든 데이터를 칭하는구나 라는걸 알 수 있다
예시에서는 객체에 담아서 보여줬고, 실제 스크린에는 child 가 가지고 있는 return 값만 보여줬다.
```

####부모자식관계-2:

```
// src/App.js
import React from "react";

function Child(props) {
  console.log(props);
  return <div>{props.motherName}</div>;
}

function Mother() {
  const name = "홍부인";
  return <Child motherName={name} />;
}
function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App;

//결과는 홍부인이 찍힌다. 이런식으로 전달해줄 수 있는 기능이 props
//props 는 부모 에서 자식으로 밖에 못 내려준다. 결국 자식이 부모한테 줄 순 없다는 것.
형제 컴포넌트가 있는데, 혹연 부모한테서, 다른자식한테 내린 데이터를 내가 받을 수 도 없다.
```

####할아버지 부터 손자까지 데이터 내려주기

```
// src/App.js

import React from "react";

function App() {
  return <GrandFather />;
}

function GrandFather() {
  const name = "이범규";
  return <Mother grandFatherName={name} />;
}

function Mother(props) {
  console.log(props);
  return <Child grandFatherName={props.grandFatherName} />;
}

function Child(props) {
  return <div>{props.grandFatherName}</div>;
}

export default App;

//굳이 props 를 적지 않아도 function child(aaa) 혹은 grandFatherName 이라든지, 모든 가능하다
```

####조금 더 나아가서 children 과 default props

```
import React from "react";

function User(props) {
  return <div>{props.children}</div>;
}

function App() {
  return <User>안녕하세요</User>;
}

export default App;
// 우리가 레이아웃 컴포넌트 를 만들때, 자주 쓰이고, 예를 들어서 레이아웃 컴포넌트를 만들고, 그 안에 들어오는 값들을 전부 같은 스타일로 만들고 싶은데
컴포넌트 마다 스타일을 다 줄 필요없이 레이아웃 컴포넌트 를 하나 만들어놓고 children 으로 쓸 수 있다.
————————————————————————————————————————————————————————————
import React from "react";

function Child({ name }) {
  return <div>내 이름은 {name} 입니다. </div>;
}

Child.defaultProps = {
  name: "기본이름",
};

export default App;

//이렇게 되면 부모컴포넌트에서 데이터가 내려오기 전 까지  name: ‘기본이름 ’ 이 default props 로 보여지게 됨. 그리고 부모컴포넌트에서 프롭스가 내려오게 된다면,
 default props 는 사라지게 되고 내려받은 props 의 값으로 대체 되게 됩니다.
```

####구조분해할당

```

import React from "react";

function Child({ name = ‘기본이름’ }) {
  return <div>내 이름은 {name} 입니다. </div>;
}


export default App;

//이렇게도 쓰인다
```

---

##more Props
