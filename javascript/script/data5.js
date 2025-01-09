//연결연산자와 더하기 연산자
let data1 = 'hellow'+'js' //문자+문자 (연결연산자)
let data2 = '1'+2; //문자+숫자 (연결연산자)
let data3 = (1+1)+'number'; //(숫자+숫자)+문자 더하기연산자, 연결연산자
let data4 = 'num'+(2-2)+'ber';
let data5 = 4;//재료변수
let data6 = 2;//재료변수
let result = data5+data6;//재료 이용 결과 담는 변수
// 나누기와 나머지 연산자
let data7 = 10;
let data8 = 3;
let data9 = 5;
let data10 = data9 + 10;
let result3 = data10;

console.log(result3);
let result2 = data7 / data8;
console.log(result2);
result2 = data7 % data8;
console.log(result2);

console.log(result, typeof result); //number
result = data5-data6;
console.log(result, typeof result); //number
result = data5 * data6;
console.log(result); //
result = data5 / data6;
console.log(result);
result = data5 % data6;
console.log(result);

console.log(data1, typeof data1); //string
console.log(data2, typeof data2); //string
console.log(data3, typeof data3); //string
console.log(data4, typeof data4); //string
// =============이항 연산자 활용 더하기만 되는 계산기 만들기
// 1."firstInput"첫번째 값을 담는 input / 값 인식속성 value
// 2."secondInput" 값을 담는 input / 값 인식속성 value
// 3."btn" 1,2번을 인식하는 결정버튼 / 이벤트 click
// 4. "total" 3번의 버튼 조건 달성 시 1,2값을 담는 결과 변수 / 더하기(+)
// 5. "totalP" 4번의 결과변수를 p 출력명령 / innerHTML 속성
const firstInput = document.querySelector('#val1');
const secondInput = document.querySelector('#val2');
const btn = document.querySelector('#btn');
const totalP = document.querySelector('#result');

// console.log(firstInput,secondInput,btn,totalP);
// console.log(total);
btn.addEventListener('click',inputFunc);

function inputFunc(){
    const total = Number(firstInput.value) + Number(secondInput.value);
    console.log(typeof(firstInput.value));//string
    totalP.innerHTML = total;
}

/* btn.addEventListener('click',function(){
    const total = Number(firstInput.value) + Number(secondInput.value);
    console.log(typeof(firstInput.value));//string
    totalP.innerHTML = total;
}); */
// =================증감연산자 공부
let x = 5;
let y = ++x;//x++ 증가연산자(무조건 1씩만 증가) 후위 연산자
console.log(x,y);
y = x++;
console.log(x,y);
x= ++y;
console.log(x,y);
x++; //대입없이 바로 증감연산
console.log(x,y);
// ====================증감연산자 문제
let a = 10;
let b = 20;
let c = 30;
let d = 40;
// ===================== a,b,c의 값은? 정답: 10,20,30,40
a++;
--b;
c++;
--d;
console.log(a,b,c,d);
// ==================== a,b,c,d의 값은? 정답:11,19,31,39 (o)
a = ++b;//20 20
b = a++;
console.log(a,b,c,d);
// ===================== a,b,c,d의 값은? 정답:a=21(기존12),b=20,c=31,d=39
c = a+b;
d = ++c;
console.log(a,b,c,d);
// ===================== a,b,c,d의 값은? 정답:a=21(기존12) b=20 c=42(기존32) d=42(기존41)
a = ++c+10;
b = --d+1;
console.log(a,b,c,d);
// ======================a,b,c,d의 값은? 정답: a=53(기존43) b=42(기존41) c=43(기존33) d=41(기존40)

// =========================복합대입 연산자
let number = 10;
// number = number + 5;
number += 5;
console.log(number);//15
// number = number - 5;
number -= 5;
console.log(number);//10
// number = number *5;
number *= 5;
console.log(number); //50
// number = number / 5; 
number /= 5;
console.log(number); //10
// number = number % 5;
number %= 5;
console.log(number); //0

// =========================하루 가계부 만들기 문제
// 1.transprotPay 첫번째 값을 담는 input /값 인식 value
// 2.foodPay 두번째 값을 담는 input /값 인식 value
// 3.coffeePay 값을 담는 input /값 인식 value
// 4."totalbtn" 지출금액 버튼 변수 / 이벤트
// 4-1."totalPrice" 클릭 시 1,2,3의 값을 모두 더함 
// 4-2. 5번에 출력 
// 5. "todayResult" 출력 0 qustn / innerHTML 속성
const transprotPay = document.querySelector('#money1');
const foodPay = document.querySelector('#money2');
const coffeePay = document.querySelector('#money3');
const totalbtn = document.querySelector('#totalBtn');
const totalResult = document.querySelector('.todayResult span');
console.log(transprotPay,foodPay,coffeePay,totalbtn,totalResult);
totalbtn.addEventListener('click',todayFunc);
function todayFunc(){
    const payResult = Number(transprotPay.value) + Number(foodPay.value) + Number(coffeePay.value);
    console.log(typeof(transprotPay.value));
    totalResult.innerHTML = payResult.toLocaleString('ko-kr') 
}

