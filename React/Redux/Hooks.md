# React Hooks

## 1. useState 복습

**(1) 정의**

**useState는 가장 기본적인 hook이며, 함수 컴포넌트에서 가변적인 상태를 가지게 해줍니다.** 그래서 우리가 저번 기초 주차에서 useState를 활용해서 카운터 프로그램도 만들어보고, Todo list로 만들어보았죠?

**복습해볼까요? 🔥**

useState의 기본적인 형태는 아래 처럼 생겼습니다.

```jsx
const [state, setState] = useState(initialState);
```

그동안 배열로 감싸진 모습에 처음에는 익숙하지 않으셨을텐데요. 원래는 **useState 라는 함수가 배열을 반환하고, 이것을 구조 분해 문법으로 꺼내놓은 모습일 뿐**입니다.
여기서 구조분해할당은: (Destructuring assignment) 더욱 자세하게 구조분해 할당
https://ko.javascript.info/destructuring-assignment
우리는 `state`를 변수로 사용했고, `setState`를 이용해서 `state` 값을 수정할 수 있었습니다. 그리고 **만약 state가 원시 데이터타입이 아닌 객체 데이터 타입인 경우에는 불변성을 유지해줘야 한다고 이미 배웠습니다.**

## 2. 함수형 업데이트

- **(1) 함수형 업데이트란?**
  **setState를 사용하는 방식**에는 우리가 알고 있는 방식이 아닌 **또 다른 방식이 있습니다.** **함수형 업데이트 방식** 입니다.

  ```jsx
  // 기존에 우리가 사용하던 방식
  setState(number + 1);

  // 함수형 업데이트
  setState(() => {});
  ```

  위 코드와 같이 setState의 `( ) 안에` **수정할 값이 아니라, 함수를 넣을 수 있습니다. 그리고 그 함수의 인자에서는 현재의 state을 가져올 수 있고, { } 안에서는 이 값을 변경하는 코드를 작성할** 수 있습니다. 마치 아래 코드와 같이 말이죠.

  ```jsx
  // 현재 number의 값을 가져와서 그 값에 +1을 더하여 반환한 것 입니다.
  setState((currentNumber) => {
    return currentNumber + 1;
  });
  ```

- **(2) 두 방식의 차이점은?**
  **일반 사용법과 함수형 업데이트 방식의 차이점**이 무엇일까요? 두개의 코드를 비교해봅시다.
  먼저 일반 업데이트 방식으로 onClick안에서 `setNumber(number + 1)` 를 3번 호출했습니다. **number가 1씩 증가하는군요.**

  ```jsx
  // src/App.js

  import { useState } from "react";

  const App = () => {
    const [number, setNumber] = useState(0);
    return (
      <div>
        {/* 버튼을 누르면 1씩 플러스된다. */}
        <div>{number}</div>
        <button
          onClick={() => {
            setNumber(number + 1); // 첫번째 줄
            setNumber(number + 1); // 두번쨰 줄
            setNumber(number + 1); // 세번째 줄
          }}
        >
          버튼
        </button>
      </div>
    );
  };

  export default App;
  ```

  이번에는 함수형 업데이트 방식으로 동일하게 작동시켜보겠습니다. **number가 3씩 증가하네요.**

  ```jsx
  // src/App.js

  import { useState } from "react";

  const App = () => {
    const [number, setNumber] = useState(0);
    return (
      <div>
        {/* 버튼을 누르면 3씩 플러스 된다. */}
        <div>{number}</div>
        <button
          onClick={() => {
            setNumber((previousState) => previousState + 1);
            setNumber((previousState) => previousState + 1);
            setNumber((previousState) => previousState + 1);
          }}
        >
          버튼
        </button>
      </div>
    );
  };

  export default App;
  ```

  **왜 다르게 동작할까요?**
  **일반 업데이트 방식**은 버튼을 클릭했을 때 첫번째 줄 ~ 세번째 줄의 있는 setNumber가 각각 실행되는 것이 아니라, 배치(batch)
  로 처리합니다. **즉 우리가 onClick을 했을 때 setNumber 라는 명령을 세번 내리지만, 리액트는 그 명령을 하나로 모아 최종적으로 한번만 실행**을 시킵니다. 그래서 setNumber을 3번 명령하던, 100번 명령하던 1번만 실행됩니다.
  반면에 **함수형 업데이트 방식**은 **3번을 동시에 명령을 내리면, 그 명령을 모아 순차적으로 각각 1번씩 실행**시킵니다. 0에 1더하고, 그 다음 1에 1을 더하고, 2에 1을 더해서 3이라는 결과가 우리 눈에 보이는 것이죠.

배치(Batch) 란 ?

