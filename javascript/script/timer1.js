//타이머 함수
// 일정시간마다 반복하는 setInterval
// setInervla(실행함수, 실행시간)
// const 타이머 변수 = setInervla(실행함수, 실행시간)
let num = 5;
const timerDiv = document.querySelector('.timer');
const timer1 = setInterval(function(){
    // console.log('timer'+num)
    // timerDiv.textContent = num
    // num--;
    // if(num == 0) window.location.href = './index.html';
    // timerDiv.textContent = num
}, 1000);

console.log('==============')
// 애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머
let box_num1 = 0;
const boxAni = document.querySelector('.box');
const boxTimer = document.querySelector('.box_timer');
let boxTimer1 = setInterval(timerFunc, 1000)
function timerFunc(){
    // console.log('boxtimer'+num)
    boxTimer.innerHTML = `진행시간 : ${box_num1}초`
    box_num1++;
};

//sopt버튼 클릭 시 진행시간. 애니메이션 모두 정지(paused)
const stopBtn = document.querySelector('#stop');
//replay 버튼 클릭 시 진행시간. 애니메이션 다시재생(running)
stopBtn.addEventListener('click',()=>{
    clearInterval(boxTimer1)
    // boxAni.style.animation = 'none';
    boxAni.style.animationPlayState = 'paused';
})
const replayBtn = document.querySelector('#replay');
replayBtn.addEventListener('click',()=>{
    boxAni.style.animationPlayState = 'running';
    boxTimer1 = setInterval(timerFunc, 1000)
})

// 한 글자씩 작성하는 자바스크립트
const text = 'Portfolio 2025';
let i = 0; //글자 인덱스 인식 변수
const textSpan = document.querySelector('.container .text');
const timer3 = setInterval(writer, 200);
function writer(){
    if(i <= text.length ){
        if(i==9) textSpan.innerHTML += '<br>'
        textSpan.innerHTML += text.charAt(i);
        i++;
        console.log(i, text.charAt(i))
    }
}
writer()//함수호출

// 연습
const text2 = 'Imagin Dragons 내한기원!';
let j = 0;
const textSpan2 = document.querySelector('.container2 .text');
const timer4 = setInterval(writer1,200);
function writer1(){
    if(j <= text2.length){
        if(j==14) textSpan2.innerHTML +='<br>'
        textSpan2.innerHTML += text2.charAt(j);
        j++;
        console.log(j, text2.charAt(j))
    }
}
writer1()