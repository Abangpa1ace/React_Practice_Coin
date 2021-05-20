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
- 컴포넌트 구성 : Pages(컨테이너)와 Components(프레젠테이셔널) 컴포넌트를 제작해본 Atomic Design 실습이 주 목적
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
    │   └── List/                 - List 코인목록 페이지들
    │       ├── CoinList.jsx      - CoinList 전체코인 리스트 페이지
    │       └── BookList.jsx      - BookList 북마크된 코인 리스트 페이지
    │     
    ├── Shared/                     
    │   ├── Loader.jsx            - 코인정보 로딩시 표현 컴포넌트
    │   ├── PercentParagraph.jsx  - children 값에 따라 빨강, 파랑색으로 변하는 `<p>`태그
    │   ├── SelectBox.jsx         - 옵션목록, 선택값 등으로 Select-box 구현하는 컴포넌트
    │   ├── StarToast.jsx         - 클릭시 북마크 추가, 삭제 기능하는 컴포넌트(색깔변형 포함)
    │   └── StyledTags.jsx        - `<button>`, `<p>`태그 등 반복적인 컴포넌트들을 props 스타일링
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

#### 2. List 페이지 관련
- 페이지 기본 UI 구현 : 함수형 컴포넌트 + styled-components
- 2개의 페이지 : `<CoinList>` 전체 코인 페이지, `<BookList>` 북마크 코인 페이지
- `<ListRouter>` 상단 라우팅버튼 : 2개의 페이지 전환을 하는 라우팅 기능
- `<ListSelects>` 중단 Select-box들 포함 : selectValue key값을 통한 맵핑
- `<ListChart>` 중단 표 부분 : Header, Item(맵핑) 컴포넌트 조합을 통한 Array 상태값을 표로 구현
- `<ListMoreBtn>` 하단 더보기 버튼 : 클릭시 현재 상태값(count)만큼 정보를 더 가져옴
<br />

#### 3. Detail 페이지 관련
- 페이지 기본 UI 구현 : 함수형 컴포넌트 + styled-components
- `<DetailHeader>` 상단 코인정보 : 현재 path값(id)으로 가져온 코인정보를 표현, Select-box 단위(unit) 상태변환 포함
- `<DetailInfo>` 상단 랭킹, 가격정보 : 현재 path값(id)으로 가져온 코인정보를 표현, 표 및 가격 아이템 등 반복요소 컴포넌트화
- `<DetailExchange>` 환율계산 부분 : 각 입력값별 검사로직 및 숫자정규식 검증. 값변경 시, 다른 값은 환율이 반영된 값으로 같이 변경.
- `<DetailDesc>` 하단 코인 상세설명 : 설명보기 버튼으로 isShowDesc 상태 토글링. 상태값 true 및 데이터 존재시에만 조건부 라우팅.
