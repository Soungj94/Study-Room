<aside>
🔐 Q1. 컴포넌트 A는 리덕스 스토어를 구독하고 있습니다. 리덕스에 저장된 데이터가 변경되었을 때(A가 구독 중인 값이 변경되었다고 가정합니다. 어떤 과정을 거쳐 컴포넌트 A가 변경된 값을 가져올 수 있는 지 흐름을 그려볼까요? (메모장, 사진 등)

</aside>

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbb09ba6b-de54-46e6-a635-ee5a7c305720%2FUntitled.png?id=82a091ea-8462-4085-82c5-89b3f55a7ed4&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1460&userId=2ac1bf09-0847-4f28-bb1d-c813fbbfffa1&cache=v2)

STORE에 상태들을 저장하고

REDUCER에서 액션을 가공한다

ACTION 으로 신호를 준다

STORE에서 리듀서에 명령을 해주기 위해 DISPATCH를

데이터를 가져다 쓰기 위해 SELECTOR를 쓴다.

<aside>
🔐 Q2. 옵셔널 체이닝이란 뭘까요? 어떤 경우에 사용할까요?

</aside>

1.  “ ? “ 을 사용해 중첩 객체를 에러 없이 안전하게 접근이 가능하다.
2.  연쇄 작용을 이용하려 값을 안전하게 추출이 가능하다.

- ex)

  ```jsx
  let user = {
      name : ‘kim’
      age : 20
  }
  console.log(user.age)    <ㅡ console.log(user ?. age)

  특징은 콘솔 창 왼쪽에 있는 user에 자료가 null,nudefined 면
  오른쪽에 있는 .age를 실행 해주지 않으며 출력값으로는 undefined 를 나타내준다
  ```

- 언제 쓰는가?
  오브젝트 자료들이 중첩이 되어있을 때 에러 없이 안전하게 뽑을 수있다.

  ```jsx
  let user = {
     name : ‘kim’
     age : { value : 20}
  };
  console.log(user.age.value) 이렇게 찍게되면 // 20이 출력이 될것이다.

  let user = {
     name : ‘kim’
     //age : { value : 20}   주석을 처리해 버린다면
  };
  console.log(user.age.value)   // Error가 올라온다.

  에러는 수정이 가능 하지만 실제 서비스를 실행하고 있다면 콘솔 아래 쪽에 있는 모든 자료들이
  실행이 안되는 문제가 생겨 사이트가 멈추거나 이상한 동작을 할 수도 있기 예방 차원으로
  if,and, && 등등 다양하게 예방을 할 수 있지만 좀 더 간단하게는

  let user = {
     name : ‘kim’
     //age : { value : 20}

  };

  console.log(user.age?.value)   // undefined

  “ ? “ (옵셔널 체이닝) 하나만 사용해도 에러 표시가 아닌 undefined 로 출력이 된다.
  그 이유는 “ ? “ (옵셔널 체이닝) 기준으로 왼쪽에 있는 평가 대상이
  null 이나 undefined 이면 평가를 멈추고 오른쪽 출력이 없이 undefined를 반환한다.
  ```

- nil 병합 연산자

  ```jsx
  let user = {
     name : ‘kim’
     //age : { value : 20}

  };

  console.log( undefined ?? ‘로딩중’) 이라고 왼쪽이 null이나 undefined가 나오면
  오른쪽에 있는 걸 보여주세요 라는 의미이다.
  ```

- 언제 많이 쓰는가?
  변수 안에 데이터가 많이 들어가있고 화면에 3초 뒤에 보여줘야 한다면?
  도착하기전까지 undefined가 출력이 될 수가 있는데 그런 점을 방지해서 ?? 두개를 사용해서 나타내준다.
- 옵셔널 체이닝과 nil병합 연산자 좀 더 이해 하기 쉬운 예제

<aside>
🔐 Q3.
Form 태그을 사용할 때,  button type="submit" 을 함께 사용하면 리덕스 데이터가 초기화 되는데, 왜 초기화 되는지 생각해봅시다.

</aside>

form 은 submit 이벤트가 발생했을 때, 새로고침을 하게 됨.

submit 이벤트가 작성된 폼을 서버로 전송하는 역할을 함.

페이지가 reload 되기때문에 state 도 초기화 됨.

<aside>
🔐 Q4. 새로고침 시에도 리덕스 내의 데이터를 유지하려면 어떤 방법을 써야할까요?

