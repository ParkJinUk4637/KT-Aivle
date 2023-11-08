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
// 4. 조건문
var balance = 10000;
var withdraw = 6000;
if(balance >= withdraw){
    console.log('인출 가능');
}else{
    console.log('인출불가');
}

// 최대 인출 금액 5000원 조건 추가
// 인출이 불가하면 불가 사유 출력
// 인출 불가 : 잔액 부족, 최대 인출 금액 초과, 인출 가능
var balance = 2000;
var withdraw = 4000;
if(balance <= withdraw){
    console.log("인출 불가 : 잔액 부족");
}else if(withdraw>5000){
    console.log("인출 불가 : 최대인출금액초과");
}else{
    console.log("인출 가능");
}


// 5. 반복문
// for, while, break, continue
var count=3;
while(count> 0){
    count -= 1;
    console.log('js');
}

for(var i = 0; i < 3; i++){
    console.log('js');
}

// 부동 소수점 문제
var data1 = 0.1, data2= 0.2;
console.log(data1 + data2 === 0.3)
// 반올림을 해준다.

var count = 6, lotto = '';
for(var i = 0;i<count;i++){
    var randomNumber = Math.ceil(Math.random()*44) + 1;
    lotto = lotto + randomNumber + ' ';
}

console.log(lotto);

// 6. 함수
function show_lotto(){
    var count =6, lotto='';
    for(var i=0;i<count;i++){
        var randomNumber = Math.ceil(Math.random()*44) + 1;
        lotto = lotto + randomNumber+' ';
    }
    console.log(lotto);
}

show_lotto();

// 선언식과 표현식의 차이
// 선언식은 코드의 최상단으로 올라가서 선언됨 >> 호이스팅

// 익명함수
// 선언과 동시에 호출하는 함수
(function minus1(n1, n2){
    console.log(n1-n2);
}(4, 1));
// 이거 호출 안됨.
// 호출 안되면 왜 쓰는가? : F12 눌러서 개발자 도구에서 유저가 임의로 실행하지 않게 하기 위해서.

// 스코프
// 함수안과 함수밖의 영역이 서로 다른 영역의 메모리를 사용
// 함수안 : 지역 영역 : local
// 함수 밖 : 전역 영역 : global
var data = 10;
function change(){
    var data=20;
}
change();
console.log(data);

// 7. 객체 : object
// 1
var account = {
    balance: 10000,
    withdraw: function(amount){
        account.balance -= amount;
    }
}

account.withdraw(2000);
console.log(account);

// 2
function Person(name){
    this.name = name
}

var person = new Person('andy');
console.log(person);

// json 객체 : 
// 객체 > 문자열
var data = {name:'andy',addr:'seoul'};
console.log(typeof data,data);
var json = JSON.stringify(data);
console.log(typeof json,json);

// 문자열 > 객체
var jsonObj = JSON.parse(json);
console.log(typeof jsonObj,jsonObj);

console.log(NaN == NaN, NaN === NaN);
