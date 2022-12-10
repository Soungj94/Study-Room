"use Strict";

//javascript is synchronous
//execute the code blockby order after hoisting.
//hoisting var, function declaration,
//  - there are priorities in orders of running codes, starting with var and function = gets hoisting

//synchronous: executing codes by an order

console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);
console.log("3");

//이런식으로 callback 함수를 이용해서 비동기적 실행을 할 수 있다.

//callback 함수는 synchronous 와 asynchronous 두가지로 나눠서 생각할 수 있는데

//synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello")); //1,3,"hello",2
// function이 호이스팅 돼서 올라가고, 그 아래로 1,3 이 찍히며, 그 뒤 setTimeout을 맞고 헬로를 먼저 콘솔해준다음 2를 찍어주었다.

//Asychronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async with callback"), 2000); //1,3,"hello",2, "async with callback"

//callback hell example
class UserStorage {
  loginUser(id, password, onSucess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "code" && password === "academy")
      ) {
        onSucess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRole(user, onSucess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSucess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

//이런걸 콜백 지옥이라고한다, 읽기가 너무 거북하고, 가독성도 너무 떨어지고, 걍 쓰는것도 힘듬;;
//그냥 쓰지말자,,

//callback 함수는

//어떤 다른함수에 매개변수로 함수를 넘겨주는 것이다

function checkMood(mood, goodcallback, badcallback) {
  if (mood === "good") {
    //기분 안 좋을때 하는 동작
    goodcallback();
  } else {
    // 기분 안 좋을때 하는 동작
    badcallback();
  }
}
function cry() {
  console.log("ACTION :: CRY");
}
function sing() {
  console.log("ACTION :: SING");
}
function dance() {
  console.log("ACTION :: DANCE");
}
checkMood("good", sing, cry);
