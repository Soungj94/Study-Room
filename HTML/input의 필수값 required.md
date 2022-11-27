#[html]input의 필수값을 지정하는 required

개발자가 의도한 대로만 사용자가 움직여주면 좋겠지만 실상은 그렇지 않습니다. 예상치도 못한 버그를 많이 생산?
해내며 이를 사전에 예방 해줘야 합니다. input 태그가 있지만 사용자가 무시하고 submit을 해버린다면
해당 input의 데이터는 존재하지 않을 것입니다. 하지만 아이디, 패스워드 등 주요한 input 이라면 꼭 입력값을 받아줘야 합니다.
필수 input 폼을 채우지 않았을 경우, 재출버튼을 눌렀을 때 경고창을 띄워주면 이러면 문제를 사전에 예방할 수 있습니다.
이는 별도의 js 없이 html 만으로 구현이 가능합니다.

```
<form>
  아이디: <input type="text" name="usrname" required>
  <input type="submit">
</form>
```

다음과 같이 input 태그 안에 required 를 추가해주면 해당 input을 입력하지 않고 제출을 누를 시 경고창이 뜨게 됩니다.

```
<form>
  <input type="radio" id="man" name="gender" value="man" required />
  <label for="man">남성</label>
  <input type="radio" id="woman" name="gender" value="woman" />
  <label for="woman">여성</label>
</form>
```

이번에는 여러 개 중 하나만 선택가능하도록 한, radio type 의 경우를 알아보겠습니다. 이 경우, name 값이 모두 일치한다면 하나의 input 에만 required 를 추가해주면 됩니다.
