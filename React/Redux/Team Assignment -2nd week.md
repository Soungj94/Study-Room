<aside>
๐ Q1. ์ปดํฌ๋ํธ A๋ ๋ฆฌ๋์ค ์คํ ์ด๋ฅผ ๊ตฌ๋ํ๊ณ  ์์ต๋๋ค. ๋ฆฌ๋์ค์ ์ ์ฅ๋ ๋ฐ์ดํฐ๊ฐ ๋ณ๊ฒฝ๋์์ ๋(A๊ฐ ๊ตฌ๋ ์ค์ธ ๊ฐ์ด ๋ณ๊ฒฝ๋์๋ค๊ณ  ๊ฐ์ ํฉ๋๋ค. ์ด๋ค ๊ณผ์ ์ ๊ฑฐ์ณ ์ปดํฌ๋ํธ A๊ฐ ๋ณ๊ฒฝ๋ ๊ฐ์ ๊ฐ์ ธ์ฌ ์ ์๋ ์ง ํ๋ฆ์ ๊ทธ๋ ค๋ณผ๊น์? (๋ฉ๋ชจ์ฅ, ์ฌ์ง ๋ฑ)

</aside>

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbb09ba6b-de54-46e6-a635-ee5a7c305720%2FUntitled.png?id=82a091ea-8462-4085-82c5-89b3f55a7ed4&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1460&userId=2ac1bf09-0847-4f28-bb1d-c813fbbfffa1&cache=v2)

STORE์ ์ํ๋ค์ ์ ์ฅํ๊ณ 

REDUCER์์ ์ก์์ ๊ฐ๊ณตํ๋ค

ACTION ์ผ๋ก ์ ํธ๋ฅผ ์ค๋ค

STORE์์ ๋ฆฌ๋์์ ๋ช๋ น์ ํด์ฃผ๊ธฐ ์ํด DISPATCH๋ฅผ

๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ๋ค ์ฐ๊ธฐ ์ํด SELECTOR๋ฅผ ์ด๋ค.

<aside>
๐ Q2. ์ต์๋ ์ฒด์ด๋์ด๋ ๋ญ๊น์? ์ด๋ค ๊ฒฝ์ฐ์ ์ฌ์ฉํ ๊น์?

</aside>

1.  โ ? โ ์ ์ฌ์ฉํด ์ค์ฒฉ ๊ฐ์ฒด๋ฅผ ์๋ฌ ์์ด ์์ ํ๊ฒ ์ ๊ทผ์ด ๊ฐ๋ฅํ๋ค.
2.  ์ฐ์ ์์ฉ์ ์ด์ฉํ๋ ค ๊ฐ์ ์์ ํ๊ฒ ์ถ์ถ์ด ๊ฐ๋ฅํ๋ค.

- ex)

  ```jsx
  let user = {
      name : โkimโ
      age : 20
  }
  console.log(user.age)    <ใก console.log(user ?. age)

  ํน์ง์ ์ฝ์ ์ฐฝ ์ผ์ชฝ์ ์๋ user์ ์๋ฃ๊ฐ null,nudefined ๋ฉด
  ์ค๋ฅธ์ชฝ์ ์๋ .age๋ฅผ ์คํ ํด์ฃผ์ง ์์ผ๋ฉฐ ์ถ๋ ฅ๊ฐ์ผ๋ก๋ undefined ๋ฅผ ๋ํ๋ด์ค๋ค
  ```

- ์ธ์  ์ฐ๋๊ฐ?
  ์ค๋ธ์ ํธ ์๋ฃ๋ค์ด ์ค์ฒฉ์ด ๋์ด์์ ๋ ์๋ฌ ์์ด ์์ ํ๊ฒ ๋ฝ์ ์์๋ค.

  ```jsx
  let user = {
     name : โkimโ
     age : { value : 20}
  };
  console.log(user.age.value) ์ด๋ ๊ฒ ์ฐ๊ฒ๋๋ฉด // 20์ด ์ถ๋ ฅ์ด ๋ ๊ฒ์ด๋ค.

  let user = {
     name : โkimโ
     //age : { value : 20}   ์ฃผ์์ ์ฒ๋ฆฌํด ๋ฒ๋ฆฐ๋ค๋ฉด
  };
  console.log(user.age.value)   // Error๊ฐ ์ฌ๋ผ์จ๋ค.

  ์๋ฌ๋ ์์ ์ด ๊ฐ๋ฅ ํ์ง๋ง ์ค์  ์๋น์ค๋ฅผ ์คํํ๊ณ  ์๋ค๋ฉด ์ฝ์ ์๋ ์ชฝ์ ์๋ ๋ชจ๋  ์๋ฃ๋ค์ด
  ์คํ์ด ์๋๋ ๋ฌธ์ ๊ฐ ์๊ฒจ ์ฌ์ดํธ๊ฐ ๋ฉ์ถ๊ฑฐ๋ ์ด์ํ ๋์์ ํ  ์๋ ์๊ธฐ ์๋ฐฉ ์ฐจ์์ผ๋ก
  if,and, && ๋ฑ๋ฑ ๋ค์ํ๊ฒ ์๋ฐฉ์ ํ  ์ ์์ง๋ง ์ข ๋ ๊ฐ๋จํ๊ฒ๋

  let user = {
     name : โkimโ
     //age : { value : 20}

  };

  console.log(user.age?.value)   // undefined

  โ ? โ (์ต์๋ ์ฒด์ด๋) ํ๋๋ง ์ฌ์ฉํด๋ ์๋ฌ ํ์๊ฐ ์๋ undefined ๋ก ์ถ๋ ฅ์ด ๋๋ค.
  ๊ทธ ์ด์ ๋ โ ? โ (์ต์๋ ์ฒด์ด๋) ๊ธฐ์ค์ผ๋ก ์ผ์ชฝ์ ์๋ ํ๊ฐ ๋์์ด
  null ์ด๋ undefined ์ด๋ฉด ํ๊ฐ๋ฅผ ๋ฉ์ถ๊ณ  ์ค๋ฅธ์ชฝ ์ถ๋ ฅ์ด ์์ด undefined๋ฅผ ๋ฐํํ๋ค.
  ```

