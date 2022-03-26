HTML -> getElementBy~
    - html property 검색
CSS -> querySelect~
    - css 방식 검색

window: 브라우저 최상위 객체, 웹 브라우저 창이나 탭
document: 웹 브라우저 내의 문서

developer.mozilla.org 검색

1. find the element
2. listen the event
3. react that event

style -> css
animation -> js

https://developer.mozilla.org/ko/docs/Web/API/Element/classList
className/classList

1. 클래스이름이 있는지 체크
2. 있으면 삭제, 없으면 추가
- 위 기능을 toggle 함수로 수행할 수 있다.

form -> submit -> 새로고침
    - 새로고침을 막을려면?
    - 이벤트리스너로 받은 첫번째인자로 preventDefault()를 호출
submit -> 버튼클릭 또는 엔터

## Login
### Evemts
- 브라우저는 addEventListener 핸들러함수에 대해 특정 인자를 넘긴다.
- 모든 이벤트리스너에 대해서 첫번째 인자는 빌생한 이벤트에 대한 여러 정보들을 가진다.


### Events 2
- 이벤트리스너 함수는 내가 실행시키는 것이 아닌 브라우저가 이벤트가 발생했을 때 실행시키는 것이다.