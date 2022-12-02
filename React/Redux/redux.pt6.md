## 1. Payload란?

- **(1) 우리가 만들 새로운 기능**
  우리는 이전 챕터에서 `+1` 기능과 `-1` 기능을 만들었습니다. 근데 **우리가 만약 1로 정해진 기능을 만드는 것이 아니라 증가 시킬 숫자를 카운터 프로그램을 사용하는 사용자가 직접 정할 수 있게 기능을 만드려면 어떻게 해야 할까요?**
  다시말해 사용자가 5을 더하고 싶으면 **어떤 input에 5를 입력해서 버튼을 누르면 5가 더해지고, 10을 더하고 싶으면 10을 입력하고 버튼을 눌렀을 때 10이 더해지는 프로그램**인 것 입니다.
- **(2) Payload란 무엇인가?**
  우리가 이전까지 만든 기능은 리듀서에게 “더 해" 라고만 말을 했습니다. 1이라는 것은 우리가 임의적으로 정해서 리듀서에게 액션 객체를 보냈죠.
  하지만 우리는 이제 `“N을 더해”` 라고 N을 같이 리듀서에서 보내야 합니다. 지금까지는 `~을` 이라는 목적어가 없었다면, 이제는 그 목적어가 생긴것이고 **목적어도 액션객체에 담아 같이 보내줘야 할 것** 입니다. 이렇게 액션객체에 같이 담아 보내주는 그 것을 우리는 `payload`라고 합니다. 만약 `10을 더해` 라는 것을 리듀서에게 보내고 싶으면 액션객체에 payload를 같이 담아주는 것 입니다.
  코드로 보면 아래와 같아요. 이제 `+1` 이 아닌, `+n` 이므로 type의 value로 아래처럼 변경이 되어야 문맥적으로 맞겠지요?
  ```jsx
  // payload가 추가된 액션객체

  {type: "ADD_NUMBER", payload: 10} // type뿐만 아니라 payload라는 key와 value를 같이 담는다.
  ```
  이렇게 State를 변경하는데 있어 만약 리듀서에게 어떤 값을 같이 보내줘야 한다면 `payload`를 액션객체에 같이 담아 보냅니다.
  ⭐️ 꼭 `payload`라는 이름을 통해서 보내야하나요?
  리덕스는 굉장히 유연한 라이브러리이기 때문에 많은 것들이 “표준화”되어 있지 않습니다. 때문에 자신만의 방식으로 프로그래밍 할 수 있는 유연성을 제공하죠.
  리덕스 공식 문서를 확인해보면 액션은 객체이며 해당 액션이 어떤 기능을 수행해야 하는지 명시하는 `type`이라는 프로퍼티를 반드시 가져야 한다고 나와 있습니다. 그래서 지금까지는 아래와 같이 액션 객체에 type 프로퍼티를 추가해 어떤 기능을 수행해야 할지 명시해줬습니다.
  ```jsx
  {
    type: "ADD_NUMBER";
  }
  ```
  하지만 그 외에 데이터들을 어떤 프로퍼티에 값으로 넣어줘야 하는지는 개발자 마음이라는거죠.
  - 공식문서
      <aside>
      💡 A **plain object** describing the change that makes sense for your application. ... **Actions must have a type field** that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for type than Symbols because strings are serializable. ❗️ **Other than type, the structure of an action object is really up to you**. If you're interested, check out [Flux Standard Action](https://github.com/acdlite/flux-standard-action) for recommendations on how actions could be constructed.
      
      </aside>

  ```jsx
  {type: "ADD_NUMBER", num: 10} // ??
  {type: "ADD_NUMBER", number: 10} // ??
  {type: "ADD_NUMBER", data: 10} // ??
  {type: "ADD_NUMBER", myNumber: 10} // ??
  {type: "ADD_NUMBER", myNum: 10} // ??

  {type: "ADD_NUMBER", payload: 10}
  ```
  위에 작성한 코드는 전부 유효한 코드입니다. 그렇지만 저희가 데이터를 payload 프로퍼티에 담아주는 이유는 커뮤니티에서 이렇게 하면 제일 좋더라 하는 “커뮤니티 best practice”로 공유되면서 많은 개발자가 데이터는 payload라는 프로퍼티에 담아주고 있습니다. 이 얘기를 드리는 이유는 커뮤니티 컨벤션이기 때문에 개발하는 과정에서 얼마든 개발자 취향과 상황에 따라 변경할 수 있음을 알려드리고 싶었습니다.

