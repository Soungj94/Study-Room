안녕하세요! 오늘 알아볼 주제는 Flux 패턴입니다.

이 포스팅을 준비하게 된 이유는 바로 얼마 전 모 회사 인턴 면접에서의 일 때문입니다.

개인 프로젝트에서 사용한 리덕스에 관한 이야기를 하던 중 면접관님이 저에게 Flux 패턴에 대해 여쭤보셨지만 제대로 대답하지 못했습니다. 그러자 면접관님은 “리덕스를 공부했는데 Flux 패턴을 모르는 건 좀 아니지 않나…”라며 뼈아픈 조언을 주셨고, 반성에 반성을 거듭하는 의미에서 이번 포스팅을 준비했습니다…

그래서 오늘은 Flux 패턴에 대해 빠삭하게 한번 알아보겠습니다. (눈물 쓰윽)

Flux 패턴은 2014년 페이스북 F8 컨퍼런스에서 발표된 아키텍처로, Client-Side 웹 애플리케이션을 만들기 위해 사용하는 디자인 패턴입니다.

등장 배경
페이스북은 왜 Flux 패턴이 필요했던 걸까요? 그 답은 대규모 애플리케이션에서 데이터 흐름을 일관성 있게 관리함으로써 프로그램의 예측가능성(Predictability)을 높이기 위함이었습니다.

먼저 기존 애플리케이션들이 보편적으로 사용하던 MVC 패턴을 알아봅시다.
![picture](https://velog.velcdn.com/images/andy0011/post/06f16521-003c-471b-9d85-f2eedc084aab/image.png)
MVC는 Model, View, Controller의 약자입니다. Model에 데이터를 저장하고, Controller를 이용하여 Model의 데이터를 관리(CRUD)합니다. Model의 데이터가 변경되면 View로 전달되어 사용자에게 보여집니다. 또한 중요한 점은 사용자가 View를 통해 데이터를 입력하면 View 역시 Model을 업데이트할 수 있다는 점입니다. 즉 데이터가 양방향으로 흐를 수 있다는 것이죠.

문제는 바로 여기서 시작됩니다. 애플리케이션의 규모가 커지고 커져서 다음과 같은 구조를 가지게 되었다고 생각해봅시다.
![picture](https://velog.velcdn.com/images/andy0011/post/4a1f159f-6972-4028-8a18-9a383cf5e44d/image.png)

View가 다양한 상호작용을 위해 여러 개의 Model을 동시에 업데이트하고 Model 역시 여러 개의 View에 데이터를 전달하는 상황이 발생합니다. 한 Model이 업데이트되면 그에 따라 View가 업데이트되고, 업데이트된 View가 또 다른 Model을 업데이트하는 식의 복잡한 데이터 흐름을 가지게 됩니다. 이렇게 많은 의존성을 가지면 Model의 개수가 많아질수록 각 Model에서 발생한 이벤트가 애플리케이션 전체로 퍼져나갈 때 이를 예측하기 힘들어 집니다.

페이스북은 “MVC는 정말 눈 깜짝할 사이에 복잡해진다”고 말하며 이 문제의 해결 방안으로 단방향 데이터 흐름을 가지는 Flux 패턴을 고안해냈습니다.

Flux 패턴이란
Flux는 사용자 입력을 기반으로 Action을 만들고 Action을 Dispatcher에 전달하여 Store(Model)의 데이터를 변경한 뒤 View에 반영하는 단방향의 흐름으로 애플리케이션을 만드는 아키텍처입니다. 구조는 다음의 그림과 같습니다.
![picture](https://velog.velcdn.com/images/andy0011/post/ac84337d-b747-4dcb-8430-7175a7c4f1d8/image.png)
Flux 패턴의 각 요소들을 하나씩 순서대로 살펴봅시다.

Action
Action이란 데이터를 변경하는 행위로서 Dispatcher에게 전달되는 객체를 말합니다. Action creator 메서드는 새로 발생한 Action의 타입(type)과 새로운 데이터(payload)를 묶어 Dispatcher에게 전달합니다.

```
{
type: 'SET_PROFILE',
data: {
'name': 'Harry',
'age': 458
}
}
```

Dispatcher
Dispatcher는 모든 데이터의 흐름을 관리하는 중앙 허브입니다. Dispatcher에는 Store들이 등록해놓은 Action 타입마다의 콜백 함수들이 존재합니다. Action을 감지하면 Store들이 각 타입에 맞는 Store의 콜백 함수를 실행합니다. Store의 데이터를 조작하는 것은 오직 Dispatcher를 통해서만 가능합니다. 또한 Store들 사이에 의존성이 있는 상황에서도 순서에 맞게 콜백 함수를 순차적으로 처리할 수 있도록 관리합니다.

Store (Model)
Store는 상태 저장소로서 상태와 상태를 변경할 수 있는 메서드를 가지고 있습니다. 어떤 타입의 Action이 발생했는지에 따라 그에 맞는 데이터 변경을 수행하는 콜백 함수를 Dispatcher에 등록합니다. Dispatcher에서 콜백 함수를 실행하여 상태가 변경되면 View에게 데이터가 변경되었음을 알립니다.

View
View는 리액트 컴포넌트로 생각하면 됩니다. Store에서 View에게 상태가 변경되었음을 알려주면 최상위 View(Controller View)는 Store에서 데이터를 가져와 자식 View에게 내려보냅니다. 새로운 데이터를 받은 View는 화면을 리렌더링합니다. 또한 사용자가 View에 어떤한 조작을 하면 그에 해당하는 Action을 생성합니다.
![picture](https://velog.velcdn.com/images/andy0011/post/6044ce69-7c76-4266-b95e-c8eea01e4f6e/image.png)
각 요소들은 단방향 흐름에 따라 순서대로 역할을 수행하고, View로부터 새로운 데이터 변경이 생기면 처음부터 다시 이 순서대로 실행합니다. 이렇게 함으로써 예외 없이 데이터를 처리할 수 있게 되었습니다.

아래에 찰떡같은 예시와 그림으로 설명해주신 분이 계셔니 함께 보시길 추천드립니다.

오늘은 이렇게 Flux 패턴에 대해 알아보았습니다. 이 글을 보시는 많은 예비 프론트엔드 개발자분들은 부디 면접 가서 똑부러지게 대답하실 수 있기를 바랍니다.

감사합니다.

참고 자료
아나이 히로유키, 모던 리액트/리던스 프로그래밍
https://www.huskyhoochu.com/flux-architecture/
https://haruair.github.io/flux/docs/overview.html
[찰떡 예시]
https://code-cartoons.com/articles/a-cartoon-guide-to-flux/
