#Array배열
비슷한것 끼리 묶어 놓은 것을 **자료구조** 라고 한다
object 객체 와 자료구조 data structure queue의 차이는 무엇인가?

## Array declaration 배열선언방법

```
const arr1 = new Array()
const arr2 = [1,2,4]
```

#####배열을 공부할때는 index 를 기준으로 데이터가 저장되기때문에, index를 활용해서 (검색, 삽입, 삭제, 정렬 하는지가 중요)
접근하는법:
###for문

```
//Index position
cont fruits = ["apple","banana"]
console.log(fruits)//apple, banana
console.log(fruits.length)//2
console.log(fruits[0])//apple
console.log(fruits[3])//undefined
console.log(fruits[fruits.length -1 ]) //banana 배열의 길이는 총 2 이기때문에 거기서 -1 을 한 값이 마지막 인덱스를 찾는 방법이다.

```

## looping over an array 배열 안에있는거 출력해보기

**for**

```
*print all fruits
1. for (let i=0; i < fruits.length; i++){
    console.log(fruits[i])//apple,banana
}
```

**for of**

```
2. for (let fruit of fruits){
    console.log(fruit) //apple, banana
}
```

**foreach**

```
3.fruits.foreach(function(fruit, index)){
    console.log(fruit, index, array)
}//apple, banana// 0,1//array까지도 하지만, array는
    잘 받아오지는 않아서 여기서는 value 와 index 를 받아올것이고, 빈 함수는 화살표 함수로 변형해주는게 편함으로
//콜백함수를 쓰며, value: T, index: number, array: T[] 를 전달 받을 수 있다
```

```
fruits.foreach((fruit, index)=>{
    console.log(fruit, index)
});
//이것도 가능하며
```

```
fruits.foreach((fruit)=> console.log(fruit))
//이것또한 가능하다 (index를 재외시켜서 원하는 데이터 값만 받아올 수 있다)
```

## 배열의 add, delete, copy

##### push: add an item to the end

```
fruits.push("strawberry","peach")
console.log(fruits) //apple, banana, strawberry, peach
```

##### pop: remove the item from the end

```
fruits.pop()
console.log(fruits)// apple, banana, strawberry

const poped = fruits.pop()
console.log(poped)//pop 된 놈만 불러드리기
```

##### unshift: add an item to the first line of index

```
fruits.unshift("peach","lemon")
console.log(fruits)// peach,lemon, apple, banana, strawberry
```

##### shift: remove an item from the first line of index

```
fruits.shift()
console.log(fruits)//lemon, apple, banana, strawberry
```

### (note that shift and unshift are much slower than pop and push)

기존의 데이터는 건드리지 않기때문에, 넣고 빼고 하는 pop & push 는 처리속도가 빠르지만
shift 와 unshift 같은경우는 기존에 있는 데이터를 옆으로 밀고, 빈 공간을 재공 한 뒤 넣어주는 거기 때문에
처리속도가 느릴 수 밖에 없다.

##### splice: remove an item by index position

```
fruits.splice(1)
console.log(fruits)//lemon 하나 남는다
**splice(starting number, number of elements you want to remove)**

fruits.splice(1,2)
console.log(fruits)// 만약위에 코드가 없었다는 가정하에 들어가는 값들은, lemon, strawberry 가 될 것이다

fruits.splice(1,2, "kiwi", "melon")
console.log(fruits)//위 코드가 없다는 가정하에: lemon, kiwi, melon, strawberry 가 되는데, 중간에 없어진 값을 기준으로 새로운 항목들을 넣어준 것이다.

fruits.splice(1,0, "kiwi","melon")
console.log(fruits)//1번째 뒤로 추가시킬 수 있는 기능(splice로 추가시키는법)
```

##### concat: combine two arrays

```
const fruits2 =["pear","coconut"]
const newFruits = fruits.concat(fruits2)
console.log(newFruits)// lemon, kiwi, melon, strawberry, pear, coconut 까지가 된다
```

## Searching

##### find the index

```
**indexOf**
console.log(fruits)//lemon, kiwi, melon, strawberry, pear, coconut
console.log(fruits.indexOf("kiwi"))//1
console.log(fruits.indexOf("pear"))//4
console.log(fruts.indexOf("mango")) -1 없는 값을 부르면

**includes**
console.log(fruits.includes("melon"))//true
안에 들어있으면, true 없으면 false

fruit.push("lemon")//마지막열에 레몬을 하나 더 넣어줬다는 가정하에
console.log(fruits.indexOf("lemon"))//0
console.log(fruits.lastIndexOf("lemon"))//5
```
