## 1. 리덕스 설정

**(1) 리덕스 설치**

리액트에서 리덕스를 사용하기 위해서는 2개의 패키지를 설치해야 합니다. **vscode 터미널에서 아래 명령어를 입력해서 2개의 패키지를 설치하세요. 참고로** `react-redux` 라는 패키지는 리덕스를 리액트에서 사용할 수 있도록 서로 연결시켜주는 패키지 입니다.

```bash
yarn add redux react-redux

아래와 같은 의미
yarn add redux
yarn add react-redux
```

**(2) 폴더 구조 생성하기**

![Untitled](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F297e14ad-99cf-4666-88fd-2b33d88edf4c%2FUntitled.png?id=77ee6913-922c-492c-b3bc-37e2be394ba6&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=480&userId=&cache=v2)

좌측의 이미지와 같이 폴더 구조를 생성하세요.

1. `src` 폴더 안에 `redux` 폴더를 생성
2. `redux` 폴더 안에 `config`, `modules` 폴더를 생성
3. `config` 폴더 안에 `configStore.js`파일을 생성합니다.

각각의 폴더와 파일은 역할이 있습니다.

- `redux` : 리덕스와 관련된 코드를 모두 모아 놓을 폴더 입니다.
- `config` : 리덕스 설정과 관련된 파일들을 놓을 폴더 입니다.
- `configStore` : “중앙 state 관리소" 인 Store를 만드는 설정 코드들이 있는 파일 입니다.
- `modules` : 우리가 만들 State들의 그룹이라고 생각하면 됩니다. 예를 들어 `투두리스트`를 만든다고 한다면, 투두리스트에 필요한 `state`들이 모두 모여있을 `todos.js`를 생성하게 되텐데요, 이 `todos.js` 파일이 곧 하나의 모듈이 됩니다.

## 2. 설정 코드 작성

- **(1) 설정 코드 작성 시, 주의사항**
  1. **우리가 작성하는 설정코드는 이해할 필요가 없는 코드들 입니다, 코드 분석 금지 ❌**

     설정 코드를 작성하는 이유는 리덕스를 만든 리덕스팀에서 이렇게 설정을 하라고 안내하고 있기 때문입니다.

  2. **리덕스 사용 “방법”을 중점으로 공부해야 합니다.**

     우리가 핸드폰을 샀을 때, 핸드폰을 잘 사용하기위해서 핸드폰을 분해해서 어떤 부품으로 핸드폰을 만들었는지, 그 부품의 목적은 무엇인지 공부하시나요?

     지금 우리가 배우는 리덕스도 마찬가지 입니다. 리덕스를 어떻게 만들었는지, 왜 이렇게 설정하는지는 중요하지 않습니다. **우리가 해야할 것은 단지 리덕스를 쓰는 방법만 익히면 됩니다.**
- **(2) src/configStore.js**
  **`src/configStore.js` 에 아래 코드를 입력하세요.**
  ```jsx
  import { createStore } from "redux";
  import { combineReducers } from "redux";

  /*
  1. createStore()
  리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수) 입니다. 
  리덕스는 단일 스토어로 모든 상태 트리를 관리한다고 설명해 드렸죠? 
  리덕스를 사용할 시 creatorStore를 호출할 일은 한 번밖에 없을 거예요.
  */

  /*
  2. combineReducers()
  리덕스는 action —> dispatch —> reducer 순으로 동작한다고 말씀드렸죠? 
  이때 애플리케이션이 복잡해지게 되면 reducer 부분을 여러 개로 나눠야 하는 경우가 발생합니다. 
  combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어줍니다.
  */

  const rootReducer = combineReducers({});
  const store = createStore(rootReducer);

  export default store;
  ```
- **(3) index.js**
  디렉토리의 가장 최상단에 있는 `index.js`에 아래 내용을 입력하세요.