</aside>

이성재

### 요약

- redux-persist 패키지 사용
- 자동로그인을 원하면 localStorage를 사용
- 브라우저를 닫으면 로그인이 풀리는 것을 원하면 sessionStorage를 사용

### 사용 목적

- 리덕스는 웹 브라우저 창을 닫으면 모든 state가 리셋된다.
- 유저 로그인 정보 같은 경우 브라우저를 닫아도 유지되어야 한다. 이런 경우 사용될 수 있음

### 원리

1. App 이 불러와졌을 때 로컬스토리지에 있던 유저 정보 사용
2. 서버에 현재 로그인 상태 재검증
3. 서버가 응답한 로그인 정보로 업데이트
4. 만약에 토큰이 만료되었을 시에는, 재로그인 요청

### 웹 스토리지 객체(web storage object) 개념 이해

- 종류
  - localStorage
  - sessionStorage
- localStorage와 sessionStorage는 브라우저 내에 키-값 쌍을 저장
- 서버로 전송되지 않습니다. 그래서 쿠키보다 많은 데이터 저장 가능.
- 도메인·프로토콜·포트로 정의되는 오리진(origin)에 묶여있어서 프로토콜과 서브 도메인이 다르면 데이터에 접근불가

### 메서드, 프로퍼티

- 두 스토리지 객체는 동일한 메서드와 프로퍼티를 제공합니다.
- setItem(key, value) – 키-값 쌍을 보관합니다.
- getItem(key) – 키에 해당하는 값을 받아옵니다.
- removeItem(key) – 키와 해당 값을 삭제합니다.
- clear() – 모든 것을 삭제합니다.
- key(index) – 인덱스(index)에 해당하는 키를 받아옵니다.
- length – 저장된 항목의 개수를 얻습니다.

### localStorage

- 오리진(domain/port/protocol)이 같은 경우 데이터는 모든 탭과 창에서 공유됩니다.
- 오리진만 같다면 url 경로는 달라도 동일한 결과를 볼 수 있습니다.
- 브라우저나 OS가 재시작하더라도 데이터가 파기되지 않습니다.

### sessionStorage

- 현재 떠 있는 탭 내에서만 유지됩니다.
- 같은 페이지여도 탭이 다르면 다른 곳에 저장됩니다.
- 하나의 탭에 여러 iframe이 떠 있는 경우 동일 오리진에서 왔다고 취급하여 sessionStorage 공유됨
- 새로 고침할 때 sessionStorage에 저장된 데이터는 사라지지 않습니다. 하지만 탭을 닫고 새로 열 때는 사라집니다.

---

---

---

`redux` 상태 관리 라이브러리를 많이 사용하실 것입니다.

리덕스의 store는 페이지를 새로고침 할 경우 state가 날아가는 것을 보실 수 있습니다.

이것에 대한 대응 방안으로 localStorage 또는 session에 저장하고자 하는 reducer state를 저장하여, 새로고침 하여도 저장공간에 있는 데이터를 redux에 불러오는 형식으로 이루어집니다.

위에서 말한 이 작동을 위해 `redux-persist`를 사용합니다.

redux가 이미 세팅되어 있다고 가정하고, redux-persist를 추가하는 작업을 진행하겠습니다.

## **[#](https://kyounghwan01.github.io/blog/React/redux/redux-persist/#%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5)설치**

yarn add redux-persist

## **[#](https://kyounghwan01.github.io/blog/React/redux/redux-persist/#reducer%E1%84%8B%E1%85%A6-persist-store-%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B4)reducer에 persist store 정의**

- localStorage에 저장하고 싶으면 `import storage from 'redux-persist/lib/storage`
- session Storage에 저장하고 싶으면 `import storageSession from 'redux-persist/lib/storage/session`

```jsx
// reducers/index.js
import { combineReducers } from "redux";
➊ import { persistReducer } from "redux-persist";
➋ import storage from "redux-persist/lib/storage";

import auth from "./auth";
import board from "./board";
import studio from "./studio";

➌ const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["auth"]
  // blacklist -> 그것만 제외합니다
};

export const rootReducer = combineReducers({
  auth,
  board,
  studio
});

➍ export default persistReducer(persistConfig, rootReducer);
```

## **[#](https://kyounghwan01.github.io/blog/React/redux/redux-persist/#persist-store-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC)persist store 사용**

