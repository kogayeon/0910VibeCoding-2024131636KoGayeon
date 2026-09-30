@AGENTS.md

# CLAUDE.md

이 저장소에 개인 소개 페이지(한 페이지짜리)를 만든다. 이 파일은 그 작업의 규칙이다.

## 목표

- 한 페이지로 된 자기소개 사이트, 한국어·영어 두 언어 지원
- 섹션은 다섯 개, 이 순서로: **소개** → **관심 분야** → **프로젝트·연구** → **취미** → **링크**
- 콘텐츠는 모두 로컬 JSON 파일에서 읽는다
- 프로필 사진은 넣지 않는다

## 기술 스택

- Next.js 16 (App Router) — 학습 데이터와 API가 다를 수 있으니 `AGENTS.md` 안내대로 `node_modules/next/dist/docs/`를 먼저 확인한다
- TypeScript (`strict: true`)
- Tailwind CSS v4
- 패키지 매니저: npm

## 지금 하지 않는 것

- 배포 설정 (Vercel, GitHub Actions, Dockerfile 등) 추가 금지
- DB, 외부 API, CMS, 인증 연동 금지
- API Route / Server Action 불필요 — 정적 페이지로 충분하다
- 요청 없이 페이지나 섹션을 늘리지 않는다
- i18n 라이브러리나 언어별 라우트(`/en` 등)를 추가하지 않는다

## 디렉터리 구조

Next.js 앱은 저장소 루트에 두고, `src/` 디렉터리는 쓰지 않는다.

```
app/
  layout.tsx          # 공통 레이아웃, 메타데이터
  page.tsx            # 유일한 페이지: 한·영 두 버전을 모두 렌더링
  globals.css         # Tailwind import, `en:` 커스텀 variant
components/
  LanguageToggle.tsx  # 유일한 클라이언트 컴포넌트: <html data-lang>을 바꾼다
  ProfileView.tsx     # 한 언어 분량의 페이지 본문
  Section.tsx         # 섹션 제목·여백 공통 틀
  Intro.tsx           # 1. 소개
  Interests.tsx       # 2. 관심 분야
  Experience.tsx      # 3. 프로젝트·연구
  Hobbies.tsx         # 4. 취미
  Links.tsx           # 5. 링크
data/
  profile.json        # 페이지에 표시할 모든 콘텐츠
types/
  profile.ts          # profile.json의 타입 정의
```

## 언어 전환 방식

- 서버에서 한국어·영어 본문을 **둘 다** 렌더링하고, CSS로 하나만 보여 준다.
- `LanguageToggle`이 `<html>`의 `data-lang`과 `lang` 속성을 `ko`/`en`으로 바꾼다. 기본값은 `ko`.
- `globals.css`의 `en:` variant로 보이기/숨기기를 처리한다 (`en:hidden`, `hidden en:block`).
- 언어 선택은 저장하지 않는다. 새로고침하면 한국어로 돌아간다.

## 데이터

- 콘텐츠는 `data/profile.json` 하나에만 둔다. 섹션 제목 같은 UI 문구도 포함해 컴포넌트에 텍스트를 하드코딩하지 않는다.
- JSON은 `import profile from "@/data/profile.json"`로 불러오고 `types/profile.ts`의 `Profile` 타입으로 지정한다. `fetch`나 `fs`로 읽지 않는다.
- 언어별 텍스트는 `content.ko`와 `content.en`에 같은 모양으로 둔다. 한쪽을 고치면 다른 쪽도 고친다.
- 링크는 언어와 무관하므로 `links`에 한 번만 둔다.
- 스키마를 바꾸면 `profile.json`과 `types/profile.ts`를 같이 고친다.

스키마 요약:

```jsonc
{
	"masthead": "GAYEON",
	"links": [
		{ "label": "GitHub", "url": "https://…", "text": "github.com/…" },
	],
	"content": {
		"ko": {
			"languageName": "한국어",
			"issue": "…",
			"name": "…",
			"affiliation": "…",
			"headline": "…",
			"bio": ["문단1", "문단2"],
			"sections": {
				"interests": "…",
				"learning": "…",
				"experience": "…",
				"hobbies": "…",
				"links": "…",
			},
			"interests": { "fields": ["…"], "learning": ["…"] },
			"experiences": [
				{
					"title": "…",
					"category": "…",
					"summary": "…",
					"details": ["…"],
				},
			],
			"hobbies": [{ "emoji": "📷", "name": "…", "details": ["…"] }],
			"colophon": "…",
		},
		"en": {
			/* ko와 같은 모양 */
		},
	},
}
```

## 디자인: 패션 매거진(Vogue) 에디토리얼

- 흑백만 쓴다. 회색(`neutral-*`)은 보조 텍스트와 얇은 구분선에만 쓰고, 색상 강조는 넣지 않는다. 다크 모드는 흑백을 뒤집는다.
- 서체
    - `font-display`: 제목·인용·링크용 세리프. 라틴 글자는 Bodoni Moda, 한글은 Noto Serif KR로 떨어진다.
    - `font-sans`: 본문. 작은 라벨은 `text-[11px] uppercase tracking-[0.3em]`.
- 이탤릭은 영어에만 `en:italic`으로 준다. Noto Serif KR에는 이탤릭이 없어 한글이 가짜 기울임으로 깨진다.
- Bodoni의 고대비 광학 크기(`opsz`)는 마스트헤드에만 켠다(`[font-optical-sizing:auto]`). 다른 곳에서 켜면 하이픈과 가는 획이 사라진다. `body`는 `[font-optical-sizing:none]`.
- 구성 요소: 상단 호수(issue) 줄 → 큰 마스트헤드 → 커버(이름 + 인용문 헤드라인 + 드롭캡 본문) → "No. 01" 번호가 붙은 섹션 → 콜로폰.
- 둥근 모서리, 그림자, 알약 모양 배지는 쓰지 않는다. 구분은 가는 선과 여백으로 한다.
- 취미의 `emoji` 값은 데이터에만 두고 화면에는 표시하지 않는다.

## 코드 규칙

- 서버 컴포넌트를 기본으로 한다. `"use client"`는 `LanguageToggle`에만 있다.
- 스타일은 Tailwind 유틸리티 클래스로만 작성한다. 별도 CSS 파일이나 CSS-in-JS를 추가하지 않는다.
- 외부 링크(`http`)는 `target="_blank" rel="noopener noreferrer"`를 붙인다. `mailto:` 링크에는 붙이지 않는다.
- 모바일 우선 반응형으로 만든다. 라이트/다크 모드 모두 읽기 좋아야 한다.
- 의존성은 Next.js 기본 템플릿 외에 꼭 필요할 때만 추가한다.
- 포맷은 루트 `.prettierrc`를 따른다 (탭 들여쓰기, 큰따옴표, 세미콜론, trailing comma).

## 명령어

```bash
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 빌드 — 변경 후 타입/빌드 오류 확인용
npm run lint    # ESLint
```

변경 후에는 `npm run lint`와 `npm run build`가 통과하는지 확인한다.
