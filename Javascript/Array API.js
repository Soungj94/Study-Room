# Array API

1. .join
2. .split
3. .reverse
4. .slice
5. .find
6. .filter
7. .map
8. .some
8-1. .every
9. .reduce
10. .sort



Q1. make a string out of an array

{배열이 string으로 전달하기
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join() //join 안에는 원하는 구분자separator 를 넣어줄 수 있음(' ')안에다가 넣어주면 됨
  console.log(results)//사과, 바나나, 오렌지
}

//   * Adds all the elements of an array into a string, separated by the specified separator string.
//      * @param separator A string used to separate one element of the array from the next in the resulting string. 
//      If omitted, the array elements are separated with a comma.
//      */
//     join(separator?: string): string;

Q2. make an array out of a string
{
const fruits = '🍎, 🥝, 🍌, 🍒'; //문자열임
const result = fruits.split(',')//코마단위로 나눌거기 때문에
console.log(result)//["🍎","🥝","🍌","🍒"]

fruits.split(',', 2)//["🍎","🥝"] 만 받을 수 있음 //limit은 optional이지만 separator 은 must 이다
}

// /**
//      * Split a string into substrings using the specified separator and return them as an array.
//      * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
//      * @param limit A value used to limit the number of elements returned in the array.
//      */
//  split(separator: string | RegExp, limit?: number): string[];

Q3. make this array look like this: [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
const result = array.reverse()
console.log(result)//[5,4,3,2,1]
console.log(array)//[5,4,3,2,1] 배열자체도 바뀌었음을 알 수 있다. 
}
// /**
//      * Reverses the elements in an array in place.
//      * This method mutates the array and returns a reference to the same array.
//      */
//  reverse(): T[];

#### Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];
const newArray= array.splice(0,2)
console.log(newArray)// [3,4,5]기존에 있는 배열을 변형하는게 아니라 새로운 배열을 반환 해야하기에
console.log(array)// [3,4,5] 

const array = [1, 2, 3, 4, 5];
const newArray= array.slice(2,5) 
console.log(newArray)//2번부터 시작이지만, 4번째인 5라는 수를 넣어줘야하니 end포인트는 5 [3,4,5] 새로운 배열을 뽑아내줬다
console.log(array)//그리고 배열은 그대로 [1,2,3,4,5] 기존의 배열은 남아있고
}
// /**
//      * Returns a copy of a section of an array.
//      * For both start and end, a negative index can be used to indicate an offset from the end of the array.
//      * For example, -2 refers to the second to last element of the array.
//      * @param start The beginning index of the specified portion of the array.
//      * If start is undefined, then the slice begins at index 0.
//      * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
//      * If end is undefined, then the slice extends to the end of the array.
//      */
//  slice(start?: number, end?: number): T[];