- nil ๋ณํฉ ์ฐ์ฐ์

  ```jsx
  let user = {
     name : โkimโ
     //age : { value : 20}

  };

  console.log( undefined ?? โ๋ก๋ฉ์คโ) ์ด๋ผ๊ณ  ์ผ์ชฝ์ด null์ด๋ undefined๊ฐ ๋์ค๋ฉด
  ์ค๋ฅธ์ชฝ์ ์๋ ๊ฑธ ๋ณด์ฌ์ฃผ์ธ์ ๋ผ๋ ์๋ฏธ์ด๋ค.
  ```

- ์ธ์  ๋ง์ด ์ฐ๋๊ฐ?
  ๋ณ์ ์์ ๋ฐ์ดํฐ๊ฐ ๋ง์ด ๋ค์ด๊ฐ์๊ณ  ํ๋ฉด์ 3์ด ๋ค์ ๋ณด์ฌ์ค์ผ ํ๋ค๋ฉด?
  ๋์ฐฉํ๊ธฐ์ ๊น์ง undefined๊ฐ ์ถ๋ ฅ์ด ๋  ์๊ฐ ์๋๋ฐ ๊ทธ๋ฐ ์ ์ ๋ฐฉ์งํด์ ?? ๋๊ฐ๋ฅผ ์ฌ์ฉํด์ ๋ํ๋ด์ค๋ค.
- ์ต์๋ ์ฒด์ด๋๊ณผ nil๋ณํฉ ์ฐ์ฐ์ ์ข ๋ ์ดํด ํ๊ธฐ ์ฌ์ด ์์ 

<aside>
๐ Q3.
Form ํ๊ทธ์ ์ฌ์ฉํ  ๋,  button type="submit" ์ ํจ๊ป ์ฌ์ฉํ๋ฉด ๋ฆฌ๋์ค ๋ฐ์ดํฐ๊ฐ ์ด๊ธฐํ ๋๋๋ฐ, ์ ์ด๊ธฐํ ๋๋์ง ์๊ฐํด๋ด์๋ค.

</aside>

form ์ submit ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ์ ๋, ์๋ก๊ณ ์นจ์ ํ๊ฒ ๋จ.

submit ์ด๋ฒคํธ๊ฐ ์์ฑ๋ ํผ์ ์๋ฒ๋ก ์ ์กํ๋ ์ญํ ์ ํจ.

ํ์ด์ง๊ฐ reload ๋๊ธฐ๋๋ฌธ์ state ๋ ์ด๊ธฐํ ๋จ.

<aside>
๐ Q4. ์๋ก๊ณ ์นจ ์์๋ ๋ฆฌ๋์ค ๋ด์ ๋ฐ์ดํฐ๋ฅผ ์ ์งํ๋ ค๋ฉด ์ด๋ค ๋ฐฉ๋ฒ์ ์จ์ผํ ๊น์?

</aside>

์ด์ฑ์ฌ

### ์์ฝ

- redux-persistย ํจํค์ง ์ฌ์ฉ
- ์๋๋ก๊ทธ์ธ์ ์ํ๋ฉดย localStorage๋ฅผ ์ฌ์ฉ
- ๋ธ๋ผ์ฐ์ ๋ฅผ ๋ซ์ผ๋ฉด ๋ก๊ทธ์ธ์ด ํ๋ฆฌ๋ ๊ฒ์ ์ํ๋ฉดย sessionStorage๋ฅผ ์ฌ์ฉ

### ์ฌ์ฉ ๋ชฉ์ 

- ๋ฆฌ๋์ค๋ ์น ๋ธ๋ผ์ฐ์  ์ฐฝ์ ๋ซ์ผ๋ฉด ๋ชจ๋  state๊ฐ ๋ฆฌ์๋๋ค.
- ์ ์  ๋ก๊ทธ์ธ ์ ๋ณด ๊ฐ์ ๊ฒฝ์ฐ ๋ธ๋ผ์ฐ์ ๋ฅผ ๋ซ์๋ ์ ์ง๋์ด์ผ ํ๋ค. ์ด๋ฐ ๊ฒฝ์ฐ ์ฌ์ฉ๋  ์ ์์

### ์๋ฆฌ

1. App ์ด ๋ถ๋ฌ์์ก์ ๋ ๋ก์ปฌ์คํ ๋ฆฌ์ง์ ์๋ ์ ์  ์ ๋ณด ์ฌ์ฉ
2. ์๋ฒ์ ํ์ฌ ๋ก๊ทธ์ธ ์ํ ์ฌ๊ฒ์ฆ
3. ์๋ฒ๊ฐ ์๋ตํ ๋ก๊ทธ์ธ ์ ๋ณด๋ก ์๋ฐ์ดํธ
4. ๋ง์ฝ์ ํ ํฐ์ด ๋ง๋ฃ๋์์ ์์๋, ์ฌ๋ก๊ทธ์ธ ์์ฒญ

### ์น ์คํ ๋ฆฌ์ง ๊ฐ์ฒด(web storage object) ๊ฐ๋ ์ดํด

- ์ข๋ฅ
  - localStorage
  - sessionStorage
- localStorage์ sessionStorage๋ ๋ธ๋ผ์ฐ์  ๋ด์ ํค-๊ฐ ์์ ์ ์ฅ
- ์๋ฒ๋ก ์ ์ก๋์ง ์์ต๋๋ค. ๊ทธ๋์ ์ฟ ํค๋ณด๋ค ๋ง์ ๋ฐ์ดํฐ ์ ์ฅ ๊ฐ๋ฅ.
- ๋๋ฉ์ธยทํ๋กํ ์ฝยทํฌํธ๋ก ์ ์๋๋ ์ค๋ฆฌ์ง(origin)์ ๋ฌถ์ฌ์์ด์ ํ๋กํ ์ฝ๊ณผ ์๋ธ ๋๋ฉ์ธ์ด ๋ค๋ฅด๋ฉด ๋ฐ์ดํฐ์ ์ ๊ทผ๋ถ๊ฐ

### ๋ฉ์๋, ํ๋กํผํฐ

