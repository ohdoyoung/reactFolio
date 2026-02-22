# 💼 오도영 포트폴리오 - React 기반 웹사이트

이 프로젝트는 개인 포트폴리오를 소개하기 위해 제작된 React 기반 웹 애플리케이션입니다.  
모바일과 데스크탑에서 모두 자연스럽게 보이도록 반응형 UI를 구현했으며,  
GitHub Pages를 통해 배포되었습니다.

👉 배포 링크: [https://ohdoyoung.github.io/reactFolio](https://ohdoyoung.github.io/reactFolio)

---

## 🔧 기술 스택

- **Frontend**: React, JavaScript, CSS, HTML, React Icons
- **디자인 개선**: 애플 감성 다크모드 디자인, 섬세한 애니메이션 및 반응형 처리
- **배포**: GitHub Pages (`gh-pages`)

---

## 📁 주요 기능

- **About, Tech, Projects 섹션 구성**
- **Skills (Front-end / Back-end)**  
  아이콘 클릭 시 각 기술 설명이 아래에 출력되고, 학습 경험 표시
- **Projects**
  - 썸네일 카드 형식으로 나열
  - 클릭 시 해당 프로젝트 Notion 문서를 팝업으로 출력 (iframe)
  - 각 프로젝트에 사용 기술 아이콘 포함

---

## 🧩 프로젝트 목록

| 프로젝트명 | 설명 |
|------------|------|
| 메뉴 어떠쇼 | 상권 데이터를 기반으로 카페 메뉴를 추천해주는 웹 서비스 |
| SoundScape | 음악 기반 감정 일기 앱 |
| MediBot | AI 복약 일정 관리 앱 |
| HabitiQ | 습관 추천 및 트래킹 AI 앱 |

---

## 🛠 설치 및 실행

```bash
npm install
npm start
```

### 배포

```bash
npm run deploy
```

---

## 📂 폴더 구조 (중요)

- `/public/assets`: 썸네일 이미지 저장
- `/src/components`: About, Tech, ProjectList 등 구성 컴포넌트
- `/src/styles/*.css`: 각 컴포넌트별 CSS 파일

---

## 📜 기타

- `process.env.PUBLIC_URL`를 사용하여 GitHub Pages 환경에서도 이미지 경로 문제 해결
- 프로젝트별 기술 스택은 `react-icons` 기반으로 컬러 스타일 커스터마이징

---

## 📮 연락처

> 포트폴리오 관련 문의는 GitHub Issues 또는 이메일을 통해 부탁드립니다.
