// 아재개그 데이터
const jokes = [
    {
        setup: "문어의 다리가 몇 개인지 아세요?",
        punchline: "여덟 개요! 그런데 왜 '문어'라고 하냐면... 문어보면 '어?' 하거든요! 😄",
        category: "동물"
    },
    {
        setup: "김치찌개는 언제 먹어야 맛있을까요?",
        punchline: "김치가 시원할 때! 김치 시원하다~ 🥶",
        category: "음식"
    },
    {
        setup: "세상에서 가장 뜨거운 바다는?",
        punchline: "열정바다! 열정이 뜨겁잖아요~ 🔥",
        category: "일반"
    },
    {
        setup: "돼지가 잘못을 했을 때 하는 말은?",
        punchline: "돼지송합니다! (죄송합니다) 🐷",
        category: "동물"
    },
    {
        setup: "바나나가 웃으면?",
        punchline: "바나나나! 나나나나~ 🍌",
        category: "음식"
    },
    {
        setup: "세상에서 가장 큰 새는?",
        punchline: "타조! 그런데 더 큰 건... 거짓말~ (거짓말 = 거대한 말) 🦢",
        category: "동물"
    },
    {
        setup: "밤에 먹으면 더 맛있는 과일은?",
        punchline: "배! 밤배가 맛있거든요~ 🌙🍐",
        category: "음식"
    },
    {
        setup: "고구마가 죽으면?",
        punchline: "고구마죽! 맛있겠다~ 🍠",
        category: "음식"
    },
    {
        setup: "개미가 길을 잃으면?",
        punchline: "미로! 개미+로드=미로! 🐜",
        category: "동물"
    },
    {
        setup: "컴퓨터가 추우면?",
        punchline: "키보드! (키보드 = 추워드) ⌨️",
        category: "기술"
    },
    {
        setup: "엄마가 섬에 가면?",
        punchline: "엄마아일랜드! (Mom Island) 🏝️",
        category: "가족"
    },
    {
        setup: "라면이 싸우면?",
        punchline: "라면파이터! 🍜👊",
        category: "음식"
    },
    {
        setup: "떡볶이가 좋아하는 운동은?",
        punchline: "씨름! 떡... 씨름... 🤼‍♂️",
        category: "음식"
    },
    {
        setup: "칼국수가 화나면?",
        punchline: "칼칼국수! 매워져요~ 🌶️",
        category: "음식"
    },
    {
        setup: "햄버거가 춤추면?",
        punchline: "햄버거버거! 방방 뛰어요~ 🍔",
        category: "음식"
    },
    {
        setup: "닭이 알을 낳지 못하면?",
        punchline: "닭갈비! (닭이 갈비뼈만 남았으니까) 🐓",
        category: "동물"
    },
    {
        setup: "피자가 춥다고 하면?",
        punchline: "피자헛! 모자를 씌워주세요~ 🍕",
        category: "음식"
    },
    {
        setup: "사과가 뭔가를 숨기고 있으면?",
        punchline: "사과라이스! (사과+surprise) 🍎",
        category: "음식"
    },
    {
        setup: "딸기가 전화를 받으면?",
        punchline: "딸기딸기! 여보세요~ 🍓",
        category: "음식"
    },
    {
        setup: "고양이가 커피를 마시면?",
        punchline: "카페라떼! (cat+café) ☕🐱",
        category: "동물"
    },
    {
        setup: "치킨이 운동을 하면?",
        punchline: "치킨런! 달려요~ 🏃‍♂️🍗",
        category: "음식"
    },
    {
        setup: "수박이 춤을 추면?",
        punchline: "수박춤! 통통 튀어요~ 💃🍉",
        category: "음식"
    },
    {
        setup: "강아지가 마법을 쓰면?",
        punchline: "왈왈드! 마법사견! 🪄🐕",
        category: "동물"
    },
    {
        setup: "스마트폰이 감기에 걸리면?",
        punchline: "앱플루! 바이러스 조심해요~ 📱🤧",
        category: "기술"
    }
];

