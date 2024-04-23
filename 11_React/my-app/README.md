# React App 구조 살펴보기
- package.json: 
  현재 프로젝트 정보와 사용 중인 패키지에 대한 정보를 관리
  같은 패키지라도 버전별로 기능이 다를 수 있으므로 버전을 기록해두어야 함
  npm install로 패키지 설치 시 기록됨
  설치된 패키지는 node_modules 폴더에 추가됨
  node_modules 폴더는 git에 올리지 않기때문에 .gitignore에 자동으로 추가되어 있음
  패키지를 설치하려면 프로젝트를 처음 받아서 npm install 하면 됨! (이후 패키지가 새로 추가될 때도 동일)
- package-lock.json: 
  package.json의 상세 버전 + 버전 락 기능
  node_modules 구조나 package.json이 생성되고 수정될 때 당시 의존성에 대한 상세한 정보를 담아 자동으로 생성됨
  (의존성: 패키지도 다른 패키지를 사용해 만들 수 있음, 의존 관계)
  동일한 버전의 패키지를 설치하지 않으면 문제가 생길 수 있음
  (중요) 그래서 git에 올라가야 됨!! 그래야 팀원들도 같은 버전이 설치됨
- index.html: 
  콘텐츠가 렌더링 될 단 하나의 템플릿 페이지
  Root DOM Node를 갖고 있음
- index.js: 
  Root DOM Node에 App 컴포넌트를 렌더링
- App.js: 
  실제 보여질 컴포넌트
  사용 예> header-section-main-footer 또는 라우터 작성