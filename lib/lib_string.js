/* 문자열 복사 repeat(count) */

console.log("ㅋ".repeat(10));
console.log("헬로오+".repeat(5));


/* 주어진 문자열 검색includes() */
let str = "안녕, 자스 쥬니어 개발자 입니다";
console.log(str.includes("자스"));//true
console.log(str.includes("안농"));//false

/* starsWith(string, index)메소드 해당 문자열로 시작하는지 검사 - 포함이 아님*/
let str2 = 'To be, or not to be, that is the question.';

console.log(str2.startsWith('To be'));         // true
console.log(str2.startsWith('not to be'));     // false
console.log(str2.startsWith('not to be', 10)); // true

/* endsWith 해당 문장열로 끝나는지 검사 */

console.log(str.endsWith("입니다"));//true


/* 템플릿 문자열  ${표현식} 태그함수로 처리할 수 있다.단, 역따옴표로 묶어야한다. */

let a1 = 20;
let b1 = 10;
let c1 = "자바스크립트";
let result_str = `${a1+b1}살 ${c1} 개발자 입니다.`;

console.log(result_str);


/* 템플릿 문자열 처리 코드 예제2 */

let tag = function (strings, ...values){
    let r  ="";

    
    console.log(`전체 문자열 크기 ${strings.length}`);    

    for(let i =  0 ; i < strings.length; i++)
    {

        
        r += strings[i];
        
        console.log(`반복문처리되는 strings ${strings[i]}`);
        if(i<values.length)
        {
            r += values[i];
            console.log(`반복문처리되는 values ${values[i]}`);
        }

        console.log(`${i} 인덱스에서 r의 결과값 ${r}`);
        
    }

    return r;

};

let a2 =22;
let b2 =12;
let c2 = "자바스크립트";

let tag_str = tag `나는 ${a2+b2}살이고 ${c2}를 좋아해`;
console.log(tag_str);

//배열 리터럴과 귀결값resolved value 배열이 무엇인가?





/* 개행 곁따옴표일 경우 \n 역따옴표를 쓰는 경우 그냥 문자쓰듯이 쓰면 된다. */

console.log(`첫번째 줄 
두번째줄
세번째줄`);

/* 
String.raw
이스케이프 문자열을 해석하지않고 일반문자열로 출력하는 태그 함수
 */


 let s = String.raw `줄바꿈은  \n으로 표시했으며 띄어쓰기는 &nbsp를 써줘야한다.`

console.log(s);