// 상태 관리
let currentJoke = null;
let totalJokes = 0;
let favoriteCount = 0;
let shareCount = 0;
let savedCount = 0;
let streakCount = 0;
let jokeHistory = [];
let savedJokes = [];
let settings = {
    soundEnabled: true,
    animationEnabled: true,
    jokeSpeed: 800
};

// DOM 요소들
const jokeBtn = document.getElementById('jokeBtn');
const jokeContainer = document.getElementById('jokeContainer');
const favoriteBtn = document.getElementById('favoriteBtn');
const shareBtn = document.getElementById('shareBtn');
const saveBtn = document.getElementById('saveBtn');
const skipBtn = document.getElementById('skipBtn');
const repeatBtn = document.getElementById('repeatBtn');
const totalJokesEl = document.getElementById('totalJokes');
const favoriteCountEl = document.getElementById('favoriteCount');
const shareCountEl = document.getElementById('shareCount');
const streakCountEl = document.getElementById('streakCount');
const remainingJokesEl = document.getElementById('remainingJokes');
const moodProgressEl = document.getElementById('moodProgress');
const moodTextEl = document.getElementById('moodText');

// Bootstrap 컴포넌트
let toastInstance;

// 로컬 스토리지에서 데이터 로드
function loadData() {
    totalJokes = parseInt(localStorage.getItem('totalJokes') || '0');
    favoriteCount = parseInt(localStorage.getItem('favoriteCount') || '0');
    shareCount = parseInt(localStorage.getItem('shareCount') || '0');
    savedCount = parseInt(localStorage.getItem('savedCount') || '0');
    streakCount = parseInt(localStorage.getItem('streakCount') || '0');
    jokeHistory = JSON.parse(localStorage.getItem('jokeHistory') || '[]');
    savedJokes = JSON.parse(localStorage.getItem('savedJokes') || '[]');
    settings = { ...settings, ...JSON.parse(localStorage.getItem('settings') || '{}') };
    
    updateStats();
    updateMoodGauge();
    loadSettings();
}

// 로컬 스토리지에 데이터 저장
function saveData() {
    localStorage.setItem('totalJokes', totalJokes.toString());
    localStorage.setItem('favoriteCount', favoriteCount.toString());
    localStorage.setItem('shareCount', shareCount.toString());
    localStorage.setItem('savedCount', savedCount.toString());
    localStorage.setItem('streakCount', streakCount.toString());
    localStorage.setItem('jokeHistory', JSON.stringify(jokeHistory));
    localStorage.setItem('savedJokes', JSON.stringify(savedJokes));
    localStorage.setItem('settings', JSON.stringify(settings));
}

// 통계 업데이트
function updateStats() {
    totalJokesEl.textContent = totalJokes;
    favoriteCountEl.textContent = favoriteCount;
    shareCountEl.textContent = shareCount;
    streakCountEl.textContent = streakCount;
    remainingJokesEl.textContent = jokes.length - (totalJokes % jokes.length);
}

// 분위기 게이지 업데이트
function updateMoodGauge() {
    const maxProgress = 100;
    const progress = Math.min((favoriteCount * 10 + shareCount * 5 + totalJokes * 2), maxProgress);
    
    moodProgressEl.style.width = `${progress}%`;
    
    let moodText = "시작해보세요! 😊";
    if (progress >= 80) moodText = "완전 행복! 🤩";
    else if (progress >= 60) moodText = "너무 좋아요! 😆";
    else if (progress >= 40) moodText = "기분 좋네요! 😄";
    else if (progress >= 20) moodText = "조금씩 웃어요! 😊";
    else if (progress > 0) moodText = "시작이 좋아요! 🙂";
    
    moodTextEl.textContent = moodText;
}

// 설정 로드
function loadSettings() {
    document.getElementById('soundEnabled').checked = settings.soundEnabled;
    document.getElementById('animationEnabled').checked = settings.animationEnabled;
    document.getElementById('jokeSpeed').value = settings.jokeSpeed;
}

