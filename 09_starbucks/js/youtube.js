// IFrame Player API 비동기로 로드
// 쓰는 이유?
// <iframe> 태그만 써도 유뷰브 영상 삽입이 가능한데 태그의 속성만으로 커스텀 하기에는 한계가 있음
// api를 사용하면 다양한 명령으로 동영상 제거 가능

// (참고) IFrame(Inline Frame): HTML 문서 내에 다른 문서를 삽입하는데 사용

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() { // 라이브러리가 이 함수의 이름을 찾아 실행
  player = new YT.Player('player', { //id가 player인 요소
    // height: '360', //기본값
    // width: '640',  //기본값
    videoId: 'EJF919p_hb0', //최초 재생할 유뷰브 영상 id
    playerVars: { // 더 자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay: true,
      loop: true, // 반복 재생 유무(아래 플레이리스트 옵션 필수)
      playlist: 'EJF919p_hb0' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때 지정한 함수를 실행
      onReady: function (event) {
        // event.target: 재생되고 있는 영상 요소
        event.target.mute(); //음소거
      },
    }
  });
}