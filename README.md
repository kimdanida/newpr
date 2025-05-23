# 🚀 개인 브랜딩 포트폴리오 웹사이트

PRD 기반으로 설계된 **모던하고 인터랙티브한 개인 포트폴리오 웹사이트**입니다. 
감각적인 디자인과 강력한 기능을 통해 개인의 전문성과 개성을 효과적으로 어필합니다.

## ✨ 주요 특징

### 🎨 디자인 시스템
- **다크모드 우선** 설계로 개발자 친화적 환경
- **네온 글로우 효과**와 **글래스모피즘** 스타일
- **마이크로 인터랙션**으로 섬세한 사용자 경험
- **완전 반응형** 디자인 (모바일부터 데스크톱까지)

### ⚡ 핵심 기능
- **타이핑 애니메이션** - 다양한 직책이 자동으로 타이핑됩니다
- **스크롤 기반 애니메이션** - Intersection Observer API 활용
- **테마 전환** - 다크/라이트 모드 토글 기능
- **스킬 필터링** - 카테고리별 기술 스택 분류
- **포트폴리오 필터링** - 프로젝트 종류별 분류
- **프로젝트 모달** - 상세 정보 팝업 뷰
- **연락처 폼** - 유효성 검사 포함 메시지 전송
- **스크롤 프로그레스 바** - 읽기 진행도 표시
- **키보드 단축키** 지원

### 🛠️ 기술 스택
- **HTML5** - 시맨틱 마크업
- **CSS3** - CSS Variables, Flexbox/Grid, 애니메이션
- **Vanilla JavaScript (ES6+)** - 모던 JS 문법 활용
- **Web APIs** - Intersection Observer, LocalStorage

## 📁 프로젝트 구조

```
📦 portfolio-website/
├── 📄 portfolio.html          # 메인 HTML 파일
├── 🎨 portfolio.css           # 메인 스타일시트
├── ⚡ portfolio.js           # 메인 JavaScript 파일
├── 📖 README.md              # 프로젝트 문서
└── 📁 assets/                # 에셋 폴더
    ├── 📁 icons/             # 기술 스택 아이콘
    ├── 📁 projects/          # 프로젝트 이미지
    ├── 📄 profile.jpg        # 프로필 사진
    ├── 📄 favicon.svg        # 파비콘
    └── 📄 og-image.jpg       # Open Graph 이미지
```

## 🎯 주요 섹션

### 1. 🏠 Hero Section
- **타이핑 애니메이션**으로 동적인 첫인상
- **프로필 이미지**와 **네온 글로우** 효과
- **현재 상태** 표시 (구직 중, 프리랜서 등)
- **패럴랙스 배경** 파티클 효과

### 2. 👨‍💻 About Section
- **개인 스토리**와 **핵심 가치** 소개
- **재미있는 개인 정보** (취미, 관심사)
- **실시간 통계** 카운터 애니메이션
- **가치관 카드** 호버 효과

### 3. 🛠️ Skills Section
- **기술 스택 카테고리** 필터링
- **스킬 레벨** 프로그레스 바 애니메이션
- **카드 호버** 시 글로우 효과
- **툴팁** 상세 정보 표시

### 4. 💼 Portfolio Section
- **프로젝트 카테고리** 필터링
- **이미지 호버** 시 줌 효과
- **프로젝트 상세** 모달 팝업
- **기술 태그**와 **성과 지표** 표시

### 5. 📈 Experience Section
- **타임라인** 레이아웃으로 경력 시각화
- **좌우 교대** 배치로 시각적 흥미
- **펄스 애니메이션** 마커
- **호버 시** 카드 상승 효과

### 6. 📧 Contact Section
- **연락처 정보**와 **소셜 링크**
- **실시간 폼 유효성 검사**
- **전송 상태** 피드백
- **토스트 알림** 시스템

## 🚀 시작하기

### 1. 파일 다운로드
```bash
# Git으로 클론하거나 ZIP 다운로드
git clone [repository-url]
cd portfolio-website
```

### 2. 이미지 에셋 준비
`assets/` 폴더에 다음 이미지들을 추가하세요:

#### 필수 이미지:
- `assets/profile.jpg` - 프로필 사진 (300x300px 권장)
- `assets/favicon.svg` - 파비콘
- `assets/og-image.jpg` - Open Graph 이미지 (1200x630px)

