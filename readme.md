# 서울시 실시간 대기 환경 현황(원티드 개인과제)

# 기술 스텍

- Typescript
- React
- Redux-toolkit
- React-router-dom
- React Query
- Victory
- Axios
- Dayjs

# 진행 기간

    5.26: 아이디어 및 기초 셋팅
    5.27: 데이터 처리 및 기능 구현, 차트
    5.28: css 및 에러 처리, 리팩토링, readme 작성 초안
    5.29: 기능 구현, refactoring, readme작성 완료

# 실행 방법

`git clone https://github.com/Dojinkyung/wanted_personal_project.git`

`yarn insatll`

`yarn start`

# 구현 내용

서울시의 공공데이터를 이용하여 실시간 대기환경을 받아와 좋음, 보통, 나쁨, 아주 나쁨의 등급을 보여주고 세부적인 정보를 제공해주는 사이트입니다.

API를 reactQuery를 통해 1시간마다 한번씩 받아올 수 있도록 한 후 받아온데이터를 등급에 따라 색과 이모티콘을 이용하여 표시해 주었습니다. 또한 세부사항을 victory 차트를 이용하여 그래프로 시각화하였습니다.

지금까지 배웠던 기술들을 복습하며 만들어 보았습니다.

# 구현 결과
![movie_app](https://user-images.githubusercontent.com/63532503/170852720-b04dd07b-e52a-488e-9ea2-7242d876d00f.gif)

# 개선해야 할 점& 어려웠던 점

- 아이디어를 생각하고 디자인을 해야하는 점이 어려웠습니다.
- 처음 사용하는 기술이 없었던 점이 아쉽습니다.
- 데이터를 필요에 맞게 변형시키는 작업이 어려웠습니다.
- api의 http 문제로 배포하지 못한점이 아쉽습니다.
