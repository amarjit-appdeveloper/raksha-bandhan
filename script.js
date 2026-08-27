/* ==========================================================================
   HAPPY RAKSHA BANDHAN - COMPLETE MASTER JAVASCRIPT & SMOOTH SCROLL ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- State Storage in LocalStorage ---
    let appState = {
        sisterName: localStorage.getItem('rakhi_sis_name') || 'Prity',
        brotherName: localStorage.getItem('rakhi_bro_name') || 'Amarjit, Ravishankar, Harishankar, Sumit',
        letterContent: localStorage.getItem('rakhi_letter_txt') || `Happy Raksha Bandhan to my wonderful brothers!
Thank you for always standing by my side, protecting me, sharing all my secrets, fighting with me over snacks, and loving me unconditionally.
No matter how far life takes us, this sacred thread of Rakhi will always keep our hearts connected.
Wishing you limitless joy, good health, and success always!`
    };

    // --- DOM Elements ---
    const bgAudio = document.getElementById('bgAudio');
    const audioToggleBtn = document.getElementById('audioToggleBtn');
    const audioStatusTxt = document.getElementById('audioStatusTxt');
    const quickShareBtn = document.getElementById('quickShareBtn');
    const laserBars = document.getElementById('laserBars');
    const replaySurpriseBtn = document.getElementById('replaySurpriseBtn');
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Intro Overlay Elements
    const cinematicIntroOverlay = document.getElementById('cinematicIntroOverlay');
    const introSisName = document.getElementById('introSisName');
    const introBroName = document.getElementById('introBroName');
    const slideTrack = document.getElementById('slideTrack');
    const slideThumb = document.getElementById('slideThumb');
    const tapPlayDirectBtn = document.getElementById('tapPlayDirectBtn');

    // Neon Heart Finale Elements
    const neonHeartFinale = document.getElementById('neonHeartFinale');
    const finaleNamesTag = document.getElementById('finaleNamesTag');
    const enterFullSiteBtn = document.getElementById('enterFullSiteBtn');

    // Hero Elements
    const heroSisterName = document.getElementById('heroSisterName');
    const heroBrotherName = document.getElementById('heroBrotherName');
    const editNamesBtn = document.getElementById('editNamesBtn');
    const heroMandala = document.getElementById('heroMandala');

    // Countdown Elements
    const daysVal = document.getElementById('daysVal');
    const hoursVal = document.getElementById('hoursVal');
    const minsVal = document.getElementById('minsVal');
    const secsVal = document.getElementById('secsVal');

    // Memory Gallery & 3D Carousel Elements
    const catTabs = document.querySelectorAll('.cat-tab');
    const memoryGrid = document.getElementById('memoryGrid');
    const uploadMemoryPhoto = document.getElementById('uploadMemoryPhoto');
    const toggle3DCarouselBtn = document.getElementById('toggle3DCarouselBtn');
    const carousel3DWrapper = document.getElementById('carousel3DWrapper');
    const carousel3DStage = document.getElementById('carousel3DStage');
    const prev3DBtn = document.getElementById('prev3DBtn');
    const next3DBtn = document.getElementById('next3DBtn');
    const autoSpin3DBtn = document.getElementById('autoSpin3DBtn');

    // Letter Elements
    const envelopeBox = document.getElementById('envelopeBox');
    const waxSealBtn = document.getElementById('waxSealBtn');
    const unfoldedSheet = document.getElementById('unfoldedSheet');
    const typewriterBody = document.getElementById('typewriterBody');
    const envelopeRecipient = document.getElementById('envelopeRecipient');
    const letterToName = document.getElementById('letterToName');
    const letterFromName = document.getElementById('letterFromName');
    const editLetterBtn = document.getElementById('editLetterBtn');
    const retypeLetterBtn = document.getElementById('retypeLetterBtn');

    // Gift Elements
    const giftBox = document.getElementById('giftBox');
    const giftLid = document.getElementById('giftLid');
    const revealedVoucher = document.getElementById('revealedVoucher');
    const voucherBurstBtn = document.getElementById('voucherBurstBtn');

    // Quiz Elements
    const qTitle = document.getElementById('qTitle');
    const qOptionsGrid = document.getElementById('qOptionsGrid');
    const quizBar = document.getElementById('quizBar');
    const quizStatusHeader = document.getElementById('quizStatusHeader');
    const quizQuestionBox = document.getElementById('quizQuestionBox');
    const quizScoreCard = document.getElementById('quizScoreCard');
    const retryQuizBtn = document.getElementById('retryQuizBtn');

    // Card Generator Elements
    const cardMakerForm = document.getElementById('cardMakerForm');
    const formSender = document.getElementById('formSender');
    const formReceiver = document.getElementById('formReceiver');
    const formMessage = document.getElementById('formMessage');
    const formPhoto = document.getElementById('formPhoto');
    const cardReceiverDisplay = document.getElementById('cardReceiverDisplay');
    const cardSenderDisplay = document.getElementById('cardSenderDisplay');
    const cardMsgDisplay = document.getElementById('cardMsgDisplay');
    const livePhotoImg = document.getElementById('livePhotoImg');
    const downloadCardBtn = document.getElementById('downloadCardBtn');
    const shareCardBtn = document.getElementById('shareCardBtn');

    // Certificate Elements
    const certNames = document.getElementById('certNames');
    const printCertBtn = document.getElementById('printCertBtn');

    // Wishes Wall Elements
    const addWishForm = document.getElementById('addWishForm');
    const wishNameInput = document.getElementById('wishNameInput');
    const wishTextInput = document.getElementById('wishTextInput');
    const wishesStream = document.getElementById('wishesStream');

    // Modals
    const editNamesModal = document.getElementById('editNamesModal');
    const closeNamesModal = document.getElementById('closeNamesModal');
    const namesModalForm = document.getElementById('namesModalForm');
    const modalSisInput = document.getElementById('modalSisInput');
    const modalBroInput = document.getElementById('modalBroInput');

    const editLetterModal = document.getElementById('editLetterModal');
    const closeLetterModal = document.getElementById('closeLetterModal');
    const letterModalForm = document.getElementById('letterModalForm');
    const modalLetterInput = document.getElementById('modalLetterInput');

    // Canvas
    const canvas = document.getElementById('mainCanvas');
    const ctx = canvas.getContext('2d');

    let isAudioPlaying = false;
    let isDiamondRunning = false;
    let diamondWordIndex = 0;
    let typewriterTimer = null;
    let isRakhiTied = false;
    let isAartiAutoSpinning = true;

    // Word Sequence for 3-2-1 Diamond Sparkle Countdown
    const wordSequence = [
        { text: "3", duration: 1100, scale: 2.2 },
        { text: "2", duration: 1100, scale: 2.2 },
        { text: "1", duration: 1100, scale: 2.2 },
        { text: "YOU", duration: 1100, scale: 1.6 },
        { text: "ARE", duration: 1100, scale: 1.6 },
        { text: "MY", duration: 1100, scale: 1.6 },
        { text: "LOVE", duration: 1300, scale: 1.6 }
    ];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // ==========================================================================
    // 0. SYNC NAMES EVERYWHERE (100% NULL SAFE)
    // ==========================================================================
    function syncAllNames() {
        if (introSisName) introSisName.textContent = appState.sisterName;
        if (introBroName) introBroName.textContent = appState.brotherName;
        if (finaleNamesTag) finaleNamesTag.textContent = `${appState.sisterName} ❤️ ${appState.brotherName}`;
        if (heroSisterName) heroSisterName.textContent = appState.sisterName;
        if (heroBrotherName) heroBrotherName.textContent = appState.brotherName;
        const chooseBroEl = document.getElementById('chooseBroName');
        if (chooseBroEl) chooseBroEl.textContent = appState.brotherName;
        if (envelopeRecipient) envelopeRecipient.textContent = "Brothers";
        if (letterToName) letterToName.textContent = appState.brotherName;
        if (letterFromName) letterFromName.textContent = `${appState.sisterName} ❤️`;
        if (formSender) formSender.value = appState.sisterName;
        if (formReceiver) formReceiver.value = appState.brotherName;
        if (cardSenderDisplay) cardSenderDisplay.textContent = appState.sisterName;
        if (cardReceiverDisplay) cardReceiverDisplay.textContent = appState.brotherName;
        if (certNames) certNames.textContent = `${appState.sisterName} & ${appState.brotherName}`;
        if (modalSisInput) modalSisInput.value = appState.sisterName;
        if (modalBroInput) modalBroInput.value = appState.brotherName;
    }
    syncAllNames();

    // ==========================================================================
    // 1. PARTICLES & CANVAS ENGINE
    // ==========================================================================
    const floatingHearts = [];
    const heartSymbols = ['❤️', '💖', '💕', '✨', '🌸', '💓'];

    class FloatingHeart {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 40;
            this.size = Math.random() * 16 + 10;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.speedY = -(Math.random() * 1.5 + 0.8);
            this.alpha = Math.random() * 0.7 + 0.3;
            this.decay = Math.random() * 0.003 + 0.002;
            this.icon = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            this.isHeart = Math.random() > 0.35;
        }
        update() {
            this.x += this.speedX + Math.sin(this.y * 0.015) * 0.4;
            this.y += this.speedY;
            this.alpha -= this.decay;
            if (this.alpha <= 0 || this.y < -30) this.reset();
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(0, this.alpha);
            if (this.isHeart) {
                ctx.font = `${this.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.fillText(this.icon, this.x, this.y);
            } else {
                ctx.fillStyle = '#ffe066';
                ctx.shadowBlur = 8;
                ctx.shadowColor = '#ffb300';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 0.25, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    for (let i = 0; i < 45; i++) floatingHearts.push(new FloatingHeart());

    const diamondParticles = [];
    class DiamondSparkle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.targetX = this.x;
            this.targetY = this.y;
            this.vx = (Math.random() - 0.5) * 4;
            this.vy = (Math.random() - 0.5) * 4;
            this.size = Math.random() * 3 + 2.5;
            this.alpha = 0;
            this.targetAlpha = 1;
            this.twinklePhase = Math.random() * Math.PI * 2;
            this.starAngle = Math.random() * Math.PI * 2;
        }
        update() {
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            this.vx = this.vx * 0.85 + dx * 0.12;
            this.vy = this.vy * 0.85 + dy * 0.12;
            this.x += this.vx;
            this.y += this.vy;
            this.alpha += (this.targetAlpha - this.alpha) * 0.1;
            this.twinklePhase += 0.06;
            this.starAngle += 0.02;
        }
        draw() {
            if (this.alpha <= 0.02) return;
            const currentTwinkle = (Math.sin(this.twinklePhase) * 0.35 + 0.65) * this.alpha;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.globalAlpha = Math.min(1, currentTwinkle);

            const radGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 3.5);
            radGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            radGrad.addColorStop(0.35, 'rgba(230, 248, 255, 0.8)');
            radGrad.addColorStop(0.7, 'rgba(180, 230, 255, 0.3)');
            radGrad.addColorStop(1, 'rgba(255, 42, 109, 0)');
            ctx.fillStyle = radGrad;
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 3.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 0.9, 0, Math.PI * 2);
            ctx.fill();

            if (currentTwinkle > 0.4) {
                ctx.rotate(this.starAngle);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                const starLen = this.size * 3.8;
                const starThick = this.size * 0.55;
                ctx.beginPath();
                ctx.ellipse(0, 0, starThick, starLen, 0, 0, Math.PI * 2);
                ctx.ellipse(0, 0, starLen, starThick, 0, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
        explode() {
            const angle = Math.random() * Math.PI * 2;
            const force = Math.random() * 12 + 6;
            this.vx = Math.cos(angle) * force;
            this.vy = Math.sin(angle) * force;
        }
    }

    for (let i = 0; i < 350; i++) diamondParticles.push(new DiamondSparkle());

    function getCoordsFromText(text, scaleMultiplier = 1.6) {
        const offCanvas = document.createElement('canvas');
        const offCtx = offCanvas.getContext('2d');
        const w = 600, h = 300;
        offCanvas.width = w; offCanvas.height = h;
        offCtx.fillStyle = '#ffffff';
        offCtx.textAlign = 'center';
        offCtx.textBaseline = 'middle';
        const fontSize = Math.min(130 * scaleMultiplier, window.innerWidth * 0.22);
        offCtx.font = `900 ${fontSize}px 'Montserrat', sans-serif`;
        offCtx.fillText(text, w / 2, h / 2);
        const imgData = offCtx.getImageData(0, 0, w, h).data;
        const points = [];
        for (let y = 0; y < h; y += 8) {
            for (let x = 0; x < w; x += 8) {
                if (imgData[(y * w + x) * 4 + 3] > 128) {
                    points.push({ x: x - w / 2, y: y - h / 2 });
                }
            }
        }
        return points;
    }

    function renderDiamondText(wordObj) {
        const points = getCoordsFromText(wordObj.text, wordObj.scale);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        for (let i = 0; i < diamondParticles.length; i++) {
            const p = diamondParticles[i];
            if (i < points.length) {
                p.targetX = centerX + points[i].x;
                p.targetY = centerY + points[i].y;
                p.targetAlpha = 1;
            } else {
                const ang = Math.random() * Math.PI * 2;
                const rad = Math.random() * 200 + 80;
                p.targetX = centerX + Math.cos(ang) * rad;
                p.targetY = centerY + Math.sin(ang) * rad;
                p.targetAlpha = 0.2;
            }
        }
    }

    function runDiamondSequence() {
        if (diamondWordIndex < wordSequence.length) {
            renderDiamondText(wordSequence[diamondWordIndex]);
            setTimeout(() => {
                diamondParticles.forEach(p => p.explode());
                diamondWordIndex++;
                setTimeout(runDiamondSequence, 150);
            }, wordSequence[diamondWordIndex].duration);
        } else {
            isDiamondRunning = false;
            diamondParticles.forEach(p => { p.explode(); p.targetAlpha = 0; });
            if (laserBars) laserBars.classList.remove('active');
            if (canvas) canvas.classList.remove('countdown-mode');
            if (cinematicIntroOverlay) cinematicIntroOverlay.classList.remove('active');
            if (neonHeartFinale) neonHeartFinale.style.display = 'flex';
            showConfetti();
        }
    }

    function canvasLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        floatingHearts.forEach(p => { p.update(); p.draw(); });
        if (isDiamondRunning) {
            diamondParticles.forEach(p => { p.update(); p.draw(); });
        }
        requestAnimationFrame(canvasLoop);
    }
    canvasLoop();

    // ==========================================================================
    // 2. SLIDE TO UNLOCK & SURPRISE TRIGGER (UNIVERSAL POINTER PHYSICS)
    // ==========================================================================
    function startSurpriseExperience() {
        startAudio();
        const introGlassCard = document.querySelector('.intro-glass-card');
        if (introGlassCard) introGlassCard.classList.add('hide-card');
        if (cinematicIntroOverlay) cinematicIntroOverlay.classList.add('playing-sequence');
        if (canvas) canvas.classList.add('countdown-mode');
        if (laserBars) laserBars.classList.add('active');

        isDiamondRunning = true;
        diamondWordIndex = 0;
        runDiamondSequence();
        showToast("✨ 3-2-1 Magic Countdown Started! ✨");
    }

    let isPointerDragging = false;
    let startPointerX = 0;

    function handlePointerDown(e) {
        isPointerDragging = true;
        startPointerX = e.clientX;
        if (slideThumb) {
            slideThumb.style.transition = 'none';
            if (slideThumb.setPointerCapture) {
                slideThumb.setPointerCapture(e.pointerId);
            }
        }
        e.preventDefault();
    }

    function handlePointerMove(e) {
        if (!isPointerDragging || !slideThumb || !slideTrack) return;
        const max = slideTrack.offsetWidth - slideThumb.offsetWidth - 8;
        let delta = e.clientX - startPointerX;
        if (delta < 0) delta = 0;
        if (delta > max) delta = max;
        slideThumb.style.transform = `translateX(${delta}px)`;

        if (delta > max * 0.6) {
            isPointerDragging = false;
            slideThumb.style.transition = 'transform 0.2s ease';
            slideThumb.style.transform = `translateX(${max}px)`;
            startSurpriseExperience();
        }
    }

    function handlePointerUp(e) {
        if (!isPointerDragging) return;
        isPointerDragging = false;
        if (slideThumb) {
            slideThumb.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            slideThumb.style.transform = 'translateX(0px)';
        }
    }

    if (slideThumb) {
        slideThumb.addEventListener('pointerdown', handlePointerDown);
        slideThumb.addEventListener('pointermove', handlePointerMove);
        slideThumb.addEventListener('pointerup', handlePointerUp);
        slideThumb.addEventListener('pointercancel', handlePointerUp);
    }

    // Direct click/tap anywhere on slider track
    if (slideTrack) {
        slideTrack.addEventListener('click', (e) => {
            if (!isDiamondRunning) {
                const max = slideTrack.offsetWidth - (slideThumb ? slideThumb.offsetWidth : 50) - 8;
                if (slideThumb) {
                    slideThumb.style.transition = 'transform 0.35s ease';
                    slideThumb.style.transform = `translateX(${max}px)`;
                }
                setTimeout(() => {
                    startSurpriseExperience();
                }, 200);
            }
        });
    }

    if (tapPlayDirectBtn) {
        tapPlayDirectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const max = slideTrack ? (slideTrack.offsetWidth - (slideThumb ? slideThumb.offsetWidth : 50) - 8) : 200;
            if (slideThumb) {
                slideThumb.style.transition = 'transform 0.35s ease';
                slideThumb.style.transform = `translateX(${max}px)`;
            }
            setTimeout(() => {
                startSurpriseExperience();
            }, 200);
        });
    }

    if (enterFullSiteBtn) {
        enterFullSiteBtn.addEventListener('click', () => {
            if (neonHeartFinale) neonHeartFinale.style.display = 'none';
            if (cinematicIntroOverlay) cinematicIntroOverlay.classList.remove('active');
            showConfetti();
            showToast("🎉 Welcome to the Grand Celebration! ❤️");
            smoothScrollTo('#heroSection');
        });
    }

    if (replaySurpriseBtn) {
        replaySurpriseBtn.addEventListener('click', () => {
            const introGlassCard = document.querySelector('.intro-glass-card');
            if (introGlassCard) introGlassCard.classList.remove('hide-card');
            if (cinematicIntroOverlay) {
                cinematicIntroOverlay.classList.remove('playing-sequence');
                cinematicIntroOverlay.classList.add('active');
            }
            if (slideThumb) slideThumb.style.transform = 'translateX(0px)';
        });
    }

    // ==========================================================================
    // 2.1 GRAND START CELEBRATION CTA & INTERACTIVE MANDALA
    // ==========================================================================
    const mainStartCelebrationBtn = document.getElementById('mainStartCelebrationBtn');
    if (mainStartCelebrationBtn) {
        mainStartCelebrationBtn.addEventListener('click', () => {
            startAudio();
            showConfetti();
            showToast("🎉 Happy Raksha Bandhan! Let's Begin the Ceremony ❤️");
        });
    }

    if (heroMandala) {
        heroMandala.addEventListener('click', () => {
            heroMandala.style.transform = 'scale(1.2) rotate(360deg)';
            showConfetti();
            showToast("✨ Divine Mandala Blessed with Eternal Love! ✨");
            setTimeout(() => {
                heroMandala.style.transform = '';
            }, 800);
        });
    }

    // ==========================================================================
    // 3. AUDIO CONTROLS
    // ==========================================================================
    function startAudio() {
        if (bgAudio) {
            bgAudio.play().then(() => {
                isAudioPlaying = true;
                if (audioStatusTxt) audioStatusTxt.textContent = 'Music: ON';
            }).catch(e => console.log(e));
        }
    }

    if (audioToggleBtn) {
        audioToggleBtn.addEventListener('click', () => {
            if (!bgAudio) return;
            if (bgAudio.paused) {
                bgAudio.play();
                isAudioPlaying = true;
                if (audioStatusTxt) audioStatusTxt.textContent = 'Music: ON';
            } else {
                bgAudio.pause();
                isAudioPlaying = false;
                if (audioStatusTxt) audioStatusTxt.textContent = 'Music: OFF';
            }
        });
    }

    // ==========================================================================
    // 4. SMOOTH SCROLLING JOURNEY & SCROLL-SPY
    // ==========================================================================
    function smoothScrollTo(targetSelector) {
        const targetEl = document.querySelector(targetSelector);
        if (targetEl) {
            const headerOffset = 70;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Attach smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                smoothScrollTo(targetId);
            }
        });
    });

    // Back to top button
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            smoothScrollTo('#heroSection');
        });
    }

    // Scroll reveal observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================================================
    // 5. LIVE COUNTDOWN TIMER (100% ACTIVE & DYNAMIC)
    // ==========================================================================
    function updateCountdown() {
        const now = new Date();
        // Festive midnight countdown / auspicious celebration timer
        let target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime();
        let diff = target - now.getTime();

        if (diff <= 0) {
            target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 23, 59, 59).getTime();
            diff = target - now.getTime();
        }

        const d = 0; // Current day celebration
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        if (daysVal) daysVal.textContent = String(d).padStart(2, '0');
        if (hoursVal) hoursVal.textContent = String(h).padStart(2, '0');
        if (minsVal) minsVal.textContent = String(m).padStart(2, '0');
        if (secsVal) secsVal.textContent = String(s).padStart(2, '0');
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ==========================================================================
    // 6. VIRTUAL RAKHI CEREMONY (5-STEP INTERACTIVE WORKFLOW)
    // ==========================================================================
    let selectedRakhiId = 'kundan';
    let selectedRakhiName = 'Royal Kundan Gold Rakhi';
    let currentCeremonyStep = 1;
    let isTyingInProgress = false;

    const rakhiTemplates = {
        kundan: `
            <div class="rakhi-render-item kundan-rakhi">
                <div class="thread red-thread left"></div>
                <div class="dial gold-disc"><div class="ruby-center"></div></div>
                <div class="thread red-thread right"></div>
            </div>`,
        evileye: `
            <div class="rakhi-render-item evileye-rakhi">
                <div class="thread blue-thread left"></div>
                <div class="dial evileye-disc"><div class="eye-iris"></div></div>
                <div class="thread blue-thread right"></div>
            </div>`,
        cartoon: `
            <div class="rakhi-render-item cartoon-rakhi">
                <div class="thread red-thread left"></div>
                <div class="dial cartoon-disc"><span class="chibi-icon">👫</span></div>
                <div class="thread red-thread right"></div>
            </div>`,
        morpankh: `
            <div class="rakhi-render-item morpankh-rakhi">
                <div class="thread peacock-thread left"></div>
                <div class="dial morpankh-disc"><span class="peacock-icon">🪶</span></div>
                <div class="thread peacock-thread right"></div>
            </div>`,
        pearl: `
            <div class="rakhi-render-item pearl-rakhi">
                <div class="thread gold-thread left"></div>
                <div class="dial pearl-disc"><span class="swastik-symbol">卐</span></div>
                <div class="thread gold-thread right"></div>
            </div>`,
        smiley: `
            <div class="rakhi-render-item smiley-rakhi">
                <div class="thread red-thread left"></div>
                <div class="dial smiley-disc"><span class="smiley-icon">😊</span></div>
                <div class="thread red-thread right"></div>
            </div>`
    };

    function getRakhiMarkup(id) {
        return rakhiTemplates[id] || rakhiTemplates.kundan;
    }

    function goToCeremonyStep(stepNum) {
        currentCeremonyStep = stepNum;

        // Update Nav Pills
        document.querySelectorAll('.step-nav-item').forEach(item => {
            const step = parseInt(item.getAttribute('data-step'));
            if (step === stepNum) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Hide all steps, show current step
        document.querySelectorAll('.rakhi-step-view').forEach(view => {
            view.style.display = 'none';
        });

        const activeView = document.getElementById(`rakhiStep${stepNum}`);
        if (activeView) {
            activeView.style.display = 'block';
        }

        // Setup Step-specific graphics
        if (stepNum === 2) {
            const graphicContainer = document.getElementById('selectedRakhiGraphic');
            if (graphicContainer) {
                graphicContainer.innerHTML = getRakhiMarkup(selectedRakhiId);
            }
        } else if (stepNum === 3) {
            const animatingContainer = document.getElementById('animatingRakhi');
            if (animatingContainer) {
                animatingContainer.innerHTML = getRakhiMarkup(selectedRakhiId);
            }
        } else if (stepNum === 4) {
            const finalContainer = document.getElementById('finalTiedRakhi');
            if (finalContainer) {
                finalContainer.innerHTML = getRakhiMarkup(selectedRakhiId);
            }
        }
    }

    // Step Navigation Click Listener
    document.querySelectorAll('.step-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const targetStep = parseInt(item.getAttribute('data-step'));
            goToCeremonyStep(targetStep);
        });
    });

    // STEP 1: RAKHI SELECTION
    const rakhiOptionCards = document.querySelectorAll('.rakhi-option-card');
    const btnUseSelectedRakhi = document.getElementById('btnUseSelectedRakhi');
    const chooseBroName = document.getElementById('chooseBroName');

    if (chooseBroName) {
        chooseBroName.textContent = appState.brotherName;
    }

    rakhiOptionCards.forEach(card => {
        card.addEventListener('click', () => {
            rakhiOptionCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedRakhiId = card.getAttribute('data-rakhi-id');
            selectedRakhiName = card.getAttribute('data-rakhi-name');
            showToast(`💮 Selected: ${selectedRakhiName}`);
        });
    });

    if (btnUseSelectedRakhi) {
        btnUseSelectedRakhi.addEventListener('click', () => {
            goToCeremonyStep(2);
            showToast("👉 Drag the Rakhi to your Brother's Wrist! ❤️");
        });
    }

    // STEP 2: DRAG RAKHI TO WRIST
    const btnBackToStep1 = document.getElementById('btnBackToStep1');
    const btnQuickTieFallback = document.getElementById('btnQuickTieFallback');
    const draggableRakhiItem = document.getElementById('draggableRakhi');
    const wristDropzoneTarget = document.getElementById('wristDropzone');

    if (btnBackToStep1) {
        btnBackToStep1.addEventListener('click', () => {
            goToCeremonyStep(1);
        });
    }

    function startTyingAnimation() {
        if (isTyingInProgress) return;
        isTyingInProgress = true;
        goToCeremonyStep(3);

        const progressFill = document.getElementById('tyingProgressFill');
        const progressHeart = document.getElementById('tyingProgressHeart');
        const statusTxt = document.getElementById('tyingStatusTxt');

        let pct = 0;
        const interval = setInterval(() => {
            pct += 4;
            if (progressFill) progressFill.style.width = `${pct}%`;
            if (progressHeart) progressHeart.style.left = `${pct}%`;

            if (pct >= 100) {
                clearInterval(interval);
                isTyingInProgress = false;
                if (statusTxt) statusTxt.textContent = "Rakhi Tied Successfully! ❤️";
                setTimeout(() => {
                    goToCeremonyStep(4);
                    showConfetti();
                    showToast(`🎉 Rakhi Successfully Tied on Brother's Wrist! ❤️`);
                }, 400);
            }
        }, 60);
    }

    if (btnQuickTieFallback) {
        btnQuickTieFallback.addEventListener('click', startTyingAnimation);
    }

    // Mouse Drag Events
    if (draggableRakhiItem) {
        draggableRakhiItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', 'rakhi');
            if (wristDropzoneTarget) wristDropzoneTarget.classList.add('drag-over');
        });

        draggableRakhiItem.addEventListener('dragend', () => {
            if (wristDropzoneTarget) wristDropzoneTarget.classList.remove('drag-over');
        });

        // Touch Drag Events
        draggableRakhiItem.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            draggableRakhiItem.style.position = 'fixed';
            draggableRakhiItem.style.left = `${touch.clientX - 60}px`;
            draggableRakhiItem.style.top = `${touch.clientY - 30}px`;
            draggableRakhiItem.style.zIndex = '1000';

            if (wristDropzoneTarget) {
                const dropRect = wristDropzoneTarget.getBoundingClientRect();
                if (touch.clientX >= dropRect.left && touch.clientX <= dropRect.right &&
                    touch.clientY >= dropRect.top && touch.clientY <= dropRect.bottom) {
                    wristDropzoneTarget.classList.add('drag-over');
                } else {
                    wristDropzoneTarget.classList.remove('drag-over');
                }
            }
        }, { passive: true });

        draggableRakhiItem.addEventListener('touchend', (e) => {
            const touch = e.changedTouches[0];
            if (wristDropzoneTarget) {
                const dropRect = wristDropzoneTarget.getBoundingClientRect();
                if (touch.clientX >= dropRect.left && touch.clientX <= dropRect.right &&
                    touch.clientY >= dropRect.top && touch.clientY <= dropRect.bottom) {
                    startTyingAnimation();
                }
                wristDropzoneTarget.classList.remove('drag-over');
            }
            draggableRakhiItem.style.position = '';
            draggableRakhiItem.style.left = '';
            draggableRakhiItem.style.top = '';
            draggableRakhiItem.style.zIndex = '';
        });
    }

    if (wristDropzoneTarget) {
        wristDropzoneTarget.addEventListener('dragover', (e) => {
            e.preventDefault();
            wristDropzoneTarget.classList.add('drag-over');
        });

        wristDropzoneTarget.addEventListener('dragleave', () => {
            wristDropzoneTarget.classList.remove('drag-over');
        });

        wristDropzoneTarget.addEventListener('drop', (e) => {
            e.preventDefault();
            wristDropzoneTarget.classList.remove('drag-over');
            startTyingAnimation();
        });
    }

    // STEP 4: RITUALS (TILAK, AARTI, SWEETS)
    const applyTilakBtn = document.getElementById('applyTilakBtn');
    const doAartiBtn = document.getElementById('doAartiBtn');
    const offerSweetsBtn = document.getElementById('offerSweetsBtn');
    const btnGoToStep5 = document.getElementById('btnGoToStep5');

    if (applyTilakBtn) {
        applyTilakBtn.addEventListener('click', () => {
            showConfetti();
            showToast("🔴 Auspicious Roli & Akshat Tilak applied with sacred blessings! ✨");
        });
    }

    if (doAartiBtn) {
        doAartiBtn.addEventListener('click', () => {
            showConfetti();
            showToast("🪔 Holy Aarti performed! May divine light protect your brothers always! 🪔");
        });
    }

    if (offerSweetsBtn) {
        offerSweetsBtn.addEventListener('click', () => {
            showConfetti();
            showToast("🍬 Fed delicious Kaju Katli & Laddoo! Unlimited sweetness in life! 🍬");
        });
    }

    if (btnGoToStep5) {
        btnGoToStep5.addEventListener('click', () => {
            goToCeremonyStep(5);
            showConfetti();
            showToast("🎉 Happy Raksha Bandhan Celebration! ❤️");
        });
    }

    // STEP 5: CELEBRATION & SHARE
    const btnDownloadCelebCard = document.getElementById('btnDownloadCelebCard');
    const btnShareCelebWhatsApp = document.getElementById('btnShareCelebWhatsApp');
    const btnRestartCeremony = document.getElementById('btnRestartCeremony');

    if (btnDownloadCelebCard) {
        btnDownloadCelebCard.addEventListener('click', () => {
            window.print();
        });
    }

    if (btnShareCelebWhatsApp) {
        btnShareCelebWhatsApp.addEventListener('click', () => {
            const msg = encodeURIComponent(`🌸 *Happy Raksha Bandhan 2026!* 🌸\n\nTo my wonderful brothers *${appState.brotherName}*,\n\n"No matter where life takes us, you will always be my superheroes! ❤️ Stay happy, stay blessed!"\n\nWith eternal love,\n❤️ *${appState.sisterName}*\n\n✨ Celebrate here: ${window.location.href}`);
            window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
        });
    }

    if (btnRestartCeremony) {
        btnRestartCeremony.addEventListener('click', () => {
            goToCeremonyStep(1);
            showToast("🔄 Choose another Rakhi to tie!");
        });
    }

    // ==========================================================================
    // 7. MEMORY GALLERY & 3D ROTATING CYLINDER CAROUSEL
    // ==========================================================================
    let carouselAngle = 0;
    let isCarouselAutoRotating = false;
    let carouselTimer = null;

    function updateCarousel3D() {
        carousel3DStage.style.transform = `rotateY(${carouselAngle}deg)`;
    }

    prev3DBtn.addEventListener('click', () => {
        carouselAngle += 51.43;
        updateCarousel3D();
    });

    next3DBtn.addEventListener('click', () => {
        carouselAngle -= 51.43;
        updateCarousel3D();
    });

    autoSpin3DBtn.addEventListener('click', () => {
        isCarouselAutoRotating = !isCarouselAutoRotating;
        if (isCarouselAutoRotating) {
            autoSpin3DBtn.textContent = '🔄 Auto Rotate: ON';
            autoSpin3DBtn.classList.add('gold');
            carouselTimer = setInterval(() => {
                carouselAngle -= 51.43;
                updateCarousel3D();
            }, 2500);
        } else {
            autoSpin3DBtn.textContent = '🔄 Auto Rotate: OFF';
            autoSpin3DBtn.classList.remove('gold');
            clearInterval(carouselTimer);
        }
    });

    toggle3DCarouselBtn.addEventListener('click', () => {
        if (carousel3DWrapper.style.display === 'none') {
            carousel3DWrapper.style.display = 'flex';
            memoryGrid.style.display = 'none';
            toggle3DCarouselBtn.textContent = '📑 Show Grid View';
            showToast("🔄 3D Rotating Cylinder Carousel Active!");
        } else {
            carousel3DWrapper.style.display = 'none';
            memoryGrid.style.display = 'grid';
            toggle3DCarouselBtn.textContent = '🔄 3D Rotating Carousel';
        }
    });

    catTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            catTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');

            document.querySelectorAll('.memory-card').forEach(card => {
                if (filter === 'all' || card.getAttribute('data-cat') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    uploadMemoryPhoto.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const userCaption = prompt("Enter a sweet caption for this memory:", "Unforgettable moments with my brothers ❤️");
            if (userCaption !== null) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const newCard = document.createElement('div');
                    newCard.className = 'memory-card card-3d-tilt';
                    newCard.setAttribute('data-cat', 'recent');
                    newCard.innerHTML = `
                        <div class="card-img-box">
                            <img class="uploaded-img" src="${ev.target.result}" alt="Memory" style="display:block;">
                        </div>
                        <div class="card-body">
                            <span class="category-tag">Uploaded Memory ✨</span>
                            <p class="caption-text">"${userCaption}"</p>
                        </div>
                    `;
                    memoryGrid.prepend(newCard);
                    showConfetti();
                    showToast("📸 New Memory Card added successfully! ❤️");
                };
                reader.readAsDataURL(file);
            }
        }
    });

    // ==========================================================================
    // 8. PERSONAL LETTER TYPEWRITER
    // ==========================================================================
    function typeLetter(text) {
        if (typewriterTimer) clearInterval(typewriterTimer);
        if (!typewriterBody) return;
        typewriterBody.textContent = '';
        let idx = 0;

        typewriterTimer = setInterval(() => {
            if (idx < text.length) {
                typewriterBody.textContent += text.charAt(idx);
                idx++;
            } else {
                clearInterval(typewriterTimer);
            }
        }, 35);
    }

    if (waxSealBtn) {
        waxSealBtn.addEventListener('click', () => {
            if (envelopeBox) envelopeBox.style.display = 'none';
            if (unfoldedSheet) unfoldedSheet.style.display = 'block';
            typeLetter(appState.letterContent);
            showConfetti();
        });
    }

    if (retypeLetterBtn) {
        retypeLetterBtn.addEventListener('click', () => {
            typeLetter(appState.letterContent);
        });
    }

    if (editLetterBtn) {
        editLetterBtn.addEventListener('click', () => {
            if (modalLetterInput) modalLetterInput.value = appState.letterContent;
            if (editLetterModal) editLetterModal.classList.add('active');
        });
    }

    if (closeLetterModal) {
        closeLetterModal.addEventListener('click', () => {
            if (editLetterModal) editLetterModal.classList.remove('active');
        });
    }

    if (letterModalForm) {
        letterModalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const txt = modalLetterInput ? modalLetterInput.value.trim() : '';
            if (txt) {
                appState.letterContent = txt;
                localStorage.setItem('rakhi_letter_txt', txt);
                if (editLetterModal) editLetterModal.classList.remove('active');
                typeLetter(txt);
                showToast("💌 Letter updated & retyping! ❤️");
            }
        });
    }

    // ==========================================================================
    // 9. SURPRISE GIFT UNBOXING
    // ==========================================================================
    if (giftBox) {
        giftBox.addEventListener('click', () => {
            if (giftLid) giftLid.style.transform = 'translateY(-75px) rotate(-12deg)';
            setTimeout(() => {
                giftBox.style.display = 'none';
                if (revealedVoucher) revealedVoucher.style.display = 'block';
                showConfetti();
                showToast("🎁 Surprise Voucher Unlocked! Lifetime Protection & Snacks! 🎁");
            }, 400);
        });
    }

    if (voucherBurstBtn) {
        voucherBurstBtn.addEventListener('click', () => {
            showConfetti();
        });
    }

    // ==========================================================================
    // 10. SIBLING QUIZ GAME
    // ==========================================================================
    const quizQuestions = [
        {
            q: "Who is more naughty & mischievous? 😜",
            options: ["Sister Prity 👸", "The Brothers (Amarjit, Ravishankar, Harishankar, Sumit) 🤴", "All 5 are equally crazy! 😂", "Mom knows the truth 👀"]
        },
        {
            q: "Who steals snacks & food late at night? 🍫",
            options: ["Prity is the Snack Master 🍕", "The 4 brothers empty the fridge 🍔", "We raid the kitchen together! 🤝", "Whoever wakes up first 🏃"]
        },
        {
            q: "Who starts the fights over silly things? 🥊",
            options: ["Brothers start it always! 😤", "Prity provokes first! 😜", "Over the TV remote control 📺", "Daily full family wrestling ⚔️"]
        },
        {
            q: "Who says 'I will tell Mom' first? 😂",
            options: ["Prity's ultimate weapon 🎯", "Brothers when losing argument 🗣️", "Neither, we keep secrets 🤫", "All scream simultaneously 📢"]
        },
        {
            q: "Who loves and protects the other more? ❤️",
            options: ["Prity loves endlessly 💖", "The 4 Brothers protect like a fortress 🛡️", "Infinite love from all 5! ♾️", "Beyond words & universe 🌟"]
        }
    ];

    let quizIdx = 0;

    function renderQuiz() {
        if (quizIdx < quizQuestions.length) {
            const item = quizQuestions[quizIdx];
            if (qTitle) qTitle.textContent = item.q;
            if (quizStatusHeader) quizStatusHeader.textContent = `Question ${quizIdx + 1} of ${quizQuestions.length}`;
            if (quizBar) quizBar.style.width = `${((quizIdx + 1) / quizQuestions.length) * 100}%`;
            
            if (qOptionsGrid) {
                qOptionsGrid.innerHTML = '';
                item.options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = 'q-opt-btn';
                    btn.innerHTML = `<span>👉</span> <span>${opt}</span>`;
                    btn.addEventListener('click', () => {
                        showConfetti();
                        quizIdx++;
                        renderQuiz();
                    });
                    qOptionsGrid.appendChild(btn);
                });
            }
        } else {
            if (quizQuestionBox) quizQuestionBox.style.display = 'none';
            if (quizScoreCard) quizScoreCard.style.display = 'block';
            if (quizStatusHeader) quizStatusHeader.textContent = 'Quiz Completed! 🎉';
            showConfetti();
        }
    }
    renderQuiz();

    if (retryQuizBtn) {
        retryQuizBtn.addEventListener('click', () => {
            quizIdx = 0;
            if (quizQuestionBox) quizQuestionBox.style.display = 'block';
            if (quizScoreCard) quizScoreCard.style.display = 'none';
            renderQuiz();
        });
    }

    // ==========================================================================
    // 11. CARD MAKER & GREETINGS
    // ==========================================================================
    if (cardMakerForm) {
        cardMakerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (cardSenderDisplay && formSender) cardSenderDisplay.textContent = formSender.value.trim() || appState.sisterName;
            if (cardReceiverDisplay && formReceiver) cardReceiverDisplay.textContent = formReceiver.value.trim() || appState.brotherName;
            if (cardMsgDisplay && formMessage) cardMsgDisplay.textContent = formMessage.value.trim() || "Happy Raksha Bandhan!";
            showConfetti();
            showToast("🖼️ Live Greeting Card updated! ✨");
        });
    }

    if (formPhoto) {
        formPhoto.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    if (livePhotoImg) {
                        livePhotoImg.src = ev.target.result;
                        livePhotoImg.style.display = 'block';
                    }
                    const avatar = document.querySelector('.default-avatar');
                    if (avatar) avatar.style.display = 'none';
                    showConfetti();
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (downloadCardBtn) {
        downloadCardBtn.addEventListener('click', () => {
            window.print();
        });
    }

    if (shareCardBtn) {
        shareCardBtn.addEventListener('click', () => {
            const s = cardSenderDisplay ? cardSenderDisplay.textContent : appState.sisterName;
            const r = cardReceiverDisplay ? cardReceiverDisplay.textContent : appState.brotherName;
            const m = cardMsgDisplay ? cardMsgDisplay.textContent : "Happy Raksha Bandhan!";
            const msg = encodeURIComponent(`🌸 *Happy Raksha Bandhan 2026!* 🌸\n\nDear *${r}*,\n\n"${m}"\n\nWith eternal love & blessings,\n❤️ *${s}*\n\n✨ Celebrate here: ${window.location.href}`);
            window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
        });
    }

    // ==========================================================================
    // 12. CERTIFICATE & PRINT
    // ==========================================================================
    if (printCertBtn) {
        printCertBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // ==========================================================================
    // 13. WISHES WALL
    // ==========================================================================
    if (addWishForm) {
        addWishForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = wishNameInput ? wishNameInput.value.trim() : '';
            const wish = wishTextInput ? wishTextInput.value.trim() : '';

            if (name && wish && wishesStream) {
                const bubble = document.createElement('div');
                bubble.className = 'wish-bubble';
                bubble.innerHTML = `
                    <div class="wish-meta">
                        <strong>${name}</strong> <span>• Just now</span>
                    </div>
                    <p class="wish-body">"${wish}"</p>
                `;
                wishesStream.prepend(bubble);
                if (wishNameInput) wishNameInput.value = '';
                if (wishTextInput) wishTextInput.value = '';
                showConfetti();
                showToast("💌 Your wish has been posted on the wall! ❤️");
            }
        });
    }

    if (quickShareBtn) {
        quickShareBtn.addEventListener('click', () => {
            const text = `🪢 Happy Raksha Bandhan! Check out this magical surprise celebration for ${appState.sisterName} & ${appState.brotherName}! ✨\n${window.location.href}`;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text);
                showToast("📲 Link copied to clipboard! Share on WhatsApp! ❤️");
            } else {
                window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
            }
        });
    }

    // ==========================================================================
    // 14. EDIT SIBLING NAMES MODAL
    // ==========================================================================
    if (editNamesBtn) {
        editNamesBtn.addEventListener('click', () => {
            editNamesModal.classList.add('active');
        });
    }

    if (closeNamesModal) {
        closeNamesModal.addEventListener('click', () => {
            editNamesModal.classList.remove('active');
        });
    }

    namesModalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        appState.sisterName = modalSisInput.value.trim() || 'Prity';
        appState.brotherName = modalBroInput.value.trim() || 'Amarjit, Ravishankar, Harishankar, Sumit';
        
        localStorage.setItem('rakhi_sis_name', appState.sisterName);
        localStorage.setItem('rakhi_bro_name', appState.brotherName);

        syncAllNames();
        editNamesModal.classList.remove('active');
        showConfetti();
        showToast(`✨ Names updated! ✨`);
    });

    // ==========================================================================
    // HELPER: CONFETTI & TOAST
    // ==========================================================================
    function showConfetti() {
        const colors = ['#ff2a6d', '#ffd700', '#ff5722', '#ffffff', '#ff80ab', '#4caf50'];
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.style.position = 'fixed';
            p.style.left = `${Math.random() * 100}vw`;
            p.style.top = '-20px';
            p.style.width = `${Math.random() * 10 + 6}px`;
            p.style.height = `${Math.random() * 14 + 8}px`;
            p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            p.style.borderRadius = '3px';
            p.style.zIndex = '9999';
            p.style.pointerEvents = 'none';
            p.style.transition = `transform ${Math.random() * 2 + 1.5}s ease-out, opacity 2s ease-out`;
            document.body.appendChild(p);

            setTimeout(() => {
                p.style.transform = `translate(${(Math.random() - 0.5) * 150}px, ${window.innerHeight + 50}px) rotate(${Math.random() * 720}deg)`;
                p.style.opacity = '0';
            }, 30);

            setTimeout(() => p.remove(), 2500);
        }
    }

    function showToast(msg) {
        const existing = document.querySelector('.festive-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'festive-toast';
        toast.innerHTML = msg;
        toast.style.position = 'fixed';
        toast.style.bottom = '25px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = 'linear-gradient(135deg, rgba(80,0,20,0.96), rgba(40,0,10,0.98))';
        toast.style.border = '1.5px solid #ffe066';
        toast.style.borderRadius = '30px';
        toast.style.color = '#fff';
        toast.style.padding = '12px 26px';
        toast.style.fontSize = '0.92rem';
        toast.style.fontWeight = '600';
        toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(255,224,102,0.6)';
        toast.style.zIndex = '10000';
        toast.style.textAlign = 'center';
        toast.style.transition = 'all 0.4s ease';

        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(() => toast.remove(), 400);
        }, 3200);
    }

});
