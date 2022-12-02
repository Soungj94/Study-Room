Goal: redux module을 만들고, initial state와 reducer을 구현하고 useSelector를 이용해서 store의 정상 작동 여부를 확인합니다.

## 1. 모듈 만들기

- **(1) 우리가 리덕스로 만들 첫 프로그램은?**
  우리가 리덕스로 처음 만들어 볼 것은 예전에 만들었던 `카운터 프로그램` 입니다. `useState` 로 만들었던 것을 리덕스로 다시 만들어봅시다.
- **(2) 첫 모듈 만들기**
  **모듈이란, State의 그룹이라고 했습니다.** 우리의 첫 모듈은 카운터 프로그램에 필요한 State들이 모여있는 모듈이 될 것 입니다. 아래 순서대로 파일을 생성하고 코드를 입력해볼까요?

  1. `modules` 폴더에 `counter.js` 파일을 생성한다.
  2. 코드를 작성한다.

     ```jsx
     // src/modules/counter.js

     // 초기 상태값
     const initialState = {
       number: 0,
     };

     // 리듀서
     const counter = (state = initialState, action) => {
       switch (action.type) {
         default:
           return state;
       }
     };

     // 모듈파일에서는 리듀서를 export default 한다.
     export default counter;
     ```

     코드를 잘 작성하셨나요? 이제 우리가 작성한 모듈안에 있는 구성요소들을 하나씩 자세히 살펴봅시다.

## 2. 모듈의 구성요소 살펴보기

- **(1) initialState === 초기 상태값**

  ```java
  // 초기 상태값
  const initialState = {
    number: 0,
  };
  ```

  이것은 initialState 입니다. 단어 그대로 `초기 상태값` 입니다. 즉, 어떤 State의 초기값을 정해주는 것 입니다. 우리가 `useState`를 사용했을 때 괄호 안에 초기값을 지정해주던 것과 같은 이치입니다.

  ```jsx
  const [number, setNumber] = useState(0); // < 여기
  ```

  위 코드에서만든 State의 초기값은 `{ } (객체)` 이고, 그 안에 `number` 라는 변수에 초기값 0을 할당해준 것입니다. 초기값은 꼭 객체가 아니어도 됩니다. 배열이 되어도 되고, 그냥 원시데이터가 돼도 됩니다. 그리고 객체에도 여러개의 변수를 넣어줄 수 있습니다.

  ```jsx
  // 초기값이 0
  const initialState = 0;

  // 초기값이 0이 있는 배열
  const initialState = [0];

  // 초기값이 number = 0, name = '석구'인 객체
  const initialState = {
    number: 0,
    name: "석구",
  };
  ```

- **(2) Reducer === 변화를 일으키는 함수**
  아래 코드를 `리듀서` 라고 합니다.
  **리듀서란, 변화를 일으키는 `함수`입니다.** 자 무슨말인지 모르시겠죠? 괜찮습니다.
  **다만, 리듀서는 함수다.** 이것만 기억해봅시다.

  ```jsx
  // 리듀서
  const counter = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  ```

  우리가 `useState()`를 사용할 때, number라는 값을 바꾸고 싶으면 setNumber를 사용했습니다.
  아래 코드 처럼 number값을 변경할 수 있었습니다.

  ```jsx
  // 예시 코드

  const onClickHandler = () => {
    setNumber(number + 1); // setState를 이용해서 state 변경
  };
  ```

  **리덕스에서는 리듀서가 이 역할을 합니다.**
  우리가 **“리듀서야 number에 +1를 해줘"** 라고 명령하면, 리듀서는 number에 +1을 더해줍니다.
  그래서 변화를 일으키는 함수라고 표현한 것 입니다.

  ```jsx
  // src/redux/modules/counter.js

  // counter 리듀서
  const counter = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  export default counter; // 여기
  ```

  그리고 리듀서의 인자에 보면 `(state = intialState, action)` 이라고 되어 있습니다.
  우리는 리듀서 인자 첫번째 자리에서는 `state`를, 두번째 자리에서는 `action` 이라는 것을 꺼내서 사용할 수 있습니다. 이것이 무엇인지는 지금 당장 몰라도 됩니다. 다만, `state = intialState` 처럼 `state`에 `initialState`를 할당해줘야 하는 것만 기억해주세요.

