// Q1 
// The quick brown fox
// 위 문장을 camelCase(낙타 표기법)로 작성하시오!
// theQuickBrownFox



// Q2 
let fruits = ['Apple', 'Banana', 'Cherry'];
// 위 데이터를 활용해 'Banana'를 콘솔 출력하시오!
console.log(fruits[1]);


// Q3 
// 불린 데이터(Boolean)에서 거짓을 의미하는 데이터는?
// false



// Q4 
// '값이 의도적으로 비어있음'을 의미하는 데이터는?
// null


// Q5 
// { } 
// 위 데이터의 종류는?
// 객체 데이터


// Q6 
let obj = { abc: 123 };
// console.log(obj.xyz);
// 위 코드를 통해 콘솔 출력될 값(데이터)은? (출력한 결과를 보지말고 풀어볼 것!)
// undefined


// Q7 
// 값(데이터)을 재할당할 수 없는 변수 선언 키워드는?
// const


// Q8
// 함수에서 값(데이터)을 반환하기 위해 사용하는 키워드는?
// return


// Q9
// sum(2, 4);
// 위 함수 호출에서 2, 4를 무엇이라 하는가?
// 인자(값), arguments, 인수 


// Q10
function sum(a, b) {
  return a + b;
}
// 위 함수 선언의 a, b와 같이,
// 함수 호출에서 전달받은 인수를
// 함수 내부로 전달하기 위한 변수를 무엇이라 하는가?
// 매개변수


// Q11
// 이름이 없는 함수를 무엇이라 하는가?
// 익명 함수


// Q12
// hello 이름의 함수 표현을 작성(함수 표현식)하고 호출하시오! 
// (선언과 호출 두개 다 작성할 것!)
const hello = function () {
console.log('123');  
};
hello();



// Q13
const user = {
  getName: function () {}
}
// 위 코드의 getName과 같이,
// 함수가 할당된 객체 데이터의
// 속성(Property)을 무엇이라 하는가?
// 메소드



// Q14
// 조건이 참(true)인 조건문을 작성하시오!
const z = 50;
if (z >= 40) {
  console.log('Bigger than 40');
}


// Q15
// 가져온 JS 파일을 HTML 문서 분석 이후에 실행하도록
// 지시하는 HTML 속성(Attribute)은?
// defer



// Q16
// 값(데이터)을 재할당할 목적의 변수 선언 키워드는?
// let


// Q17
// <div class="box">Box!!</div>
// 위 HTML 요소의 내용(Content)을 콘솔 출력하시오!
const boxEl = document.querySelector('.box');
console.log(boxEl.textContent);  



// Q18
// 위 코드(Q17)에서 선택한 요소에 클릭(Click) 이벤트를 추가해,
// 클릭 시 'Hello~'를 콘솔 출력하시오!
boxEl.addEventListener('click', function () {
  console.log('Hello~');
});


// Q19
// <span>1</span>
// <span>2</span>
// 위 2개의 요소에 JS로 class="hello"를 추가하시오!
const spanEls = document.querySelectorAll('span'); // 유사 배열, 특징은 똑같지만 쓸 수 있는 메소드가 배열과 다름
spanEls.forEach(function (span) {
  console.log(spanEls);
  span.classList.add('hello');
  console.log(spanEls);
});


// Q20
'Hello'.split('').reverse().join('');
// 위와 같이, 메소드를 이어 작성하는 방법을 무엇이라 하는가?
// 메소드 체이닝


// Q21
// Q18의 boxEl 요소에 HTML 클래스 속성의 값으로 
// 'active'가 포함되어 있으면, '포함됨!'을
// 'active'가 포함되어 있지않으면, '포함 안됨!'을 콘솔 출력하시오!
if (boxEl.classList.contains('active')) {
  console.log('포함됨!');
} else {
  console.log('포함 안됨!');
}




