/* 자신이 상속한 객체를 참조하기 위해 내부에 [[prototype]] 프로퍼티를 둔다
직접 읽거나 수정할 수 없는 이유로 Object.getPrototypeOf()메소드를 이용했었다.*/
let a = {a : 12, __proto__:{b:13}};
console.log(a.a);
console.log(a.b);


/*두 값의 동등 여부를 판단.====와 비슷하지만 예제처럼 그렇지 않은 경우도 있다. */
console.log(Object.is(0, -0));  //F
console.log(0===-0); //T
console.log(Object.is(NaN, 0/0));//T
console.log(NaN===0/0);//F
console.log(Object.is(NaN, NaN));//T
console.log(NaN===NaN);//F

/* Object.assgin(target, source) */
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }