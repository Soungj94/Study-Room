###조건문 ? 조건문 참일때 실행할 코드 : 거짓일 때 실행할 코드

```
todo.id===id?{...todo, isDone: !todo.isDone}: todo;
        //A               //B                          //C


{...todo, isDone: !todo.isDone }


삼항연산자:

if (A){
    B
}else{
    C
}

A? B : C

```

ex.1

```
function App() {
  const name = '리액트';
  return (
    <>
      <div>{name === '리액트' ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다</h1>}</div>
    </>
  );
}
//JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없다.
하지만, 조건에 따라 다른 내용을 렌더링해야 할때는
JSX 밖에서 if 문을 사용하여 사전에 값을 설정한다.
{ } 안에서 조건부 연산자_삼항연산자 를 사용한다.
```

ex2.

```
function Component() {
  return (
    <div>
      {
        1 === 1
        ? <p>참이면 보여줄 HTML</p>
        : null
      }
    </div>
  )
}
//그냥 JSX 내에서 if/else 대신 쓸 수 있다는게 장점이고 이전 강의들에서 자주 해본 것이니 설명은 스킵하도록 하겠습니다.
삼항연산자는 그냥 if와는 다르게 JSX 안에서도 실행가능하며 조건을 간단히 주고 싶을 때 사용합니다.
```

ex3.

```
function Device( {name, ram, homeButton, touchID, faceID, cpu} ) {
    return (
        <div>
            <h3>Name : {name}</h3>
            <h3>RAM : {ram}</h3>
            <h3>Home Button : { homeButton == true ? "있음" : "없음" }</h3>
            <h3>TouchID : {touchID}</h3>
            <h3>FaceID : {faceID}</h3>
            <h3>CPU : {cpu}</h3>
        </div>
    );
```

ex4.
JS example

```
let a=10
let b=27

const value = (a>b)? true: false;

console.log(value)// true
```

ex.5
optional chaining
다중삼항연산자
if문으로 보면

```
const info = prompt('what is your number?')

if(info <= 5){
    alert('5이하입니다')
}elseif (info <= 10){
    alert('10이하입니다 ')
}elseif (info <= 15){
    alert('15이하입니다')
}else{
    alert{'15이상입니다'}
};
//
const info= prompt('what is your number?')
const message = (info <= 5)? '5이하입니다'
    :(info <= 10)? '10이하입니다'
    :(info <= 15)? '15이하입니다'
    : '15이상입니다';
alert(message);
```

ex.6

```
const $btn = document. querySelector(#btn);
const myChoice = prompt ('what is your favorite fruit?')

const clickButton =()=>{
    if(myChoice === 'apple'){
        alert('사과')
    }else if (myChoice === 'strawberry'){
        alert('딸기')
    }else{
        alert('키위')
    }
}
$btn.addEventListener('click', clickButton)
//
const $btn = document. querySelector(#btn);
const myChoice = prompt ('what is your favorite fruit?')

const clickButton =()=>{
    const result =event.target.textContext ==='apple'
    ? '사과' //true
    :event.target.textContext === '딸기' //false
        ?'strawberry' //true
        :'kiwi' //false

    alert(result)
}
$btn.addEventListener('click', clickButton)
```

ex7.

```
선택문
자바스크립트 삼항연산자의 선택문은 형태가 자유롭다. 심지어 블리언 값이 와도 된다.

다음 예시에서는 조건문이 x>y로 true/false 형태를 반환한다. 하지만 선택문1도 x<=y로 비교 연산자로 true/false로 답을 반환한다. 선택문2도 x==y 비교연산자로 ture/false로 답을 반환한다.

var x = 10, y = 50;
var z = x < y ? x <= y : x == y;
console.lod(z);
result -> true
```

ex8.

```
let student = true;

let price = isStudent? 8:12;
console.log(price)
//8
```

Nested Ternary
하지만, 만약 영화관에서 학생과 노인에게 할인을 한다면 어떻게 할까요?
우리는 다양한 조건을 실험하기 위해서 nest(네스트) 된 ternary operator( 삼항 연산자) 사용할 수 있습니다.
해당 시나리오를 확인하면 티켓은 : 일반인은 $12, 학생은 $8 그리고 노인은 $6 입니다.
노인인구를 추정하는 코드는 다음과 같습니다:

```
let isStudent : false
let isSenior: true

let price = isStudent ? 8: isSenior ? 6 : 12
console.log(price)
//6
우선, 우리는 티켓 구매자가 학생인지 알아봐야합니다. isStudent 가 false(거짓) 이므로, 첫 번째 : 이후의 코드만 실행합니다. : 이후에는 새로운 조건부가 있습니다.
두번째 조건부는 isSenior 를 확인해봅니다. — 이가 true(참) 이기 때문에 ? 이후 : 이전의 코드만 실행합니다.
price 는 6의 값이 할당된다.
```

ex9.
Multiple operations (다수의 조건)
Multiple operations(다수의 조건) 를 ternary 안에 실행할 수 있습니다. 이를 위해, 우리는 쉼표로 조건을 나누어야 합니다. 또한, 추가적으로 괄호를 사용하여 코드를 그룹화 할 수 있습니다.

```
let isStudent = true;
let price = 12;

isStudent?(
    price = 8,
    alert('please check for student ID')
): (
    alert('njoy the movie')
)
```

위의 예시에서 우리의 영화 price (가격) 는 이미 $12 로 지정되어 있습니다. 만약 isStudent 가 true(참) 이면 , 우리는 price 를 $8로 조정하고 판매자에게 학생증 확인하는 alert (경고)를 보냅니다. 만약 isStudent 가 false(거짓) 이면, 위의 코드는 생략하고, 영화를 즐기라는 경고가 나옵니다.

[자바스크립트 3항연산자에 대한 고찰]
https://yceffort.kr/2022/02/think-about-ternary-operator
