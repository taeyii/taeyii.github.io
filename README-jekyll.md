# Taeyi Kim — 연구와 기록

Jekyll **Minima 2.5.1** 테마를 개인 연구 홈페이지에 맞게 수정했습니다. 브라우저 JavaScript 없이 모든 내용을 읽을 수 있습니다.

## 페이지

- `/` 소개와 최근 소식
- `/research/` 논문·학술 발표, 프로젝트, 특허
- `/cv/` 학력, 경력, 수상, 활동, 기술
- `/notes/` 블로그 글 목록 (아직 발행한 글 없음)
- `/en/` 영문 페이지. 언어 링크는 같은 페이지의 번역으로 이동합니다.

기존 프로필 사진과 `files/portfolio.pdf`는 그대로 사용합니다.

## 내용 수정

- `_data/profile.json`: 기존 홈페이지에서 이관한 한·영 논문, 프로젝트, 이력 등
- `_includes/about.html`: 짧게 정리한 소개 문구
- `assets/css/journal.css`: 색, 글꼴, 간격과 모바일 레이아웃
- `_config.yml`: 사이트 주소, 테마와 플러그인

이전 `assets/js/data.js`는 이관 원본으로 보존하지만 빌드에서는 제외합니다. 앞으로는 JSON 파일을 수정하세요.

## 블로그 글 추가

`_posts/YYYY-MM-DD-slug.md` 파일을 만들고 아래 형식으로 작성합니다. 실제 작성한 글만 발행하며 샘플 글은 넣지 않았습니다.

```markdown
---
layout: post
title: "글 제목"
date: YYYY-MM-DD
lang: ko
translation: /en/notes/
---

본문을 여기에 작성합니다.
```

영문 글은 `lang: en`을 지정합니다. `translation`에는 실제 대응 번역 주소를 넣으세요. 아직 번역이 없으면 대응 언어의 `/notes/` 목록 주소를 사용합니다.

## 로컬 빌드

Ruby 3.3과 Bundler가 필요합니다. Windows는 RubyInstaller **Ruby+Devkit** 버전을 사용하세요.

```sh
bundle install
bundle exec jekyll build
python -m unittest discover -s tests -v
bundle exec jekyll serve
```

미리보기: http://127.0.0.1:4000

`_site/index.html`을 직접 여는 대신 서버로 확인하세요. 경로는 도메인 루트를 기준으로 합니다.

## 배포

GitHub Pages의 Source는 **GitHub Actions**로 유지합니다. `master`에 반영하면 `.github/workflows/deploy.yml`이 실제 Jekyll 빌드와 내부 링크 테스트를 통과한 `_site`만 배포합니다. PR에서는 빌드·테스트만 실행합니다.

## 테마

[Jekyll Minima](https://github.com/jekyll/minima), MIT, Parker Moore and contributors.
기본 레이아웃·포스트·Sass는 Minima gem을 사용하며 헤더·푸터와 개별 페이지를 수정했습니다. 커스텀 스타일은 `assets/css/journal.css`에서 Minima 뒤에 적용됩니다.
