
console.log('hello');


/* 2진수 표현법 상수 앞에 0b (binary)붙이면 끝*/

let a =0b00001111;
let b =15;
console.log(a===b);
console.log(a);

let eight = 0b00001000;
let c=  8;
console.log(eight===c);
console.log(eight);

/* 8진수 Octal 0o */

let octal = 0o17;//10진수 15의 8진수
let octal_result = 15;

console.log("8진수 비교결과",octal===octal_result);


/* 정수 판별 메소드 Number.isInteger(인자): 소수점이 0인 부종 소수점 숫자 */

let intgr = 17.0;
let noIntgr =1.2;

console.log(Number.isInteger(intgr));
console.log(Number.isInteger(noIntgr));

/* 정확하게 NaN인지 판별 메소드  Number.isNaN(인자) */
console.log("Number.isNaN() NaN인지판별")
let f = "NaN";
let g = NaN;
let h = "안녕하세요";
let i = 12;


console.log(Number.isNaN(f));
console.log(Number.isNaN(g));//true
console.log(Number.isNaN(h));
console.log(Number.isNaN(i));

/* isNaN() number변수이지 판별 메소드 */
console.log("isNaN() 결과값")
console.log(isNaN(f));
console.log(isNaN(g));
console.log(isNaN(h));
console.log(isNaN(i));


/* 유한수 판별 Number.isFinite(number) : Infinity */ 
//isFinite는 Infinity, NaN, undefined이면 false
console.log("isFinite 결과값");
console.log(isFinite(10));
console.log(isFinite(100/0));
console.log(isFinite(NaN));
console.log(isFinite(null));
console.log(isFinite([]));


console.log("Number.isFinite 결과값");
console.log(Number.isFinite(10));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(null));
console.log(Number.isFinite([]));


/* 반올림하지 않아도 되는 숫자로 -(2^53 -1) ~ (2^53 -1) 범위의 숫자 */
let min=Number.MIN_SAFE_INTEGER;
let max=Number.MAX_SAFE_INTEGER;

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(max));
console.log(Number.isSafeInteger(min));
console.log(Number.isSafeInteger(max+1));
console.log(Number.isSafeInteger(min-1));


/* Number.EPSSILON프로퍼티, ES6에서 미세한 반올림 오차가 발생해서 정확하게 오차없이 부동 소수점 숫자를 비교하기 위함 */

console.log(0.1+0.2);
console.log(0.9-0.8);

/* Math.abs 는 음수 양수를 제외한 절대값으로 표현 null 또는 공백은 0 그외 NaN */

function epsilonEqual(a, b){
    return Math.abs(a-b)<Number.EPSILON;
}

//계산식과 예상결과값 넣어 기대값의 미세한 반올림차이를 무시하고 비교하게 해준다.
console.log(epsilonEqual(0.1+0.2, 0.3));
console.log(epsilonEqual(0.9-0.8, 0.1))


/* 양수 음수 확인 The Math.sign(number)함수 */
console.log("양수음수값 확인 Math.sign(number)")
console.log(Math.sign(11));//1
console.log(Math.sign(-11));//-1
console.log(Math.sign(0));//0

/* 소수점이하 생략 */
console.log("소수점 이하 생략 Math.trunc()")
console.log(Math.trunc(11.17));
console.log(Math.trunc(-1.112));
console.log(Math.trunc(-1.112));



/* 32비트 부동 소수점 값으로 반올림하는 함수 Math.froun(number) */
console.log(Math.fround(1.137));


/* floor 바닥, 즉 버림 */
console.log(Math.floor(1.554));//1

/* round 반올림 */
console.log(Math.round(1.34));//1
console.log(Math.round(2.499));//2

/* ceil 올림 */
console.log(Math.ceil(55.51));    // 56
console.log(Math.ceil(51.42) );    //52



