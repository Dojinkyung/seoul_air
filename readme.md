# ✨서울시 실시간 대기 환경 현황✨

# 🚀 배포

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://seoulair.netlify.app/)

배포 사이트는 api가 http로만 받아올 수 있어 크롬 기준 설정>개인 정보 및 보안> 사이트 설정> 사이트 전체에 저장된 권한 및 데이터 보기>https://seoulair.netlify.app/ 주소의 안전하지 않은 컨텐츠를 허용으로 변경해 주시면 볼 수 있습니다.

# 기술 스텍

- Typescript
- React
- Redux-toolkit
- React-router-dom
- React Query
- Victory
- Axios
- Dayjs

## 📦 폴더 구조

```sh
📦src
 ┣ 📂assets
 ┃ ┗ 📂svgs #svg
 ┣ 📂components
 ┃ ┣ 📂CityInfo # 구역별 정보
 ┃ ┣ 📂SeoulInfo # 서울시 전체 정보
 ┃ ┗ 📂_common # 공통 컴포넌트
 ┣ 📂redux # redux
 ┣ 📂routes # route별 index
 ┃ ┣ 📂City
 ┃ ┣ 📂Favorite
 ┃ ┣ 📂Seoul
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜routes.module.scss
 ┣ 📂services # 데이터 불러오는 컴포넌트
 ┣ 📂styles #css 스타일을 위한 폴더
 ┣ 📂types # typescript 정의 파일
 ┗ 📂utils # axios 에러
```

# 📌 실행 방법

```
git clone https://github.com/Dojinkyung/wanted_personal_project.git`

```

```
yarn insatll && yarn start

```

api를 이용하기 위해서는 서울시 열린 데이터 api를 발급받아 env파일에 포함해야합니다.

## 2. 📸 화면

![movie_app](https://user-images.githubusercontent.com/63532503/170852720-b04dd07b-e52a-488e-9ea2-7242d876d00f.gif)

# 💡 구현 내용

http://data.seoul.go.kr/dataList/OA-1201/S/1/datasetView.do

서울시의 공공데이터를 이용하여 실시간 대기환경을 받아와 좋음, 보통, 나쁨, 아주 나쁨의 등급을 보여주고 세부적인 정보를 제공해주는 사이트입니다.

API를 reactQuery를 통해 1시간마다 한번씩 받아올 수 있도록 한 후 받아온데이터를 등급에 따라 색과 이모티콘을 이용하여 표시해 주었습니다. 또한 세부사항을 victory 차트를 이용하여 그래프로 시각화하였습니다.

지금까지 배웠던 기술들을 복습하며 만들어 보았습니다.

# 개선해야 할 점& 어려웠던 점

- 아이디어를 생각하고 디자인을 해야하는 점이 어려웠습니다.
- 처음 사용하는 기술이 없었던 점이 아쉽습니다.
- 데이터를 필요에 맞게 변형시키는 작업이 어려웠습니다.
- api의 http 문제로 제대로 배포하지 못한점이 아쉽습니다.