#### 기술 스택 아이콘:
- `assets/icons/react.svg`
- `assets/icons/typescript.svg`
- `assets/icons/javascript.svg`
- `assets/icons/css.svg`
- `assets/icons/nodejs.svg`
- `assets/icons/mongodb.svg`
- `assets/icons/git.svg`
- `assets/icons/webpack.svg`
- `assets/icons/figma.svg`
- `assets/icons/photoshop.svg`

#### 프로젝트 이미지:
- `assets/projects/ecommerce.jpg`
- `assets/projects/todo-app.jpg`
- `assets/projects/design-system.jpg`
- `assets/projects/dashboard.jpg`

### 3. 콘텐츠 커스터마이징

#### HTML 수정 (`portfolio.html`):
1. **개인 정보** 업데이트 (이름, 직책, 연락처)
2. **About 섹션** 내용 수정
3. **Skills 섹션** 기술 스택 업데이트
4. **Portfolio 섹션** 프로젝트 정보 수정
5. **Experience 섹션** 경력 정보 업데이트

#### CSS 커스터마이징 (`portfolio.css`):
1. **컬러 팔레트** 변경 (CSS Variables)
2. **폰트** 변경 (Google Fonts)
3. **애니메이션** 속도/효과 조정

#### JavaScript 설정 (`portfolio.js`):
1. **타이핑 텍스트** 배열 수정
2. **폼 전송** 로직 구현 (API 연동)
3. **외부 링크** URL 설정

### 4. 로컬 서버 실행
```bash
# Python 3 사용
python -m http.server 8000

# Node.js 사용 (live-server)
npx live-server

# VS Code Live Server 확장 사용
```

### 5. 브라우저에서 확인
```
http://localhost:8000/portfolio.html
```

## 🎨 커스터마이징 가이드

### 컬러 팔레트 변경
```css
:root {
  /* 원하는 색상으로 변경 */
  --primary: #your-color;
  --secondary: #your-color;
  --accent: #your-color;
}
```

### 타이핑 애니메이션 수정
```javascript
const typingTexts = [
  '당신의 직책 1',
  '당신의 직책 2',
  '당신의 직책 3'
];
```

### 새로운 기술 스택 추가
1. `assets/icons/` 폴더에 아이콘 추가
2. HTML에서 skill-card 복사/수정
3. 카테고리 속성 설정

## 📱 반응형 브레이크포인트

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: 767px 이하

## ⌨️ 키보드 단축키

- `Ctrl/Cmd + Shift + T` - 테마 전환
- `Home` - 페이지 맨 위로
- `End` - 페이지 맨 아래로
- `Esc` - 모바일 메뉴 닫기

## 🔧 브라우저 지원

- **Chrome** 60+
- **Firefox** 60+
- **Safari** 12+
- **Edge** 79+

## 📊 성능 최적화

### 이미지 최적화
- **WebP 포맷** 사용 권장
- **Progressive JPEG** 사용
- **이미지 압축** (TinyPNG 등)

### 코드 최적화
- **CSS/JS 압축** (production 환경)
- **Lazy Loading** 구현
- **Critical CSS** 인라인화

## 🚀 배포 가이드

### GitHub Pages
```bash
# GitHub 저장소 생성 후
git add .
git commit -m "Initial commit"
git push origin main

# Settings > Pages에서 활성화
```

### Netlify
1. 폴더를 Netlify에 드래그&드롭
2. 또는 Git 저장소 연결
3. 자동 배포 설정

### Vercel
```bash
npx vercel
# 프롬프트에 따라 설정
```

## 🔒 SEO 최적화

### Meta Tags
- Open Graph 태그 설정 완료
- Twitter Card 지원
- 구조화된 데이터 (JSON-LD) 준비

### 성능
- Lighthouse 점수 90+ 목표
- 페이지 로드 속도 최적화
- 접근성 AA 등급 준수

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트와 관련된 질문이나 제안사항이 있으시면 언제든 연락주세요!

- **Email**: kimdev@example.com
- **GitHub**: [@kimdev](https://github.com/kimdev)
- **LinkedIn**: [김개발](https://linkedin.com/in/kimdev)

---

**Made with ❤️ and lots of ☕ by 김개발**

*이 포트폴리오는 지속적으로 업데이트되며, 새로운 기능과 개선사항이 추가됩니다.* 