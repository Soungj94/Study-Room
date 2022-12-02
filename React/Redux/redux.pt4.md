Goal: 리덕스 스토어 state를 수정하는 방법을 배웁니다.
#Actions, Dispatch, Reducer

## 0. _리덕스의 흐름 도식화_

![picture](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

1. View 에서 액션이 일어난다.

2. dispatch 에서 action이 일어나게 된다.

3. action에 의한 reducer 함수가 실행되기 전에 middleware가 작동한다.

4. middleware 에서 명령내린 일을 수행하고 난뒤, reducer 함수를 실행한다. (3, 4번은 아직 몰라도 됩니다!)

5. reducer 의 실행결과 store에 새로운 값을 저장한다.

6. store의 state에 subscribe 하고 있던 UI에 변경된 값을 준다.

- 출처 : [https://velog.io/@annahyr/리덕스-흐름-이해하기](https://velog.io/@annahyr/%EB%A6%AC%EB%8D%95%EC%8A%A4-%ED%9D%90%EB%A6%84-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

## 1. `counter.js` 모듈의 state 수정 기능 만들기 (`+ 1` 기능 구현해보기)

- (1) **어떻게 counter.js 모듈에 있는 state의 값을 변경할 수 있을까?**
  우리가 `useState()`를 사용해서 `number`에 +1을 할 때는 `setNumber`을 이용해서 +1을 해주었습니다.

  ```jsx
  // 예시 코드

  // local state
  const [number, setNumber] = useState(0);

  // click handler
  const onClickHandler = () => {
    setNumber(number + 1);
  };
  ```

  리덕스에서는 어떻게 값이 수정된다고 했었나요? 그렇습니다. 값의 수정은 **리듀서에서 일어난다고 앞서 배웠습니다. (part 3)**
  그럼 우리가 만약에 counter.js 모듈에 있는 number에 +1을 하고 싶으면 어떻게 해야할까요?
  아래와 같이 해야 합니다.

  1. 리듀서에게 보낼 number를 +1 하라는 “명령”을 만든다.
  2. 명령을 보낸다.
  3. 리듀서에서 명령을 받아 number +1을 한다.

- **(2) 리듀서에게 보낼 “명령” 만들기**
  우선 우리는 리듀서에게 number에 +1을 하라고 명령을 보내야겠죠. 명령을 보내기 전에 ‘명령'을 만들어야 합니다. 리덕스에서는 그 명령을 Action 이라고 합니다. 즉, 리듀서에게 내가 어떤 Action을 하길 원한다. 라고 표현하는 것이죠. 행동을 코드로 나타내면 `객체` 로 만듭니다. 그래서 이것을 **액션 객체** 라고 합니다.
  **액션 객체는 반드시 type이라는 `key`를 가져야 합니다. 왜냐하면 우리가 이 액션 객체를 리듀서에게 보냈을 때 리듀서는 객체 안에서 type이라는 key를 보기 때문입니다.**

  ```jsx
  // 예시 코드
  //number에 +1 을 하는 액션 객체

  {
    type: "PLUS_ONE";
  }
  ```

  앞으로 우리는 리덕스 모듈에 있는 state을 변경하기 위해서는 그에 해당하는 액션 객체를 모두 만들어줘야 합니다.

- **(3) “명령”(액션 객체) 보내기**
  이제 명령을 만들었으니, 우리는 리듀서에게 명령을 보내야 합니다. 조금 더 정확하게 표현하게 위해서 지금부터는 “명령"이 아닌 액션객체라고 표현하겠습니다.
  액션객체를 보내기 리듀서로 보내기위해서는 새로운 훅을 사용해야 합니다. 그 훅은 `useDispatch`라는 훅 입니다. react-redux에서 import 해서 사용할 수 있으며, 우리가 만든 액션 객체를 리듀서로 보내주는 역할을 하는 훅입니다.
  `useDispatch`라는 훅을 사용하기 위해서는 컴포넌트 안에서 아래와 같이 먼저 코드를 작성해서 `dispatch`라는 변수를 생성해줘야 합니다. **이렇게 생성한 dispatch는 `함수` 라는 점을 기억하세요! 그래서 우리는 dispatch를 사용할 때 `()` 를 붙여서 함수를 실행하게 됩니다.**

  ```jsx
  // src/App.js

  import React from "react";
  import { useDispatch } from "react-redux"; // import 해주세요.

  const App = () => {
    const dispatch = useDispatch(); // dispatch 생성
    return (
      <div>
        <button>+ 1</button> {/* 버튼을 하나 추가해주세요. */}
      </div>
    );
  };

  export default App;
  ```

  그리고 dispatch를 사용할 때 ( ) 안에 액션객체를 넣어주면 됩니다. 만약 어떤 버튼을 클릭했을 때 리듀서로 액션객체를 보내고 싶다면 아래와 같이 코드를 작성합니다.

  ```jsx
  // src/App.js

  import React from "react";
  import { useDispatch } from "react-redux"; // import 해주세요.

  const App = () => {
    const dispatch = useDispatch(); // dispatch 생성
    return (
      <div>
        <button
          // 이벤트 핸들러 추가
          onClick={() => {
            // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
            dispatch({ type: "PLUS_ONE" });
          }}
        >
          + 1
        </button>
      </div>
    );
  };

  export default App;
  ```

  자, 이렇게 우리는 **디스패치를 이용해서 액션객체를 리듀서로 보낼 수 있습니다.** **만약에** 어떤 컴포넌트가 렌더링 됐을 때 액션객체를 리듀서로 보내고 싶다면 어떻게 해야 할까요? 한번 고민해보시길 바랍니다.

- **(4) 액션 객체 받기**
  우리가 (3)에서 리듀서로 액션을 보내긴 보냈지만, 무언가 눈으로 보이는게 없으니 이게 지금 잘 된건가? 궁금하지 않으신가요? 우리가 액션객체를 리듀서로 보냈으니, 리듀서에서 액션객체가 잘 왔는지 확인해보겠습니다.
  아마 현재 counter.js 모듈의 코드가 이런 상태 일 것 입니다. 코드를 수정해볼 것인데요. **우리가 App.js에서 보낸 액션객체를 받을 수 있도록 구현해볼 것 입니다.**

  ```jsx
  // src/redux/modules/counter.js

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

  리듀서에 action을 콘솔로 찍어보겠습니다.

  ```jsx
  // src/redux/modules/counter.js

  // 초기 상태값
  const initialState = {
    number: 0,
  };

  // 리듀서
  const counter = (state = initialState, action) => {
    console.log(action); // 여기에 console.log(action) 추가
    switch (action.type) {
      default:
        return state;
    }
  };

  // 모듈파일에서는 리듀서를 export default 한다.
  export default counter;
  ```

  그리고 다시 App.js로 돌아가서 버튼을 눌러서 버튼을 클릭해볼까요? 아래 영상처럼 counter.js 에서 콘솔로 찍은 action이 보이는 것을 확인할 수 있습니다. **리듀서있는 action은 우리가 App.js에서 dispatch로 보낸 그 액션객체임을 알 수 있습니다. (콘솔에 보이는 위 3줄 코드는 무시하셔도 됩니다)**
  [화면 기록 2022-07-24 오전 2.37.35.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3af9f225-230d-47b4-ad79-fcdeedd0dcdb/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2022-07-24_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.37.35.mov)
  자 이렇게, App.js에서 우리가 dispatch를 통해서 보낸 액션객체가 리듀서로 잘 들어가고 있음을 눈으로 직접 확인했습니다.

- **(5) 액션객체 명령대로 리듀서가 state값을 변경하는 코드 구현하기**
  이제 액션객체를 잘 보내고, 잘 받고 있음을 확인했으니 state에 있는 number를 실제로 변경하는 로직 코드를 구현해볼게요. 로직코드는 리듀서 안에 있는 스위치문으로 작성됩니다.
  리듀서가 액션객체를 받아 상태를 바꾸는 원리는 아래와 같습니다.

  1. 컴포넌트로부터 dispatch를 통해 액션객체를 전달 받는다.
  2. action 안에 있는 type을 스위치문을 통해 하나씩 검사해서, 일치하는 case를 찾는다.
  3. type과 case가 일치하는 경우에, 해당 코드가 실행되고 새로운 state를 반환(return) 한다.
  4. 리듀서가 새로운 state를 반환하면, 그게 새로운 모듈의 state가 된다.
     우리가 (4)에서 `1. 컴포넌트로부터 dispatch를 통해 액션객체를 전달 받는다.` 까지 구현했으니, 2~4를 한번 직접 코드로 작성해보겠습니다.

  ```jsx
  // src/modules/counter.js

  // 초기 상태값
  const initialState = {
    number: 0,
  };

  // 리듀서
  const counter = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      // PLUS_ONE이라는 case를 추가한다.
      // 여기서 말하는 case란, action.type을 의미한다.
      // dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
      // 아래 return 절이 실행된다.
      case "PLUS_ONE":
        return {
          // 기존 state에 있던 number에 +1을 더한다.
          number: state.number + 1,
        };

      default:
        return state;
    }
  };

  // 모듈파일에서는 리듀서를 export default 한다.
  export default counter;
  ```

  action이 `{type: “PLUS_ONE”}` 이기 때문에, 리듀서 안에 있는 스위치문은 action.type을 조회합니다. 그리고 그것이 일치하면 `return` 절이 실행되고 새로운 state를 반환합니다. 막상 글로 보면 복잡해보였지만, 코드로 보면 스위치문에 case를 하나 추가해주는 것으로 완료됩니다.
  자, 이제 우리가 dispatch를 통해 액션객체를 App.js 컴포넌트에서 보냈고, 그것을 리듀서에서 받아 스위치문을 통해 조건을 찾았고, 그에 해당했을 때 state값을 변경하는 로직까지 모두 구현했으니 한번 정말 state가 잘 변경되는지 확인해봅시다.

- **(6) useSelector로 변경된 state값 확인하기**
  우리가 전 챕터에서 배운 useSelector를 이용해서 App.js에서 state값을 조회해봅시다. App.js로 이동해서 useSelector를 작성하고, number를 콘솔에 찍어봅시다. 그리고 number를 화면에도 렌더링 해봅니다.

  ```jsx
  // src/App.js

  import React from "react";
  import { useDispatch, useSelector } from "react-redux";

  const App = () => {
    const dispatch = useDispatch();

    // 👇 코드 추가
    const number = useSelector((state) => state.counter.number);

    console.log(number); // 콘솔 추가
    return (
      <div>
        {/* 👇 코드 추가 */}
        {number}
        <button
          onClick={() => {
            dispatch({ type: "PLUS_ONE" });
          }}
        >
          + 1
        </button>
      </div>
    );
  };

  export default App;
  ```

  우리가 의도한대로 버튼을 누를때마다 number가 1씩 증가는 것을 화면에서도, 콘솔에서도 볼 수 있습니다. 그리고 리듀서에 작성해둔 `console.log(action)` 으로 인해 우리가 버튼을 클릭할 때마다 우리가 디스패치한 액션도 보이네요.
  더불어, useState에서 만든 state가 변경되면 화면이 리렌더링되는 것과 마찬가지로, 리덕스에 존재하는 state도 값이 변경되면 useSelector를 하고 있는 컴포넌트들도 모두 다시 리렌더링됩니다. 그래서 화면상에서도 0 → 1 → 2 와 같이 증가하는 것이 보이는 것 입니다.

## 2. `- 1` 기능 빠르게 구현해보기

빼기 1 기능도 위와 동일한 과정으로 구현합니다. 아래 코드를 통해 한번 구현해봅시다.

- **(1) -1 버튼 구현**
  빼기 버튼을 추가 합니다.

  ```jsx
  // src/App.js

  import React from "react";
  import { useDispatch, useSelector } from "react-redux";

  const App = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.counter.number);

    return (
      <div>
        {number}
        <button
          onClick={() => {
            dispatch({ type: "PLUS_ONE" });
          }}
        >
          + 1
        </button>

        {/* 빼기 버튼 추가 */}
        <button>- 1</button>
      </div>
    );
  };

  export default App;
  ```

- **(2) 액션객체 디스패치하기**
  버튼의 이벤트핸들러에 dispatch와 액션객체를 넣어줍니다.

  ```jsx
  // src/App.js

  import React from "react";
  import { useDispatch, useSelector } from "react-redux";

  const App = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.counter.number);

    return (
      <div>
        {number}
        <button
          onClick={() => {
            dispatch({ type: "PLUS_ONE" });
          }}
        >
          + 1
        </button>
        <button
          onClick={() => {
            // 액션객체 디스패치
            dispatch({ type: "MINUS_ONE" });
          }}
        >
          - 1
        </button>
      </div>
    );
  };

  export default App;
  ```

- **(3) 리듀서 로직 구현**
  스위치문에 case를 추가합니다.

  ```jsx
  // src/modules/counter.js

  // 초기 상태값
  const initialState = {
    number: 0,
  };

  // 리듀서
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case "PLUS_ONE":
        return {
          number: state.number + 1,
        };

      // action.type이 MINUS_ONE 일 때 새로운 state 반환
      case "MINUS_ONE":
        return {
          number: state.number - 1,
        };
      default:
        return state;
    }
  };

  // 모듈파일에서는 리듀서를 export default 한다.
  export default counter;
  ```

- **(4) 기능 구현 확인**
  구현이 모두 끝났습니다. 잘 작동하는지 확인해볼까요?

## 3. 정리

- 액션객체란, 반드시 type이란 key를 가져야 하는 객체이다. 또한 리듀서로 보낼 “명령"이다.
- 디스패치란, 액션객체를 리듀서로 보내는 “전달자” 함수이다.
- 리듀서란, 디스패치를 통해 전달받은 액션객체를 검사하고, 조건이 일치했을 때 새로운 상태값을 만들어내는 “변화를 만들어내는" 함수이다.
- 디스패치(dispatch)를 사용하기위해서는 useDispatch() 라는 훅을 이용해야 한다.
  - 디스패치는 스토어의 내장함수 중 하나입니다.
  - 우선, 디스패치는 액션을 발생 시키는 것 정도로 이해하시면 됩니다.
  - dispatch 라는 함수에는 액션을 파라미터로 전달합니다.. dispatch(action) 이런식으로 말이죠.
- 액션객체 type의 value는 대문자로 작성한다. (JS에서 상수는 대문자로 작성하는 룰이 있음)
