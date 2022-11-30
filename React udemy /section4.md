# Section4 Handling React State and Events

#### Module introduction

- user interactive and state
  - making app interactive and reactive

1.  Handling Event
2.  Updating the UI & working with State
3.  A closer look at state

#### Listening for events and executing event handlers

- event listener
  - react overwatches all events in a code, and once an event occurs, then it operates a preregistered handlers

```
// HTML
<button onclick="handler()"></button>
// React
<button onClick={handler}></button>
```

after you make button you would need to add a function and **point** to the direction you want to work this function ex. {handler} however, you don't {handler()} execute anything inside because result from the execution part will operate when the whole function of codes run, and it won't work when you click on it.(execution phase will come out too soon.)
[this is an unofficial doc]https://medium.com/hcleedev/web-event%EC%99%80-addeventlistener-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-%EA%B0%9C%EB%85%90-react%EC%97%90%EC%84%9C-%EC%A3%BC%EC%9D%98%ED%95%A0-%EC%A0%90-a581adc49aa4

#### How component functions are executed

- keep in mind your component is a function, the only special thing about this function is that it returns JSX codes
- react encounters a function, it executes all the code in it, until there's no more left, then it evaluates the overall results, and translates that into DOM instruction and it renders on to the screen.
- react never repeats it's process, react goes through all of that when the application is initially rendered, but sometimes you want to update or change. we need a way to tell react that it needs to reevaluated. "state"

#### Working with "State"

```
let title = props.title
// is not triggering such a re-evaluation

then what triggers it?
import React, { useState } from 'react';
//this function allows us to define value as state where changes to this values should reflect in the component function being called again.

const [title, setTitle] = useState(props.title);
// this method only word in the component function(not outside or anywhere else)

title: refers to the variable that you want to use
setTitle: refers to the new variable that you want to set
and useState(prop.title) use it as an initial value; managed value;
```

#### A closer look at the "useState" hook

-per component instance bases

- which means it separates state even if we created components more than once.
  - this example might only applies to this proj\* however,
  - 결국 usestate를 쎃음에도 불구하고, expenseItems 가 4개가 있으며, 그 컴포넌트 하나하나에 state 의 권한을 부여함으로, 자유롭게 동작할 수 있게 됐다.

완료된 Http 요청을 볼 수 있지만(여기서 반환된 Http 응답을 기반으로 상태를 업데이트하려고 함) 타이머가 만료되어 상태를 업데이트할 수도 있습니다 ( setTimeout()으로 설정).

#### Add form input

#### listening for user input

#### Handling multiple states

- you can have muliple states where there are multiple information to be updated or changed.yet, is there a way betterway?
- whats the difference between using one state or the mulitple states.

#### Use instead of State (and a better way)

##### works either way but good to note that it works differently as well

```
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

```

#### Updating a state that depends on the previous state

```
setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
```
