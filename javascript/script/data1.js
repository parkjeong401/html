// ============변수복습
var a = 2025;
var b = '자바스크립트';
var c; //undefined 값이 정의되지 않음(대입값이 존재안함)
console.log(a, b, c);
console.log('a'+1); //2026 숫자를 가진 변수+숫자데이터
console.log(b+' 공부');// 문자를 가진 변수+문자데이터 = 문자데이터 
console.log(a+c); //숫자를 가진 변수+정의되지 않은 변수 Not a Number(NaN)
console.log(a+b);//숫자 변수 + 문자 변수= 문자 데이터 
c = 1;
console.log(a+c);//숫자 변수 + 숫자 변수= 숫자
console.log(a-c);//숫자 변수 - 숫자 변수= 숫자 
console.log('---------------------')
// 함수 생성 문법 function 함수명(){실행식;}
function abcPlus(){
    console.log(a+b+c);
}
// 메서드() 공부
/* var d = window.prompt('1+1은?');
console.log(d); */
// prompt와 function함수 활용
// 1. 변수 생성 age
// 2. 함수 생성 abcFunc
// 3. 버튼 클릭 시 2번 함수를 호출 onclick="abcFunc()"
function abcPlus(){
    var a = window.prompt('올해 몇살이세요?');
    console.log(a+'살');
    console.log(typeof a);
}
/* var age;
function abcFunc() {
    age = window.prompt('올해 몇살이세요?');
    console.log(age+'살입니다.');
} */
var mbti;
var blood;
function abcFunc(){
    mbti = window.prompt('MBTI가 뭐예요?');
    console.log(mbti+'입니다.');
    console.log('mbti의 데이터타입은',typeof mbti);
    blood = window.prompt('혈액형이 뭐예요?');
    console.log(blood+'입니다.');
    console.log('혈액형의 데이터타입은',typeof blood);
}
// 변수 선언 var, let, const
var a;//상단에 a가 존재하는 상태로 중복 a를 만듬
console.log(a);//중복 문제를 발견하지 못함
/* let b; */
console.log(b);
// 상수는 선언과 동시에 변하지 않는 값을 바로 대입해야 함
const e = 2024;
console.log(e); 
console.log('--------------------');
console.log(typeof a);//a변수의 데이터 타입 확인 number(숫자)
console.log(typeof b);//b변수의 데이터타입 확인 String(문자)
console.log(typeof(c));//c 변수의 데이터타입 확인 number(숫자)
console.log(typeof(a+b));//a와 b변수를 더한 결과 데이터타입 확인 String(문자)
console.log(typeof(a+c));//a와 c변수를 더한 결과 데이터타입 확인 number(숫자)
console.log('-------------특수데이터연습--------')
let f;
let g;
console.log(typeof(f, g));//undefined
f = '';
console.log(typeof f);//string
f = '아이디를 입력하세요.';
console.log(typeof f);//string
f = null;//f 변수의 값을 비운다
// 문자데이터를 초기화하하는 경우는 null보다 '' 빈 문자데이터를 많이 활용함
console.log(typeof f);//object
g = 100;
console.log(typeof g);//number
g = null;//숫자데이터 특징이 사라지고 object만 남음
g = 0;//숫자데이터는 유지한 상태로 0 값으로 초기화 함
console.log(typeof g);//number
console.log('--------------템플릿문자열--------');
let coffee = 1500;
let lunch = 6000;
let total = coffee+lunch;
// 오늘 총 지출액은 ? 입니다.
console.log(`오늘 총 지출액은 ${total}원입니다.`)
// 2단 구구단 출력 하기 ex) 2x1=2
// dan99
let dan;
/* console.log(`${dan}x1=${dan*1}`);
console.log(`${dan}x2=${dan*2}`);
console.log(`${dan}x3=${dan*3}`);
console.log(`${dan}x4=${dan*4}`);
console.log(`${dan}x5=${dan*5}`);
console.log(`${dan}x6=${dan*6}`);
console.log(`${dan}x7=${dan*7}`);
console.log(`${dan}x8=${dan*8}`);
console.log(`${dan}x9=${dan*9}`); */
function dan99() {
    dan = window.prompt(`구구단 몇단이 궁금한가요?`);
    console.log(`${dan}x1=${dan*1}`);
    console.log(`${dan}x2=${dan*2}`);
    console.log(`${dan}x3=${dan*3}`);
    console.log(`${dan}x4=${dan*4}`);
    console.log(`${dan}x5=${dan*5}`);
    console.log(`${dan}x6=${dan*6}`);
    console.log(`${dan}x7=${dan*7}`);
    console.log(`${dan}x8=${dan*8}`);
    console.log(`${dan}x9=${dan*9}`);
    console.log(`구구단은 ${dan}입니다.`)
}