```jsx
// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
➊ import { persistStore } from "redux-persist";
➋ import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import configureStore from "./store";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer);
➌ const persistor = persistStore(store);

const Root = () => (
  <Provider store={store}>
    ➍ <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
```

# DIY Section

<aside>
🔑 Q1. 이번 주차의 중요 키워드를 선정하고, 이것을 정리하는 질문과 답변을 만들어 주세요 :-)

</aside>

Route

총 세가지의 컴포넌트를 가져왔다.이름들이 비슷해서 헷갈리지만, 당연하게 다른 역할들을 맡고 있다.

- BrowserRouter(Router)=이름이 길어서 그런가 대부분 as를 통해 이름을 Router로 변경해서 사용한다고 한다.역할은 router 기능을 이용할 모든 컴포넌트들을 감싸는 *최상위 컴포넌트*이다.
- Routes= Route 컴포넌트들을 감싸는 컴포넌트 이다
- Route= URI가 변경되면 그 URI에 맞은 컴포넌트를 보여주는 컴포넌트이다.if 문과 역할이 비슷하다.
- Linkprops(to)로 전달한 값으로 주소값을 변경해주는 컴포넌트 이다.

이 장에서, 우리는 [Todos](https://github.com/reactjs/redux/tree/master/examples/todos) 예시를 사용하겠습니다. 이 장을 읽는 동안 복제(clone)해두면 좋습니다.

먼저 `<Router />`와 `<Route />`를 React Router에서 임포트하겠습니다. 이렇게 하면 됩니다:

```
import { Router, Route, browserHistory } from 'react-router';

```

보통 React 앱에서는 `<Router />`로 `<Route />`를 감싸서, URL이 바뀔 때 `<Router />`가 여러 라우팅을 매치시키고 설정된 컴포넌트들을 랜더합니다. `<Route />`는 라우트를 앱의 컴포넌트 계층구조에 선언적으로 연결합니다. `path`에는 URL에서 사용되는 경로를 정의하고 `component`에는 라우트가 URL과 매치될때 랜더할 단일 컴포넌트를 정의하면 됩니다.

```
const Root = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

```

하지만, 우리의 Redux 앱에는 여전히 `<Provider />`가 필요합니다. `<Provider />`는 React Redux가 제공하는 고차 컴포넌트로 Redux를 React에 바인드하도록 해줍니다([React와 함께 사용하기](https://dobbit.github.io/redux/basics/UsageWithReact.html) 참고).

React Redux에서 `<Provider />`를 임포트합시다:

```
import { Provider } from 'react-redux';

```

`<Router />`를 `<Provider />`로 감싸서 라우트 핸들러가 `[store`에 접근](http://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store)할 수 있게 하겠습니다.

```
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

```

이제 URL이 '/'에 매치되면 `<App />` 컴포넌트가 랜더될겁니다. 그리고 URL에서 파라메터를 읽어올 때 필요한 `(:filter)` 파라메터를 `/`에 추가해 주겠습니다.

```
<Route path="/(:filter)" component={App} />

```

아마 URL에서 해시도 제거하고 싶을겁니다(예: `http://localhost:3000/#/?_k=4sbb0i`). 이를 위해서 React Router에서 `browserHistory`를 임포트합시다:

```
import { Router, Route, browserHistory } from 'react-router';

```

이것을 `<Router />`에 전달해서 URL에서 해시를 제거할 수 있습니다:

```
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App} />
    </Router>

```

IE9 처럼 낡은 브라우저를 지원해야 하는 경우가 아니면 언제나 `browserHistory`를 사용할 수 있습니다.

이성재

<aside>
🔑 Q2. 이번 주차의 중요 키워드를 선정하고, 이것을 정리하는 질문과 답변을 만들어 주세요 :-)

</aside>

useSelector :

store 에 저장된 데이터를 가져다 쓰기 위한 훅

useDispatch :

store 에 정의된 reducer에 변수를 담아 action 을 실행하게 하는 훅

reducer :

해당 action type 에 맞는 객체를 state에 반환하는 역할

<aside>
🔑 Q3. 이번 주차의 중요 키워드를 선정하고, 이것을 정리하는 질문과 답변을 만들어 주세요 :-)

</aside>

useNav, params, Link

## 1. NavLink

NavLink는 앞서 다룬 Link 컴포넌트와 비슷하지만 조금 기능이 더 부과된 것으로 보면 된다.

```
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>);

export default Nav;
```

Link를 사용할 경우 개발자툴을 켜서 봤을 때 아래와 같다.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Fc351e532-f35a-43fd-83d3-723fd1369c89%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Fc351e532-f35a-43fd-83d3-723fd1369c89%2Fimage.png)

