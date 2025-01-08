// =====================DOM 변수대입복습
//변수가 변하지 않는 고정 데이터라면?
//const 변수명 대입연산자 반복되는대입값;(DOM)
//변수가 변할 수 있는 수동 데이터라면?
//let 변수명 대입연산자 반복되는대입값;
//var 변수명 대입연산자 반복되는대입값;
//==============변수대입 DOM요소가 태그노드라면? ->선언 후 배열형태확인 사용
//const 변수명 대입연산자 document.getElementsByTagName('태그');
//==============변수대입 DOM요소가 클래스노드라면? ->선언 후 배열형태확인 사용
//const 변수명 대입연산자 document.getElementsByClassName('클래스명');
//==============배열형태 노드라면 직접사용시 [0] 인덱스 숫자 이용
//==============변수대입 DOM요소가 아이디노드라면?
//const 변수명 대입연산자 document.getElementById('아이디명');
const headerTag = document.getElementsByTagName('header');
console.log(headerTag);//단순 테스트확인 시 배열 전체 확인 가능
//애니메이션 및 동적, 디자인 기능 등 직접적용 시 배열 직접 접근(인덱스 활용)
headerTag[0].style = 'background-color:yellow';
console.log(typeof headerTag);//object

const logo = document.getElementsByTagName('h1');
logo[0].style = 'color:red';

const searchDiv = document.getElementsByClassName('search');
searchDiv[0].style = 'border:2px solid blue';

const searchInput = document.getElementById('txt');
console.log(searchInput);
searchInput.style = 'background-color:lime';

const buttonId = document.getElementById('btn');
console.log(buttonId);
buttonId.style = 'color:red';

//querySelector 메서드는 body태그에 작성한 태그 순서상 먼저 시작한 대상을 인식함. header태그가 두개라면 먼저 선언된 header태그만 인식해서 변수에 대입함
const hea = document.querySelector('header');
console.log(hea);
hea.style = 'background-image:url(https://i.pinimg.com/736x/c6/f2/f4/c6f2f48373ad33825e30f155d1c1c684.jpg)';

//querySelector는 getElement명령어처럼 class, id, tag선언이 함께 하지 않기 때문에 querySelector의 메서드괄호 안에서 class, id, tag를 구분할 수 있는 표시를 함께 함. 태그라면 태그이름만, 클래스라면 .클래스명, 아이디라면 #아이디명으로 작성해야 구분함.
const sea = document.querySelector('.search');
console.log(sea);
sea.style = 'border-bottom:5px solid red';

const searTxt = document.querySelector('#txt');
console.log(searTxt);
searTxt.style = 'opacity:0.5';
const gn = document.querySelector('.gnb');

const gnbLi = document.querySelector('.gnb li');

const gnb = document.querySelectorAll('.gnb li');
console.log(gnb);
gnb[0].style = 'background-color:red';
gnb[1].style = 'background-color:green';
gnb[2].style = 'background-color:yellow';
gnb[3].style = 'background-color:lime';

const gnbA = document.querySelectorAll('.gnb a');
console.log(gnbA);
gnbA[0].style = 'opacity:0.5';
gnbA[1].style = 'border-bottom:5px solid blue';
gnbA[2].style = 'color:coral';
gnbA[3].style = 'color:white';