// 랜덤 개그 선택
function getRandomJoke() {
    const availableJokes = jokes.filter(joke => 
        !jokeHistory.some(historyJoke => historyJoke.setup === joke.setup)
    );
    
    if (availableJokes.length === 0) {
        // 모든 개그를 다 들었으면 히스토리 초기화
        jokeHistory = [];
        return jokes[Math.floor(Math.random() * jokes.length)];
    }
    
    const randomIndex = Math.floor(Math.random() * availableJokes.length);
    return availableJokes[randomIndex];
}

// 개그 표시
function displayJoke(joke) {
    const timestamp = new Date().toLocaleString();
    
    jokeContainer.innerHTML = `
        <div class="joke-content">
            <div class="joke-text">
                ${joke.setup}
            </div>
            <div class="joke-punchline">
                ${joke.punchline}
            </div>
            <div class="mt-3">
                <span class="badge bg-secondary-subtle text-secondary">${joke.category}</span>
                <span class="badge bg-info-subtle text-info">${timestamp}</span>
            </div>
        </div>
    `;
    
    // 히스토리에 추가
    jokeHistory.unshift({
        ...joke,
        timestamp,
        id: Date.now()
    });
    
    if (jokeHistory.length > 50) {
        jokeHistory = jokeHistory.slice(0, 50);
    }
    
    // 버튼 활성화
    enableActionButtons();
    
    // 카운트 증가
    totalJokes++;
    streakCount++;
    updateStats();
    updateMoodGauge();
    updateHistoryModal();
    saveData();
    
    // 효과음 재생 (시뮬레이션)
    if (settings.soundEnabled) {
        playSound();
    }
}

// 액션 버튼 활성화
function enableActionButtons() {
    favoriteBtn.disabled = false;
    shareBtn.disabled = false;
    saveBtn.disabled = false;
    skipBtn.disabled = false;
    repeatBtn.disabled = false;
    
    // 버튼 상태 초기화
    resetButtonStates();
}

// 버튼 상태 초기화
function resetButtonStates() {
    favoriteBtn.className = 'btn btn-outline-danger';
    favoriteBtn.innerHTML = '<i class="bi bi-heart"></i><span class="d-none d-sm-inline">좋아요</span>';
    
    shareBtn.className = 'btn btn-outline-primary';
    shareBtn.innerHTML = '<i class="bi bi-share"></i><span class="d-none d-sm-inline">공유</span>';
    
    saveBtn.className = 'btn btn-outline-success';
    saveBtn.innerHTML = '<i class="bi bi-bookmark"></i><span class="d-none d-sm-inline">저장</span>';
}

// 로딩 상태 표시
function showLoading() {
    jokeBtn.innerHTML = '<span class="loading"></span> 개그 준비중...';
    jokeBtn.disabled = true;
}

// 로딩 상태 해제
function hideLoading() {
    jokeBtn.innerHTML = '<i class="bi bi-play-circle-fill me-2"></i>새로운 개그 들려줘! <span class="badge bg-light text-primary ms-2" id="remainingJokes">' + (jokes.length - (totalJokes % jokes.length)) + '</span>';
    jokeBtn.disabled = false;
}

// 새로운 개그 보여주기
function showNewJoke() {
    showLoading();
    
    setTimeout(() => {
        currentJoke = getRandomJoke();
        displayJoke(currentJoke);
        hideLoading();
        
        // 애니메이션 효과
        if (settings.animationEnabled) {
            document.querySelector('.card').classList.add('bounce');
            setTimeout(() => {
                document.querySelector('.card').classList.remove('bounce');
            }, 1000);
        }
    }, settings.jokeSpeed);
}

