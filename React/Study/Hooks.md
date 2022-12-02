# 훅(Hook)

리액트 16.8 버전에 새로 도입된 기능으로,

기존 클래스형 컴포넌트에서 사용하던 기능을 함수형 컴포넌트로 사용할 수 있게 해 준다.

Hook이 등장한 이후로는, 클래스형 컴포넌트를 사용할 이유가 정말 단 하나도(...) 없다고 하며

새로 만드는 리액트 프로젝트라면, 클래스형 컴포넌트를 지양하고 Hook으로 만드는 것이 정석(?)이다.

책을 보고 공부하며, 소스코드에 있는 Hook들이 바로바로 나오지 않아 책을 보며 다시 한번 정리해 봅니다.
https://junheeyeap.tistory.com/14

## useState

state 관리, 가변적인 상태를 지닐 수 있게 함
import React, { useState } from "react";

```
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

useState Hook의 파라미터에는 상태의 초기값 initial statement(위 코드에서는 0)을 적어준다.

함수가 호출되면 배열을 반환하는데, 배열의 첫 번째 원소는 상태 값(count), 두 번째 원소는 상태를 설정하는 함수(setCount)이다.

함수에 파라미터를 넣어 호출하면, 전달받은 파라미터로 값이 바뀌고 컴포넌트가 리 렌더링 된다.

## useEffect

렌더링 될 때마다 특정 작업을 수행하도록 설정

```
useEffect(function);
useEffect(function, []);
useEffect(function, [checkedData]);
```

기본적으로 렌더링 되고 난 직후부터 실행되며, 두 번째 파라미터(배열)에 무엇을 넣을지에 따라 실행 조건이 달라진다.

함수에 파라미터 하나만 사용하면, 렌더링 할 때마다 실행되지만,

두 번째 파라미터로 빈 배열을 사용하면, 첫 번째 파라미터는 컴포넌트가 처음 마운트 될 때만 실행한다.

두 번째 파라미터로 배열 안에 검사하고 싶은 값을 넣어주면, 해당 값이 바뀔 때만 첫 번째 파라미터를 실행한다.

## useReducer

다양한 컴포넌트 상황에 따라 다양한 상태를, 다른 값으로 업데이트해 주고 싶을때 사용

```
(===useState 업그레이드 버전)
function reducer(state , action) {
    //action.type에 따라 작업 수행
    return updatedState;
}

const [state, dispatch] = useReducer(reducer, initialState);
```

마지막 줄을 보면, useState와 그 구조가 비슷한 걸 볼 수 있는데,

배열의 첫 번째 원소(state)가 컴포넌트에서 사용할 수 있는 상태를 가리키고, 두 번째 원소(dispatch)는 액션을 발생시키는 함수이다.

그리고 useReducer에 넣는 첫번째 파라미터(reducer)는 reducer 함수이고, 두번째 파라미터(initialState)는 초기 상태이다.

reducer는 기본적으로 현재 상태와 액션(action, 업데이트를 위해 필요한 정보를 담은 것) 객체를 파라미터로 받아오고, 새로운 파라미터를 리턴해주는 함수이다(새 상태를 만들 때 '불변성'을 지켜주어야 함.)

## useMemo

연산 값 재사용 시, 컴포넌트 내부의 연산 최적화 가능

```
function App = () => {
    const [name, setName] = useState('');
    const nameLength = useMemo(() => nickname.length, [nickname])
    const updateName = e => {
    	setName(e.target.value);
    }
    return (
    <div className="App">
        <input onChange = {updateNickname} />
        <label> {nicknameLength} </label>
    </div>
  );
}
```

렌더링 과정에서 특정 값이 바뀌었을 때만 연산을 실행한다. useEffect보다 효율적이라고 한다

## useCallback

함수 재사용시, 렌더링 성능 최적화 가능

```
function Profile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    //onSave가 Profile 렌더링 될 때마다 호출된다고 함. 여기에 useCallback 사용 가능
    return (
    <div>
    	<UserEdit
        	onSave = {() => saveToServer(name, age)}
            setName = {setName}
            setAge = {setAge}
        />
        </div>
    );
}

function Profile() {
    const onSave = useCallback(() => saveToServer(name, age), [name, age]);
}
```

useMemo랑 비슷한데 이 hook은 함수용이다

## React.memo

컴포넌트 재 렌더링 방지

```
const App = () => {
	//
}

export default React.memo(App);
```

컴포넌트를 감싸주기만 하면 된다! (참 쉽죠?)

![picture](https://cdn.discordapp.com/attachments/1046343861129191446/1047890052514062356/Screenshot_2022-12-02_at_12.00.46_AM.png)

벨로퍼트님의 코멘트..
실제 렌더링을 방지할 수 있는 상황이 있는 경우에만 사용해야 한다!
