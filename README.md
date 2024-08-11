# 🧾ToDo List(ver.Recoil)

<p align="center">
  <img src="https://github.com/user-attachments/assets/3b0f1231-dea8-4de9-868d-84bc5eaf6370">
</p>

**[파일 구조]**

src/

├── components/

│   ├── AppBar.jsx

│   ├── CreateEdit.jsx

│   ├── Delete.jsx

│   ├── Home.jsx

│   ├── ListItem.jsx

│   ├── TodoItem.jsx

│   └── TodoState.jsx

├── App.js

├── index.js

└── ...


## [프로젝트 소개]
- <u>2차 면접 과제</u>
- Recoil을 사용하여 전역 상태관리 하는 일정관리 웹 애플리케이션 입니다.
- Recoil에 익숙해 지는 것을 목표로 진행하였습니다.

#### [주요기능]
- **일정 추가**
- **일정 삭제**
- **일정 수정**
- **일정 완료**
- **일정 완료/미완료 필터링**
- **전역 상태 관리**

#### [기술 스택]
1. React
2. Recoil
3. createContext

#### [시연 영상]



#### [구현]
- **TodoState** : Recoil의 atom을 사용하여 전역 상태 관리를 하였습니다.
- **AppBar.jsx** : 상단 메뉴로 3페이지에 공통적으로 사용하게 하였습니다.
- **Home.jsx** : 투두리스트를 보여주는 페이지
  - Recoil의 selector를 사용하여 완료, 미완료 필터링이 가능한 기능을 구현하였습니다.
  - 항목이 완료되었는지 여부에 따라 다른 스타일을 적용하였습니다.
- **CreateEdit.jsx** : 항목을 생성하고 수정 할 수 있는 페이지
  - 항목마다 input을 통해 수정 가능하게 하였습니다.
  - 수정과 항목을 입력할 때 공백입력이 불가능 하도록 하였습니다.
- **Delete.jsx** : 항목을 삭제 가능하도록 구현하였습니다.
- **ListItem.jsx** : 투두리스트를 출력 할 수 있게 하였습니다.
- **TodoItem.jsx** : 각 항목을 보여주는 컴포넌트 입니다.
  - TODO 항목에는 ID,텍스트,완료 여부로 구성되어있습니다.


#### [후기]
- 이전에 만들었던 리액트 투두리스트 : https://github.com/dev-yihyun/React_ToDoList
- Recoil을 사용하여 전역 상태관리하는 방법을 알게 되었습니다.
- 이전의 프로젝트와 다르게 useReducer,createContext를 사용하는 것 보다 Recoil을 사용하는 것이 더 쉽게 관리 할 수 있었습니다.
