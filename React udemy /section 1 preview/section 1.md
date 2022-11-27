#section 1

- Dom:(javaS) you can manipulate the html structure DOM of the page
  html elements that are rendered on to the screen, we can manipulate by using Javascript
  that allows us to change what users see, without fetching a new html page

  -and React comes into place helping to build a new block

react.js

- a client side javascript library
- all about building modern, reactive user interfaces for the web
- declarative,component- focused approach

##why do we need react?
when JS does a good job? - js does it's job but frankly, most of the jobs done are repetitive and useless steps - indeed React is all about making small components
-react is all about spliting the applications into small building blocks, small components - where every building block and component has clear task - maintenance - and managable
library will do heavy lifting and combine all my codes

###building single page application SPAS

- react can be used to control parts of html pages or entire page
- react can also be used to control entire frontend of a web application
  - when restricting numbers of html requests, it will enhance the user experience, because it only runs by a single page application.(ex. Netflix)

#####when working with React there are few restrictions interms of usabilities, since react is mainly focused on component bases
yet, there are two alternative libraries that can also be handy when it comes working on the frontend.

1. Angular: complete component-based UI framework, packed with features. uses Typescript. Can be overkill for smaller proj
2. React: lean and focused component- based UI library. certain features(e.g routing) are added via community package
3. complete component-based UI framework, includes most core features. A bit less popular than react and Angular.

#####(certainly, there are pros and cons when it comes to choose from one from the another. However, it has its own usage.
-vue is mix of both reat and angular)

####what will I be covering from this lesson:
#####Basics

####Basics & Foundation
(Introducing Key Features)
(Theory / Small Demos & Examples)

1.Components & Building UIs Working with Events
2.Working with Events & Data: "props" and "state"
3.Styling React Apps & Components
4.Introduction into "React Hooks"

####Advanced Concepts
(Building for Production)
(More Realistic (Bigger) Example Projects)

1.Side Effects, "Refs" & More React Hooks
2.React's Context API & Redux
3.Forms, Http Requests & "Custom Hooks"
4.Routing, Deployment, Next|S & More

####Summaries & Refreshers
(Optimizing yourTime)
(Challenges & Exercises)

---

## JavaScript Refresher & React] Summary

Arrow function tips and tricks

- when we use arrow function, and when only using only one argument,
  then you can exclude out paranthesis from the arrow function

```
const printName = (name) =>{
console.log('max')
}

to

const printName = name =>{
console.log('max')
}
```

other useful tip

- when you are using only one line, you can omit curly braces from the arrow function and return keyword.
  Also, from the code down below, we could also takeout paranthesis surrounding (number)

```
const muliply = (number) => {
return (number \*2)
}

console.log(multiply(2));

to

const muliply = number => (number \*2)

console.log(multiply(2));
```

Exports and Imports (modules)

person.js uses default keyword, the default keyword simply means if we just import something from that file
it will always be our default export. so in this case the person constant therefore in import person from person.js
we can name person whatever

however, in utility.js we explicitly target specific things from that file in **{curly braces}**, cuz we didnt set a default: named exports
(you can simply put **(as)** in between two targets for example (smith as smith)
**(\* as bundled )** putting multiple things at once

---

Class: blueprints for an objects

**one of two ways to create a component**
.

---

###spread and Rest operator
스프레드 연산자 와 나머지 연산자 (...)

spread: used to split up array elements OR object properties
ex. when you are trying to add number to an array

```
const number = [1,2,3]
const newNumber = [...number, 4];
console.log(newNumber);
you will get [1,2,3,4], <-- however if you only put [number, 4], and console.log
it will return [[1,2,3],4]
```

also, it works from Object
ex.

```
const person = {
name : 'max',
}
const newPerson = {
...person,
age: 28;
}
console.log(newPerson)
```

Rest: used to merge a list of function arguments in array.

```
const filter = (...args) => {
return args.filter(el => el === 0 )
}
console.logfilter((1,2,3)) //[1]
```

---

Destructuring 구조분해할당 #####할당이랑은 다른개념

easily extract array elements and object properties to store them in variables

####Array destructuring

```
[a,b] = ['hello', 'max']
console.log(a) //'hello'
console.log(b) //'max'
```

####object destructuring

```
{name} = {name: 'max', age:27}
console.log(name) //max
console.log(age) // undefined
```

ex.

```
const numbers = [1,2,3]
[num1],[num2] = numbers
console.log(numbers) // 1,2

const numbers = [1,2,3]
[num1 , ,num2] = numbers
console.log(num1, num3) // 1,3
```

---

## premitive and reference type

Array functions