class Student {
constructor(name, age, enrolled, score) {
this.name = name;
this.age = age;
this.enrolled = enrolled;
this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

Q5. find a student with the score 90
{
const result = student.find((student)=> {
    console.log(result)//총 5번 student의 index 가 반환 된 걸 알 수 있다 //그뒤 이 라인을 지우고 
    return student.score === 90
    console.log(student)//c학생이 나온다 

마지막코드
const result = student.find((student)=>student.score===90)

})   
}
// /**
//      * Returns the value of the first element in the array where predicate is true, and undefined
//      * otherwise.
//      * @param predicate find calls predicate once for each element of the array, in ascending
//      * order, until it finds one where predicate returns true. If such an element is found, find
//      * immediately returns that element value. Otherwise, find returns undefined.
//      * @param thisArg If provided, it will be used as the this value for each invocation of
//      * predicate. If it is not provided, undefined is used instead.
//      */
//  find(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number | undefined;
//predicate(단언하다 )와 thisArg 가 전달이 되는데, 콜백함수를 받음. 첫번째로 찾아진 요소를 리턴한데 어레이 안에서, 전달된이 콜백 함수가 true 를 주고 찾지못 할 경우 undefined. 
//true가 나오면 함수가 멈춘다. (콜백함수를 만들어서 전달해줘야한다)(그리고 이 콜백함수는 boolean 을 return해야된다)

Q6. make an array of enrolled students
{
    const results =student.filter((student)=>student.enrolled)
    console.log(results)//3명의학생 with true
}
// * Returns the elements of an array that meet the condition specified in a callback function.
// * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
// * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
// */
// filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];

Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const results = student.map((student)=>student.score)//점수만 들어있는 새로운 배열을 만들어준다. 콜백함수로 가공되어진 값으로 대체해준다.
}
// * Calls a defined callback function on each element of an array, and returns an array that contains the results.
//      * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
//      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
//      */
//     map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
//배열안에 들어있는 요소 한가지 한가지를 다른것으로 변환해주는것: 3가지가 들어있는 배열이있다고 치고, 1,2,3 이 있는데, 하나하나 거쳐가면서, 새로운 값으로 변환해주는것

Q8. check if there is a student with the score lower than 50
{
    const results = student.some((student)=> stduent.score < 50)
    console.log(results)//true

    const results2 = student.every((student)=> stduent.score < 50)
    console.log(results2)//false 모든 학생들의 점수가 50점보다 낮은건 아니니깐
}
//  /**
//      * Determines whether the specified callback function returns true for any element of an array.
//      * @param predicate A function that accepts up to three arguments. The some method calls
//      * the predicate function for each element in the array until the predicate returns a value
//      * which is coercible to the Boolean value true, or until the end of the array.
//      * @param thisArg An object to which the this keyword can refer in the predicate function.
//      * If thisArg is omitted, undefined is used as the this value.
//      */
//     some(predicate: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean;
// 배열에 요소중에서 콜백함수가 리턴이 true 가 되는애가 있는지 없는지 확인해줌 더 자세히 얘기하면, 배열에서 하나라도 이 조건에 맞는 사람이 있으면 true


// /**
//      * Determines whether all the members of an array satisfy the specified test.
//      * @param predicate A function that accepts up to three arguments. The every method calls
//      * the predicate function for each element in the array until the predicate returns a value
//      * which is coercible to the Boolean value false, or until the end of the array.
//      * @param thisArg An object to which the this keyword can refer in the predicate function.
//      * If thisArg is omitted, undefined is used as the this value.
//      */
//  every(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;
//배열에 들어있는 모든 요소들이 이 조건에 맞는다면, true 를 반환해줌
Q9. compute students' average score
{
    const result = student.reduce((prev, curr)=>{
        console.log(prev)
        console.log(curr)//여기까지만 콜솔을 찍어보면 a,b 빼고는 정의 되어 있지 않아서 리턴문을 넣어줘야한다
        return curr;//이것만 찍었을 경우 ab,bc,cd  이런씩으로 반복되는걸 볼 수 있다 // 그이유는curr 이라는건 배열하나하나 curr 에 전달되는데 그 리턴 된 값이 prev 로 전달된다
        return prev + curr.score;// 나중에 리턴된 값이 그다음에 호출되는 prev 값으로 할당이된다 // 0부터 시작해서 계속 누적된 값을 보여준다
    },0)
    console.log(result)//기존의 숫자들을 순차적으로 다 더해준 값이 나온다 //369
    console.log(result/student.length)// 우리는 평균값을 구하는중이기에 배열의 길이만큼 나눠준다

    //simplified ver
    const result = student.reduce((prev, curr)=>prev + curr.score, 0)
    console.log(result/student.length)

    const result = student.reduceRight((prev, curr)=>{// 배열의 제일 뒤에서 부터 시작해준다
        console.log(prev)
        console.log(curr)
        return prev + curr.score;
    },0)
    console.log(result/result/student.length)

}
// /**
//      * Calls the specified callback function for all the elements in an array. The return value of
//      * the callback function is the accumulated result, and is provided as an argument in the next
//      * call to the callback function.
//      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
//      * callbackfn function one time for each element in the array.
//      * @param initialValue If initialValue is specified, it is used as the initial value to start
//      * the accumulation. The first call to the callbackfn function provides this value as an argument
//      * instead of an array value.
//      */
//  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
//  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
//  리듀스는 콜백함수를 전달하고 혹은 initial value 를 전달할 수 있음
//  콜백함수는 배열안에 있는 모든요소들마다 호출된다.(just like filter, every, some 비슷함) 콜백되는 리턴되는 값은 함께 누적된 결과값을 리턴함
// 배열에 있는 모든 요소들의 값을 누적하는 뭔가 함께 모아놓는
// 즉 리듀스는 우리가 원하는 시작점부터 모든배열을 돌면서 어떤 값을 누적할때

 /**
//      * Calls the specified callback function for all the elements in an array, in descending order.
//      * The return value of the callback function is the accumulated result, and is provided as an
//      * argument in the next call to the callback function.
//      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
//      * the callbackfn function one time for each element in the array.
//      * @param initialValue If initialValue is specified, it is used as the initial value to start
//      * the accumulation. The first call to the callbackfn function provides this value as an
//      * argument instead of an array value.
//      */
//   reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
//   reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;


Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result= student.map((student)=>student.score)//점수들만있는 배열을 만들어준다
    const result= student.map((student)=>student.score).join() // string 으로 변환해서 보여준다
    console.log(result)

    const result = student
    .map((student)=>student.score)
    .filter((score)=> score >= 50)
    .join()//
    console.log(result)//50점 이상인 학생들을 string 으로 변환해줌

}

//  /**
//      * Adds all the elements of an array separated by the specified separator string.
//      * @param separator A string used to separate one element of an array from the next in the
//      * resulting String. If omitted, the array elements are separated with a comma.
//      */
//   join(separator?: string): string;
//배열로 받은 데이터를 string 으로 만들어줄때

Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = student.map((studnet)=>student.score)
    .sort((a, b)=> a - b)// 학생 a와 b라는 전달이되는데,a에서 b를 뺏을 때 즉 b가 a보다 크다면 마이너스값이 된다(마이너스값을 리턴하면 첫번째가 뒤 보다 작다고 간주가 돼서 정렬이됨 )
    .join()
    console.log(result) //오름차순 내림차순은 반대로

}

//   /**
//      * Sorts an array.
//      * @param compareFn Function used to determine the order of the elements. It is expected to return
//      * a negative value if first argument is less than second argument, zero if they're equal and a positive
//      * value otherwise. If omitted, the elements are sorted in ascending order.
//      * ```ts
//      * [11,2,22,1].sort((a, b) => a - b)
//      * ```
//      */
//    sort(compareFn?: (a: number, b: number) => number): this;
array-api.js
Displaying array-api.js.
