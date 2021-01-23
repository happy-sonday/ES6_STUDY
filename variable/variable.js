/* 테스트 */
//let a=12;
//console.log(a);
//console.log('하이');

/* 상수를 통한 객체 참조 */

const a={
    "name":"민호"
}

console.log(a.name);

a.name="수지";
console.log(a.name);

//a={};//Assignment to constant variable
        //읽기 전용 예외 발생
        //const지만 참조값이 고정값으로 내부 객체는 가변상태지만 다른 객체를 할당할라고하면 예외발생
/* a={
    "name":"태연"
}

console.log(a.name); */


/*파라미터 기본값 */
//인자를 초기값 설정으로 넘길 수 있고 undefined로 넘기게 되면 초기값으로 출력
function myFunction(x=1, y=2, z=3){
    console.log(x,y,z);
}

myFunction(6,7);

function myFunction_cal(x=1, y=2, z=x+5){
    console.log(x,y,z);
}

myFunction_cal(5);//5 2 10


//ES5에서 배열 값을 함수 인자로 넘기려면 함수의 apply() 내장 메소르르 이용
/* function myArrangement(a,b){
    return a+b;
}

var data=[1,4];
var result = myArrangement.apply(null, data);
console.log(result); */

//ES6에서 ...점3개로 끄읏

function myES6Arrangement(a,b,c,d,e){
    return a+b+c+d+e;

}


let data=[2,9,4,6,10];
let result = myES6Arrangement(...data);
console.log(result);


let data2=[11,21, 31, ...data];
console.log(data2);//(8) [11, 21, 31, 2, 9, 4, 6, 10]

data2.push(...data);
console.log(data2);//(13) [11, 21, 31, 2, 9, 4, 6, 10, 2, 9, 4, 6, 10]


/* 여러배열 펼침 rest parameter*/

let array1 = [1];
let array2 = [2];
let array3 = [...array1,...array2,...[3,4]];
let array4 = [5];



function mySpread(a, b, c, d, e){
    return a+b+c+d+e;
}

let result_spray=mySpread(...array3,...array4);
console.log(result_spray);


console.log(array3.push(...array4));//배열 요소의 갯수 5;
console.log(array3);//array3에 푸쉬된 펼쳐져서 보임
let result_spray2=mySpread(array3);



//개수가 가변적인 함수 인자를 폭하는 용도로 쓰임
function myArgement(a,b, ...args){
    console.log(args);
}

myArgement(1,2,11,12,13,14,15);

//해체 할당
let dismantle=[1,2,3];
let d, c, e;
[d, c, e]= dismantle;


console.log(c);

//해체 할당 구문에 아래처럼 배열이 아닌 객체가 오면 TypeError가 발생
let [f, s, t]= [1, 2, 3];


//값을 건너 뛰기도 가능
let [g, ,i]=[31, 31, 33];
console.log(g);
console.log(i);


//rest parameter를 활용한 배열 해체

/* let[h, ...j]=[41, 42, 43, 55, 56, 62];
console.log(h);
console.log(Array.isArray(j));
console.log(j);//[42, 43, 55, 56, 62] */

let [h, , , ,...j]=[41,45,48,51,64,72];

console.log(h);
console.log(j);

//기본값을 초기화하여 배열에 할당 가능
let [k, l, m = 99]=[1, 2];
console.log('기본 배열에 값을 할당하여 m를 출력한 값은:'+m);

//파라미터로 배열을 해체 할당 사용

function myFunctionArray([a, b, c=3]=[1,2,3]) {
    console.log(a,b,c);
        
}

myFunctionArray(undefined);




/* 객체 해체 할당 */
//객체 리터럴   //변수  //프로퍼티
//객체 프로퍼티명과 변수명은 반드시 동일해야한다.

/* let obj = {"name":"민호", "age": 23};

let x, y;
({name:x, age:y}=obj); */


let {name:x,age:y} = {"name":"민호", "age": 23};




/* 
객체 프로퍼티"프로퍼티":"값가 undefined일 경우에는 기본값을 준다.
조합 프로퍼티의 경우 []로 감싼다.
객체속의 객체의 프로퍼티는 중괄호로 기준으로 프로퍼티에 접근하면된다.
함수 파라미터로 객체 해체 할당 가능
*/

/* let {a,b,c=3} ={a:"1", b:"2"};
console.log(c);


let { ["first"+"Name"]: y} = {firstName: "수지"};
console.log(y);

let {name, otherInfo : {age}}={name:"수지", otherInfo:{age:23}};
console.log(name,age);
 */
function fncParam({name ='수지' , age =23 , profession ="연예인"})
{
console.log(name, age, profession);
}

fncParam({name:"민호로 변경", age:35})


