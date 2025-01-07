//객체공부
//변수생성키워드 변수명 = {속성:값, 속성:'값', 속성:값};
//변수명은 객체명으로도 부를 수 있음
//값이 문자인 경우 따옴표를 묶고 숫자 또는 다른 데이터타입(null)인 경우 값만 작성함
//객체값(속성:값에서 값)을 호출할 떄는 변수명.속성을 작성함
//객체 선언 시 속성명은 대입하는 값과 동일한 뜻을 가지는 속성으로 의미있게 지정함
let cat1 = {
    age:2,
    name:'나비',
    color:'하양',
    charact:'착하고 애교 많음'
};
console.log(cat1);
console.log(cat1.age);
console.log(cat1.color);
//나비는 검정고양이고 1살이에요.
console.log(`${cat1.name}는 ${cat1.color}고양이고 ${cat1.age}살이에요.`);
//변수명은 항상 다르게 선언해야 하지만 대입되는 객체 속성은 중복이 가능함
let cat2 = {
    color:['검정','흰색','노랑'],//2개 이상 값 설정 시 값으로 배열 활용
    age:2,
    name:'삼색이',
};
console.log(cat2);
console.log(cat2.color[0],cat2.color[1],cat2.color[2]);
console.log(cat2.color.length); //3
//객체.속성.속성;
//속성이나 메서드 선언 시 반드시 앞에선 객체를 먼저 선언함
//객체 뒤 속성이 배열인 경우는 배열의 속성(length)를 연결해서 작성할 수 있음
//맨 앞에 객체가 선언됐다면 필요한 경우 속성.속성.속성을 속성끼리 연결할 수 있음
//객체 선언
//고양이 종은 코리안 숏헤어, 털은 흰색과 검은색, 나이는 1살,성별은 암컷,입양 전, 중성화전,건강상태 양호에 대한 정보로 객체 생성하기
let cat3 = {
    species:'코리안 숏헤어',
    color:['흰색,검은색'],
    age:1,
    gender:'암컷',
    adoption:'전',
    neutering:'전',
    condition:'양호',
};
console.log(cat3);
console.log(cat3.gender);
console.log(cat3.age, cat3.color);
console.log(cat3.species);
console.log(cat3.adoption,cat3.neutering,cat3.condition);
//cgv 영화 페이지 조사 기준 '하얼빈' 반복되는 데이터 조사 후 객체 생성하기
//const movie = [{속성:값, 속성:값},{},{}]
const movie = [{
    korName:'하얼빈',
    enName:'HARBIN',
    director:'우민호',
    actor:['현빈 ,  박정민 ,  조우진 ,  전여빈 ,  박훈 ,  유재명 ,  릴리 프랭키 ,  이동욱'],
    genre:['역사'],
    infor:'15세이상관람가, 114분, 한국',
    opening:'24.12.24',
    story:'1908년 함경북도 신아산에서안중근이 이끄는 독립군들은 일본군과의 전투에서 큰 승리를 거둔다.',
    egg:'89%',
    rate:'21.5%',
    poster:'./images/harbin_poster.jpg',
},{
    korName:'페라리',
    enName:'FERRARI',
    director:'마이클 만',
    actor:['아담 드라이버 ,  페넬로페 크루즈 ,  쉐일린 우들리'],
    genre:['드라마,액션'],
    infor:'15세이상관람가, 131분, 미국, 영국, 이탈리아',
    opening:'2025.01.08',
    story:'1957년, 전세계를 뒤흔든 페라리의 충격 실화가 드러난다!',
    egg:'99%',
    rate:'12.1%',
    poster:'./images/ferrari_poster.jpg'
}];
console.log(movie);
//배열과 객체 함께 사용하기
//고양이 보호소 정보
//봄이, 코숏, 1살, 남, 갈색, 흰색, 검은색, 중성화 유
//여름이, 코숏, 2살, 여, 검은색, 흰색, 중성화 무
//가을이, 러시안 블루, 1살, 남, 회색, 중성화 유
//겨울이, 페르시안, 2살, 남, 흰색,노랑 중성화 무
const catShelter = [{
    name:'봄이',
    type:'코숏',
    age:1,
    gender:'남',
    color:['갈색','흰색','검은색'],
    neutering:'유'
},{
    name:'여름이',
    type:'코숏',
    age:2,
    gender:'여',
    color:['검은색','흰색'],
    neutering:'무' 
},{
    name:'가을이',
    type:'러시안블루',
    age:1,
    gender:'남',
    color:['회색'],
    neutering:'유'
},{
    name:'겨울이',
    type:'페르시안',
    age:2,
    gender:'남',
    color:['흰색','노랑색'],
    neutering:'무'
}];
console.log(catShelter);
console.log(catShelter[2].name)
console.log(catShelter[2].color[0])
console.log(catShelter[2].gender)
console.log(catShelter[1].name)
console.log(catShelter[1].color[0])
console.log(catShelter[0].name)
console.log(catShelter[0].color[0])
console.log(catShelter[3].name)
console.log(catShelter[3].color[0])
//window 객체 활용한 메서드 종류
/* let msg = window.alert('제작 중 입니다')
let msg2 = window.prompt('언제 완성되나요?') 
let msg3 = window.confirm('확인되었습니다')
console.log(msg);
console.log(msg2);
console.log(msg3); */
/* let msg_print = window.print(); */
//confirm -> print 순서로 confirm메서드의 '확인' 클릭 시 print기 실행되게 만드는 순서로 인쇄기능을 제작함
function gg(){
    console.log('test')
    window.location.href = 'https://google.com';
}
window.document.write('test')
window.document.body.style = 'background-color:yellow'
//자바스크립트에서 하는 css(style)는 inline 구조로 적용되기 때문에 가장 우선순위가 높은 디자인으로 적용
//window == 최상위 개념(생략)
prompt('질문'); //window객체명이 기본값이라 생략한 상태(기본 내장 메서드 혼자만 있는 상태가 동작된다라고 공부해선 안됨)
//document.body.style
//document == 웹브라우저 화면
//body == 웹브라우저 화면 내에서 제어하고 싶은 객체 대상(속성)
//style == body에 적용하고 싶은 추가 속성, 속성 뒤는 대입연산자(=)로 값을 대입함