## 1. 리덕스가 필요한 이유

- **(1) useState의 불편함**
  어떤 컴포넌트에서 생성한 state를 다른 컴포넌트로 보고자 할 때 우리는 어떻게 했었나요? **Props를 통해서 부모 컴포넌트에서 자식 컴포넌트**로 그 값을 보내주었습니다. 근데 **Props로 State를 공유하는 방법에는 불편한 점이 있습니다.**
  ![picture](https://cdn.discordapp.com/attachments/1046343861129191446/1048076489037447248/Screenshot_2022-12-02_at_12.21.11_PM.png)
  1. 컴포넌트에서 컴포넌트로 State를 보내기위해서는 반드시 **부-모 관계**가 되어야 한다.
  2. 조부모 컴포넌트에서 손자 컴포넌트로 값을 보내고자 할때도 **반드시 부모 컴포넌트를 거쳐야만 한다. 즉, 정작** 부모컴포넌트에서는 그 값이 필요가 없어도 단순히 손자 컴포넌트에게 전달하기 위해 불필요하게 거쳐야만 하는 것을 의미**한다.** (조부모 → 부모 → 손자)
  3. 자식 컴포넌트에서 부모 컴포넌트로 값을 보낼 수 없다.
     어쩌면 이미 여러분은 위 불편함을 느끼고 있었을지도 모릅니다. 이러한 불편함 겪지 않기 위해 우리는 새로운 도구를 배워보려고 합니다.
     그 새로운 도구가 바로 리덕스 입니다. 우리가 리덕스를 사용하면**State를 공유하고자 할때 부-모 관계가 아니여도 되고**, 중간에 의미없이 컴포넌트**를 거치지 않아도 됩니다.** 그리고 자식 컴포넌트에서 만든 State를 부모 컴포넌트에서도 사용할 수 있게 됩니다.
- **(2) Global state와 Local state**
  우리는 앞으로 **State를 Global state와 Local state라는 것을 따로 구분지어서 표현**할 것 입니다.
  - **Local state (지역상태) 란?**
    - **컴포넌트에서 useState를 이용해서 생성한 state 입니다.** 좁은 범위 안에서 생성된 State 라고 생각하시면 됩니다.
  - **Global state (전역상태)란?**
    - Global state는 컴포넌트에서 생성되지 않습니다. 중앙화 된 특별한 곳에서 State들이 생성됩니다. 좀 더 쉽게 얘기해서 **“중앙 state 관리소” 라고 생각하면 됩니다.**
      ![picture](https://cdn.discordapp.com/attachments/1046343861129191446/1048076489364619345/Screenshot_2022-12-02_at_12.21.28_PM.png)
      **중앙 State관리소에서 State를 생성하고, 만약 어떤 컴포넌트에서 State가 필요하다면 컴포넌트가 어디에 위치하고 있든 상관없이 State를 불러와서 사용 할 수 있게 됩니다.** 이렇게 특정 컴포넌트에 종속되어 있는 것이 아니라 “중앙 state 관리소”에서 생성된 State를 Global state라고 합니다. 그리고 **이러한 값들을 관리하는 것을 전역 상태 관리 라고 합니다.**

## 2. 리덕스란 무엇인가?

**(1) 리덕스 정의**

![picture](https://cdn.discordapp.com/attachments/1046343861129191446/1048076489725321236/Screenshot_2022-12-02_at_12.21.40_PM.png)

**리덕스란,**

**우리가 위에서 말한 “중앙 state 관리소”를 사용할 수 있게 도와주는 패키지(라이브러리) 입니다.** “중앙 state 관리소" 를 통해서 State를 관리한다는 아이디어는 굉장히 좋으나, 우리가 그것을 직접 구현하기는 아직 어려우니까요. 패키지(라이브러리)의 도움을 받아 그것을 구현해보고자 합니다.

프론트엔드 개발자들은 “리덕스”를 **전역 상태관리 라이브러리** 라고 많이 표현합니다. 전역 상태, 즉 Global State를 의미하고 그것을 관리하게 도와주는 라이브러리 (패키지) 이기 때문입니다.

## 3. 정리

- 리덕스는 **전역상태 관리 라이브러리**이다.
- 리덕스는 **useState를 통해 상태를 관리했을 때 발생하는 불편함을 일부 해소**시켜준다.
- 리덕스는 `중앙 State 관리소`를 가지고 있으며, 모든 State는 이곳에서 생성된다.
- **useState로 생성한 State는 Local State**이고, **리덕스에서 생성한 State는 Global State**이다.

## 4. 더 알아보면 좋은 키워드

- **Props Drilling** 란 무엇일까?