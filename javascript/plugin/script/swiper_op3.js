// const newSlide = new Swiper('.new_slide_wrap'); //기본형태
const newSlide = new Swiper('.new_slide_wrap',{
    // 속성:값,
    autoplay:{
        delay:2000,
        disableOnInteraction:false, //사용자 상호작용 상관없이 계속 진행
    },
    loop:true, //무한반복설정
    // speed:1200, //애니메이션 전환 시 걸리는 시간
    mousewheel:true, //웹사이트 수직 페이지 전환시에만 사용
    slidesPerView:3,
    //(위)표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야함!
    spaceBetween:20,
    slidePerGroup:3,
    centerdslides:true,
});