- ๋ ์คํ ๋ฆฌ์ง ๊ฐ์ฒด๋ ๋์ผํ ๋ฉ์๋์ ํ๋กํผํฐ๋ฅผ ์ ๊ณตํฉ๋๋ค.
- setItem(key, value) โ ํค-๊ฐ ์์ ๋ณด๊ดํฉ๋๋ค.
- getItem(key) โ ํค์ ํด๋นํ๋ ๊ฐ์ ๋ฐ์์ต๋๋ค.
- removeItem(key) โ ํค์ ํด๋น ๊ฐ์ ์ญ์ ํฉ๋๋ค.
- clear() โ ๋ชจ๋  ๊ฒ์ ์ญ์ ํฉ๋๋ค.
- key(index) โ ์ธ๋ฑ์ค(index)์ ํด๋นํ๋ ํค๋ฅผ ๋ฐ์์ต๋๋ค.
- length โ ์ ์ฅ๋ ํญ๋ชฉ์ ๊ฐ์๋ฅผ ์ป์ต๋๋ค.

### localStorage

- ์ค๋ฆฌ์ง(domain/port/protocol)์ด ๊ฐ์ ๊ฒฝ์ฐ ๋ฐ์ดํฐ๋ ๋ชจ๋  ํญ๊ณผ ์ฐฝ์์ ๊ณต์ ๋ฉ๋๋ค.
- ์ค๋ฆฌ์ง๋ง ๊ฐ๋ค๋ฉด url ๊ฒฝ๋ก๋ ๋ฌ๋ผ๋ ๋์ผํ ๊ฒฐ๊ณผ๋ฅผ ๋ณผ ์ ์์ต๋๋ค.
- ๋ธ๋ผ์ฐ์ ๋ OS๊ฐ ์ฌ์์ํ๋๋ผ๋ ๋ฐ์ดํฐ๊ฐ ํ๊ธฐ๋์ง ์์ต๋๋ค.

### sessionStorage

- ํ์ฌ ๋  ์๋ ํญ ๋ด์์๋ง ์ ์ง๋ฉ๋๋ค.
- ๊ฐ์ ํ์ด์ง์ฌ๋ ํญ์ด ๋ค๋ฅด๋ฉด ๋ค๋ฅธ ๊ณณ์ ์ ์ฅ๋ฉ๋๋ค.
- ํ๋์ ํญ์ ์ฌ๋ฌ iframe์ด ๋  ์๋ ๊ฒฝ์ฐ ๋์ผ ์ค๋ฆฌ์ง์์ ์๋ค๊ณ  ์ทจ๊ธํ์ฌ sessionStorage ๊ณต์ ๋จ
- ์๋ก ๊ณ ์นจํ  ๋ sessionStorage์ ์ ์ฅ๋ ๋ฐ์ดํฐ๋ ์ฌ๋ผ์ง์ง ์์ต๋๋ค. ํ์ง๋ง ํญ์ ๋ซ๊ณ  ์๋ก ์ด ๋๋ ์ฌ๋ผ์ง๋๋ค.

---

---

---

`redux`ย ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ง์ด ์ฌ์ฉํ์ค ๊ฒ์๋๋ค.

๋ฆฌ๋์ค์ store๋ ํ์ด์ง๋ฅผ ์๋ก๊ณ ์นจ ํ  ๊ฒฝ์ฐ state๊ฐ ๋ ์๊ฐ๋ ๊ฒ์ ๋ณด์ค ์ ์์ต๋๋ค.

์ด๊ฒ์ ๋ํ ๋์ ๋ฐฉ์์ผ๋ก localStorage ๋๋ session์ ์ ์ฅํ๊ณ ์ ํ๋ reducer state๋ฅผ ์ ์ฅํ์ฌ, ์๋ก๊ณ ์นจ ํ์ฌ๋ ์ ์ฅ๊ณต๊ฐ์ ์๋ ๋ฐ์ดํฐ๋ฅผ redux์ ๋ถ๋ฌ์ค๋ ํ์์ผ๋ก ์ด๋ฃจ์ด์ง๋๋ค.

์์์ ๋งํ ์ด ์๋์ ์ํดย `redux-persist`๋ฅผ ์ฌ์ฉํฉ๋๋ค.

redux๊ฐ ์ด๋ฏธ ์ธํ๋์ด ์๋ค๊ณ  ๊ฐ์ ํ๊ณ , redux-persist๋ฅผ ์ถ๊ฐํ๋ ์์์ ์งํํ๊ฒ ์ต๋๋ค.

## **[#](https://kyounghwan01.github.io/blog/React/redux/redux-persist/#%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5)์ค์น**

yarn add redux-persist

## **[#](https://kyounghwan01.github.io/blog/React/redux/redux-persist/#reducer%E1%84%8B%E1%85%A6-persist-store-%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B4)reducer์ persist store ์ ์**

- localStorage์ ์ ์ฅํ๊ณ  ์ถ์ผ๋ฉดย `import storage from 'redux-persist/lib/storage`
- session Storage์ ์ ์ฅํ๊ณ  ์ถ์ผ๋ฉดย `import storageSession from 'redux-persist/lib/storage/session`

```jsx
// reducers/index.js
import { combineReducers } from "redux";
โ import { persistReducer } from "redux-persist";
โ import storage from "redux-persist/lib/storage";

import auth from "./auth";
import board from "./board";
import studio from "./studio";

โ const persistConfig = {
  key: "root",
  // localStorage์ ์ ์ฅํฉ๋๋ค.
  storage,
  // auth, board, studio 3๊ฐ์ reducer ์ค์ auth reducer๋ง localstorage์ ์ ์ฅํฉ๋๋ค.
  whitelist: ["auth"]
  // blacklist -> ๊ทธ๊ฒ๋ง ์ ์ธํฉ๋๋ค
};

export const rootReducer = combineReducers({
  auth,
  board,
  studio
});

โ export default persistReducer(persistConfig, rootReducer);
```

## **[#](https://kyounghwan01.github.io/blog/React/redux/redux-persist/#persist-store-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC)persist store ์ฌ์ฉ**