- 배치작업은 데이터를 실시간으로 처리하는게 아니라, 일괄적으로 모아서 한번에 처리하는 작업을 의미한다. 가령, 은행의 정산작업의 경우 배치 작업을 통해 일괄처리를 수행하게 되며 사용자에게 빠른 응답이 필요하지 않은 서비스에 적용할 수 있다. 특정 시간이후에는 자원을 거의 소비하지 않는 것이 특징이다.

배치의 특징

- 대량의 데이터를 처리한다.
- 특정 시간에 프로그램을 실행한다.
- 일괄적으로 처리한다

## 3. 정리

- useState의 업데이트 방식은 2가지 방식이 있으며, 각각 다르게 동작한다.
- useState 로 원시데이터가 아닌 데이터를 변경할때는 불변성을 유지해야 한다.

## 4. 더 알아보면 좋은 키워드

- 왜 리액트팀은 useState가 위 방식으로 동작하도록 만들었을까?

---

## 1. useEffect

- **(1) useEffect는 언제 사용할까?**
  **useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다.** 쉽게 말해 어떤 컴포넌트가 화면에 보여졌을 때 내가 무언가를 실행하고 싶다면? 또는 어떤 컴포넌트가 화면에서 사라졌을 때 무언가를 실행하고 싶다면? **useEffect를 사용**합니다.
  useState와 마찬가지로 React에서 제공하는 훅 (기능) 이므로, `import React, { useEffect } from "react";` 로 import 해서 사용합니다.
- **(2) 코드로 보는 useEffect 기초**
  브라우저에서 우리가 App 컴포넌트를 눈으로 보는 순간, 즉 App 컴포넌트가 화면에 렌더링될 때 `useEffect` 안에 있는 `console.log`가 실행됩니다. **컴포넌트가 렌더링 될 때 실행된다.** 이게 바로 `useEffect` 핵심 기능입니다.
  ```jsx
  // src/App.js

  import React, { useEffect } from "react";

  const App = () => {
    useEffect(() => {
      // 이 부분이 실행된다.
      console.log("hello useEffect");
    });

    return <div>Home</div>;
  };

  export default App;
  ```
- **(3) useEffect와 리렌더링(re-rendering)**
  우리가 앞서 배웠다시피, **useEffect는 useEffect가 속한 컴포넌트가 화면에 렌더링 될 때 실행**됩니다. 이런 useEffect의 특징에 의해 우리가 의도치않은 동작을 경험할수도 있는데요. 아래 코드르 볼까요?
  다음 코드를 볼까요? input이 있고 value 라는 state를 생성하여 input과 연결시켰습니다. 이렇게 구현하고 브라우저에 input에 어떤 값을 입력하면 useEffect가 계속 실행되는 것을 볼 수 있습니다.
  ```jsx
  import React, { useEffect, useState } from "react";

  const App = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
      console.log("hello useEffect");
    });

    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
    );
  };

  export default App;
  ```
  **전체 흐름은 아래와 같습니다.**

1. input에 값을 입력한다.
2. value, 즉 state가 변경된다.
3. state가 변경되었기 때문에, App 컴포넌트가 리렌더링 된다.
4. 리렌더링이 되었기 때문에 useEffect가 다시 실행된다.
5. 1번 → 5번 과정이 계속 순환환다.

그래서 우리는 콘솔이 브라우저에 한번만 찍히길 원했지만, input을 입력할 때마다 계속 찍히고 있는 것 입니다. 하지만 이런 부분도 해결할 수 있습니다.

## 2. 의존성 배열

- **(1) 의존성 배열(dependency array) 이란?**
  useEffect에는 의존성 배열이라는 것이 있습니다. 말이 조금 어렵죠? 쉽게 풀어 얘기하면 **“이 배열에 값을 넣으면 그 값이 바뀔 때만 useEffect를 실행할게”** 라는 것 입니다.
  ```jsx
  // useEffect의 두번째 인자가 의존성 배열이 들어가는 곳 입니다.
  useEffect(() => {
    // 실행하고 싶은 함수
  }, [의존성배열]);
  ```
- **(2) 코드로 보는 의존성 배열 → 의존성 배열이 빈 배열인 경우**

  코드를 볼까요?

  우리가 위에 보았던 코드와 동일한 코드 입니다. 다만 **useEffect에 의존성 배열만 추가했지요.** 이것을 추가함으로 어떻게 될까요?

  일단 의존성 배열안에는 어떠한 값도 넣지 않았습니다. 의존성 배열이 **“이 배열에 값을 넣으면 그 값이 바뀔 때만 useEffect를 실행할게” 라는 의미를 가진다고 했고 우리가 아무것도 넣지 않았으니 useEffect는 처음에 딱 한번만 실행되고 그 이후로는 어떤일이 일어나도 실행이 되서는 안됩니다.**

  ```jsx
  // src/App.js

  import React, { useEffect, useState } from "react";

  const App = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
      console.log("hello useEffect");
    }, []); // 비어있는 의존성 배열

    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
    );
  };

  export default App;
  ```

  영상을 보면, 우리가 input에 어떤 값을 입력하더라도, 처음에 실행된 hello useEffect외에는 더 이상 실행이 되지 않는 것을 볼 수 있습니다. **이렇게 useEffect를 사용하는데, 어떤 함수를 컴포넌트가 렌더링 될 때 단 한번만 실행하고 싶으면 의존성 배열을 [ ] 빈 상태로 넣으면 됩니다.**

