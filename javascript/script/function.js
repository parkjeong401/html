// =============함수 스코프, 지역변수와 전역변수
// 함수 외부(전역스코프 위치)
let b = 20;
let c = 30;
let a = 0;
// function 함수명(매개변수){반복 알고리즘;}
function test(){
    //함수 내부(지역스코프 위치)
    a = 10;
    console.log(a+b);
}
//선언한 함수를 사용하고 싶으면 함수 외부에서 함수를 호출해야 함!
//호출방법: 함수명()
console.log(a+b); //30
test(); //전역 스코프에서 함수 결과를 보여줄 수 있도록 함수 호출
// =============함수스코프 연습2
//최종 결과 값 순서가 6, 16으로 출력되도록 함수스코프와 호출을 이용한 문제 풀기
let x = 1;
let y;
function func1(){
    y = 5;
    console.log(x+y);
}
function func2(){
    let z = 10;
    console.log(x+y+z);
}
func1();
func2();
// 1.변수생성(버튼)
const btn1 = document.getElementById('btn1');
const btn2 =document.getElementById('btn2');
console.log(btn1);
console.log(btn2);
// 2.변수 이벤트 생성
// 이벤트대상.addEventListener('아벤트 종류',이벤트 만 족 시 실행함수);
// 이벤트대상 == 이벤트종류를 적용하고 싶은 대상
// 이벤트종류 => 태그의 인라인script로 적용 시 on을 붙이고 스크립트에서 바로 작성 시 on 없이 바로 이벤트만 작성함
btn1.addEventListener('click',function(){
    alert('hello');
})
btn2.addEventListener('click', function(){
    answer = window.prompt('1+1은?')
    alert(`쓴 답은${answer}입니다.`);
})
const num = document.querySelector('#num');
const numPlus = document.querySelector('#numPlus');
const numMinus = document.querySelector('#numMinus');
console.log(num, numPlus,numMinus);
numPlus.addEventListener('click',function(){
    num.value = Number(num.value)+1;
    console.log(typeof(num.value)); //string
})
numMinus.addEventListener('click',function(){
    num.value = Number(num.value)-1;
})
console.log(num, numPlus,numMinus);
// ===================== 직장인 수입 계산기
// 1. 월급 입력받기 prompt
// 2. 보너스 입력받기 prompt
// 3. 계산 버튼 클릭 시 click
// 4. 월급+보너스 더하기 +
// 5. 더한 결과 출력 console
// const price1 = prompt('월급 입력');
const price1 = document.querySelector('#price1');
// const price2 = prompt('보너스 입력');
const price2 = document.querySelector('#price2');
const total = document.querySelector('#total');
// total.addEventListener('click',function(){
//     const total_price = Number(price1)+Number(price2);
//     console.log(total_price);
//     console.log(typeof(total));
// })
total.addEventListener('click',function(){
    const price_total = Number(price1.value)+Number( price2.value);
    console.log(price_total);
    console.log(price1);
    console.log(price1.value);
    console.log(typeof(price1));
    console.log(typeof(price1.value));
})
console.log(price1,price2,total);