```jsx
// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
โ import { persistStore } from "redux-persist";
โ import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import configureStore from "./store";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer);
โ const persistor = persistStore(store);

const Root = () => (
  <Provider store={store}>
    โ <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
```

# DIY Section

<aside>
๐ Q1. ์ด๋ฒ ์ฃผ์ฐจ์ ์ค์ ํค์๋๋ฅผ ์ ์ ํ๊ณ , ์ด๊ฒ์ ์ ๋ฆฌํ๋ ์ง๋ฌธ๊ณผ ๋ต๋ณ์ ๋ง๋ค์ด ์ฃผ์ธ์ :-)

</aside>

Route

์ด ์ธ๊ฐ์ง์ ์ปดํฌ๋ํธ๋ฅผ ๊ฐ์ ธ์๋ค.์ด๋ฆ๋ค์ด ๋น์ทํด์ ํท๊ฐ๋ฆฌ์ง๋ง, ๋น์ฐํ๊ฒ ๋ค๋ฅธ ์ญํ ๋ค์ ๋งก๊ณ  ์๋ค.

- BrowserRouter(Router)=์ด๋ฆ์ด ๊ธธ์ด์ ๊ทธ๋ฐ๊ฐ ๋๋ถ๋ถ as๋ฅผ ํตํด ์ด๋ฆ์ Router๋ก ๋ณ๊ฒฝํด์ ์ฌ์ฉํ๋ค๊ณ  ํ๋ค.์ญํ ์ router ๊ธฐ๋ฅ์ ์ด์ฉํ  ๋ชจ๋  ์ปดํฌ๋ํธ๋ค์ ๊ฐ์ธ๋ย *์ต์์ ์ปดํฌ๋ํธ*์ด๋ค.
- Routes= Route ์ปดํฌ๋ํธ๋ค์ ๊ฐ์ธ๋ ์ปดํฌ๋ํธ ์ด๋ค
- Route= URI๊ฐ ๋ณ๊ฒฝ๋๋ฉด ๊ทธ URI์ ๋ง์ ์ปดํฌ๋ํธ๋ฅผ ๋ณด์ฌ์ฃผ๋ ์ปดํฌ๋ํธ์ด๋ค.if ๋ฌธ๊ณผ ์ญํ ์ด ๋น์ทํ๋ค.
- Linkprops(to)๋ก ์ ๋ฌํ ๊ฐ์ผ๋ก ์ฃผ์๊ฐ์ ๋ณ๊ฒฝํด์ฃผ๋ ์ปดํฌ๋ํธ ์ด๋ค.

์ด ์ฅ์์, ์ฐ๋ฆฌ๋ย [Todos](https://github.com/reactjs/redux/tree/master/examples/todos)ย ์์๋ฅผ ์ฌ์ฉํ๊ฒ ์ต๋๋ค. ์ด ์ฅ์ ์ฝ๋ ๋์ ๋ณต์ (clone)ํด๋๋ฉด ์ข์ต๋๋ค.

๋จผ์ ย `<Routerย />`์ย `<Routeย />`๋ฅผ React Router์์ ์ํฌํธํ๊ฒ ์ต๋๋ค. ์ด๋ ๊ฒ ํ๋ฉด ๋ฉ๋๋ค:

```
import { Router, Route, browserHistory } from 'react-router';

```

๋ณดํต React ์ฑ์์๋ย `<Routerย />`๋กย `<Routeย />`๋ฅผ ๊ฐ์ธ์, URL์ด ๋ฐ๋ ๋ย `<Routerย />`๊ฐ ์ฌ๋ฌ ๋ผ์ฐํ์ ๋งค์น์ํค๊ณ  ์ค์ ๋ ์ปดํฌ๋ํธ๋ค์ ๋๋ํฉ๋๋ค.ย `<Routeย />`๋ ๋ผ์ฐํธ๋ฅผ ์ฑ์ ์ปดํฌ๋ํธ ๊ณ์ธต๊ตฌ์กฐ์ ์ ์ธ์ ์ผ๋ก ์ฐ๊ฒฐํฉ๋๋ค.ย `path`์๋ URL์์ ์ฌ์ฉ๋๋ ๊ฒฝ๋ก๋ฅผ ์ ์ํ๊ณ ย `component`์๋ ๋ผ์ฐํธ๊ฐ URL๊ณผ ๋งค์น๋ ๋ ๋๋ํ  ๋จ์ผ ์ปดํฌ๋ํธ๋ฅผ ์ ์ํ๋ฉด ๋ฉ๋๋ค.

```
const Root = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

```

ํ์ง๋ง, ์ฐ๋ฆฌ์ Redux ์ฑ์๋ ์ฌ์ ํย `<Providerย />`๊ฐ ํ์ํฉ๋๋ค.ย `<Providerย />`๋ React Redux๊ฐ ์ ๊ณตํ๋ ๊ณ ์ฐจ ์ปดํฌ๋ํธ๋ก Redux๋ฅผ React์ ๋ฐ์ธ๋ํ๋๋ก ํด์ค๋๋ค([React์ ํจ๊ป ์ฌ์ฉํ๊ธฐ](https://dobbit.github.io/redux/basics/UsageWithReact.html)ย ์ฐธ๊ณ ).

React Redux์์ย `<Providerย />`๋ฅผ ์ํฌํธํฉ์๋ค:

```
import { Provider } from 'react-redux';

```

`<Routerย />`๋ฅผย `<Providerย />`๋ก ๊ฐ์ธ์ ๋ผ์ฐํธ ํธ๋ค๋ฌ๊ฐย `[store`์ ์ ๊ทผ](http://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store)ํ  ์ ์๊ฒ ํ๊ฒ ์ต๋๋ค.

```
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

```

์ด์  URL์ด '/'์ ๋งค์น๋๋ฉดย `<Appย />`ย ์ปดํฌ๋ํธ๊ฐ ๋๋๋ ๊ฒ๋๋ค. ๊ทธ๋ฆฌ๊ณ  URL์์ ํ๋ผ๋ฉํฐ๋ฅผ ์ฝ์ด์ฌ ๋ ํ์ํย `(:filter)`ย ํ๋ผ๋ฉํฐ๋ฅผย `/`์ ์ถ๊ฐํด ์ฃผ๊ฒ ์ต๋๋ค.

```
<Route path="/(:filter)" component={App} />

```

์๋ง URL์์ ํด์๋ ์ ๊ฑฐํ๊ณ  ์ถ์๊ฒ๋๋ค(์:ย `http://localhost:3000/#/?_k=4sbb0i`). ์ด๋ฅผ ์ํด์ React Router์์ย `browserHistory`๋ฅผ ์ํฌํธํฉ์๋ค:

```
import { Router, Route, browserHistory } from 'react-router';

```

์ด๊ฒ์ย `<Routerย />`์ ์ ๋ฌํด์ URL์์ ํด์๋ฅผ ์ ๊ฑฐํ  ์ ์์ต๋๋ค:

```
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App} />
    </Router>

```

IE9 ์ฒ๋ผ ๋ก์ ๋ธ๋ผ์ฐ์ ๋ฅผ ์ง์ํด์ผ ํ๋ ๊ฒฝ์ฐ๊ฐ ์๋๋ฉด ์ธ์ ๋ย `browserHistory`๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

์ด์ฑ์ฌ

<aside>
๐ Q2. ์ด๋ฒ ์ฃผ์ฐจ์ ์ค์ ํค์๋๋ฅผ ์ ์ ํ๊ณ , ์ด๊ฒ์ ์ ๋ฆฌํ๋ ์ง๋ฌธ๊ณผ ๋ต๋ณ์ ๋ง๋ค์ด ์ฃผ์ธ์ :-)

</aside>

useSelector :

store ์ ์ ์ฅ๋ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ๋ค ์ฐ๊ธฐ ์ํ ํ

useDispatch :

store ์ ์ ์๋ reducer์ ๋ณ์๋ฅผ ๋ด์ action ์ ์คํํ๊ฒ ํ๋ ํ

reducer :

ํด๋น action type ์ ๋ง๋ ๊ฐ์ฒด๋ฅผ state์ ๋ฐํํ๋ ์ญํ 

<aside>
๐ Q3. ์ด๋ฒ ์ฃผ์ฐจ์ ์ค์ ํค์๋๋ฅผ ์ ์ ํ๊ณ , ์ด๊ฒ์ ์ ๋ฆฌํ๋ ์ง๋ฌธ๊ณผ ๋ต๋ณ์ ๋ง๋ค์ด ์ฃผ์ธ์ :-)

</aside>

useNav, params, Link

## 1. NavLink

NavLink๋ ์์ ๋ค๋ฃฌ Link ์ปดํฌ๋ํธ์ ๋น์ทํ์ง๋ง ์กฐ๊ธ ๊ธฐ๋ฅ์ด ๋ ๋ถ๊ณผ๋ ๊ฒ์ผ๋ก ๋ณด๋ฉด ๋๋ค.

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

Link๋ฅผ ์ฌ์ฉํ  ๊ฒฝ์ฐ ๊ฐ๋ฐ์ํด์ ์ผ์ ๋ดค์ ๋ ์๋์ ๊ฐ๋ค.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Fc351e532-f35a-43fd-83d3-723fd1369c89%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Fc351e532-f35a-43fd-83d3-723fd1369c89%2Fimage.png)

