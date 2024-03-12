// 검색 영역(.search) 클릭 시 input에 강제 포커스 및 제어
// 검색 영역 div와 input 찾기
const searchEl = document.querySelector('.search');  
// const searchInputEl = document.querySelector('.search input'); 
// 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input')

//  검색 영역을 클릭하면 input 요소를 포커스 하도록 실행
searchEl.addEventListener('click',function () { // 이벤트 핸들러
  searchInputEl.focus(); // 요소에 포커스 강제 적용
});

// input 요소에 포커스 되면 placeholder 추가
// 힌트: setAttribute()
searchInputEl.addEventListener('focus', function() {
  searchInputEl.setAttribute('placeholder', '통합검색');
  searchEl.classList.add('focused');
});


// input 요소에 포커스가 해제(blur)되면 placeholder 초기와
// 힌트: setAttribute()
searchInputEl.addEventListener('blur', function() {
  searchInputEl.removeAttribute('placeholder');
  searchEl.classList.remove('focused');
});

// 스크롤 시 전역 배지(고정 배너) 숨기기
const badgeEl = document.querySelector('header .badges');

// 페이지의 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  if (scrollY >= 500) { 
    // badgeEl.style.visibility = 'hidden';
    // badgeEl.style.opacity = 0;

    // gsap.to(요소, 지속시간, 옵션: {}) 메소드: CSS 속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0, 
      display: 'none' //라이브러리에 정해진 옵션
    })
  } else {
    // badgeEl.style.visibility = 'visible';
    // badgeEl.style.opacity = 1;
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block' //라이브러리에 정해진 옵션
    })
  };
  // Quiz:
  // 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고,
  // 페이지 스크롤 위치가 500px을 넘지 않으면 배지 요소 보이기
  // stlye.backgroundColor = 'red';
})

// 순차적으로 visual 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index+1) * 0.7 // 0.7s, 1.4s, 2.1s, 2.8s
  });
});

// 공지사항 수직 슬라이드 기능
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(요소, 옵션: {};
// 첫번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달 (API 페이지 참고)
new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoplay: true, // 자동 재생 여부
});

// 프로모션 수평 슬라이드 기능
new Swiper('.promotion .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true,
  autoplay: {
    delay: 5000 // 5초로 설정 (기본값 3초)
  },
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수 (기본값: 1)
  spaceBetween: 10, // 슬라이드 간의 간격
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
});

// 프로모션 섹션 토글 기능
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons'); 

promotionToggleBtn.addEventListener('click', function() {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
    promotionToggleIcon.textContent = 'upload';
  } else {
    promotionEl.classList.add('hide');
    promotionToggleIcon.textContent = 'download';
  }
});

// 유튜브 섹션 ㅟ에 부유 요소 애니메이션 처리
// gsap.to(요소, 지속시간, 옵션: {})
// 옵션참고: https://greensock.com/docs/v3/GSAP/gsap.to()

gsap.to('.floating1', 1.5, {
  delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정
  y: -15, // 수직으로 얼마나 움직일지 설정, transform: translateY(수치); 와 같음
  x: 15,
  repeat: -1, //몇번 반복할지 설정, 무한은 -1
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // 타이밍 함수 적용, 느리게-빠르게-느리게
});

// 지속시간, delay, y를 자유롭게 변경하여 적용하기
gsap.to('.floating2', 2, {
  delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정
  y: 50, // 수직으로 얼마나 움직일지 설정, transform: translateY(수치); 와 같음
  repeat: -1, //몇번 반복할지 설정, 무한은 -1
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // 타이밍 함수 적용, 느리게-빠르게-느리게
});
gsap.to('.floating3', 1.5, {
  delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정
  y: 30, // 수직으로 얼마나 움직일지 설정, transform: translateY(수치); 와 같음
  repeat: -1, //몇번 반복할지 설정, 무한은 -1
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // 타이밍 함수 적용, 느리게-빠르게-느리게
});

// ScrollMagic 사용
// 그 외 scrollreveal => 둘다 많이 사용하는 라이브러리
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ //감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8 // 화면 80% 지점에서 보여짐 여부 감시 (0~1사이 지정)

  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당(필수!)
  // 라이브러리에서 지정한 문법으로 깊게 이해X
})

// 어워즈 섹션 슬라이드 기능
new Swiper('.awards .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: true, // 자동 재생 여부
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 30, // 슬라이드 사이 여백(간격) px
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.awards .swiper-button-next',
    prevEl: '.awards .swiper-button-prev',
  },
});

// 현재 연도 표시
// 날짜 정보를 가진 JS Date 객체를 활용(JS 기본 제공 객체: 여러 데이터들의 묶음)
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재 연도의 정보가 숫자 데이터로 반환됨
console.log(new Date().getFullYear());