// ===== Global Variables =====
let currentTheme = localStorage.getItem('theme') || 'dark';
let isNavOpen = false;

// ===== DOM Elements =====
const scrollProgress = document.getElementById('scrollProgress');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const typingText = document.getElementById('typingText');
const contactForm = document.getElementById('contactForm');

// ===== Typing Animation =====
const typingTexts = [
  '프론트엔드 개발자',
  'UI/UX 디자이너', 
  '리액트 전문가',
  '창의적인 문제 해결사',
  '사용자 경험 디자이너'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeAnimation() {
  const currentText = typingTexts[textIndex];
  
  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 2000; // 잠시 멈춤
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
  }
  
  setTimeout(typeAnimation, typingSpeed);
}

// ===== Scroll Progress Bar =====
function updateScrollProgress() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
}

// ===== Navbar Scroll Effect =====
function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ===== Mobile Navigation =====
function toggleMobileNav() {
  isNavOpen = !isNavOpen;
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
  document.body.style.overflow = isNavOpen ? 'hidden' : '';
}

// ===== Theme Toggle =====
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  
  const themeIcon = themeToggle.querySelector('.theme-icon');
  themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
  
  // 테마 변경 애니메이션
  document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

// ===== Smooth Scroll Navigation =====
function handleSmoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  
  if (targetSection) {
    const offsetTop = targetSection.offsetTop - 80; // navbar 높이 고려
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    
    // 모바일에서 메뉴 닫기
    if (isNavOpen) {
      toggleMobileNav();
    }
    
    // 활성 링크 업데이트
    updateActiveNavLink(targetId);
  }
}

// ===== Active Navigation Link =====
function updateActiveNavLink(targetId) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === targetId) {
      link.classList.add('active');
    }
  });
}

// ===== Scroll Spy =====
function handleScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = '#' + section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      updateActiveNavLink(sectionId);
    }
  });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // 스킬 레벨 애니메이션
      if (entry.target.classList.contains('skill-card')) {
        const levelFill = entry.target.querySelector('.level-fill');
        const level = levelFill.getAttribute('data-level');
        setTimeout(() => {
          levelFill.style.width = level + '%';
        }, 200);
      }
      
      // 통계 카운트업 애니메이션
      if (entry.target.classList.contains('stat-number')) {
        animateCounter(entry.target);
      }
    }
  });
}, observerOptions);

// ===== Counter Animation =====
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    element.textContent = Math.floor(current);
    
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

// ===== Skills Filter =====
function initSkillsFilter() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      // 활성 버튼 업데이트
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // 스킬 카드 필터링
      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ===== Portfolio Filter =====
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // 활성 버튼 업데이트
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // 프로젝트 카드 필터링
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filter === 'all' || cardCategory === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ===== Project Actions =====
function initProjectActions() {
  const projectBtns = document.querySelectorAll('.btn-icon[data-action]');
  
  projectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.getAttribute('data-action');
      const projectCard = btn.closest('.project-card');
      const projectTitle = projectCard.querySelector('h3').textContent;
      
      switch(action) {
        case 'preview':
          showProjectPreview(projectCard);
          break;
        case 'live':
          showToast(`${projectTitle} 라이브 데모로 이동합니다`);
          // window.open('live-demo-url', '_blank');
          break;
        case 'code':
          showToast(`${projectTitle} 소스코드로 이동합니다`);
          // window.open('github-url', '_blank');
          break;
      }
    });
  });
}

// ===== Project Preview Modal =====
function showProjectPreview(projectCard) {
  const modal = createModal();
  const projectTitle = projectCard.querySelector('h3').textContent;
  const projectDesc = projectCard.querySelector('p').textContent;
  const projectImage = projectCard.querySelector('img').src;
  const projectTags = Array.from(projectCard.querySelectorAll('.tag')).map(tag => tag.textContent);
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${projectTitle}</h2>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <img src="${projectImage}" alt="${projectTitle}" class="modal-image">
        <p>${projectDesc}</p>
        <div class="modal-tags">
          ${projectTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('active'), 10);
  
  // 모달 닫기 이벤트
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-close')) {
      closeModal(modal);
    }
  });
}

// ===== Modal Functions =====
function createModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  
  return modal;
}

function closeModal(modal) {
  modal.classList.remove('active');
  setTimeout(() => modal.remove(), 300);
}

// ===== Toast Notification =====
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    padding: 1rem 1.5rem;
    color: var(--text-primary);
    font-weight: 500;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  // 애니메이션
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 10);
  
  // 자동 제거
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== Contact Form =====
function initContactForm() {
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    // 폼 유효성 검사
    if (!validateFormData(formData)) return;
    
    // 로딩 상태 표시
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '전송 중... <span class="btn-icon">⏳</span>';
    submitBtn.disabled = true;
    
    try {
      // Formspree로 실제 데이터 전송
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        showToast('메시지가 성공적으로 전송되었습니다! 곧 답변드리겠습니다.', 'success');
        contactForm.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || '전송에 실패했습니다.');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      showToast(`메시지 전송에 실패했습니다: ${error.message}`, 'error');
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// ===== Form Validation (Formspree용으로 수정) =====
function validateFormData(formData) {
  const name = formData.get('name');
  const email = formData.get('_replyto');
  const subject = formData.get('_subject');
  const message = formData.get('message');
  
  if (!name || !name.trim()) {
    showToast('이름을 입력해주세요.', 'error');
    return false;
  }
  
  if (!email || !isValidEmail(email)) {
    showToast('올바른 이메일 주소를 입력해주세요.', 'error');
    return false;
  }
  
  if (!subject || !subject.trim()) {
    showToast('제목을 입력해주세요.', 'error');
    return false;
  }
  
  if (!message || !message.trim()) {
    showToast('메시지를 입력해주세요.', 'error');
    return false;
  }
  
  return true;
}

// ===== Email Validation =====
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ===== Keyboard Shortcuts =====
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // 테마 토글: Ctrl/Cmd + Shift + T
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
      e.preventDefault();
      toggleTheme();
    }
    
    // 맨 위로: Home 키
    if (e.key === 'Home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // 맨 아래로: End 키
    if (e.key === 'End') {
      e.preventDefault();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    
    // ESC로 모바일 메뉴 닫기
    if (e.key === 'Escape' && isNavOpen) {
      toggleMobileNav();
    }
  });
}

