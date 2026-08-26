# taeyii.github.io

김태이 (Taeyi Kim) 개인 홈페이지 — <https://taeyii.github.io>

빌드 도구 없이 순수 HTML / CSS / JS로 만든 싱글 페이지 사이트입니다.
`master` 브랜치에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 배포합니다.

## 구조

```
index.html              페이지 뼈대 (섹션 순서 · 메타 태그 · 검색 미리보기 문구)
404.html                옛 주소(/publications, /cv …) → 새 앵커로 리다이렉트
assets/
  css/style.css         스타일 (라이트/다크 테마 색은 맨 위 :root 블록)
  js/data.js            ★ 모든 텍스트 콘텐츠 (KO / EN) — 내용 수정은 여기서
  js/main.js            data.js 를 읽어 화면을 그리는 스크립트
  img/profile.jpg       프로필 사진 (정사각형, 900×900)
  img/og.jpg            링크 공유 시 미리보기 이미지
  img/favicon.svg       탭 아이콘
files/portfolio.pdf     히어로의 "포트폴리오 (PDF)" 버튼이 여는 파일
```

## 1. 내용 수정하기 — `assets/js/data.js`

모든 문구는 이 파일 하나에 있습니다. 문자열은 `"텍스트"` 또는 `{ ko: "한국어", en: "English" }` 두 형태 모두 됩니다
(`ko`만 고치면 한국어 화면에 반영되고, 영어 토글 화면은 `en`을 봅니다).

| 고치고 싶은 것 | 위치 |
|---|---|
| 히어로 타이핑 문구 / 요약 줄 / 태그 | `profile.titles`, `profile.summary`, `profile.tags` |
| 히어로 위치 줄, 사진 아래 배지 | `profile.location`, `ui.misc.photoBadge` |
| 숫자 스트립 (SCI 2편 …) | `impact` |
| 소개 헤드라인 · 본문 · "직접 해 본 범위" | `about.headline`, `about.lead`, `about.body`, `about.steps` |
| 연구 분야 카드 | `research` |
| 최근 소식 | `news` (맨 위가 최신) |
| 학력 / 경력 / 프로젝트 | `education`, `experience`, `projects` |
| 논문 | `publications` (맨 위가 최신, 번호는 자동) |
| 수상 / 특허 / 활동 / 기술 스택 | `awards`, `patents`, `activities`, `skills` |
| 연락처 카드 · 안내 문구 | `contact` |
| 푸터 "업데이트" 날짜 | `meta.updated` |

### 자주 하는 수정 예시

**현재 직장 넣기** — `experience` 배열 맨 위에 추가:

```js
{
  role: { ko: "연구원", en: "Researcher" },
  org:  { ko: "회사명", en: "Company Inc." },
  period: { ko: "2026.09 – 현재", en: "2026.09 – Present" },
  location: { ko: "경기도 용인시", en: "Yongin, South Korea" },
  bullets: {
    ko: ["하는 일 한 줄", "두 번째 줄"],
    en: ["What I do", "Second line"],
  },
  stack: ["Python", "PyTorch"],
},
```

그리고 히어로에도 보이게 하려면 `profile.location`, `ui.misc.photoBadge`, `profile.summary`의 첫 줄을 함께 바꾸세요.

**논문 추가** — `publications` 배열 맨 위에 추가:

```js
{
  authors: "T. Kim, Y. Seo, S. Barde",   // 발표만 한 경우 생략 가능
  title: "논문 제목 (영문 그대로)",
  venue: { ko: "학회/저널 이름", en: "Venue" },
  date: "2026.10",
  type: "journal-intl",   // journal-intl | conf-intl | conf-dom | poster
  role: "first",          // first | co | presenter
  url: "https://doi.org/...",   // 없으면 생략
  award: "🏆 Best Paper Award",  // 없으면 생략
  note: { ko: "한 줄 설명", en: "One-line note" },
},
```

**사진 교체** — `assets/img/profile.jpg`를 정사각형 사진으로 덮어쓰기 (파일 이름 유지).

## 2. 로컬에서 확인

`index.html`을 브라우저로 열어도 되고(더블클릭), 서버로 띄우려면:

```powershell
cd C:\Users\aosdb\Documents\GitHub\taeyii.github.io
python -m http.server 8000     # → http://localhost:8000
```

수정 후 브라우저에서 새로고침(F5)하면 반영됩니다. 오른쪽 위 ☀/🌙, KO/EN 토글도 눌러 보세요.

## 3. GitHub에 올리기 (배포)

PowerShell 또는 VS Code 터미널에서:

```powershell
cd C:\Users\aosdb\Documents\GitHub\taeyii.github.io
git status                      # 바뀐 파일 확인
git add -A
git commit -m "홈페이지 리뉴얼"    # 메시지는 자유
git push origin master
```

- 처음 push 할 때 **GitHub 로그인 창**(Git Credential Manager)이 뜹니다 → "Sign in with your browser" → 로그인·승인. 이후에는 다시 묻지 않습니다.
- VS Code로 하려면: 왼쪽 **Source Control**(가지 모양 아이콘) → 메시지 입력 → **Commit** → **Sync Changes**.

## 4. 배포 확인

1. <https://github.com/taeyii/taeyii.github.io/actions> 에서 **"Deploy site to Pages"** 가 초록색 체크가 될 때까지 1~2분 기다립니다.
2. <https://taeyii.github.io> 접속. 예전 화면이 보이면 **Ctrl + F5**(캐시 무시 새로고침).

문제가 생기면:
- Actions 가 빨간색 ✗ → 저장소 **Settings → Pages → Build and deployment → Source** 가 `GitHub Actions` 인지 확인.
- `git push` 가 거부되면 `git pull --rebase origin master` 후 다시 push.