## 2. payload를 이용해서 기능 구현하기

- **(1) `payload`를 이용해서 기능 구현 작업 순서**
  기능 구현은 아래 순서대로 작업할 것 입니다.
  1. 사용자가 입력한 값을 받을 input 구현하기
  2. Action Creator 작성하기
  3. 리듀서 작성하기
  4. 구현된 기능 테스트 하기
- **(2) 사용자가 입력한 값을 받을 input 구현하기**
  사용자가 더하고자고 하는 값을 입력할 수 있는 input을 구현해봅시다. 기존에 App.js에 작성했던 코드를 모두 지우고 다시 처음부터 구현해보겠습니다.
  대략적인 html을 마크업 해줍니다. input과 button 2개를 아래와 같이 작성합니다.
  ```jsx
  // src/App.js

  import React from "react";

  const App = () => {
    return (
      <div>
        <input type="number" />
        <button>더하기</button>
        <button>빼기</button>
      </div>
    );
  };

  export default App;
  ```
  그리고 input의 값을 state로 관리하기 위해 훅을 사용하여 state 사용하고, 이벤트핸들러 (onChangeHandler)를 작성하여 input과 연결해줍니다.
  이번 예시코드에서는 **input의 onChange 핸들러를 input안에서 인라인으로 작성하지 않고, 위쪽에서 함수를 별도로 분리하여 작성**하고, 그것을 넣어주는 방식으로 작성해보았습니다. 이런 방식도 가능하다는 것을 보여드리려구요.
  ```jsx
  // src/App.js

  import React from "react";
  import { useState } from "react";

  const App = () => {
    const [number, setNumber] = useState(0);

    const onChangeHandler = (event) => {
      const { value } = event.target;
      // event.target.value는 문자열 입니다.
      // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
      setNumber(+value);
    };

    // 콘솔로 onChangeHandler가 잘 연결되었는지 확인해봅니다.
    // input에 값을 넣을 때마다 콘솔에 그 값이 찍히면 연결 성공!
    console.log(number);

    return (
      <div>
        <input type="number" onChange={onChangeHandler} />
        <button>더하기</button>
        <button>빼기</button>
      </div>
    );
  };

  export default App;
  ```
- **(3) counter.js 모듈 작성: Action Creator**
  counter.js 로 이동해서 모듈을 작성해봅시다. 기존에 작성되어있던 코드를 모두 지우고 새로 작성해보겠습니다.
  먼저 우리가 작성해야할 것을 리스트업 해봅니다. 총 5개를 작성해야겠지요.
  필자는 모듈을 만들 때, 빈 페이지에 만들어야 할 것을 리스트업 하고 작성하는 편 입니다. 구성요소가 많으니 빼먹지 않기 위함입니다.
  ```jsx
  // src/redux/modules/counter.js

  // Action Value

  // Action Creator

  // Initial State

  // Reducer

  // export default reducer
  ```
  Action value와 Action Creator를 아래와 같이 작성합니다.
  지금까지 작성한 Action Creator와 조금 차이가 있습니다. **payload가 필요한 Action Creator에서는 함수를 선언할 때 매개변수 자리에 paylaod를 넣어줘야 합니다.** 왜냐하면 **Action Creator를 사용하는 컴포넌트에서 리듀서로 보내고자 하는 payload를 인자로 넣어줘야 하기 때문입니다.**
  인자로 payload를 넣어줌으로써 Action Creator가 액션객체를 생성할때 payload를 같이 담아 생성하는 원리이기 때문입니다.
  ```jsx
  // src/redux/modules/counter.js

  // Action Value
  const ADD_NUMBER = "ADD_NUMBER";

  // Action Creator
  export const addNumber = (payload) => {
    return {
      type: ADD_NUMBER,
      payload: payload,
    };
  };

  // Initial State

  // Reducer

  // export default reducer
  ```
  ✅ 추가적으로 `ES6`에서는 객체의 key와 value가 같으면 아래와 같이 줄여서 작성할 수 있습니다. 앞으로는 이런 축약형태로 코드를 작성하겠습니다.
  ```jsx
  export const addNumber = (payload) => {
    return {
      type: ADD_NUMBER,
      payload,
    };
  };
  ```
