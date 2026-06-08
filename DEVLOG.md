# ArcNova 개발일지

> AR 앱 개발 전문 IT 기업 **ArcNova** 공식 웹사이트 개발 기록

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | ArcNova Company Website |
| 회사명 | ArcNova Inc. (가상 AR 개발사) |
| 저장소 | https://github.com/namong118/rest01 |
| 배포 URL | https://namong118.github.io/rest01/ |
| 기술 스택 | React 19, Vite 8, react-router-dom 7, gh-pages |
| 배포 방식 | GitHub Pages (gh-pages 수동 배포) |
| 개발 시작 | 2026-06-08 |

---

## 디자인 시스템

### 컬러 팔레트

| 역할 | 색상 | HEX |
|------|------|-----|
| 메인 컬러 | Indigo | `#6366F1` |
| 메인 라이트 | Indigo Light | `#818CF8` |
| 포인트 컬러 | Amber | `#F59E0B` |
| 배경 | Deep Navy | `#0A0F1E` |
| 카드 배경 | Navy Card | `#141D35` |
| 텍스트 기본 | Slate 100 | `#F1F5F9` |
| 텍스트 보조 | Slate 400 | `#94A3B8` |

### 타이포그래피
- 시스템 폰트 스택: `Inter, Pretendard, system-ui`
- 헤딩: `font-weight 800`, `letter-spacing -0.5~-1px`
- 본문: `16px / line-height 1.75`

### 컴포넌트 패턴
- CSS Modules (파일별 `.module.css`) — 스타일 스코프 충돌 방지
- CSS 변수 (`src/styles/tokens.css`) — 디자인 토큰 중앙 관리
- `HashRouter` — gh-pages SPA 라우팅 대응

---

## 페이지 구성

### 1. Home (`/`)
- **Hero 섹션**: 그라디언트 배경, 플로팅 카드 애니메이션(float keyframe), Orb 효과
- **Stats 섹션**: 핵심 지표 4개 (Projects, Team, Satisfaction, Years)
- **Services 섹션**: 4개 서비스 카드, 호버 시 glow 효과 + translateY
- **Clients 섹션**: 주요 고객사 로고 텍스트
- **CTA 섹션**: 프로젝트 시작 유도

### 2. About (`/about`)
- **Header**: 그라디언트 타이틀
- **Values 섹션**: 핵심 가치 4개 카드 (Craft, Honest, Fast, Curious)
- **Team 섹션**: 팀원 6명 카드 (아바타, 이름, 역할, 소개)
- **History 섹션**: 연도별 타임라인 (2022–2026)

### 3. Services (`/services`)
- **서비스 목록**: 4개 서비스 좌우 교차 레이아웃
  - AR App Development
  - AI & Computer Vision
  - WebAR & Three.js
  - Enterprise Solutions
- **Process 섹션**: 4단계 개발 프로세스 (Discovery → Prototype → Build → Ship)

### 4. Works (`/works`)
- **프로젝트 목록**: 5개 실적 리스트형 레이아웃
  - LG U+ AR Retail
  - Naver Map AR
  - Hyundai Factory AR
  - K-Museum AR Guide
  - POSCO Safety AR
- 각 항목에 카테고리 태그, 연도, 핵심 성과 지표 표시

### 5. Contact (`/contact`)
- **정보 패널**: 이메일, 위치, 근무시간, 응답시간
- **문의 폼**: 이름, 이메일, 회사명, 프로젝트 유형, 메시지
- **전송 완료**: 성공 상태 UI 애니메이션

---

## 공통 컴포넌트

### Navbar
- `position: fixed` + 스크롤 감지 → 블러 배경 전환
- NavLink `isActive` 상태로 현재 페이지 하이라이트
- 모바일 768px 이하 햄버거 메뉴 (X 애니메이션)

### Footer
- 4열 그리드: 브랜드 소개 + 링크 3개 그룹
- 반응형: 768px → 2열, 480px → 1열

---

## 배포 설정

### Vite 설정 (`vite.config.js`)
```js
base: '/rest01/'
```
gh-pages 서브패스에서 에셋 경로가 깨지지 않도록 base 설정.

### package.json 스크립트
```json
"homepage": "https://namong118.github.io/rest01",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 배포 명령어
```bash
npm run deploy
```
`npm run build` 자동 실행 후 `dist/` 폴더를 `gh-pages` 브랜치로 푸시.

> GitHub 저장소 Settings → Pages → Source를 `gh-pages` 브랜치로 설정 필요.

---

## 라우팅 방식

`BrowserRouter` 대신 `HashRouter` 사용.

gh-pages는 서버가 없는 정적 호스팅이므로 `/about` 직접 접근 시 404 발생.
`HashRouter`를 사용하면 URL이 `/#/about` 형태가 되어 새로고침·직접 접근 모두 정상 동작.

---

## 트러블슈팅

| 문제 | 원인 | 해결 |
|------|------|------|
| Vite 빌드 에러 (PARSE_ERROR) | JS 문자열 내 아포스트로피 (`what's`, `You're`) | 해당 문자열을 `"..."` 큰따옴표로 변경 |
| Vite 초기화 실패 (Operation cancelled) | 디렉터리가 비어있지 않음 (README.md 존재) | README.md 임시 이동 후 초기화, 복원 |

---

## 개발 환경

```
OS        : Windows 10 Pro
Node.js   : LTS
npm       : 최신
Editor    : Claude Code (Anthropic)
로컬 주소  : http://localhost:5173/rest01/
```

---

## 커밋 이력

| 날짜 | 내용 |
|------|------|
| 2026-06-08 | Initial commit (README) |
| 2026-06-08 | feat: ArcNova 회사 사이트 초기 개발 — React + Vite + gh-pages 세팅, 전체 페이지 5개 구현 |
