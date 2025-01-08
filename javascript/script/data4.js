// window.document.body.style = 'background-color:aqua';
document.write('250107'); //window 생략(기본 내장됨)
//DOM
//객체는 변수에 선언해야 함
//변수 생성키워드 생성변수명 = 변수에 대입되는 값;
//변수 선언 시 [] 배열선언표시 없이 복수형 데이터를 저장하면 자동으로 배열로 인식됨
//배열 인식 결과 -> 각 데이터 [0] [1] 인덱스로 구분되고 length 속성이 자동추가됨
const title1 = document.getElementsByTagName('h1');
const title2 = document.getElementsByTagName('h2');
console.log(title1);
console.log(title2);
//DOM객체.속성;   //속성읽기
//DOM객체.속성 = '값';   //속성에 값 대입하기
title1[0].style = 'color:red';
title1[1].style = 'background-color:aqua';
title2[0].style = 'color:lime';
title2[1].style = 'color:coral';
title2[2].style = 'border:5px solid red';
const listWrap = document.getElementsByTagName('ul')[0];
const list = listWrap.getElementsByTagName('li');
console.log(listWrap);
console.log(list);
listWrap.style = 'background-color:aqua';//listWrap[0][0] x
list[0].style = 'background-color:yellow';
list[1].style = 'text-decoration:underline';
list[2].style = 'border:2px solid blue';
const linkWrap = document.getElementsByTagName('ul')[1];
const link = linkWrap.getElementsByTagName('li');
const aTag1 = link[0].getElementsByTagName('a');
const aTag2 = link[1].getElementsByTagName('a');
const aTagAll = document.getElementsByTagName('a');
console.log(linkWrap);
console.log(link);
console.log(aTag1, aTag2); // 0 0
console.log(aTagAll); // 0 1
/* 
HTML, CSS 작성 시 GTML의 가족관계를 우선시 하여 li가 형제, a는 각 외동으로 각각 인식하지만 JS는 최종 선택 대상 앞의 'document' 자리에 누굴 쓰는냐에 따라 그 안에 있는 태그 전체를 순서대로 인식하기 때문에 실제 HTML관계에서 a가 외동이든 아니든 'ul'을 선택했다면 ul 안 모든 a를 순서대로 인식해서 인덱스 번호를 적용함. 하지만 'li'의 경우 li 안에 a가 하나씩 밖에 배치가 안되어있으므로 각 a를  0번째로만 인식하게 됨
*/
const subTitle = document.getElementsByClassName('sub_title')[0];
console.log(subTitle);
subTitle.style = 'background-color:orange';
const menu = document.getElementsByClassName('menu')[0];
const menuLi = menu.getElementsByTagName('li');
const menuA = menu.getElementsByClassName('a');
console.log(menu);
console.log(menuLi);
console.log(menuA);
menu.style = 'background-color:yellow';
menuLi[0].style = 'background-color:coral';
menuLi[1].style = 'background-color:skyblue';
menuLi[2].style = 'background-color:lime';
menuLi[3].style = 'background-color:gray';
const notice = document.getElementById('notice');
console.log(notice);
notice.style = 'color:red';
const container = document.getElementById('container');
const title = document.getElementById('title');
const title_a = title.getElementsByTagName('a');
const contents = document.getElementById('contents');
const con_a = contents.getElementsByTagName('a');
console.log(container, title, title_a, contents, con_a);
container.style = 'background-color:yellow';
con_a[0].style = 'color:red';
con_a[1].style = 'color:gray';
console.log('=============================');
const nav = document.getElementsByTagName('nav')[0];
const gnb = nav.getElementsByClassName('gnb')[0];
const gnbLi = gnb.getElementsByTagName('li');
const lnb = gnb.getElementsByClassName('lnb')[0];
const lnbLi = lnb.getElementsByTagName('li');
const lnbLiA = lnb.getElementsByTagName('a');
nav.style = 'background-color:coral';
gnb.style = 'color:lime';