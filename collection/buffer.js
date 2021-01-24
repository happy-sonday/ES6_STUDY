console.log("buffer_set_map 연습중 스크립트입니다.")

/* 배열 버퍼 객체 */
/*  배열은 문자열, 숫자, 객체 등 어떤 타입의 원소라도 담을 수 있고 동적으로 계속 커질 수 있는 반면,
    실행 시간이 느려지고 메모리 점유율이 높아져서 계산량이 많은 대량의 데이터가 오가는 애플리케이션이라면 큰 이슈가 될 수 있어
    배열버퍼가 등장
    숫자만 저장할 수 있고 처음에 모든 블록이 0으로 초기화 된다.

    setInt8/16/32 부호 있는 정수
    setUnit8/16/32 부호 없는 정수
    setFloat32/64 부호 있는 소수
     */
let buffer= new ArrayBuffer(80);//80바이트 크기
let view = new DataView(buffer);
view.setInt32(8,22,false);
let number = view.getInt32(8, false);//(바이트, 인자를 저장할 숫자, 엔디안)
console.log(number); //결과값 22


/* 매번 함수호출이 생산성이 떨어지므로 가변적 비트 숫자의 무리처럼 취급하도록 타입화 배열로 읽기/쓰기 방법을 사용 */
//let buffer= new ArrayBuffer(80);//80바이트 크기
let typed_array = new Float64Array(buffer);//배열 버퍼 객체의 크기는 640비트이므로 64비트의 숫자*10EA만 저장가능
typed_array[4] = 11;
console.log(typed_array.length);//따라서 배열 크기 10개
console.log(typed_array[4]);