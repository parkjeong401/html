//const 변수명 = new Swiper('사용정의클래스명', {속성:값,속성:값,})
//const 변수명 = new Swiper('사용정의클래스명', {속성:값,속성:값},)
const bestSwiper = new Swiper('.best_swiper',{
    // 속성:'값', 문자일경우 ''
    // 속성:값 숫자일 경우
    effect:'fade',
    autoplay:{
        delay:2000,
    },
});