ํ์ง๋ง NavLink๋ฅผ ์ฌ์ฉํ๋ฉด,

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

Home ํด๋ฆญ ์ ํด๋นํ๋ a ํ๊ทธ์ active๋ผ๋ ํด๋์ค๊ฐ ๋ถ์ฌ๋๊ณ ,

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F000c48d1-9c24-482f-a03c-469ee5de75c6%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7(6).png](<https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F000c48d1-9c24-482f-a03c-469ee5de75c6%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7(6).png>)

About์ ๊ฒฝ์ฐ์๋ ๋์ผํ๊ฒ ํด๋น ํ๊ทธ์ ํด๋์ค๊ฐ ๋ถ์ฌ๋๋ค.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Ffe002d98-8035-4fa7-90b6-bc3245764216%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7(7).png](<https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Ffe002d98-8035-4fa7-90b6-bc3245764216%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7(7).png>)

> โ ์ค์<Route>์์ย exact๋ฅผ ์ผ๋ ๊ฒ๊ณผ ๊ฐ์ ์๋ฆฌ๋ก,ย <NavLink>์์๋ย exact๋ฅผ ์ ์ ํ ๊ณณ์ ์จ์ค์ผ ํ๋ค. ๊ทธ๋ ์ง ์์ผ๋ฉด, ์ ์์์ ๊ฒฝ์ฐ Home์ '/'๋ About์ '/about'์๋ ๊ฑธ๋ฆฌ๊ฒ ๋๋ฏ๋ก Home์ ํญ์ active ํด๋์ค๋ฅผ ๋ฐ๊ฒ ๋๋ค.

๋ค์ ๋์์, ์์์ฒ๋ผ NavLink๋ฅผ ์ธ ๊ฒฝ์ฐ ์ป์ ์ ์๋ ๊ฒ์ด ๋ฌด์์ผ๊น?

์ฌ์ฉ์๊ฐ ํ์ฌ ์์ ์ด ์ด๋ค ํ์ด์ง์ ์๋์ง ์ง๊ด์ ์ผ๋ก ์ดํดํ  ์ ์๊ฒ, ๋ค๋น๊ฒ์ด์์ ์ฌ์ฉ์๊ฐ ์์นํ๊ณ  ์๋ ๊ณณ์ ํ์ํด ์ค ์ ์๋ค.

์ฆ, ์ฌ์ฉ์๊ฐ ์์นํ๊ณ  ์๋ ๊ณณ์ด active๋ผ๋ ์ด๋ฆ์ class๋ก CSS ์ฒ๋ฆฌ๋ฅผ ํ  ์ ์๊ฒ ๋๋ค.

```
//app.css
.active{
  background-color: rgb(255, 136, 136);
  text-decoration: none;
}
```

๊ทธ๋ฌ๋ฉด ์๋์ ๊ฐ์ ํจ๊ณผ๋ฅผ ๊ตฌํํ  ์ ์๊ฒ ๋๋ค.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F29e0b58c-796e-47c8-80a2-793e22b70cce%2Fezgif.com-gif-maker%20(13).gif](<https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F29e0b58c-796e-47c8-80a2-793e22b70cce%2Fezgif.com-gif-maker%20(13).gif>)