- **(3) 코드로 보는 의존성 배열 → 의존성 배열에 값이 있는 경우**
  빈 배열을 넣었을 때, 최초 렌더링 이후에는 useEffect가 실행되지 않는다는 것을 보셨죠? 그럼 이제 의존성 배열에 `value` 를 넣어보겠습니다. 우리가 배운게 맞다면, value는 state이고 우리가 input을 입력할 때마다 그 값이 변하게 되니 useEffect도 계속 실행이 되겠죠?
  ```jsx
  // src/App.js

  import React, { useEffect, useState } from "react";

  const App = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
      console.log("hello useEffect");
    }, [value]); // value를 넣음

    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
    );
  };

  export default App;
  ```
  ## 3. clean up

<aside>
🚫 **클린 업 예제코드에서는 우리가 배우지 않은 패키지를 사용하기 때문에, 실제 코드 구현은 하지말고 아래 코드만 보고 학습을 진행해주세요. 향후에 클린업을 한번 더 다루겠습니다. 👍**

</aside>

- **(1) 클린 업 이란?**
  우리가 처음에 “어떤 컴포넌트가 화면에서 사라졌을 때 무언가를 실행하고 싶다면”이라는 소로 시작을 했습니다. 컴포넌트가 나타났을 때 (렌더링됐을 때 === 함수 컴포넌트가 실행됐을 때) useEffect의 effect 함수가 실행되는 것은 우리가 배웠으니, **이제 컴포넌트가 사라졌을 때 무언가를 어떻게 실행하는지 배워봅시다.** **이 과정을 우리는 클린 업 (clean up) 이라고 표현**합니다.
- **(2) 클린 업 하는 방법**
  클린 업을 하는 방법은 간단합니다. useEffect 안에서 return 을 해주고 이 부분에 실행되길 원하는 함수를 넣으면 됩니다.
  ```jsx
  // src/App.js

  import React, { useEffect } from "react";

  const App = () => {
    useEffect(() => {
      // 화면에 컴포넌트가 나타났을(mount) 때 실행하고자 하는 함수를 넣어주세요.

      return () => {
        // 화면에서 컴포넌트가 사라졌을(unmount) 때 실행하고자 하는 함수를 넣어주세요.
      };
    }, []);

    return <div>hello react!</div>;
  };

  export default App;
  ```
- **(3) 클린 업 활용해보기**

  코드를 볼까요?

  `속세를 벗어나는 버튼` 을 만들었고 버튼을 누르면 useNavigate에 의해서 /todos로 이동하면서 속세 컴포넌트를 떠날 것 입니다. 그러면서 **화면에서 속세 컴포넌트가 사라질 것 이고, useEffect의 return 부분이 실행될 것 입니다.**

  잘 작동하죠? `/` 에서 `/todos` 잘 이동했고, 그 과정에서 clean up이 실행되었습니다. 곧 clean up을 활용하는 날이 오게 될 것 입니다.

<aside>
💡 `const nav = useNavigate();` ← 이 기능은 나중에 우리가 배울 기능입니다. **다른페이지로 이동해서 컴포넌트가 사라지고, 그에 따라 클린 업이 실행되는 과정에 집중해주세요.**

</aside>

## 4. 정리

- `useEffect`는 화면에 컴포넌트가 mount 또는 unmount 됐을 때 실행하고자 하는 함수를 제어하게 해주는 훅이다.
- **의존성 배열을 통해 함수의 실행 조건을 제어**할 수 있다.
- `useEffect` 에서 함수를 1번만 실행시키고자 할때는 **의존성 배열을 빈 배열**로 둔다.
  useEffect는 사이드 effect들을 관리하는 훅 이다
  -side effect 는 뭘까요 ?
- 컴포넌트가 처음 화면에 그려졌을때,
  - 렌더링을 한다는 개념이죠
- 업데이트 됐을때,
- 삭제됐을때

1. event listener 로 구독을 한다던가 구독해지를 한다던가
2. API를 통해 무언가를 보여준다거나 (요청)
3. 외부요청을 보낸다던가

   [숙련 학습자료 03.useEffect.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71e2776b-6e4a-4e42-9dd6-0038df1a636a/__03.useEffect.mp4)

## 5. 더 알아보면 좋은 키워드

- `Strict mode`란 무엇일까?
  https://ithub.tistory.com/162

- React 라이프 사이클이란 무엇일까?
- React에서 말하는 mount와 unmount란 무엇일까?