// 좋아요 처리
function handleFavorite() {
    if (currentJoke) {
        favoriteCount++;
        updateStats();
        updateMoodGauge();
        saveData();
        
        // 하트 애니메이션
        favoriteBtn.classList.add('heart-animation');
        favoriteBtn.innerHTML = '<i class="bi bi-heart-fill"></i><span class="d-none d-sm-inline">좋아요</span>';
        favoriteBtn.className = 'btn btn-danger';
        
        setTimeout(() => {
            favoriteBtn.classList.remove('heart-animation');
        }, 800);
        
        // 현재 개그를 좋아요 표시
        if (jokeHistory.length > 0) {
            jokeHistory[0].liked = true;
            updateHistoryModal();
        }
        
        showBootstrapToast('좋아요! 감사합니다 💝', 'success');
    }
}

// 공유 처리
function handleShare() {
    if (currentJoke) {
        shareCount++;
        updateStats();
        updateMoodGauge();
        saveData();
        
        // 공유 애니메이션
        shareBtn.classList.add('share-animation');
        shareBtn.innerHTML = '<i class="bi bi-check-circle-fill"></i><span class="d-none d-sm-inline">공유됨</span>';
        shareBtn.className = 'btn btn-success';
        
        setTimeout(() => {
            shareBtn.classList.remove('share-animation');
        }, 600);
        
        // 클립보드에 복사
        const jokeText = `${currentJoke.setup}\n${currentJoke.punchline}\n\n아재개그 봇 v2.0에서 가져왔어요! 😄`;
        
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(jokeText).then(() => {
                showBootstrapToast('개그가 클립보드에 복사되었습니다! 📋', 'info');
            }).catch(() => {
                showBootstrapToast('공유 완료! 🎉', 'success');
            });
        } else {
            showBootstrapToast('공유 완료! 🎉', 'success');
        }
    }
}

// 저장 처리
function handleSave() {
    if (currentJoke) {
        const isAlreadySaved = savedJokes.some(joke => joke.setup === currentJoke.setup);
        
        if (!isAlreadySaved) {
            savedJokes.push({
                ...currentJoke,
                savedAt: new Date().toLocaleString()
            });
            savedCount++;
            
            saveBtn.innerHTML = '<i class="bi bi-bookmark-fill"></i><span class="d-none d-sm-inline">저장됨</span>';
            saveBtn.className = 'btn btn-warning';
            
            showBootstrapToast('개그가 저장되었습니다! 📚', 'warning');
        } else {
            showBootstrapToast('이미 저장된 개그입니다! ⚠️', 'warning');
        }
        
        updateStats();
        saveData();
    }
}

// 다음 개그 (건너뛰기)
function handleSkip() {
    showNewJoke();
    showBootstrapToast('다음 개그로 넘어갑니다! ⏭️', 'info');
}

// 반복 재생
function handleRepeat() {
    if (currentJoke) {
        displayJoke(currentJoke);
        showBootstrapToast('개그를 다시 들려드릴게요! 🔄', 'info');
    }
}

// Bootstrap 토스트 표시
function showBootstrapToast(message, type = 'primary') {
    const toastEl = document.getElementById('liveToast');
    const toastBody = document.getElementById('toastMessage');
    
    // 아이콘 설정
    const icons = {
        success: 'bi-check-circle-fill text-success',
        danger: 'bi-exclamation-triangle-fill text-danger',
        warning: 'bi-exclamation-triangle-fill text-warning',
        info: 'bi-info-circle-fill text-info',
        primary: 'bi-bell-fill text-primary'
    };
    
    const toastHeader = toastEl.querySelector('.toast-header i');
    toastHeader.className = `${icons[type] || icons.primary} me-2`;
    
    toastBody.textContent = message;
    
    if (toastInstance) {
        toastInstance.dispose();
    }
    
    toastInstance = new bootstrap.Toast(toastEl, {
        delay: 3000
    });
    
    toastInstance.show();
}

// 효과음 재생 (시뮬레이션)
function playSound() {
    // 실제 프로젝트에서는 Web Audio API를 사용할 수 있습니다
    console.log('🔊 효과음 재생!');
}

