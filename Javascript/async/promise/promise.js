// 콜백을 대체해서 프로미스를 쓸 수 있는지
//비동기를 간편하게 처리할 수 있게 도와주는 객체이다
//정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행이 되어졌다면 성공의 메세지와 함께 처리된 결과 값을 전달해주고,
//만약 기능을 수행하다 예상치 못한  문제가 발생했다면 error를 내준다

// promise is a JS object for asychronous operation (instaed of using callback function )
// 1. state (success or failure) 2. differences between producer and consumer
// 우리가 원하는 정보를 producing 제공하는 사람과 이 제공 된 data 를 쓰려는 사람 consumer 의 차이점을 알면 좋을 것 같다.

// state:  pending -> fulfilled -> rejected
//producer vs consumer

//1. producer

//when new promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  //doing something heavy () such as receiving data or reding a big datas of file takes time
  // 그래서 비동기적으로 처리하는게 더 나은 조건임
  //promise가 만들어지는 그 순간 바로 네트워크 통신을 수행하게 된다
  //만일 클라가 버튼을 눌렀을때 네트워크 요청을 해야하는 경우라면, 이런식으로 코드를 짜면, 원하지 않는 순간에 executer(resolve)를 송신을 받아 불필요한 네트워크 통신을 받을 수 있다
  //이 점을 유의 하면서 써야한다.
  console.log("doing something");
  setTimeout(() => {
    resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

//2. 1번에서 producer 을 만들어봤으니 그걸 소비하는 consumer 을 만들어보겠다. consumers: then, catch, finally
promise
  .then((value) => {
    //값이 잘들어왔으면, then 어떤 값을 받아올거야, 그러곤 우리가 원하는 값을 전해주는 콜백함수를 만들어주면
    console.log(value); //ellie 가 doingsomething 이후 2초 뒤에 나오는데, 그뒤로 계속 리로딩 시켜주면서 나온다
  })
  .catch((error) => {
    console.log(error);
  }) //then 을 호출하게 되면 다시 프로미스 가 리턴이 되고, 리턴 된 프로미스에 catch 가 등록되는거임

  //결국 프로미스를 사용하게 되면, 그 아래 비동기적인 상황을 고려한 코드가 바로 밑에 붙게되고,
  //그게 만약 성공이면 resolve, 실패면 reject 와 실패한 이유를 반환하게 된다
  //그 뒤 성공한 값 또는 실패한 애러를 then 과 catch 로 반환한다
  //최근에 새롭게 나온게 있는데, 그건
  .finally(() => {
    // 무조건적으로 성공이던 실패던 나오게 하는 코드이다
    console.log("finally");
  });

//3.promise training 에 대해서 알아보자
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num)); //5
// 위 코드는 받아온 값을 곱해주고, 새로운 서버로 돌려서 그 새로운 값을 전달해주는 코드이다.
//then 은 값을 바로 전달해줘도 되고, promise를 전달해줘도 된다.