> ๋ค์์ผ๋ก, ์ด์  ํฌ์คํ์์ ๋ค๋ฃจ์ง ๋ชปํ ์ผ๋ถย Route์ ํน์ฑ์ ๋ํด ์ ๋ฆฌํ๋ฉด์ Hook์ด ํ์ํ ์ด์ ์ Hook์ ์ข๋ฅ์ ๋ํด ์์๋ณด๊ฒ ์ต๋๋ค.

## 2. Route (+์ถ๊ฐ๋ด์ฉ)

**_Route๋ path์ ๋ฐ๋ผ ํด๋น UI๋ฅผ ๋ณด์ฌ์ฃผ๋ ๋ผ์ฐํ ๊ธฐ๋ฅ์ ๊ฐ์ง ์ปดํฌ๋ํธ_**ย ์ด๋ค.

### 2.1 Route render methods

props๋ฅผ ์ด์ฉํด Route๋ฅผ ๋ ๋๋งํ๋ ๋ฐฉ๋ฒ์ 3๊ฐ์ง๊ฐ ์๋ค. ์ด ์ค ํ ๊ฐ์ง๋ง์ props์ผ๋ก ์ ๋ฌํด์ค์ผ ํ๋ค. (์ฌ๋ฌ ๊ฐ ์ ๋ฌํ๋ฉด ์๋จ)

1. component

```
<Route path="/" component={Home}/>
```

`component`ย prop์ ์ด์ฉํด ๋ ๋๋งํ  ์ปดํฌ๋ํธ๋ฅผ ์ ๋ฌํ๋ฉด, ๋ผ์ฐํฐ๋ย `React.createElement`๋ฅผ ์ฌ์ฉํด ์๋ก์ด React ์ปดํฌ๋ํธ๋ฅผ ์์ฑํ๊ฒ ๋๋ค. ์ฆ, ๋งค๋ฒ ๋ ๋๋ง๋  ๋๋ง๋ค ์๋ก์ด ์ปดํฌ๋ํธ๋ฅผ ๋ง๋๋ ๊ฒ๊ณผ ๊ฐ๋ค.

์ด๋ ๊ธฐ์กด์ ์ปดํฌ๋ํธ๋ฅผ ์๋ฐ์ดํธ ํ๋ ๊ฒ ๋์ ์, ์๋ ์ปดํฌ๋ํธ๋ฅผ ์ธ๋ง์ดํธ ํ๊ณ  ์๋ก์ด ์ปดํฌ๋ํธ๋ฅผ ๋ง์ดํธ ํ๋ค๋ ๋ป์ผ๋ก, ์ฑ๋ฅ์ ์ข์ง ์์ ์ ์๋ค. ๋ฐ๋ผ์ ์ธ๋ผ์ธ ๋ ๋๋ง์ ์ํด ์ธ๋ผ์ธ ํจ์๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ์๋,ย [render](https://reactrouter.com/web/api/Route/render-func)ย ๋๋ย [children](https://reactrouter.com/web/api/Route/children-func)์ ์ด์ฉํด๋ผ.

1. render & children (Func)

render์ children์ ์ฌ์ฉํ๋ฉด ์์์ ์ค๋ชํ ์์น ์๋ ์ฌ๋ง์ดํ์ ํ์ง ์๊ณ , ํธ๋ฆฌํ๊ฒ ์ธ๋ผ์ธ ๋ ๋๋ง ๋ฐ ๋ํ์ด ๊ฐ๋ฅํ๋ค. ํ์ง๋ง ์ด ๋ฐฉ๋ฒ๋ค์ ํ ๋์ ์ด์ ์ ์ฐ๋ ๋ฐฉ๋ฒ์ผ๋ก 2.3 ๋ฐฉ๋ฒ์ ์ฌ์ฉํ๋๋ก ํ์.

### 2.2 Route props

์ 3๊ฐ์ง ๋ ๋๋ง ๋ฉ์๋(2.3 ์ ์ธ)๋ ๋ชจ๋ ๋ค์๊ณผ ๊ฐ์ ๊ฐ์ฒด๋ฅผ props์ผ๋ก ๊ฐ์ง๋ค. history, location, match, ์ด 3๊ฐ์ง์ ๊ฐ์ฒด๋ก ์ ๋ฌ๋์ด์ง๋ค.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F8d01b36b-87f0-412b-9216-d714c0333251%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F8d01b36b-87f0-412b-9216-d714c0333251%2Fimage.png)

- **history**: ํด๋น ๊ฐ์ฒด์ push, replace ํจ์๋ฅผ ํตํด ๋ค๋ฅธ ๊ฒฝ๋ก๋ก ์ด๋ํ๊ฑฐ๋ ์ ๋ค ํ์ด์ง๋ก ์ ํํ  ์ ์๋ค.
  ![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F52b614ab-049f-4889-a9fc-0ab37cb746e9%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F52b614ab-049f-4889-a9fc-0ab37cb746e9%2Fimage.png)
- **location**: ํ์ฌ ๊ฒฝ๋ก์ ๋ํ ์ ๋ณด์ URL ์ฟผ๋ฆฌ(`/about?foo=bar`ํ์์)์ ๋ณด๋ฅผ ๊ฐ์ง๊ณ  ์๋ ๊ฐ์ฒด์ด๋ค.**URL Query**ย : ์ด๋ค ํค์๋๋ฅผ ๊ฒ์ํ๊ฑฐ๋, ํ์ด์ง์ ์ต์์ ์ ๋ฌํ  ๋ ์ฌ์ฉ๋๋ค.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Fe6d24c48-3719-424f-827d-ec02bf2efedc%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2Fe6d24c48-3719-424f-827d-ec02bf2efedc%2Fimage.png)

- **match**: ์ด๋ค Route์ ๋งค์นญ์ด ๋์๋์ง์ ๋ํ ์ ๋ณด๊ฐ ์๊ณ , params(`about/:name`ํ์์) ์ ๋ณด๋ฅผ ๊ฐ์ง๊ณ  ์๋ ๊ฐ์ฒด์ด๋ค.

