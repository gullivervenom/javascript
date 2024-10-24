/* 
    함수 레벨 스코프
    c 언어나 java 등 대부분의 프로그래밍 언어는 함수 몸체 뿐 아니라 모든 코드블록(for, switch, while 등등)이
    지역 스코프를 만드는 블록 레벨 스코프를 가지게 된다.
    var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정하게 된다.
    이것을 함수 레벨 스코프라고 부른다. 
    ES6 버전에서부터 도입된 Let, const 라고 하는 키워드는 블록 레벨 스코프를 지원한다.
    */

    var i = 0;

for (var i = 0; i < 10; i++) {

    
}
// 우리가 지금까지 알고 있던 상식으로는 0이 출력되는 것이 정상이다.
console.log(i); // 10