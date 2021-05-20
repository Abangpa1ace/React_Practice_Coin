## 개요
- 주제 : coinGetko API를 활용한 비트코인 목록 및 상세정보 조회 어플리케이션 제작
- 기술스택 : HTML/CSS/Javascript, React, React-Router, Styled-Components, React-icons
<br />

## UI 및 요구사항
* 서버 API : https://www.coingecko.com/
<br />

## 구현내용
#### 1. 공통 설정사항
- React 함수형 컴포넌트 및 Hooks API 활용
- Context API(useContext) 중앙 상태관리
- styled-components CSS-in-JS 스타일 : theme 공통속성(color, flex-box), StyledTags.js 공통 커스텀 태그(`<button>`, `<p>`)
- 컴포넌트 구성
```
client
├── node_modules                  - CRA 모듈
│
├── public/                   
│   └── index.html                - SPA HTML 페이지
│
└── src/                      
    ├── index.js                  - index.html ReactDOM 렌더링, Context.js 하달(Provider)
    ├── Routes.js                 - Root Component, React 라우터 + <Loader /> 컴포넌트 포함
    ├── Context.js                - 공통상태(로딩, 코인목록), 목록저장(useRef), 공통함수(목록 fetch, Select-box 필터링)
    │ 
    ├── Components/               - 페이지별 Presentational 컴포넌트
    │   ├── Detail/               
    │   │   ├── DetailExchange/   - 상세 페이지 환율계산 부분
    │   │   ├── DetailInfo/       - 상세 페이지 상단 랭킹 및 가격정보 부분
    │   │   ├── DetailDesc.jsx    - 상세 페이지 하단 상세정보 부분
    │   │   └── FooterData.jsx    - 상세 페이지 최상단 이름 및 Select-box 부분
    │   │
    │   └── List/               
    │       ├── ListChart/        - 리스트 페이지 표 부분
    │       └── ListRouter.jsx    - 리스트 페이지 상단 <CoinList />, <BookList /> 페이지 이동 라우팅 버튼부분
    │ 
    ├── Data/                     
    │   └── data.js               - 각종 데이터(API 주소, SelectBox 목록, 환율입력 정규식)
    │
    ├── Pages/
    │   ├── Detail/               - Detail 상세정보 페이지
    │   │   └── Detail.jsx        - Detail 페이지 Container 컴포넌트(로직포함)
    │   │
    │   ├── List/                 - List 코인목록 페이지들
    │   │   ├── CoinList.jsx      - CoinList 전체코인 리스트 페이지
    │   │   └── BookList.jsx      - BookList 북마크된 코인 리스트 페이지
    │     
    ├── Styles/                     
    │   ├── reset.js              - createGlobalStyle 초기화 속성
    │   └── theme.js              - theme(너비, 색깔, z-index) 및 FlexBox 공용속성
    │
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── .gitignore
```
<br />

#### 2. Label 관련
- 페이지 기본 UI 구현 : 함수형 컴포넌트 + styled-components
- `<Labels>` 상단 전체보기 : 전체 메모개수 표현. 클릭시, `<Memos>` 전체 메모표시 및 헤더 "메모 라벨지정" 버튼 활성화.
- `<Labels>` 중단 라벨목록 : 전체 라벨 맵핑. 클릭시, 1) 라벨 및 개수표시, 2) "라벨수정", "라벨제거", "메모 라벨제거" 버튼 활성화, 3) 해당라벨 인덱싱.
- `<Labels>` 하단 추가하기 : 크롬 prompt 입력기능 활용 새 라벨 추가.
- `<LabelItem>` 라우팅 기능 : withRouterHOC 통한 각 라벨 id를 path parameter로 라우팅.
- `<MemosHeader>` 라벨수정 버튼 : 크롬 prompt 입력기능 활용 현재 선택된 라벨 이름변경.
- `<MemosHeader>` 라벨제거 버튼 : 현재 선택된 라벨 제거.
<br />

#### 3. Memo 관련
- 페이지 기본 UI 구현 : 함수형 컴포넌트 + styled-components
- `<Memos>` 중단 메모목록 : 현자 선택된 라벨에 해당하는 메모 표시(Get Memos By Label). 해당 라벨의 메모 없을 경우, "라벨에 해당하는 메모가 없습니다." 문구 표시.
- `<MemoItem>` 중단 메모 목록요소 : 체크박스(메모 라벨지정, 메모 라벨제거 기능용), 수정일 format 표시, 본문 말줄임 표시 등. 클릭시, `<Note>` 해당메모 표시.
- `<MemoHeader>` 메모 라벨지정 버튼 : 체크박스 true 메모들 라벨추가(Add Memos To Label), 크롬 prompt 입력기능 활용 추가하려는 라벨명 입력.(라벨명 => id 변환하여 서버통신)
- `<MemoHeader>` 메모 라벨제거 버튼 : 체크박스 true 메모들 현제 라벨에서 제거(Remove Memos From Label).
- `<Note>` 메모 상세내용 : 현재 선택된 메모 제목, 수정일, 본문 표시(read mode).
- `<Note>` 헤더 메모추가 버튼 : 클릭시 edit mode. 제목(`<input>`), 본문(`<textarea>`) 입력후 버튼 재클릭 시 새 메모 추가.
- `<Note>` 헤더 메모수정 버튼 : 클릭시 현재 선택된 메모 edit mode. 제목(`<input>`), 본문(`<textarea>`) 입력후 버튼 재클릭 시 현재 메모내용 수정.
- `<Note>` 헤더 메모삭제 버튼 : 클릭시 현재 선택된 메모 삭제.

## 수정사항
1) Redux-Saga 제네레이터 함수 반복 최소화 : try(axios), catch(에러경고) 로직이 유사하므로 HTTP METHOD, id, body 등 인자로 받는 하나의 함수로 단순화 가능하다고 예상.
2) useEffect 효율화 : 전역에 필요한 라벨 리스트 GET, 메모 리스트 GET 등 기본 렌더조건은 전역(메인페이지) 에서 useEffect 및 deps로 관리.
3) `<MemoItem>` 라우팅 기능 추가필요 : Redux Store에 현재 label, memo path값 관리를 통한 라우팅. 혹은, 캐시 메모리를 통한 라우팅 기능 구현 가능 예상.
4) Label, Memo 제목수정 & 메모 라벨지정 모달창 추가제작 : 제목수정 크롬 prompt가 아닌 입력 모달창 구현가능. 라벨지정은 현재 라벨들 중 선택할 수 있는 radiobox 등 구현가능 예상.
5) 각 RESTful API response 에러 메세지에 대한 메세지 상용구 표시 구현 필요(상용구 객체 필요)