// 히스토리 모달 업데이트
function updateHistoryModal() {
    const historyList = document.getElementById('historyList');
    
    if (jokeHistory.length === 0) {
        historyList.innerHTML = `
            <div class="text-center text-muted py-4">
                <i class="bi bi-inbox display-4"></i>
                <p class="mt-3">아직 들은 개그가 없습니다.</p>
            </div>
        `;
        return;
    }
    
    historyList.innerHTML = jokeHistory.map((joke, index) => `
        <div class="list-group-item border-0 ${index === 0 ? 'bg-primary-subtle' : ''}">
            <div class="d-flex justify-content-between align-items-start">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${joke.setup}</h6>
                    <p class="mb-1 text-muted small">${joke.punchline}</p>
                    <div class="d-flex gap-2 mt-2">
                        <span class="badge bg-secondary-subtle text-secondary">${joke.category}</span>
                        <span class="badge bg-info-subtle text-info">${joke.timestamp}</span>
                        ${joke.liked ? '<span class="badge bg-danger-subtle text-danger"><i class="bi bi-heart-fill"></i> 좋아요</span>' : ''}
                    </div>
                </div>
                ${index === 0 ? '<span class="badge bg-primary">최신</span>' : ''}
            </div>
        </div>
    `).join('');
}

// 설정 적용
function applySettings() {
    settings.soundEnabled = document.getElementById('soundEnabled').checked;
    settings.animationEnabled = document.getElementById('animationEnabled').checked;
    settings.jokeSpeed = parseInt(document.getElementById('jokeSpeed').value);
    
    saveData();
    showBootstrapToast('설정이 저장되었습니다! ⚙️', 'success');
}

// 통계 초기화
function resetStats() {
    if (confirm('정말로 모든 통계를 초기화하시겠습니까?')) {
        totalJokes = 0;
        favoriteCount = 0;
        shareCount = 0;
        savedCount = 0;
        streakCount = 0;
        jokeHistory = [];
        savedJokes = [];
        
        updateStats();
        updateMoodGauge();
        updateHistoryModal();
        saveData();
        
        showBootstrapToast('모든 통계가 초기화되었습니다! 🔄', 'warning');
    }
}

// 이벤트 리스너
jokeBtn.addEventListener('click', showNewJoke);
favoriteBtn.addEventListener('click', handleFavorite);
shareBtn.addEventListener('click', handleShare);
saveBtn.addEventListener('click', handleSave);
skipBtn.addEventListener('click', handleSkip);
repeatBtn.addEventListener('click', handleRepeat);

// 설정 이벤트
document.getElementById('soundEnabled').addEventListener('change', applySettings);
document.getElementById('animationEnabled').addEventListener('change', applySettings);
document.getElementById('jokeSpeed').addEventListener('input', applySettings);
document.getElementById('resetStats').addEventListener('click', resetStats);

// 키보드 단축키
document.addEventListener('keydown', (e) => {
    // 모달이 열려있을 때는 단축키 비활성화
    if (document.querySelector('.modal.show')) return;
    
    if (e.code === 'Space' && !jokeBtn.disabled) {
        e.preventDefault();
        showNewJoke();
    } else if (e.code === 'KeyL' && !favoriteBtn.disabled) {
        e.preventDefault();
        handleFavorite();
    } else if (e.code === 'KeyS' && !shareBtn.disabled) {
        e.preventDefault();
        handleShare();
    } else if (e.code === 'Enter' && !saveBtn.disabled) {
        e.preventDefault();
        handleSave();
    } else if (e.code === 'ArrowRight' && !skipBtn.disabled) {
        e.preventDefault();
        handleSkip();
    } else if (e.code === 'KeyR' && !repeatBtn.disabled) {
        e.preventDefault();
        handleRepeat();
    }
});

// 모달 이벤트
document.getElementById('historyModal').addEventListener('show.bs.modal', updateHistoryModal);

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    
    // 환영 메시지
    setTimeout(() => {
        showBootstrapToast('환영합니다! 스페이스바로 개그를 들을 수 있어요 🎭', 'primary');
    }, 1000);
    
    // 툴팁 초기화
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}); 