// ===== Mouse Effects =====
function initMouseEffects() {
  // 커서 팔로우 효과 (옵션)
  let mouseX = 0;
  let mouseY = 0;
  let isMouseMoving = false;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMouseMoving = true;
    
    // 마우스 따라가는 글로우 효과 (성능 고려하여 throttle)
    if (!document.querySelector('.mouse-glow')) {
      const glow = document.createElement('div');
      glow.className = 'mouse-glow';
      glow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
        transition: opacity 0.3s ease;
      `;
      document.body.appendChild(glow);
    }
    
    const glow = document.querySelector('.mouse-glow');
    glow.style.left = mouseX - 10 + 'px';
    glow.style.top = mouseY - 10 + 'px';
    glow.style.opacity = '0.5';
    
    clearTimeout(glow.timer);
    glow.timer = setTimeout(() => {
      glow.style.opacity = '0';
    }, 100);
  });
}

// ===== Performance Optimization =====
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== Parallax Effect =====
function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.hero-bg .particle');
  
  window.addEventListener('scroll', throttle(() => {
    const scrollY = window.pageYOffset;
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      const translateY = scrollY * speed;
      element.style.transform = `translateY(${translateY}px)`;
    });
  }, 16));
}

// ===== Loading Animation =====
function initLoadingAnimation() {
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 500);
      }, 1000);
    }
  });
}

// ===== Add CSS for Additional Animations =====
function addDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .modal {
      position: fixed !important;
      inset: 0 !important;
      background: rgba(0, 0, 0, 0.8) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      z-index: 10000 !important;
      opacity: 0 !important;
      transition: opacity 0.3s ease !important;
    }
    
    .modal.active {
      opacity: 1 !important;
    }
    
    .modal-content {
      background: var(--glass-bg) !important;
      backdrop-filter: blur(20px) !important;
      border: 1px solid var(--glass-border) !important;
      border-radius: var(--radius-lg) !important;
      max-width: 90vw !important;
      max-height: 90vh !important;
      overflow: auto !important;
      position: relative !important;
    }
    
    .modal-header {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      padding: var(--space-lg) !important;
      border-bottom: 1px solid var(--glass-border) !important;
    }
    
    .modal-header h2 {
      margin: 0 !important;
      color: var(--text-primary) !important;
    }
    
    .modal-close {
      background: none !important;
      border: none !important;
      font-size: 1.5rem !important;
      color: var(--text-secondary) !important;
      cursor: pointer !important;
      padding: 0.5rem !important;
      border-radius: var(--radius-md) !important;
      transition: all var(--transition-fast) !important;
    }
    
    .modal-close:hover {
      background: var(--bg-tertiary) !important;
      color: var(--primary) !important;
    }
    
    .modal-body {
      padding: var(--space-lg) !important;
    }
    
    .modal-image {
      width: 100% !important;
      max-width: 500px !important;
      height: auto !important;
      border-radius: var(--radius-md) !important;
      margin-bottom: var(--space-md) !important;
    }
    
    .modal-tags {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: var(--space-xs) !important;
      margin-top: var(--space-md) !important;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .toast-success {
      border-left: 4px solid #22c55e !important;
    }
    
    .toast-error {
      border-left: 4px solid #ef4444 !important;
    }
    
    .toast-info {
      border-left: 4px solid var(--primary) !important;
    }
  `;
  document.head.appendChild(style);
}

// ===== Initialize Everything =====
function init() {
  // 기본 설정
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.querySelector('.theme-icon').textContent = currentTheme === 'dark' ? '🌙' : '☀️';
  
  // 동적 스타일 추가
  addDynamicStyles();
  
  // 타이핑 애니메이션 시작
  typeAnimation();
  
  // 이벤트 리스너 등록
  window.addEventListener('scroll', throttle(() => {
    updateScrollProgress();
    handleNavbarScroll();
    handleScrollSpy();
  }, 16));
  
  navToggle.addEventListener('click', toggleMobileNav);
  themeToggle.addEventListener('click', toggleTheme);
  
  // 네비게이션 링크 이벤트
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleSmoothScroll);
  });
  
  // 모든 footer 링크에도 smooth scroll 적용
  document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', handleSmoothScroll);
  });
  
  // Intersection Observer로 애니메이션 관찰
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .skill-card, .stat-number').forEach(el => {
    observer.observe(el);
  });
  
  // 필터 및 기타 기능 초기화
  initSkillsFilter();
  initPortfolioFilter();
  initProjectActions();
  initContactForm();
  initKeyboardShortcuts();
  initMouseEffects();
  initParallaxEffects();
  initLoadingAnimation();
  
  // 초기 애니메이션 클래스 추가
  setTimeout(() => {
    document.querySelectorAll('section').forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'all 0.6s ease';
      
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, 500);
  
  console.log('🚀 Portfolio initialized successfully!');
}

// ===== DOM Ready =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ===== Service Worker Registration (PWA 준비) =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// ===== Export for module use =====
window.PortfolioApp = {
  toggleTheme,
  showToast,
  updateScrollProgress,
  handleNavbarScroll
}; 