하지만 NavLink를 사용하면,

```
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
    <ul>
        <li>
            <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
    </ul>);

export default Nav;
```

Home 클릭 시 해당하는 a 태그에 active라는 클래스가 부여되고,

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F000c48d1-9c24-482f-a03c-469ee5de75c6%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7(6).png](<https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F000c48d1-9c24-482f-a03c-469ee5de75c6%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7(6).png>)

About의 경우에도 동일하게 해당 태그에 클래스가 부여된다.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Ffe002d98-8035-4fa7-90b6-bc3245764216%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7(7).png](<https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Ffe002d98-8035-4fa7-90b6-bc3245764216%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7(7).png>)

> ❗ 중요<Route>에서 exact를 썼던 것과 같은 원리로, <NavLink>에서도 exact를 적절한 곳에 써줘야 한다. 그렇지 않으면, 위 예시의 경우 Home의 '/'는 About의 '/about'에도 걸리게 되므로 Home은 항상 active 클래스를 받게 된다.

다시 돌아와, 예시처럼 NavLink를 쓸 경우 얻을 수 있는 것이 무엇일까?

사용자가 현재 자신이 어떤 페이지에 있는지 직관적으로 이해할 수 있게, 네비게이션에 사용자가 위치하고 있는 곳을 표시해 줄 수 있다.

즉, 사용자가 위치하고 있는 곳이 active라는 이름의 class로 CSS 처리를 할 수 있게 된다.

```
//app.css
.active{
  background-color: rgb(255, 136, 136);
  text-decoration: none;
}
```

그러면 아래와 같은 효과를 구현할 수 있게 된다.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F29e0b58c-796e-47c8-80a2-793e22b70cce%2Fezgif.com-gif-maker%20(13).gif](<https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F29e0b58c-796e-47c8-80a2-793e22b70cce%2Fezgif.com-gif-maker%20(13).gif>)

> 다음으로, 이전 포스팅에서 다루지 못한 일부 Route의 특성에 대해 정리하면서 Hook이 필요한 이유와 Hook의 종류에 대해 알아보겠습니다.

## 2. Route (+추가내용)

**_Route는 path에 따라 해당 UI를 보여주는 라우팅 기능을 가진 컴포넌트_** 이다.

### 2.1 Route render methods

props를 이용해 Route를 렌더링하는 방법엔 3가지가 있다. 이 중 한 가지만을 props으로 전달해줘야 한다. (여러 개 전달하면 안됨)

1. component

```
<Route path="/" component={Home}/>
```

`component` prop을 이용해 렌더링할 컴포넌트를 전달하면, 라우터는 `React.createElement`를 사용해 새로운 React 컴포넌트를 생성하게 된다. 즉, 매번 렌더링될 때마다 새로운 컴포넌트를 만드는 것과 같다.

이는 기존의 컴포넌트를 업데이트 하는 것 대신에, 있던 컴포넌트를 언마운트 하고 새로운 컴포넌트를 마운트 한다는 뜻으로, 성능에 좋지 않을 수 있다. 따라서 인라인 렌더링을 위해 인라인 함수를 사용하는 경우에는, [render](https://reactrouter.com/web/api/Route/render-func) 또는 [children](https://reactrouter.com/web/api/Route/children-func)을 이용해라.

1. render & children (Func)

render와 children을 사용하면 위에서 설명한 원치 않는 재마운팅을 하지 않고, 편리하게 인라인 렌더링 및 래핑이 가능하다. 하지만 이 방법들은 훅 도입 이전에 쓰던 방법으로 2.3 방법을 사용하도록 하자.

### 2.2 Route props

위 3가지 렌더링 메소드(2.3 제외)는 모두 다음과 같은 객체를 props으로 가진다. history, location, match, 총 3가지의 객체로 전달되어진다.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F8d01b36b-87f0-412b-9216-d714c0333251%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F8d01b36b-87f0-412b-9216-d714c0333251%2Fimage.png)

