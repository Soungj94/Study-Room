## 1. Action Creator

- **(1) Action Creator 란?**
  만약에 우리가 액션객체의 value를 변경할 일이 생긴다면 어떨까요? `PLUS_ONE` , `MINUS_ONE` 이라는 value 대신 이 액션객체가 counter 모듈안에 있다는 것을 강조하기 위해서 `counter/PLUS_ONE`, `counter/MINUS_ONE` 이라는 value로 바꾸길 각각 바꾸길 원한다면 아래 코드에서 4군데를 변경해줘야 할 것 입니다. 근데 또 만약에 그게 4군데가 아니라 **프로젝트 규모가 굉장히 커서 100군데라면 어떨까요?** 곤란하겠죠?
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
            dispatch({ type: "PLUS_ONE" }); // counter/PLUS_ONE로 변경
          }}
        >
          + 1
        </button>
        <button
          onClick={() => {
            // 액션객체 디스패치
            dispatch({ type: "MINUS_ONE" }); // counter/MINUS_ONE로 변경
          }}
        >
          - 1
        </button>
      </div>
    );
  };

  export default App;
  ```
  ```jsx
  // src/modules/counter.js

  // 초기 상태값
  const initialState = {
    number: 0,
  };

  // 리듀서
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case "PLUS_ONE": // counter/PLUS_ONE로 변경
        return {
          number: state.number + 1,
        };

      // action.type이 MINUS_ONE 일 때 새로운 state 반환
      case "MINUS_ONE": // counter/MINUS_ONE로 변경
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
- **(2) Action Creator 만들기**
  그래서 앞으로는 위 코드처럼 직접 하드코딩을 하는 것이 아니라, **액션객체를 한 곳에서 관리할 수 있도록 “함수"와 액션 value를 상수로** 만들어보겠습니다.
  만약 `PLUS_ONE` 이라는 액션 객체를 만드는 함수를 만든다면 아래와 같이 만들 수 있습니다. 그리고 우리는 이것을 **Action Creator라고 부릅니다. 해석 그대로 액션을 만드는 생성자** 인 것이죠.
  ```jsx
  // src/redux/modules/counter.js

  const PLUS_ONE = "PLUS_ONE"; // value는 상수로 생성

  // 액션객체를 반환하는 함수 생성
  // export 가 붙는 이유는 plusOne()는 밖으로 나가서 사용될 예정이기 때문입니다.
  export const plusOne = () => {
    return {
      type: PLUS_ONE, // type에는 위에서 만든 상수로 사용 (vscode에서 자동완성 지원)
    };
  };
  ```
  이렇게 액션의 value는 상수로 따로 만들어주고, 그리고 그것을 이용해서 액션객체를 반환하는 함수를 작성합니다. 그리고 이것을 실제로 리듀서와 컴포넌트에서는 아래와 같이 작성합니다.
  리듀서 전체 코드를 볼까요?
  모듈에 initialState와 리듀서밖에 없었지만 **액션의 value와 Action Creator가 추가**되었습니다.
  ```jsx
  // src/modules/counter.js

  // 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
  const PLUS_ONE = "PLUS_ONE";
  const MINUS_ONE = "MINUS_ONE";

  // 추가된 코드 👇 - Action Creator를 만들어 줍니다.
  export const plusOne = () => {
    return {
      type: PLUS_ONE,
    };
  };

  export const minusOne = () => {
    return {
      type: MINUS_ONE,
    };
  };

  // 초기 상태값
  const initialState = {
    number: 0,
  };

  // 리듀서
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case PLUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
        return {
          number: state.number + 1,
        };
      case MINUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
        return {
          number: state.number - 1,
        };
      default:
        return state;
    }
  };

  export default counter;
  ```
- **(3) Action Creator 사용하기**
  우리가 생성한 Action Creator를 컴포넌트에서 어떻게 사용하는지 알아보겠습니다.
  사용하는 방법은 아래순서로 진행합니다.
  1. `export`된 **Action Creator** `import` 하기
  2. dispatch()에 있던 액션객체를 지우고, Action creator 넣기
  하나씩 코드로 보겠습니다. 우선 **우리가 사용할 Action creator를 import 해야 합니다.** 즉 Action creator는 **태생적으로 counter.js 밖에서 사용될 함수들**이었습니다. 그래서 생성할때부터 앞에 `export` 를 붙여준 것이었죠.
  그리고 dispatch()안에 있던 액션객체를 import 한 Action Creator들로 변경해줍니다. 이렇게 하면 수정이 모두 끝났습니다.
  ```jsx
  // src/App.js

  import React from "react";
  import { useDispatch, useSelector } from "react-redux";

  // 사용할 Action creator를 import 합니다.
  import { minusOne, plusOne } from "./redux/modules/counter";

  const App = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.counter.number);

    return (
      <div>
        {number}
        <button
          onClick={() => {
            dispatch(plusOne()); // 액션객체를 Action creator로 변경합니다.
          }}
        >
          + 1
        </button>
        {/* 빼기 버튼 추가 */}
        <button
          onClick={() => {
            dispatch(minusOne()); // 액션객체를 Action creator로 변경합니다.
          }}
        >
          - 1
        </button>
      </div>
    );
  };

  export default App;
  ```
    <aside>
    ❓  Q.  `dispatch()`안에는 반드시 객체만 들어가야 한다고 알고 있는데, 어떻게 함수가 들어갈 수 있을까요?
    
    A. `{type: “PLUS_ONE”}` === `plusOne()`  는 같은 값입니다. 
    **함수를 실행한 것은 함수의 return 값과 같습니다. 다시 말해,** 
    `const one = () => {return 1; }` 로 함수를 만들었을 때 `one() === 1` 입니다.
    
    </aside>

## 2. 왜 Action creator를 사용해야 하나?

- **(1) 휴먼에러 (오타) 방지**
  액션객체의 `type` value를 상수로 만들어놓았기 때문에, 개발툴에서 자동완성등의 보조 기능을 지원받을 수 있습니다. 그래서 **의도치 않은 휴먼에러(오타)를 없앨 수 있어요.**
  ![picture](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb39240d4-7a2f-4d8d-9bb4-9969ef401eaa%2FUntitled.png?id=efc6a34f-44da-4a8d-b099-fd2b3093fa0f&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1900&userId=&cache=v2)
- **(2) 유지보수의 효율성 증가**
  우리가 만든 `Action Creator`가 만약 100군데에서 쓰이고 있는 상태에서 혹여나 그것을 바꾸어야 하는 상황이 오더라도 단 한번의 수정으로 100군데에 모든 수정사항을 반영할 수 있습니다.
- **(3) 코드 가독성**
  모듈 파일에서 `Action Creator`가 일목요연하게 정리가 되어있으면, 내가 아닌 다른 개발자가 보았을 때 해당 모듈이 가지고 있는 모든 `Action`들을 한눈에 알 수 있게 됩니다. 즉 그 자체가 `Action` 들의 리스트업을 해주는 역할을 갖게 되는 것 입니다.
- **[(4) 리덕스 공식문서에서 소개되고 있는 방법](https://redux.js.org/api/bindactioncreators/#todoactioncreatorsjs)**
  리덕스팀에서도 위와 같은 사유에 근거하여 공식적으로 안내하고 있는 방법일 것 입니다.

## 2. 정리

- 액션객체를 만드는 함수를 `Action Creator`(액션 크리에이터)라고 한다.
- `Action Creator`는 모듈 파일안에서 생성된다.
- 액션객체의 type value로 상수로 생성해서 관리한다.
- `Action Creator`를 사용하면, 여러가지 문제점을 해소할 수 있다.
