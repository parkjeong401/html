//인스타그램 아이콘 클릭 시 활성화 이미지로 변경하기
// off -> on
// like 이미지 클릭 시 off -> in 변경결과
// const like = document.querySelector('.like img');
// console.log(typeof like);
// console.log(like.src);
// instar.js 위치에서 like_on.png 연결 시 프로젝트 최상위 폴더 기준(html) 연결
// like.src = './images/like_on.png';
// instar.css 위치에서 like_on.png 상대경로연결
// ../images/like_on.png

// mouseover, mouseout 마우스 올렸을 때 나갔을 때 이벤트
// off 이미지에 마우스 올리면 on 변경
// off 이미지에 마우스를 나가면 off 변경
const likeIcon = document.querySelector('.like img');
const commenetsIcon = document.querySelector('.commenets img');
const paperIcon = document.querySelector('.paper img');
console.log(likeIcon);
console.log(commenetsIcon);
console.log(paperIcon);

function iconSrc(target, name, status){
    // return likeIcon.src = `./images/like_${status}.png`; 
    return target.src = `./images/${name}_${status}.png`; 
}

likeIcon.addEventListener('mouseover',function(){
    // likeIcon.src = './images/like_on.png';
    iconSrc(likeIcon, 'like', 'on');
})
likeIcon.addEventListener('mouseout',function(){
    // likeIcon.src = './images/like_off.png';
    iconSrc(likeIcon,'like','off');
})

commenetsIcon.addEventListener('mouseover',function(){
    iconSrc(commenetsIcon,'comment','on');
})
commenetsIcon.addEventListener('mouseout',function(){
    iconSrc(commenetsIcon,'comment','off');
})

paperIcon.addEventListener('mouseover',function(){
    iconSrc(paperIcon,'paper','on');
})
paperIcon.addEventListener('mouseout',function(){
    iconSrc(paperIcon,'paper','off');
})


/* commenetsIcon.addEventListener('mouseover',function(){
    commenetsIcon.src = './images/comment_on.png';
})
commenetsIcon.addEventListener('mouseout',function(){
    commenetsIcon.src = './images/comment_off.png';
})
paperIcon.addEventListener('mouseover',function(){
    paperIcon.src = './images/paper_on.png';
})
paperIcon.addEventListener('mouseout',function(){
    paperIcon.src = './images/paper_off.png'; 
})*/