- **history**: 해당 객체의 push, replace 함수를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환할 수 있다.
  ![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F52b614ab-049f-4889-a9fc-0ab37cb746e9%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F52b614ab-049f-4889-a9fc-0ab37cb746e9%2Fimage.png)
- **location**: 현재 경로에 대한 정보와 URL 쿼리(`/about?foo=bar`형식의)정보를 가지고 있는 객체이다.**URL Query** : 어떤 키워드를 검색하거나, 페이지에 옵션을 전달할 때 사용된다.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Fe6d24c48-3719-424f-827d-ec02bf2efedc%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Fe6d24c48-3719-424f-827d-ec02bf2efedc%2Fimage.png)

- **match**: 어떤 Route에 매칭이 되었는지에 대한 정보가 있고, params(`about/:name`형식의) 정보를 가지고 있는 객체이다.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F37153cd4-897a-4f8d-a405-1fdb69602d35%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F37153cd4-897a-4f8d-a405-1fdb69602d35%2Fimage.png)

### 2.3 가장 권장 되어지는 Route 사용법

이전 포스팅에서도 사용했던 방법으로, **_컴포넌트를 Route의 자식 요소로 전달_** 하는 것이 가장 권장된다.

하지만 이 방법의 경우 위에서 다룬 3가지 방법(component, render, children)과는 달리 컴포넌트에 Route props(match, location, history) 객체가 전달되지 않는다.

이는 훅을 이용하면 간단히 사용할 수 있으므로, 걱정하지 말고 아래 방법으로 컴포넌트를 전달하도록 하자.

```
<Route path="/">
  <Home />
<Route/>
```

## 3. Hooks

Hook은 라우터의 상태에 접근하고 컴포넌트 내부에서 네비게이션을 수행할 수 있도록 하는 것으로, `useParams, useLocation, useHistory, useRouteMatch`가 있다.

### 3.1 useParams

기존에 `Route`로 사용되지 않은 컴포넌트에서 `match, location, history` 객체에 접근하려면 `withRouter` HoC로 컴포넌트를 감싸줘야 했다. 하지만 `useParams`가 추가되면서 손쉽게 `match.params` 객체에 접근할 수 있게 됬다.

📍\_\_예시

```
import { useParams } from 'react-router';

const Topic = (props) => {
    const params = useParams();
      ...
    return (
      ...
    );
}

export default Topic;
```

> 이것을 이용한 URL Parameter 실습은 다음 포스팅에서 다룹니다.

### 3.2 useHistory

useHistory는 navigate 하는 데 사용할 수 있는 `history` 인스턴스에 대한 액세스를 제공한다.

📍\_\_예시

```
import { useHistory } from "react-router-dom";

const Home=(props)=>{
  const history = useHistory();
  const handleClick=()=>{
    history.push("/topics");
  } //해당 페이지로 이동시킨다.

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>
        Go topics
      </button>
    </>);
}
export default Home;
```

### 3.3 useLocation

useLocation은 현재 URL을 나타내는 `location` 객체를 반환한다.(URL이 변경될 때마다 새 `location`를 반환)

📍\_\_예시

```
import { useLocation } from "react-router";

const Topic=(props)=>{
  const location=useLocation();
  console.log(location.pathname); //출력 예: /topics/switch

  return (
    ...
  );
}
export default Home;
```

### 3.4 useRouteMatch

useRouteMatch는 match 객체의 값에 접근할 수 있게 해주는 hook이다. 사용 방법에는 두 가지가 있다.

하나는 Route 컴포넌트의 프로퍼티들(path, strict, sensitive, exact)을 가진 객체를 인자로 받는 방법으로, 만약 path 프로퍼티와 현재 페이지 URL이 일치할 경우 해당 path의 match객체를 반환하고 일치 하지 않으면 null을 반환해준다.

다른 하나는 아무 인자도 넘겨주지 않고 hook을 호출하는 방법이다. 이는 withRouter HoC로 match객체에 접근했을 때처럼 제일 가까운 부모 Route 컴포넌트의 match 값을 리턴해준다.

```
// 방법 1
// url이 "/topics/:topicID"와 일치할 때 Topic 컴포넌트를 렌더링하고 싶은 경우

import { useRouteMatch } from 'react-router';
const Topics=(props)=>{
  const match = useRouteMatch({
    path: '/topics/:topicId',
    strict: true,
  })
  return <div>{match ? <Topic match={match} /> : <NotFound />}</div>}
export default Topics;
```

