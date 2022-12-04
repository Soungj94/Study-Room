## 1. react-router-dom이란?

- **(1) 페이지를 구현할 수 있게 해주는 패키지**
  `styled-components`, `redux` 에 이어서 또 하나의 패키지를 소개합니다. 바로 `react-router-dom` 입니다. 지금까지 우리가 많은 실습과 과제를 했는데, 어딘가 좀 허전하지 않으셨나요?
  네이버나 또는 다른 웹사이트를 우리가 사용할 때 **보통 이 페이지에도 갔다가 저 페이지에도 갔다가 여러 페이지로 오가며 이동할 수 있는데,** 우리는 항상 한 페이지에 머물러 있었어요. 하지만 오늘 `react-router-dom`을 배우면 여러 페이지를 가진 웹을 만들 수 있게 됩니다!

## 2 react-router-dom 설치하기

- **(1) 패키지 설치**
  vscode 터미널에서 아래 코드를 입력해서 패키지를 설치할 수 있습니다.
  ```bash
  yarn add react-router-dom
  ```

## 3. react-router-dom 사용하기

- **(1) 사용방법 순서**
  아래 순서대로 코드를 작성하여, `react-router-dom`을 사용해보겠습니다.
  1. 페이지 컴포넌트 생성
  2. `Router.js` 생성 및 router 설정 코드 작성
  3. `App.js`에 import 및 적용
  4. 페이지 이동 테스트
- **(2) 페이지 컴포넌트 생성**
  우선 여러개의 페이지를 이동하는 것을 배우는 것이니, 가상의 여러 페이지를 만들어보겠습니다. `Home`, `About`, `Contact`, `Works` 총 4개의 컴포넌트를 만들어보겠습니다.
  `src` 폴더에 pages 라는 폴더를 만들고 그 안에 만들어보겠습니다. 컴포넌트 안에 내용은 간단한 텍스만 넣어줘 볼게요. 특별한 내용이 없이 단순히 컴포넌트의 이름만 JSX에 넣어주었습니다.
  ![Untitled](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb1b68ce7-7233-4c78-81c6-3fae71380927%2FUntitled.png?id=77b524ad-b60b-492e-a1fb-a81978e17bba&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=2000&userId=&cache=v2)
  이렇게 여러개의 페이지를 모두 준비했네요.
- **(3) [중요] Router.js 생성 및 route 설정 코드 작성**
  이번 챕터에서 가장 중요한 부분이라고 할 수 있습니다. **브라우저에 우리가 URL을 입력하고 이동했을 때 우리가 원하는 페이지 컴포넌트로 이동하게끔 만드는 부분**입니다. URL 1개당 페이지 컴포넌트를 매칭해주는 것이죠. 이 한개의 URL을 Route 라고 합니다.
  그리고 Route들을 설정하는 코드는 Router.js 라는 파일을 별도로 분리해서 많이 작성하곤 합니다. 우리도 이 방식으로 한번 작성해보겠습니다.
  src안에 shared 라는 폴더를 생성해주고, 그 안에 `Router.js` 파일을 생성해줍니다. 그리고 아래 코드를 작성해봅시다.

  ```jsx
  import React from "react";
  // 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
  import { BrowserRouter, Route, Routes } from "react-router-dom";

  // 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
  //BrowserRouter를 Router로 감싸는 이유는,
  //SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
  const Router = () => {
    return (
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    );
  };

  export default Router;
  ```

  **이렇게 작성하면, 우리가 Route 를 설정할 뼈대가 완성이 된 것 입니다.**
  이제 우리가 만든 4개의 페이지 컴포넌트 마다 Route를 설정해볼까요?

  ```jsx
  import React from "react";
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Home from "../pages/Home";
  import About from "../pages/About";
  import Contact from "../pages/Contact";
  import Works from "../pages/Works";

  const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/* 
  						Routes안에 이렇게 작성합니다. 
  						Route에는 react-router-dom에서 지원하는 props들이 있습니다.
  
  						path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
  						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
  				 */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default Router;
  ```

  생각보다 간단하죠?
  이렇게 한가지 과정만 더 하면 모두 끝이 납니다.

