# section3

### component-driven user interfaces 컨포넌트 주도 개발

여러 개의 프로그램 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록 구성한 작은 기능적 단위를 말한다

## building interactive & scalable UIs

####module content

1. react core syntax/ and / JSX
2. working with component
3. working with Data

#### react is all about components

: because all user interfaces are made up of components

#### what could be a components?

reusable bulding blocks in user interface

- it could categorized by smaller components that makes the whole.
  (reusability) (separation of concerns)

- how exactly is a component built?
  basically adding html+ css+ JS makes up react

####react allows us to make reusable and reactive components

- by using declarative approach. (선언적방식 ) - define the desired target states and let react figure out the actual JS DOM instruction
  which element from the actual webpage might need to be added removed or updated...
  I need to define an end states and which condition which states should be used, react does the rest.

#### making user designated component

- putting (export default "file-name") on the custom (import ExpenseItem from "./components/ExpenseItem") on the App.js
- when you import a custom component file from same project(compiling into App.js), you have to use **Uppercase letter** to bring in an imported component.(so that react can detect it's a custom component.)
- simple rule that react applies
  1. lower case elements are built in elements so it look for them in built in elements
     whereas
  2. uppercase are defined by you or someoneelse, this is custom element.

#### writing more complex JSX codes

- first rule of writing JSX is that you can only have one root element **per return statement**
  - but why isn't this working
  - later on explained()

#### Basic CSS Styling

- in react yo u don't use "Class" here you use "className" becuase the word "Class" is reserved by JS

#### Working with dynamic data output and expressions in JSX

- some datas might be hardcoded sometimes, but in this case with date, title, and amount would typically be dynamic. which is why it shouldnt hardcoded in html code, instead you receive that data, from somewhere for example, user who entered in the form.

```
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

you can see that; once you've declared const on the top code, you can use {curly braces} to operate it like JS (this is called "output dynamically")동적인 출력 or dynamic place holder(in this case, it's curly braces.)

- what is toISOString() ?
  - [this is an official doc about toisostring]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
  - The toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always zero UTC offset, as denoted by the suffix Z.

```
const event = new Date('05 October 2011 14:48 UTC');
console.log(event.toString());
// expected output: Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)
// (note: your timezone may vary)

console.log(event.toISOString());
// expected output: 2011-10-05T14:48:00.000Z
```

#### Passing data via "props"

- we can make our components reusable by using parameters and concept called props.(properties)
  ![picture](https://cdn.discordapp.com/attachments/1046343861129191446/1046413031233556580/Screenshot_2022-11-27_at_10.10.18_PM.png)
  ![picture](https://cdn.discordapp.com/attachments/1046343861129191446/1046413031527170180/Screenshot_2022-11-27_at_10.11.11_PM.png)

#### Adding “normal” JavaScript logic to components Splitting components into multiple components

- props are not only limited to dynamically set values, but also work from hard coded styles
- but to make sure props are there to **pass datas** to make them configurable and reusable
- what is toLocalString() ?
- [This is an Official Doc]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
- The toLocaleString() method returns a string with a language-sensitive representation of this date. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.

```
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// expected output: 20/12/2012, 03:00:00

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// expected output: 2012. 12. 20. 오전 3:00:00
```

#### Split a component into multiple components

-larger the project gets more and more components get added to the document, so you break it in to smaller building blo cks by:
tip: when you have an open tag that does not have any given function inside, you simply make it like this

```
<ExpenseDate></ExpenseDate> to <ExpenseDate />
```

#### The concept of "composition" ("children prop")

- generally this approach of building an user interface with smaller building blocks is called"composition"
- but sometimes however you want to have a component where you don't configure everything through props, but where instead you're able to pass content between the opening and closing tag of that component
  - one special prop that built in React, which every components receive,even if you never set it explicitly, thats the prop, which value that I want to ouput between the opening and closing tag of these div inside the card component function its the prop Children.(without the "children" you can not wrap custom component)
  - also when you combine components, you use composition, which is also important.
  - All these hastles to keep your files in handy.

#### First Summary

- takeaway: when you look at your code through the console, it's mostly html codes.However, React makes up different features by using it's built in codes such as children, etc...

#### JSX in detail
