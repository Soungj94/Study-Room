```
//고유의 키값을 주는것이 이런 똑같은 id가 0 일때 내려주는 값에서 버그가 안 생김.
mydiary 라는 페이지를 가정했을때;



const [todos, setTodos] = useStates()
const [diary, setDiary] = useStates()

const todos=()=>{
    id:0,
    name:..
    desc:..
}
const diary()=>{
    id:0,
    name:...
    desc:
}

{todos.map((value, index) => return <div key={`myDiary-todos-${value.id}`}>“안녕“<div>)}
{diary.map((value, index) => return <div key={`myDiary-diray-${value.id}}>"안녕"</div>)
```