- **(4) App.js에 `Router.js` import 해주기**
  이렇게 생성한 Router 컴포넌트를 아래 코드와 같이 App.js에 넣어줍니다.

  ```jsx
  import React from "react";
  import Router from "./shared/Router";

  function App() {
    return <Router />;
  }

  export default App;
  ```

  `Router.js`를 다른 곳도 아닌 **App 컴포넌트에 넣어주는 이유는 우리가 만든 프로젝트에서 가장 최상위에 존재하는 컴포넌트가 App.js 이기 때문**입니다.
  즉 우리가 어떤 컴포넌트를 화면에 띄우던, 항상 App.js를 거쳐야만 합니다. 그래서 path 별로 분기가 되는 `Router.js` 를 App.js에 위치시키고 우리의 서비스를 이용하는 모든 사용자가 항상 `App.js → Router.js` 거치도록 코드를 구현해주는 것입니다.

- **(4) 페이지 이동 테스트**
  이렇게 여러개의 페이지를 사용하기 위한 react-router-dom 설정을 모두 마쳤습니다. 이제 우리가 설정한대로 페이지를 잘 이동하는지 한번 확인해볼까요?
  프로젝트를 실행시키고, 아래 영상 처럼 브라우저에 path를 입력해보세요.
  [화면 기록 2022-07-24 오후 5.01.51.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e087191a-9fc0-4922-963f-22ff9588577f/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2022-07-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.01.51.mov)

## 3. react-router-dom Hooks

