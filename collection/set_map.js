/* set 정리 */
console.log('세트 예제')

let set = new Set("안녕하세요 자바스크립트 세트입니다.!!!");
set.add(12);//12를 추가
console.log(set.has("!"));//해당 요소가 있는지 검사
console.log(set.size);//!중복값과 공백을 제외한 각 글자의 char개념으로 하나씩 읽어 크기가 18
console.log(...set);//12가 추가된 set 객체


set.delete(12);//해당 요소 12 삭제
console.log(...set);
set.clear();//모든 값을 삭제

/* 조회보다 존재 여부를 확인하기 위해 값을 묶어둘때 사용
    어떤값이 있는 지 확인하는 용도라면 배열보다는 세트가 더 적합하다. */


/* 위크 세트 내부에 저장된 객체를 참조하는 값이 없을 때 가비지 컬렉션 대상
    따라서  */
/* 사전 지식, GC 가비지 컬렉션은 동적할당된 메모리를 회수해가는 역할
   메모리를 할당해놓고 필요없이진 뒤에 해제를 안하면 메모리 누수나 해제했던 메모리를 다시 사용하는등
   버그가 양산된다. */

   let weakset = new WeakSet();
   (function(){
       let a = {};
       weakset.add(a);      
   })()


   console.log(weakset.size);//실행결과 undefined;
   //console.log(...weakset)//Uncaught TypeError: Found non-callable @@iterator
   //weakset.clear();//Uncaught TypeError: weakset.clear is not a function




        
   /* Map 키/값으로 이루어진 collection */
   let map = new Map();
   let o = {n : 1};
   map.set(o, "A");  //맵 객체 o에 "A"추가
   map.set("2", 9);  //9라는 값을 가진 "2"라는 키 생성

   console.log(map.has("2"));
   console.log(map.get(o));//키의 해당값 조회
   console.log(...map);//[{n: 1}, "A"] ["2", 9]
   map.delete("2"); //2라는 해당 키를 가진 값 모두 삭제
   map.clear();
   
   //이터러블 객체로부터 맵 생성
   let map_1 = new Map([ [1,2], [3,4] ]);
   console.log(map_1.size);//키 개수

   /* WeakMap 또한 가비지 컬렉션 대상 */
   let weakMap = new WeakMap();
   (function(){
       let o ={ n : 1};
       weakMap.set(o, "A");       

   })()

   //키 'o'는 가비지 컬렉션 대상이다.

   let s = { m: 1};
   weakMap.set(s, "B");

   console.log(weakMap.get(s));
   /* console.log(...weakMap);

   weakMap.delete(s);
   weakMap.clear(); */
   
   

   

   