```
// 방법 2
// 제일 가까운 부모 <Route>컴포넌트의 match객체에 접근하고 싶은 경우
import { useRouteMatch } from 'react-router';
const Topic=(props)=>{
  const match = useRouteMatch();
  ...
}
export default Topic;
```

이성재

<aside>
🔑 Q4. 이번 주차의 중요 키워드를 선정하고, 이것을 정리하는 질문과 답변을 만들어 주세요 :-)

</aside>

1. View 에서 action이 일어난다
2. dispatch에서 action이 일어나게 된다.
3. action에 의한 reducer 함수가 실행되기 전에 middleware가 작동한다.
4. middleware에서 명령 내린 일을 수행하고, reducer 함수를 실행한다.
5. reducer의 실행결과 store에 새로운 값을 저장한다.
6. store의 state에 subscribe하고 있던 UI에 변경된 값을 준다.

- 참고 이미지
  ![1.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4d875b1a-fd17-4d69-98c3-5d2eed991edf/1.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221209T025030Z&X-Amz-Expires=86400&X-Amz-Signature=22521dd637589db18c56543146c39657f60678f36a678000086f01efc024c67f&X-Amz-SignedHeaders=host&x-id=GetObject)

<aside>
🔑 Q5. 이번 주차의 중요 키워드를 선정하고, 이것을 정리하는 질문과 답변을 만들어 주세요 :-)

</aside>

Context API

- Context 란?
  context는 리액트 컴포넌트간에 어떠한 값을 공유할 수 있게 해주는 기능이다 주로 context는 전역적으로 필요한 값을 다룰 때 사용한다.
  단순하게 “리액트 컴포넌트에서 props가 아닌 또 다른 방식으로 컴포넌트간에 값을 전달하는 방법이다” 라고 생각하는게 좋다.
- 여기서 Props로만 데이터를 전달했을 때 발생하는 문제
  깊숙한 곳에 위치한 컴포넌트에 데이터를 전달해야하는 경우 여러 컴포넌트를 거쳐야 하는데 이를 Props Driling 이라고 한다. 너무 불편한 일이기에 복잡한 코드 때문에 가독성이 매우 떨어진다.
- Context 사용법

  1.

  ```jsx
  import { createContext } from "react";
  const MyContext = createContext();
  ```

  1. Context 객체 안에는 Provider라는 컴포넌트가 들어있다. 그리고, 그 컴포넌트간에 공유하고자 하는 값을 value 라는 Props로 설정하면 자식 컴포넌트들에서 해당 값에 바로 접근을 할 수 있다.

  ```jsx
  function App() {
    return (
      <MyContext.Provider value="Hello World">
        <GrandParent />
      </MyContext.Provider>
    );
  }
  ```

  1. 이 후 원하는 컴포넌트 에서 useContext 라는 Hook을 사용하여 Context에 넣은 값에 바로 접근이 가능하다.

  ```jsx
  import { createContext, useContext } from "react";

  function Message() {
    const value = useContext(MyContext);
    return <div>Received: {value}</div>;
  }
  ```

  1. 전체 코드

  ```jsx
  import { createContext, useContext } from "react";
  const MyContext = createContext();

  function App() {
    return (
      <MyContext.Provider value="Hello World">
        <GrandParent />
      </MyContext.Provider>
    );
  }

  function GrandParent() {
    return <Parent />;
  }

  function Parent() {
    return <Child />;
  }

  function Child() {
    return <GrandChild />;
  }

  function GrandChild() {
    return <Message />;
  }

  function Message() {
    const value = useContext(MyContext);
    return <div>Received: {value}</div>;
  }

  export default App;
  ```

  또 다른 예시

  ```jsx
  import { createContext, useContext } from "react";
  const MyContext = createContext();

  function App() {
    return (
      <MyContext.Provider value="Hello World">
        <AwesomeComponent />
      </MyContext.Provider>
    );
  }

  function AwesomeComponent() {
    return (
      <div>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }

  function FirstComponent() {
    const value = useContext(MyContext);
    return <div>First Component says: "{value}"</div>;
  }

  function SecondComponent() {
    const value = useContext(MyContext);
    return <div>Second Component says: "{value}"</div>;
  }

  function ThirdComponent() {
    const value = useContext(MyContext);
    return <div>Third Component says: "{value}"</div>;
  }

  export default App;
  ```
