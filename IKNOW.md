HTML -> getElementBy~ - html property 검색
CSS -> querySelect~ - css 방식 검색

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

form -> submit -> 새로고침 - 새로고침을 막을려면? - 이벤트리스너로 받은 첫번째인자로 preventDefault()를 호출
submit -> 버튼클릭 또는 엔터

## Login

### Evemts

- 브라우저는 addEventListener 핸들러함수에 대해 특정 인자를 넘긴다.
- 모든 이벤트리스너에 대해서 첫번째 인자는 빌생한 이벤트에 대한 여러 정보들을 가진다.

### Events 2

- 이벤트리스너 함수는 내가 실행시키는 것이 아닌 브라우저가 이벤트가 발생했을 때 실행시키는 것이다.

### Saving Username

- local storage에 데이터를 저장한다.
- setItem(key, value), getItem(key), removeItem(key)

## clock

### intervals

- interval: 시간간격
  - setInterval(함수, 시간간격)

### timeout and Date

- 특정 시간을 기다린 후 함수호출
  - setTimeout(함수, 대기시간)
- new Date()
  - getDay(), getHours() 등

### PadStart

- 내가 겪은 문제는 모두 다른 개발자도 겪었다.
  - 현재 내가 하고싶은 것이 무엇인지
  - 현재 나의 문제점이 무엇인지 명확하게 정의해라.
- string.padStart(maxLength, ?fillOut);

## Quotes and Background

### Quotes

- Math.round(f): 반올림
- Math.ceil(f): 올림
- Math.floor(f): 버림

### Background

- 자바스크립트는 클라이언트 단에서 파일시스템 접근을 지원하지않는다.
- 서버사이드(node)에서만 가능하다. ex) fs

### Todo

- document.createElement로 태그 생성
- 태그변수.appendChilid로 하위 태그로 추가
- event.target 속성으로 동일한 이벤트에 대한 여러 이벤트리스너 중 무엇이 실행되었는지 구분할 수 있다.

- localStorage를 사용하여 저장하기
- localStorage는 리스트를 저장할 수 없다. 오직 텍스트만 저장가능.
- forEach 함수는 현재 처리되는 아이템에 대한 파라미터를 가진다.