- **(3) 카운터 모듈을 스토어에 연결하기**
  우리는 지금까지 모듈파일에서 초기 상태값과 리듀서를 작성했습니다. **이제 우리가 만든 모듈을 스토어에 연결 시켜야 합니다.** 아직까진 모듈과 스토어가 각각 따로 분리되어 있는 상태이기 때문에 우리가 만든 State를 스토어에서 꺼낼 수 없습니다.
  `configStore.js`로 이동해서 아래 코드를 추가해주세요.

  ```jsx
  // src/redux/modules/config/configStore.js

  // 원래 있던 코드
  import { createStore } from "redux";
  import { combineReducers } from "redux";

  // 새롭게 추가한 부분
  import counter from "../modules/counter";

  const rootReducer = combineReducers({
    counter: counter, // <-- 새롭게 추가한 부분
  });
  const store = createStore(rootReducer);

  export default store;
  ```

  **위와 같이 코드를 추가하면, 스토어와 모듈이 연결됩니다.** 이렇게 스토어와 모듈을 연결시키는 코드는 우리가 모듈을 추가할 때마다 똑같이 진행해주면 됩니다.
  근데, 우리가 연결을 하긴했지만 코드상으로만 하다보니 이것이 잘 된것인지 눈으로 확인이 안되서 긴가민가하죠? 이제 우리가 스토어와 모듈을 정상적으로 잘 연결했는지 눈으로 직접 확인해보겠습니다.

## 3. 스토어와 모듈 연결 확인하기

- **(1) useSelector = 스토어 조회**
  우리가 생성한 모듈을 스토어에 잘 연결했는지 확인하는 방법은 **컴포넌트에서 스토어를 직접 조회**하면 됩니다. 컴포넌트에서 리덕스 스토어를 조회하고자 할때는 useSelector라는 ‘react-redux’의 훅을 사용해야 합니다.
  useSelector의 사용법은 아래와 같습니다.

  ```jsx
  // 1. store에서 꺼낸 값을 할당 할 변수를 선언합니다.
  const number =

  // 2. useSelector()를 변수에 할당해줍니다.
  const number = useSelector()

  // 3. useSelector의 인자에 화살표 함수를 넣어줍니다.
  const number = useSelector( ()=>{} )

  // 4. 화살표 함수의 인자에서 값을 꺼내 return 합니다.
  // 우리가 useSelector를 처음 사용해보는 것이니, state가 어떤 것인지 콘솔로 확인해볼까요?
  const number = useSelector((state) => {
  	console.log(state)
  	return state
  });
  ```

  App.js 컴포넌트로 이동해서 기존에 있던 코드를 모두 지우고, 아래 코드를 입력해주세요.

  ```jsx
  // src/App.js

  import React from "react";
  import { useSelector } from "react-redux"; // import 해주세요.

  const App = () => {
    // const counterStore = useSelector(function (state) {
    //   return state;
    // });        와 동일한 코드가 바로 아래코드
    const counterStore = useSelector((state) => state); // 추가해주세요.
    console.log(counterStore); // 스토어를 조회해볼까요?

    return <div></div>;
  };

  export default App;
  ```

  **우리는 컴포넌트에서 스토어를 조회할 때**
  **`react-redux`에서 제공하는 `useSelector` 라는 훅을 사용합니다. (너무너무 중요 🔥)**
  브라우저를 켜고, 콘솔을 보면 아래 이미지처럼 객체가 보이고, 그 안에 counter 라는 값이 있는 것을 볼 수 있습니다. 우리가 만든 counter 라는 모듈의 state가 보이는 것을 알 수 있습니다. 이렇게 화살표 함수에서 꺼낸 state라는 인자는 현재 프로젝트에 존재하는 모든 리덕스 모듈의 state 인 것 입니다.
  ![Untitled](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F59f72c5d-1747-4f09-b7c6-8022b8ad6659%2FUntitled.png?id=ff6dd128-668b-4715-8816-573daa799ba7&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1370&userId=&cache=v2)
  이제 우리는 어떤 컴포넌트에서도 접근 할 수 있는 스토어를 가지게 되었습니다. 만약 우리가 컴포넌트에서 `number`라는 값을 사용하고자 한다면 아래 코드처럼 꺼내서 사용하면 됩니다.

  ```java
  const number = useSelector(state => state.counter.number); // 0
  ```

  다음 챕터에서는 이제 setState() 를 사용해서 값을 변경했던 것처럼, 리덕스에서도 스토어에 있는 State를 변경하는 방법에 대해서 배우겠습니다.
  **파트 1 ~ 3에 거쳐서 굉장히 많은 작업을 했습니다. 이쯤에서 잠시 다시 복습하는 시간을 가지시길 바랍니다.**

## 4. 정리

- 보통 모듈은 기능의 이름을 따서 파일을 생성한다.
- 모듈의 구성요소로는 `initialState`, `Reducer`가 있다.
- 모듈을 만들면, 스토어에 연결을 해야만 한다. 그리고 연결은 `configStore.js`에서 한다.
- 컴포넌트에서 Store를 조회할 때는 `useSelector`를 사용해야 한다.
- `useSelector((state)⇒state)` 에서 `state`는 모든 모듈의 state 를 조회할 수 있는 값이다.
