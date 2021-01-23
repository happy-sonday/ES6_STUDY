/* 배열 */
/* 
Array.from(iterable, mapFunc, this)메소드
이터러블 객체에서 새 배열 인스턴스를 생성하는 메소드
1 이터러블 객체
2 각 원소를 상대로 호출할 콜백(맵 함수)
3 맵 함수 내부의 this 값을 각각 가리킨다.
*/

let str = "0123";
let obj = {number :1};
/* let arr = Array.from(str, (value) =>
    { 
        return parseInt(value) +this.number;
        
    },obj);

    console.log(arr); */

    let arr = Array.from(str, function(value)
    { 

        //this.number는 obj멤버의 number 프로퍼티의 값을 불러온다.
        return parseInt(value) +this.number;
        
    },obj);

    console.log(arr);

    /* 크기가 가변적인 Array.of(values...) */

    let arr1 = Array(2);
    let arryOf = Array.of(2,3,100,6,10,34,5);

    console.log(`arr1 인덱스0의 값은 ${arr1[0]}이고,  크기는 ${arr1.length}이다.`);
    console.log(`arryOf 인덱스2의 값은 ${arryOf[2]}이고,  크기는 ${arryOf.length}이다.`);


    /* fill(value, startIndex, endIndex)  values값으로 자동 채우기*/

    let fill_arr1=[1,2,3,4,5,6,7,8,9,10];
    let fill_arr2=[11,12,3,4,5,6,7,8,9,10];
    let fill_arr3=[31,32,33,4,5,6,7,8,9,10];
    let fill_arr4=[41,42,43,4,5,6,7,8,9,10];
    let fill_arr5=[51,52,53,4,5,6,7,8,9,10];
    let fill_arr6=[61,62,63,4,5,6,7,8,9,10];
    
    fill_arr1.fill('채움');//배열의 크기만큼 5로 채운다
    fill_arr2.fill('채움',2);//배열 내 두번째까지 출력하고 나머지 5로 채움
    fill_arr3.fill('채움',3, 9);//배열 3번째 요소부터 9번째까지 5초 채움
    fill_arr4.fill('채움',0, -5);//endIndex는 기본 -1부터 시작 따라서 끝에서 역순 6번째부터 첫번째까지 '채움'
    fill_arr5.fill('채움', -6, 5);
    fill_arr6.fill('채움', -8,5);
     

    console.log(fill_arr1);
    console.log(fill_arr2);
    console.log(fill_arr3);
    console.log(fill_arr4);
    console.log(fill_arr5);
    console.log(fill_arr6);
    
    

    /* 배열 내 값이 있는지 확인 array.find(func, this) 결과값은 해당 값을 돌려줌 */

    let x = '개발자';
    let job_arr = ['디자이너', '마케터', '영업', '품질관리원','개발자']
    let find_result=job_arr.find(function(value,index, array)
        {
            if(value==this){
                return true;
            }

        }, x );
    
        console.log(find_result);


        /* findIndex(testingFunc, this) 결과값을 요소 대신에 인덱스를 반환 */

        let y = 543;
        let num_arr = [ 11, 23, 543];
        let result_idx = num_arr.findIndex(function(value, idx, array){

            if(value==this){
                return true;
            }
        }, y)
    
        console.log(result_idx);


        /* 배열값 무리를 다른위치에 복사해 넣기 */
        /* 첫번째 인자 복사된 인자가 놓여지게 될 인덱스
            두번째 인자 복사하려는 시작 인덱스
            세번째 복사하려는 영역의 마지막 인덱스
         */
        let arr_cp1=[11,12,13,14,15,17,18,19,20,21,22,23];

        //arr_cp1.copyWithin(1,4,9);
        arr_cp1.copyWithin(4,1, 3 )
        

        //console.log(arr_cp1);//11 [15 17 18 19 20] 19 20 21 22 23
        console.log(arr_cp1)//11 12 13 14 [12 13] 19 20 21 22 23

        

        /* 키,값을 가진 이터러블 객체를 반환하는 메소드 */
        /* entries()는 각 인덱스 정보를가진 키,값으로 반환 */
        /* keys()는 해당 키의 인덱스 정보 */
        /* values()는 해당 이터러블 객체, 즉 값을 반환 */

        let justArrr = ['a', 'b', 'c'];
        let entries = justArrr.entries();
        let keys = arr.keys();
        let values = justArrr.values();
        
        console.log(...entries);
        console.log(...keys);
        console.log(...values);







    