- **(1) react-router-dom Hooks이란?**
  리액트에서도 useState와 같은 Hook을 제공하죠?
  `react-router-dom`에서도 우리가 유용하게 사용할 수 있는 `hook`을 제공합니다. 그 종류가 많지만, 가장 쓰임새가 많고 기본적인 것들을 소개할게요. 나머지는 공식문서를 참고해주시기 바랍니다.
    <aside>
    💡 [React-router-dom 공식문서 바로가기](https://reactrouter.com/docs/en/v6)
    
    </aside>

- **(2) useNavigate**
  다른 페이지로 보내고자 할 때 사용할 수 있습니다. 위에서 테스트 했을 때 우리가 브라우저에 직접 path를 입력해서 페이지를 이동했었죠?
  근데 사실 사용자들이 브라우저에 path를 직접 입력해서 페이지를 이동하게 만드는 서비스는 거의 없을 것 입니다. 보통 **어떤 버튼을 누르면 페이지로 이동하거나 또는 어떤 컴포넌트를 눌렀을 때 페이지를 이동**하게 만들죠.
  **그럴 때 사용하는 훅 입니다.**
  버튼의 클릭 **이벤트 핸들러에 아래와 같이 코드를 작성하면 버튼을 클릭했을 때 우리가 보내고자 하는 path로 페이지를 이동시킬 수 있습니다.** 꼭 버튼이 아니더라도, 컴포넌트의 클릭 이벤트 핸들러를 통해서 활용할 수 있습니다.
  사용방법은 아래 코드와 같습니다. `navigate` 를 생성하고, `navigate(’보내고자 하는 url’)` 을 통해 페이지를 이동 시킬 수 있죠!

  ```jsx
  // src/pages/home.js
  import { useNavigate } from "react-router-dom";

  const Home = () => {
    const navigate = useNavigate();

    return (
      <button
        onClick={() => {
          navigate("/works");
        }}
      >
        works로 이동
      </button>
    );
  };

  export default Home;
  ```

  - [useNavigate 공식 문서 바로가기](https://reactrouter.com/docs/en/v6/hooks/use-navigate)

- **(3) useLocation**
  `react-router-dom`을 사용하면, 우리는 우리가 현재 위치하고 있는 페이지의 여러가지 정보를 추가적으로 얻을 수 있습니다. 이 정보들을 이용해서 페이지 안에서 조건부 렌더링에 사용하는 등, 여러가지 용도로 활용할 수 있습니다.
  사용방법은 아래 코드를 참고해주세요.

  ```jsx
  // src/pages/works.js
  import { useLocation } from "react-router-dom";

  const Works = () => {
    const location = useLocation();
    console.log("location :>> ", location);
    return (
      <div>
        <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
      </div>
    );
  };

  export default Works;
  ```

  - [useLocation 공식 문서 바로가기](https://reactrouter.com/docs/en/v6/hooks/use-location)
    ![Untitled](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc40431ef-f321-4bd1-83b2-ef6c614a5075%2FUntitled.png?id=9d4ad90a-9d8e-4dcc-8695-3a866a680b43&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=2000&userId=&cache=v2)

- **(4) Link**
  `**Link` 는 훅이 아니지만, 꼭 알아야 할 API라서 소개합니다.\*\*
  `Link` 는 html 태그중에 `a` 태그의 기능을 대체하는 API 입니다. **만약 JSX에서 `a` 태그를 사용해야 한다면, 반드시 `Link` 를 사용해서 구현해야 합니다.** 왜냐하면 `a` 태그를 사용하면 페이지를 이동하면서 브라우저가 새로고침(refresh)되기 때문입니다. 브라우저가 새로고침 되면 **모든 컴포넌트가 다시 렌더링되야 하고, 또한 우리가 `리덕스`나 `useState`를 통해 메모리상에 구축해놓은 모든 상태값이 초기화** 됩니다. 이것은 곧 성능에 악역향을 줄 수 있고, 불필요한 움직임입니다.
  사용방법은 아래 코드를 참고해주세요. 페이지를 이동시키고자 할때 `useNavigate` 또는 `Link`를 사용할 수 있게 됐습니다. 앞으로 여러분이 구현을 하면서 더 적합한 방식으로 API를 활용하시면 됩니다.

  ```jsx
  import { Link, useLocation } from "react-router-dom";

  const Works = () => {
    const location = useLocation();
    console.log("location :>> ", location);
    return (
      <div>
        <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
        <Link to="/contact">contact 페이지로 이동하기</Link>
      </div>
    );
  };

  export default Works;
  ```

<aside>
💡 이 밖에도 URL의 `query` 를 알 수 있는 `useParams`  등 많은 hook들이 있으니 공식문서 또는 구글링을 통해서 찾아가며 학습하시길 바랍니다.

</aside>

## 4. children 용도

공식 문서에는 props.children에 대해 아래와 같이 설명하고 있습니다.

<aside>
💡 어떤 컴포넌트들은 어떤 자식 엘리먼트가 들어올지 미리 예상할 수 없는 경우가 있습니다. **범용적인 ‘박스’ 역할**을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있습니다

</aside>

![https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220321104813/parentcom.png](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220321104813/parentcom.png)

여기서 말하는 범용적인 “박스” 역할을 하는 컴포넌트란 크게 봤을 때 Layout 역할을 하는 컴포넌트라고 생각해볼 수 있습니다. children props를 찾아보시면 composition이라는 말을 많이 보시게 될 텐데요, composition은 합성이라는 의미가 있다고 합니다.

이번 섹션에서는 children props를 가지고 페이지 레이아웃을 만들며 개별적으로 존재하는 Header, Footer, Page를 합성하여 개발자가 의도하는 UI를 만들어주는 Layout 컴포넌트를 만들어 보겠습니다.

- src/shared/Layout.js

  ```jsx
  // src/shared/Layout.js

  import React from "react";

  const HeaderStyles = {
    width: "100%",
    background: "black",
    height: "50px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    color: "white",
    fontWeight: "600",
  };
  const FooterStyles = {
    width: "100%",
    height: "50px",
    display: "flex",
    background: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  };

  const layoutStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
  };

  function Header() {
    return (
      <div style={{ ...HeaderStyles }}>
        <span>Sparta Coding Club - Let's learn React</span>
      </div>
    );
  }

  function Footer() {
    return (
      <div style={{ ...FooterStyles }}>
        <span>copyright @SCC</span>
      </div>
    );
  }

  function Layout({ children }) {
    return (
      <div>
        <Header />
        <div style={{ ...layoutStyles }}>{children}</div>
        <Footer />
      </div>
    );
  }

  export default Layout;
  ```

- src/shared/Router.js

  ```jsx
  import React from "react";
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Home from "../pages/Home";
  import About from "../pages/About";
  import Contact from "../pages/Contact";
  import Works from "../pages/Works";
  import Layout from "./Layout";

  const Router = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="works" element={<Works />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  };

  export default Router;
  ```

## 5. 정리

- react-router-dom을 이용하면, **SPA 기반 인 리액트 프로젝트 안에서 여러개의 페이지를 구현**할 수 있다.
- `Router.js`에 Route 설정에 관련된 코드를 작성하고, **최상위 컴포넌트인 App.js에서 import** 해서 사용한다.
- **react-router-dom는 여러가지 훅을 제공**한다

## 6. 더 알아보면 좋은 키워드

- HTTP란 무엇일까?
- URI (URL, URN)
- SPA (Sigle Page Application)