![https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F37153cd4-897a-4f8d-a405-1fdb69602d35%2Fimage.png](https://velog.velcdn.com/images%2Fwiostz98kr%2Fpost%2F37153cd4-897a-4f8d-a405-1fdb69602d35%2Fimage.png)

### 2.3 ๊ฐ์ฅ ๊ถ์ฅ ๋์ด์ง๋ Route ์ฌ์ฉ๋ฒ

์ด์  ํฌ์คํ์์๋ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ผ๋ก,ย **_์ปดํฌ๋ํธ๋ฅผ Route์ ์์ ์์๋ก ์ ๋ฌ_**ย ํ๋ ๊ฒ์ด ๊ฐ์ฅ ๊ถ์ฅ๋๋ค.

ํ์ง๋ง ์ด ๋ฐฉ๋ฒ์ ๊ฒฝ์ฐ ์์์ ๋ค๋ฃฌ 3๊ฐ์ง ๋ฐฉ๋ฒ(component, render, children)๊ณผ๋ ๋ฌ๋ฆฌ ์ปดํฌ๋ํธ์ Route props(match, location, history) ๊ฐ์ฒด๊ฐ ์ ๋ฌ๋์ง ์๋๋ค.

์ด๋ ํ์ ์ด์ฉํ๋ฉด ๊ฐ๋จํ ์ฌ์ฉํ  ์ ์์ผ๋ฏ๋ก, ๊ฑฑ์ ํ์ง ๋ง๊ณ  ์๋ ๋ฐฉ๋ฒ์ผ๋ก ์ปดํฌ๋ํธ๋ฅผ ์ ๋ฌํ๋๋ก ํ์.

```
<Route path="/">
  <Home />
<Route/>
```

## 3. Hooks

Hook์ ๋ผ์ฐํฐ์ ์ํ์ ์ ๊ทผํ๊ณ  ์ปดํฌ๋ํธ ๋ด๋ถ์์ ๋ค๋น๊ฒ์ด์์ ์ํํ  ์ ์๋๋ก ํ๋ ๊ฒ์ผ๋ก,ย `useParams, useLocation, useHistory, useRouteMatch`๊ฐ ์๋ค.

### 3.1 useParams

๊ธฐ์กด์ย `Route`๋ก ์ฌ์ฉ๋์ง ์์ ์ปดํฌ๋ํธ์์ย `match, location, history`ย ๊ฐ์ฒด์ ์ ๊ทผํ๋ ค๋ฉดย `withRouter`ย HoC๋ก ์ปดํฌ๋ํธ๋ฅผ ๊ฐ์ธ์ค์ผ ํ๋ค. ํ์ง๋งย `useParams`๊ฐ ์ถ๊ฐ๋๋ฉด์ ์์ฝ๊ฒย `match.params`ย ๊ฐ์ฒด์ ์ ๊ทผํ  ์ ์๊ฒ ๋ฌ๋ค.

๐\_\_์์

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

> ์ด๊ฒ์ ์ด์ฉํ URL Parameter ์ค์ต์ ๋ค์ ํฌ์คํ์์ ๋ค๋ฃน๋๋ค.

### 3.2 useHistory

useHistory๋ navigate ํ๋ ๋ฐ ์ฌ์ฉํ  ์ ์๋ย `history`ย ์ธ์คํด์ค์ ๋ํ ์ก์ธ์ค๋ฅผ ์ ๊ณตํ๋ค.

๐\_\_์์

```
import { useHistory } from "react-router-dom";

const Home=(props)=>{
  const history = useHistory();
  const handleClick=()=>{
    history.push("/topics");
  } //ํด๋น ํ์ด์ง๋ก ์ด๋์ํจ๋ค.

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

useLocation์ ํ์ฌ URL์ ๋ํ๋ด๋ย `location`ย ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค.(URL์ด ๋ณ๊ฒฝ๋  ๋๋ง๋ค ์ย `location`๋ฅผ ๋ฐํ)

๐\_\_์์

```
import { useLocation } from "react-router";

const Topic=(props)=>{
  const location=useLocation();
  console.log(location.pathname); //์ถ๋ ฅ ์: /topics/switch

  return (
    ...
  );
}
export default Home;
```

### 3.4 useRouteMatch

useRouteMatch๋ match ๊ฐ์ฒด์ ๊ฐ์ ์ ๊ทผํ  ์ ์๊ฒ ํด์ฃผ๋ hook์ด๋ค. ์ฌ์ฉ ๋ฐฉ๋ฒ์๋ ๋ ๊ฐ์ง๊ฐ ์๋ค.

ํ๋๋ Route ์ปดํฌ๋ํธ์ ํ๋กํผํฐ๋ค(path, strict, sensitive, exact)์ ๊ฐ์ง ๊ฐ์ฒด๋ฅผ ์ธ์๋ก ๋ฐ๋ ๋ฐฉ๋ฒ์ผ๋ก, ๋ง์ฝ path ํ๋กํผํฐ์ ํ์ฌ ํ์ด์ง URL์ด ์ผ์นํ  ๊ฒฝ์ฐ ํด๋น path์ match๊ฐ์ฒด๋ฅผ ๋ฐํํ๊ณ  ์ผ์น ํ์ง ์์ผ๋ฉด null์ ๋ฐํํด์ค๋ค.

๋ค๋ฅธ ํ๋๋ ์๋ฌด ์ธ์๋ ๋๊ฒจ์ฃผ์ง ์๊ณ  hook์ ํธ์ถํ๋ ๋ฐฉ๋ฒ์ด๋ค. ์ด๋ withRouter HoC๋ก match๊ฐ์ฒด์ ์ ๊ทผํ์ ๋์ฒ๋ผ ์ ์ผ ๊ฐ๊น์ด ๋ถ๋ชจ Route ์ปดํฌ๋ํธ์ match ๊ฐ์ ๋ฆฌํดํด์ค๋ค.

```
// ๋ฐฉ๋ฒ 1
// url์ด "/topics/:topicID"์ ์ผ์นํ  ๋ Topic ์ปดํฌ๋ํธ๋ฅผ ๋ ๋๋งํ๊ณ  ์ถ์ ๊ฒฝ์ฐ

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
// ๋ฐฉ๋ฒ 2
// ์ ์ผ ๊ฐ๊น์ด ๋ถ๋ชจ <Route>์ปดํฌ๋ํธ์ match๊ฐ์ฒด์ ์ ๊ทผํ๊ณ  ์ถ์ ๊ฒฝ์ฐ
import { useRouteMatch } from 'react-router';
const Topic=(props)=>{
  const match = useRouteMatch();
  ...
}
export default Topic;
```

์ด์ฑ์ฌ

<aside>
๐ Q4. ์ด๋ฒ ์ฃผ์ฐจ์ ์ค์ ํค์๋๋ฅผ ์ ์ ํ๊ณ , ์ด๊ฒ์ ์ ๋ฆฌํ๋ ์ง๋ฌธ๊ณผ ๋ต๋ณ์ ๋ง๋ค์ด ์ฃผ์ธ์ :-)

</aside>

1. View ์์ action์ด ์ผ์ด๋๋ค
2. dispatch์์ action์ด ์ผ์ด๋๊ฒ ๋๋ค.
3. action์ ์ํ reducer ํจ์๊ฐ ์คํ๋๊ธฐ ์ ์ middleware๊ฐ ์๋ํ๋ค.
4. middleware์์ ๋ช๋ น ๋ด๋ฆฐ ์ผ์ ์ํํ๊ณ , reducer ํจ์๋ฅผ ์คํํ๋ค.
5. reducer์ ์คํ๊ฒฐ๊ณผ store์ ์๋ก์ด ๊ฐ์ ์ ์ฅํ๋ค.
6. store์ state์ subscribeํ๊ณ  ์๋ UI์ ๋ณ๊ฒฝ๋ ๊ฐ์ ์ค๋ค.

- ์ฐธ๊ณ  ์ด๋ฏธ์ง
  ![1.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4d875b1a-fd17-4d69-98c3-5d2eed991edf/1.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221209T025030Z&X-Amz-Expires=86400&X-Amz-Signature=22521dd637589db18c56543146c39657f60678f36a678000086f01efc024c67f&X-Amz-SignedHeaders=host&x-id=GetObject)

<aside>
๐ Q5. ์ด๋ฒ ์ฃผ์ฐจ์ ์ค์ ํค์๋๋ฅผ ์ ์ ํ๊ณ , ์ด๊ฒ์ ์ ๋ฆฌํ๋ ์ง๋ฌธ๊ณผ ๋ต๋ณ์ ๋ง๋ค์ด ์ฃผ์ธ์ :-)

</aside>

Context API

- Context ๋?
  context๋ ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๊ฐ์ ์ด๋ ํ ๊ฐ์ ๊ณต์ ํ  ์ ์๊ฒ ํด์ฃผ๋ ๊ธฐ๋ฅ์ด๋ค ์ฃผ๋ก context๋ ์ ์ญ์ ์ผ๋ก ํ์ํ ๊ฐ์ ๋ค๋ฃฐ ๋ ์ฌ์ฉํ๋ค.
  ๋จ์ํ๊ฒ โ๋ฆฌ์กํธ ์ปดํฌ๋ํธ์์ props๊ฐ ์๋ ๋ ๋ค๋ฅธ ๋ฐฉ์์ผ๋ก ์ปดํฌ๋ํธ๊ฐ์ ๊ฐ์ ์ ๋ฌํ๋ ๋ฐฉ๋ฒ์ด๋คโ ๋ผ๊ณ  ์๊ฐํ๋๊ฒ ์ข๋ค.
- ์ฌ๊ธฐ์ Props๋ก๋ง ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌํ์ ๋ ๋ฐ์ํ๋ ๋ฌธ์ 
  ๊น์ํ ๊ณณ์ ์์นํ ์ปดํฌ๋ํธ์ ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌํด์ผํ๋ ๊ฒฝ์ฐ ์ฌ๋ฌ ์ปดํฌ๋ํธ๋ฅผ ๊ฑฐ์ณ์ผ ํ๋๋ฐ ์ด๋ฅผ Props Driling ์ด๋ผ๊ณ  ํ๋ค. ๋๋ฌด ๋ถํธํ ์ผ์ด๊ธฐ์ ๋ณต์กํ ์ฝ๋ ๋๋ฌธ์ ๊ฐ๋์ฑ์ด ๋งค์ฐ ๋จ์ด์ง๋ค.
- Context ์ฌ์ฉ๋ฒ

  1.

  ```jsx
  import { createContext } from "react";
  const MyContext = createContext();
  ```

  1. Context ๊ฐ์ฒด ์์๋ Provider๋ผ๋ ์ปดํฌ๋ํธ๊ฐ ๋ค์ด์๋ค. ๊ทธ๋ฆฌ๊ณ , ๊ทธ ์ปดํฌ๋ํธ๊ฐ์ ๊ณต์ ํ๊ณ ์ ํ๋ ๊ฐ์ย value ๋ผ๋ Props๋ก ์ค์ ํ๋ฉด ์์ ์ปดํฌ๋ํธ๋ค์์ ํด๋น ๊ฐ์ ๋ฐ๋ก ์ ๊ทผ์ ํ  ์ ์๋ค.

  ```jsx
  function App() {
    return (
      <MyContext.Provider value="Hello World">
        <GrandParent />
      </MyContext.Provider>
    );
  }
  ```

  1. ์ด ํ ์ํ๋ ์ปดํฌ๋ํธ ์์ useContext ๋ผ๋ Hook์ ์ฌ์ฉํ์ฌ Context์ ๋ฃ์ ๊ฐ์ ๋ฐ๋ก ์ ๊ทผ์ด ๊ฐ๋ฅํ๋ค.

  ```jsx
  import { createContext, useContext } from "react";

  function Message() {
    const value = useContext(MyContext);
    return <div>Received: {value}</div>;
  }
  ```

  1. ์ ์ฒด ์ฝ๋

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

  ๋ ๋ค๋ฅธ ์์

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
