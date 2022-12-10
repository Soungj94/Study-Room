fetch는 api를 불러오고, 정보를 내보내주는 함수라고 한다.

fetch 함수에 쓰여지는 method는 get과 post가 있는데 설정을 따로 안해주면 기본적으로 get으로 설정된다.

fetch는 서버와 비동기 요청방식중에 하나인데, 대표적인 비동기 요청방식중에 하나인 Ajax의 방식 중 하나이다.

```
if(url) {
	fetch(url).then(function(response){return response.text();}).then(function(html){
    	document.getElementById('info').innerHTML = html;
    });
}
```

공부하다가 작성해본 코드인데, then 이라는 키워드를 살펴봤다. then의 역할은 함수 실행이 끝나면 그 다음으로 할 일을 정해주는 것이다. fetch(서버주소)는 웹에서 '이 서버주소로 요청 좀' 의미를 가지고 있고, then이 붙는다면 '이 요청 끝나면 이것 좀 해주라!' 라는 뜻 같다.

즉, 정리를 해본다면 then은 API를 이용하여 백엔드 서버로부터 받아온 정보를 사용할 때 .then()함수를 이용하고

** fetch를 다시 정리해본다면, API를 사용하여 백엔드 서버와 비동기 요청을 하는 방식 중 하나!**

비동기 방식으로 요청하기 때문에 API호출하는 과정이 끝나지 않더라도 다음 코드로 넘어가는 방식!

이 과정에서 필요한 정보를 사용할땐 .then() 사용!
