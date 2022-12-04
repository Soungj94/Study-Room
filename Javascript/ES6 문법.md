## block scope

var

1. 호이스팅
2. 함수 스코프(변수 유효 범위) 콘솔이 전역에서 찍혀도 되기 때문에, 요상해진다
3. 재할당이 가능하다

let const

1. 호이스팅은 일어나지만 TDZ//실제로 값이 할당되기 전 까지는 다 tdz
2. 재할당 x //같은변수로 재할당 안된다는말
3. 블록스코프 (if, while, function, switch, - {})

## template literal

```
const name = 'soungjae'
console.log('안녕하세요'+name+'입니다')

let a= 5
let b=10

console.log('fifteen is'+(a+b) + 'and\nnot' + (2*a+b)+'.') //이렇게 만들기 너무 어려우니깐

console.log(`Fifteen is ${a+b} and
not ${2* a+b}.
`); // 이런 식으로도 써줄 수 있다 *여기서 중요한 부분은 백틱을 써줘야한다는 것이다

//"fifteen is 15 and
//not 20."
```

## Array

array 폴더 확인

## Array Destructuring 구조분해할당

```
var colors=['red','white','orange']
var first= colors[0]
var second = colors[1]
var third = colors[2]
console.log(first,second,third)

이걸 구조분해할당으로 바꾸면
const [first, second, third]=colors
```

@restparameter 와 같이 쓰면

```
const arr=[1,2,3,4,5]
cosnt [a,...rest]=arr
//1만 a 로 들어가고 나머지는 ...rest 로 들어간다
```

@default parameter 연동

```
[a=1 = b=2]=[]
```

@값교환

```
var a= 10
var b= 20
이둘의 값을 바꾸고 싶으면

[a,b]=[ b,a]

```

## arrow Function

보기쉽다, 가볍다

```
var a = function(){
    return new Date();
}
var a = ()=> new Date()

똑같은거임
```

```
const user= {
    name:'danny'
    sayMyName: function(){
        console.log(this.name) //danny
    }
}
user.sayMyName();  //이런 경우 콘솔에서 확인해보면, 객체 안에, saymyName 은 prototype, this 가 있을텐데, 함수를
무겁게 만든다는 단점이 있다.(심지어 sayMyName method 를 썼는데 this 를 안쓰게 되면, 모든 this를 다 갖게 되는거라 엄청 무거워질 수 있다)

```

```
const user= {
    name:'danny'
    sayMyName:()=>{
        console.log(this) //{} 비어있고 가볍다.
    }
}
```

```
function outer(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

const outer=(a)=>(b)=>(c)=> a+b+c //이게 되는거다
```

@즉시 실행함수

```
(function({
    console.log("123")
})()

(()=>console.log("123"))() 이런식으로도 가능하다
```

## default parameter

```
const f =function (x,y,z){
    if (!x){
        x=4
    }
    if(!y){
        y=5
    }
    if (!z){
        z=6
    }
    console.log(x,y,z)
}
f(1); //매개변수를 하나만 받는다고 했는다, 콘솔에는 다 찍어주고 싶음,
그래서 //1, 5, 6 이 나오는거임 //y,z 는 falthy 값이 여서 undefined 지만 그래서 샛업한게, if 문을 돌려서 없으면 넣어주는거
```

```
const f= function (x=4,y=5,z=6){
    console.log(x,y,z)
};//1,5,6 .    // 내가 값을 반드시 받아야하는데 함수를 사용하는 사람이 값을 안 넘겨주는 상황이면, 임의로 default 값을 찍어도 된다
f(1)
```

## object Desctructuring

```
const student = {
    name: 'danny'
    graded: 'A'
}

function printDetails(student){
    const name= student.name;
    const grade= student.grade;

    console.log('name', name)
    console.log('grade',grade)
}

print detail(student)
```

이걸

```
function printDetails(student){
const {name, grade}=student;

    console.log('name', name)
    console.log('grade',grade)

}

print detail(student)
```

근데 객체 구조분해할당은 겹쳐져있을때 진가를 발휘함

```
 const classA= {
    teacher:{
        name:'Amy'
    },
    studnet:{
        name:'kirara'
    }
 }
```

이걸

```
const {name:studentName}= classA.student
const {name:teacherName}= classA.teacher
```

## rest parameter 나머지 매개변수

- 왜?

1. 함수 호출시 정의한 인자보다 많은 값을 넘겨줬을때 나머지 값을 처리하기 힘들었음

```
const rest = Array.prototype.slice.call (argument1); //ea6 에서는 이렇게 했었음 (그리고 유사배열로 들어갔었음)

@주의
(a,b,...z) <- 처럼 가장 뒤에만 올 수 있음
```

@예제 Argument를 받았을때 ...rest 로 받으면 됨

```
function(foo)(a,...rest){
console.log (rest);//[20,30] 이런식으로 배열로 바로 뽑아줬다 *추가적인 매개변수를 변수로 담아서 주는 그리고 배열이 나왔다
}
foo(10, 20, 30)

여기서 유사배열은: team assignment -1stweek 참고 (겉으로 볼때만 배열같이 생겼다)
```

@생성자 함수 constructor function
https://www.youtube.com/watch?v=8hrSkOihmBI

```
function Item(title, price){      //여기서 함수명에 대문자는 필수
    //this ={}                    //여기랑

    this.title= title
    this.price= price
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`)
    }
    //return this;                 //여기는 코드로 작성하지 않아도 된다. new 로 호출하게 되면 알고리즘이 실행해 준다.
}
const item1 = new Item('인형', 3000)
const item2 = new Item('과자', 4000) //만약에 new 를 안 붙이게 되면 기본 함수가 실행되게 돼서 이 case 에선 undefined 가 나오게 된다
const item3 = new Item('바지', 5000)

console.log(item1, item2, item3 ) // item{title:"인형",price: 3000, showPrice: f}
이런동일한 방법으로 객체를 뽑아준다 (나머지 두개도 )

여기다
item.showPrice();를 하게 되면// 5000원 이 찍힐 것이고

```

@prototype
method들을 저장해 놓는 공간이다

## short hand property

## spread operator

1. 배열 객체 등을 복사

```
이전방법
const numbers=[1,2,3,4]
let newNumbers = []
numbers.forEach((item )=>{
    newNumbers.push(item)// 이래야지 새배열을 뽑아주면서, [1,2,3,4] 를 반환해줬지만
})

이제는 스프레드 연산자를 통해 이렇게 뽑아 줄 수 있다.

const numbers = [1,2,3,4]
let newNumbers=[...numbers]
console.log(newNumbers)//[1,2,3,4,] 새로운 배열을 뽑아줄때 쓴다
```

2. 배열 객체 등을 병합
   예전에는 concat을 사용하여 병합을 했지만 이제

```
var birds = ['dog', 'cat']
var mammals = ['bird','pig']
var animals = birds.concat(mammals)하면 ['dog','cat','bird','pig'] 이렇게 나왔다면,

이제는
const newAniamls= [...birds,...mammals]
console.log(newAnimal) //['dog','cat','bird','pig'] 이렇게 나온다
```

3. 전개연산이 필요할때 (math.max) 전개를 풀어해칠때...spread operator 를 써준다.

```
let arr=[20, 10, 30, 50, 40]
const maxNum= Math.max(...arr)
console.log(maxNum)//50
```

Max.max.apply(null,values)
