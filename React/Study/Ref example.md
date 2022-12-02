# Ref

### 1. ref란?

일반 HTML에서 DOM요소에 이름을 달 때는 id를 사용한다.**리액트 프로젝트 내부에서 DOM에 이름을 다는 방법**이 ref 이다.

### 2. ref를 사용하는 이유?

id는 유일해야 하지만 컴포넌트 재사용을 한다면 **중복될 가능성**이 있다.ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동한다.

> ref는 언제 쓰는가?
>
> **DOM element 에 접근하기** 가장 많이 쓰이는 예시.ref를 활용하면 전체 컴포넌트를 렌더링 시키지 않고, dom에만 접근하여 내가 원하는 효과를 주는게 가능해 집니다.**즉, dom element에 접근하여 원하는 작업을 하였지만 컴포넌트 전체에 영향을 끼치지 않고, 원하는 작업을 할 수 있게 됩니다.**그래서 주로 **focus**나 **텍스트를 선택할 때** 주로 많이 사용하게 됩니다.

- ref는 컴포넌트 라이프 사이클 내에서 유지가 되며, 변경이 가능한 변수이며, 값이 변할 때 렌더링이 되지 않는다.
  ref는 주로 dom-element에 접근하여 컴포넌트 전체 렌더링과 관계 없는 작업을 할 때 유용하게 사용한다.
  부모 컴포넌트에서 자식 컴포넌트로 ref를 내려줄 때는 forwardRef를 활용하여야 한다.

- Ref에 대한 오해와 진실
  React에서 Ref를 배우다보면, Ref는 DOM Element에 접근할 때만 사용하는 생각하는 분들이 많은 것 같습니다. 그래서 오늘은 Ref에 대해서 오해를 풀어 보는 시간을 가져보도록 하겠습니다.

- Ref는 간단히 말해 컴포넌트 라이프 사이클(마운트와 언마운트) 내에서 유지되는 변경이 가능한 변수이며, 변수가 변할 때 렌더링이 추가로 되지 않습니다. 비슷한 것을 어디서 많이 보지 않으셨나요?

- 그렇습니다. state는 컴포넌트 라이프 사이클 내에서 유지 되는 변경이 가능한 변수이지만, state가 변할 때는 렌더링이 발생합니다.

다시 state와 ref를 정리하면

##### state

컴포넌트 라이프 사이클 내에서 유지가 되며, 변경이 가능한 변수
값이 변할 때 렌더링이 다시 된다.

##### ref

컴포넌트 라이플 사이클 내에서 유지가 되며, 변경이 가능한 변수
값이 변할 때 렌더링이 되지 않는다.

```
//ref를 이용해 렌더링 되지 않은 케이스
import { useRef } from "react";

function App() {
	const count = useRef(0);
	const handleClick = () => {
		count.current = count.current + 1;
		console.log(count.current);
	};

	return (
		<div>
			<div>counter: {count.current}</div>
			<button onClick={handleClick}>+</button>
		</div>
	);
}

export default App;
```

```
//state 를 이용해 렌더링 된 케이스
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<div>counter: {count}</div>
			<button onClick={handleClick}>+</button>
		</div>
	);
}

export default App;

```

###forwardRef
Label이 포함된 Input 컴포넌트를 만들고, App 컴포넌트에서 ref를 내려주는 코드를 만들어 보도록 하겠습니다.

```
//Dom element에 접근하기
import { useRef } from "react";

function App() {
  const iE = useRef();
  const handleClick = () => {
    iE.current.value = "Hello";
  };

  return (
    <div>
      <div>value: {iE.value}</div>
      <div>
        {/* iE에 input element를 저장함 */}
        <input ref={iE}></input>
      </div>
      <button onClick={handleClick}>update value to Hello</button>
    </div>
  );
}

export default App;
```

```

import { useRef } from "react";

const LabeledInput = (props) => (
	<div>
		<div>{props.label}</div>
		<input ref={props.ref}></input>
	</div>
);

function App() {
	const iE = useRef();
	const handleClick = () => iE.current.focus();
	return (
		<div>
			<LabeledInput label="ID" ref={iE}></LabeledInput>
			<button onClick={handleClick}>focus</button>
		</div>
	);
}

export default App;
```

실행해 보도록 하겠습니다.

함수형 컴포넌트에서 ref를 넘겨줄 때는 forwardRef 라는 문법을 사용하라고 에러 메시지를 띄어 주고 있습니다. 이유는 모든 React 컴포넌트는 기본적으로 ref props를 가지고 있는데, 그것과 겹치게 되므로 다른 방식으로 사용하라고 에러를 띄어 주고 있습니다.

React가 원하는 방식대로 forwardRef를 사용하여 코드를 변경해 보도록 하겠습니다.

```

import { useRef, forwardRef } from "react";

const LabeledInput = forwardRef((props, ref) => (
	<div>
		<div>{props.label}</div>
		<input ref={ref}></input>
	</div>
));

function App() {
	const iE = useRef();
	const handleClick = () => iE.current.focus();
	return (
		<div>
			<LabeledInput label="ID" ref={iE}></LabeledInput>
			<button onClick={handleClick}>focus</button>
		</div>
	);
}

export default App;
```

정상적으로 작동하는 것을 알 수 있습니다 👏👏👏

ref를 업데이트 시, 주의사항
ref의 값을 업데이트 하는 것은 side Effect이므로, 컴포넌트의 렌더링을 방해해선 안됩니다. 그러므로 반드시 컴포넌트가 마운트 되고 난 직후 (useEffect) 내에서 쓰거나 이벤트가 발생할 때 실행 (event handler) 안에서만 업데이트가 발생하도록 코드를 작성하여야 합니다.

https://chanhuiseok.github.io/posts/react-7/
https://blog.toycrane.xyz/react-ref%EC%97%90-%EB%8C%80%ED%95%B4-%EC%9E%90%EC%84%B8%ED%9E%88-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-f7d18d140716