/* totalbtn.addEventListener('click',function(){
    const payResult = Number(transprotPay.value) + Number(foodPay.value) + Number(coffeePay.value);
    console.log(typeof(transprotPay.value));
    totalResult.innerHTML = payResult.toLocaleString('ko-kr') 
    //숫자가 클 경우 알아보기 쉽게 국제적으로 통용되는방식은 , 공백등이 있고 이것들은 문자(toLocaleString('나라이름 약자'))
}) */
    // ===================== 입금시 천원 주는 자바스크립 은행 관련 문제
// 1."bankInput" input / 값 인식 value
// 2."bankTotal"  총 잔액표시 - total잔액변수 출력
// 3."depositBtn" 입금금액 버튼 변수 / 이벤트
// 4."total" 총 잔액 데이터 초기값0
// 5."deposit" 1번 입금금액에 추가되는 이자 1000
// ============================================
// * "total" 총 잔액 표시
// * "bankInput" 입금액 입력
// * "depositBtn" 입금하기 버튼 클릭
// * "deposit" 입금액 인식하고 이자가 더해짐
// * "total" 총 잔액에 포함됨
// * "bankTotal" 총 잔액에 표시됨
let total = 0;
const bankInput =document.querySelector('#bank_input');
const depositBtn =document.querySelector('#deposit_btn');
const bankTotal =document.querySelector('#bank_total');
console.log(total,bankInput,depositBtn,bankTotal);

depositBtn.addEventListener('click',function(){
    bankFunc(Number(bankInput.value)*0.1);
});

function bankFunc(interestRate){
    let deposit = Number(bankInput.value) + interestRate;
    total += deposit;
    bankInput.value = 0;
    // bankInput.value = '';
    bankTotal.value = total.toLocaleString('ko-kr');
}

/* depositBtn.addEventListener('click',function(){
    let deposit = Number(bankInput.value) + 1000;
    total += deposit;
    bankInput.value = 0;
    // bankInput.value = '';
    bankTotal.value = total.toLocaleString('ko-kr');
}) */

// =================================함수의 변경되는 데이터 매개변수 공부
// function 함수명(매개변수){함수실행값} //함수선언식(선언만으로 결과는 출력안됨)
// 함수명(매개변수); //함수호출식(함수 선언 후 호출은 위, 아래 어디든 작성가능)

// 매개변수가 없는 함수
// 카페 키오스크는 아메리카노만 주문이 가능하며 수량은 무조건 한 잔만 가능
// 출력예) 아메리카노 1잔 나왔습니다.
/* function kiosk(){
    func_result.innerHTML = '아메리카노 1잔 나왔습니다.';
} */
/* function kiosk(num){
    func_result.innerHTML = `아메리카노 ${num}잔 나왔습니다.`
} */
// 매개변수가 2개 있는 함수(메뉴와 수량을 변경 가능)
function kiosk(menu,num){
    func_result.innerHTML = `${menu} ${num}잔 나왔습니다.`
}

const func_btn = document.querySelector('#func_btn');
const func_result = document.querySelector('.func_result');
let user_num = 5;
let user_menu = '카페라떼';
// func_btn.addEventListener('click',kiosk);
func_btn.addEventListener('click',function(){ kiosk(user_menu,user_num) });

//========================함수의 return(외부반환값) 공부
// function 함수명(매개변수){함수실행값} //함수선언식(선언만으로 결과는 출력안됨)
// 함수명(매개변수); //함수호출식(함수 선언 후 호출은 위, 아래 어디든 작성가능)

function func1(x, y) {
    // console.log(x + y);
    console.log('test');
    return x+y; //실행 메서드를 포함하지 않고 외부에서 필요한 결과값만 반환하고 return은 맨마지막에 작성하며 return은 함수당 1개씩만 사용가능함
}
// func1(1, 2);
console.log(func1(1,2)); //실행식을 함수 호출 값을 가진채로 작성함
alert(func1(2,3));

let num1 = 10;
let num2 = 20;
function func2(x, y) {
    num1 += num2;
    num2 = x+y;
    num1 +=num2;
    return console.log(num1);
}
//console.log(func2(2,4)); //36
func2(2,4);

// ==============================구구단 만들기
// 사용자가 2를 입력하면 2x1~2x9까지 구구단 결과가 p태그에 출력되는 결과
// 사용자가 5를 입력하면 5x1~5x9까지 결과가 p태그에 출력되는 결과
const danInput = document.querySelector('#dan');
const danBtn = document.querySelector('#danbtn');
const dan99result = document.querySelector('.dan99result');

function dan99(dan){
    dan99result.innerHTML =`${dan}*1=${dan*1}<br>`
    dan99result.innerHTML +=`${dan}*2=${dan*2}<br>`
    dan99result.innerHTML +=`${dan}*3=${dan*3}<br>`
    dan99result.innerHTML +=`${dan}*4=${dan*4}<br>`
    dan99result.innerHTML +=`${dan}*5=${dan*5}<br>`
    dan99result.innerHTML +=`${dan}*6=${dan*6}<br>`
    dan99result.innerHTML +=`${dan}*7=${dan*7}<br>`
    dan99result.innerHTML +=`${dan}*8=${dan*8}<br>`
    dan99result.innerHTML +=`${dan}*9=${dan*9}<br>`
}
danBtn.addEventListener('click',function(){dan99(Number(danInput.value)); })