- **(4) counter.js 모듈 작성: Initial State, Reducer, 내보내기(export default)**
  Action Creator를 작성했으니, 이제 리듀서 로직도 작성해보겠습니다. 우선 **Initial State와 리듀서의 기본 형태를 만들어줍니다. 그리고 파일의 마지막 부분에 export default 를 통해서 생성한 리듀서를 내보내줄게요.**
  ```jsx
  // src/redux/modules/counter.js

  // .. 중략

  // Initial State
  const initialState = {
    number: 0,
  };

  // Reducer 기본형태
  const counter = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  // export default reducer
  export default counter;
  ```
  그리고 이어서 `ADD_NUMBER`의 로직을 아래와 같이 구현합니다.
  사용자가 컴포넌트에서 Action Creator로 payload를 담아 보내는 것은 액션객체에 담겨지고, 그렇게 담겨진 것은 리듀서에서 `action.payload`에서 꺼내 사용할 수 있습니다. 그래서 그것을 이용해서 기존의 값에 더해줌으로써 기능을 구현하는 것이지요.
  ```jsx
  // 리듀서

  const counter = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NUMBER:
        return {
          // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
          number: state.number + action.payload,
        };
      default:
        return state;
    }
  };
  ```
- **(5) 구현된 기능 테스트 하기**
  UI 및 counter 모듈을 모두 구현해보았습니다. 이제 우리가 만든 기능이 잘 작동하는지 한번 테스트 해볼게요.
  우선, 첫째로 App.js에서 useSelector를 이용해서 Store의 값을 조회하고 그것을 화면상에 렌더링하는 기능을 추가하겠습니다.
  ```jsx
  // src/App.js

  import React from "react";
  import { useState } from "react";
  import { useSelector } from "react-redux";

  const App = () => {
    const [number, setNumber] = useState(0);
    // 1. 아래 코드 추가 👇
    const globalNumber = useSelector((state) => state.counter.number);

    const onChangeHandler = (event) => {
      const { value } = event.target;
      setNumber(+value);
    };

    return (
      <div>
        {/* 2. 아래 코드 추가  */}
        <div>{globalNumber}</div>
        <input type="number" onChange={onChangeHandler} />
        <button>더하기</button>
        <button>빼기</button>
      </div>
    );
  };

  export default App;
  ```
  두번째로, Action Creator를 import 하고, payload를 담아 dispatch 해보겠습니다. 아래와 같이 코드를 추가 합니다. **1번부터 5번까지 순서대로 흐름을 따라가며 작성**해보세요.
  ```jsx
  import React from "react";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";

  // 4. Action Creator를 import 합니다.
  import { addNumber } from "./redux/modules/counter";

  const App = () => {
    // 1. dispatch를 사용하기 위해 선언해줍니다.
    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);
    const globalNumber = useSelector((state) => state.counter.number);

    const onChangeHandler = (event) => {
      const { value } = event.target;
      setNumber(+value);
    };

    // 2. 더하기 버튼을 눌렀을 때 실행할 이벤트핸들러를 만들어줍니다.
    const onClickAddNumberHandler = () => {
      // 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
      dispatch(addNumber(number));
    };

    return (
      <div>
        <div>{globalNumber}</div>
        <input type="number" onChange={onChangeHandler} />
        {/* 3. 더하기 버튼 이벤트핸들러를 연결해줍니다. */}
        <button onClick={onClickAddNumberHandler}>더하기</button>
        <button>빼기</button>
      </div>
    );
  };

  export default App;
  ```
  다 작성했다면, 한번 테스트 해볼게요! 잘 작동이 되나요?
  5를 input에 입력하고 더하기를 누르면 현재 숫자에서 5을 더하고, 3을 입력하고 더하기를 누르면 현재 숫자에서 3을 더하고 있죠. 이상 payload를 활용한 Action Creator 실습이었습니다.
  [화면 기록 2022-07-24 오후 3.28.14.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e3a08d50-198c-43c3-8da1-b48da6d8f34e/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2022-07-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.28.14.mov)

