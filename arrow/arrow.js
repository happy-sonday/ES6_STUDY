
/* arrow function */
//var circleArea =function(pi,r){ var area= pi * r *r; return area;}
//var result = circleArea(3.14, 3);
//console.log(result);

let circleArea = (pi, r) => pi * r *r;
let result_area = circleArea(3.14, 3);

console.log(result_area);

/* this */
//일반함수
/* var varObject = {
    f1 : function(){        console.log(this);
        var f2= function(){           console.log(this);        }

        f2();
        setTimeout(f2, 1000);
    }
    

}
varObject.f1();
 */
console.log('애로우 함수의 this');
//화살표 함수
let arrowObject = {
    f1 : () => {
        console.log(this);

        let f2 = () =>{console.log(this);}
            f2();
            setTimeout(f2, 1000);
        
    }
}

arrowObject.f1();


/* ES6 새로운 구문 */

// var x=1, y=2;
// var object={
//     x: x,
//     y: y
// };

// console.log(object.x);


let x=1, y=2;
let object={x, y};
console.log(object.x);


/* ES6 메소드 정의 */

let obj_method = {
    objMethod(){
        console.log("안녕하세요!!ES6의 의해 호출된 메소드 결관입니다.");
    }
}

obj_method.objMethod();

/* ES6 조합 프로퍼티명 */

let object_prop ={
    ["first"+"Name"]:"수지"
}

console.log(object_prop["firstName"]);