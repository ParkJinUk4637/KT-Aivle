console.log("kt1");
console.log('kl2');
console.log('kl3');
// ctrl + alt + n : 실행

// 1. 변수선언
// 식별자 : 저장공간은 구별하는 문자열
// 식별자 문법 : 대소문자, 숫자, _, $ : 숫자 가장 앞에 X : 예약어 사용 X
// 식별자 컨벤션 : 상수(UPPER_SNAKE_CASE) : 변수, 함수 (camelCase) : 모듈(PascalCase)

// 식별자 1개, 데이터 1개
var data1 = 10;
var data2 = 'js';
// 인터프리터 언어특징 : 동적 타이핑 : 데이터 타입의 선언 없이 자동으로 데이터 타입 선언

var data5 = data6 = 'web';

// 2. 데이터 타입
// number : 숫자(정수, 실수)
// string : 문자열
// boolean : 논리값 : true, false
// function : 코드 저장하는 함수 데이터 타입
// object : 객체
var data1 = 1;
var data2 = 'js';
var data3 = true;
var data4 = function(){console.log('function');};
var data5 = {key:'value'}

console.log(typeof data1, typeof data2, typeof data3, typeof data4, typeof data5);

// 없는 데이터의 표현
// undefined(선언 되었으나 값이 할당되지 않음)
// null(선언이 되어 값이 없음이 할당됨)
// NaN(Number 데이터 타입에서 데이터 없음)
// 구별해야하는 이유 : 데이터 타입이 다름.
var data1 = undefined;
var data2 = null;
var data3 = NaN;
console.log(typeof data1, typeof data2, typeof data3);

// 3. 연산자
// 산술
// 비교
// 논리
// 할당
// 삼항연산자

var data1 = 10;
var data2 = 20;
data1 = ++data2;
data1 = data2++;

var data1 = 1, data2 = '1';
console.log(typeof data1,typeof data2);
console.log(data1 == data2, data1 === data2);

console.log(!true, true && false, true || false);

// 예금 잔고에서 인출 금액을 인출 가능하면 true, 불가능 false 출력하는 코드 작성
var balance = 10000;
var withdraw = 6000;
console.log(balance>=withdraw);

// 1회 최대 인출금액이 5000원 조건 추가
console.log((balance>=withdraw) && (withdraw<=5000));


// 예금 잔고에서 인출 금액이 인출 가능하면 '인출가능' 출력
var balance = 10000;
var withdraw = 6000;
if(balance >= withdraw){
    console.log('인출 가능');
}else{
    console.log('인출불가');
}