## 3. Ducks 패턴

- **(1) Ducks 패턴이란?**
  리덕스를 배워보니 어떠신가요?
  **리덕스를 사용하기 위해서는 결국 우리가 리덕스의 구성요소를 모두 만들어야만 사용이 가능**합니다. 근데 만약 리덕스 모듈을 개발하는 개발자마다 구성요소들을 제 각각 구현하면 어떨까요? 그리고 내가 그 개발자와 협업을 해야 하는 상황에 놓였을 때 수많은 파일 중에 내가 필요로 하는 구성요소를 찾는것이 쉬울까요?
  그래서 `Erik Rasmussn` 라는 개발자가 **이것을 패턴화하여 작성하는 것을 제안**했는데, 그것이 바로 `Ducks`패턴입니다. `Ducks` 라는 이름은 리덕스의 `덕스` 라고 하네요. **심볼은 오리 입니다. 🐤**
    <aside>
    📌 [Erik Rasmussn의 Ducks 제안](https://github.com/erikras/ducks-modular-redux)
    
    </aside>

- **(2) Duck 패턴으로 작성하기**
  이 자료를 보고있는 수강생들에게 별도의 안내는 하지 않았지만, 사실 우리는 이미 `Ducks` 패턴으로 코드를 작성하고 있었습니다.
  `**Erik Rasmussen` 이 제안한 Ducks 패턴은 아래의 내용을 지켜 모듈을 작성하는 것 입니다.\*\*
  1. Reducer 함수를 `export default` 한다.

  2. Action creator 함수들을 `export` 한다.

  3. Action type은 `app/reducer/ACTION_TYPE` 형태로 작성한다.
  (외부 라이브러리로서 사용될 경우 또는 외부 라이브러리가 필요로 할 경우에는 UPPER_SNAKE_CASE 로만 작성해도 괜찮다.)
  그래서 모듈 파일 1개에 `Action Type`, `Action Creator`, `Reducer` 가 모두 존재하는 작성방식입니다.
  어떤가요? **“지금까지 왜 이렇게 작성을 하라고 했을까?”** 라고 생각하셨던 수강생분들은 의문이 조금 풀리셨길 바랍니다. 그래서 앞으로 **우리는 모든 리덕스 모듈을 Ducks 패턴으로 작성하도록 하겠습니다.**

## 4. 정리

- 리듀서로 보내는 액션객체에 어떤 정보를 같이 담아보내고자 한다면 payload를 이용한다.
- `payload`는 **Action Creator를 생성할 때 매개변수에 자리에서 받을 준비를 하고, 반환하는 액션객체에 payload라는 key와 받은 매개변수를 value로 하여 구현**한다.
- 리듀서에서 payload를 사용하고자 할 때는 **action.payload로 사용**할 수 있다.
- ES6에서 **객체를 생성할 때 key와 value가 같으면 축약해서 작성**할 수 있다.
- `Ducks` 패턴은 `Erik Rasmussen` 이 제안했고, 현재 리덕스 모듈 작성방법의 정석으로 여겨지고 있다.

## 5. 퀴즈

<aside>
📖 `-n`  기능을 구현해봅시다. 
더하기 기능과 마찬가지로 사용자가 입력한 number값만큼 빼기가 되는 기능을 구현해야 합니다.

</aside>

##
