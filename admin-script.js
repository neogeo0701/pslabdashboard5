// ===================================================
//   admin-script.js ??PS:LAB Admin Dashboard v2
// ===================================================

// ---- Real Student Data (sourced from all 10 report.html files) ----
const STUDENTS = [
    {
        id: 1,
        name: '?띿?誘?,
        school: '?몄쿇?좏쁽怨좊벑?숆탳 3?숇뀈 (?쇰컲怨?',
        grade: '3?숇뀈',
        major: '?ы쉶??誘몃뵒??吏留?,
        gpa: 2.27,
        gpaHistory: [3.1, 2.5, 2.7, 2.1],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '援? / ?? / ?? / ??',
        mentors: ['?꾨룞??(?쒖뼇? 怨듦낵???', '諛곗젣??(?쒖뼇? ?먯뿰怨쇳븰???', '?좎???(怨좊젮? 寃쎌쁺?숇?)'],
        targets: ['?쒖뼇? 寃쎌쁺?숇? (?뚯떊)', '寃쏀씗? 寃쎌쁺???(?곸젙)', '援??? 寃쎌쁺?숇? (?덉젙)'],
        status: 'complete',
        date: '2026.04.16',
        report: './reports/hong/report.html',
        note: '由ы룷???꾩꽦 諛?諛고룷 ?꾨즺. 1?숇뀈 3.1?먯꽌 異쒕컻 ??2-2?숆린 2.1濡?洹뱀쟻 ?곗긽?? ?섎뒫 理쒖? 由ъ뒪??二쇱쓽, 3?숇뀈 ?섑븰쨌援?뼱 ?댁떊 諛⑹뼱 理쒖슦??',
        color: '#3b82f6',
    },
    {
        id: 2,
        name: '?ㅽ삙??,
        school: '?곸썝怨좊벑?숆탳 2?숇뀈 (寃쎄린沅??쇰컲怨?',
        grade: '2?숇뀈',
        major: '?뷀븰怨듯븰 ?꾨Ц媛',
        gpa: 1.56,
        gpaHistory: [1.42, 1.69],
        gpaLabels: ['1-1', '1-2'],
        mock: '?대떦 ?놁쓬 (2?숇뀈)',
        mentors: ['?꾨룞??(?쒖뼇? 怨듦낵???', '怨좊???(寃쏀씗? ?닿낵???'],
        targets: ['?곗꽭?쨌怨좊젮? ?붽났?앸챸怨듯븰 (?곹뼢)', '?쒓컯?쨌?깃퇏愿?쨌?쒖뼇? ?뷀븰怨듯븰 (?뚯떊)', '以묒븰?쨌寃쏀씗? ?뷀븰怨듯븰 (?곸젙)'],
        status: 'complete',
        date: '2026.04.15',
        report: './reports/yoon/report.html',
        note: '由ы룷???꾩꽦 諛?諛고룷 ?꾨즺. 5?깃툒??1.56 理쒖긽?꾧텒. 1-2?숆린 怨듯넻?섑븰 B ?깆랬?꾧? ?꾩돩?. ?≪궗?댁뼵?ㅻ컲 鍮꾪?誘퍬 ?꾩씠?ㅻ뵖 ?곸젙 ?ㅽ뿕 ?쇰컲怨?理쒓퀬湲??됯?. 鍮꾧탳怨??뚰렪??湲덉?.',
        color: '#8b5cf6',
    },
    {
        id: 3,
        name: '諛뺤???,
        school: '?곸씪?ъ옄怨좊벑?숆탳 3?숇뀈',
        grade: '3?숇뀈',
        major: '湲濡쒕쾶 而ㅻ??덉??댁뀡',
        gpa: 2.67,
        gpaHistory: [2.32, 2.32, 3.15, 3.15],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '援? / ?? / ?? / ??',
        mentors: ['?좎???(怨좊젮? 寃쎌쁺?숇?)', '怨좊???(寃쏀씗? ?닿낵???'],
        targets: ['以묒븰? ?곸뼱?곷Ц/湲濡쒕쾶쨌寃쏀씗? 援?젣?숆낵 (?곹뼢)', '?숇챸?щ? ?띾낫愿묎퀬쨌?숆뎅? 誘몃뵒?댁빱裕ㅻ땲耳?댁뀡 (?뚯떊)', '?몄쥌?쨌援???쨌??떎? (?덉젙)'],
        status: 'complete',
        date: '2026.04.14',
        report: './reports/park-jiyoon/report.html',
        note: '由ы룷???꾩꽦 諛?諛고룷 ?꾨즺. 1?숇뀈 2.32 ??2?숇뀈 3.15 ?고븯?? ?곸뼱?곌레諛??곗텧쨌踰덉뿭 諛?移댄뵾 李쎌옉 ?곸썡. 3-1 V??諛섎벑???듭떖. 紐⑥쓽怨좎궗 援?쨌??濡?理쒖? ?뺣낫 媛??',
        color: '#10b981',
    },
    {
        id: 4,
        name: '?⑹삁由?,
        school: '怨좊┝怨좊벑?숆탳 3?숇뀈',
        grade: '3?숇뀈',
        major: '?뷀븰怨듯븰 etc',
        gpa: 2.69,
        gpaHistory: [2.5, 2.7, 2.8, 2.8],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '援? / ?? / ?? / ??',
        mentors: ['?꾨룞??(?쒖뼇? 怨듦낵???', '怨좊???(寃쏀씗? ?닿낵???'],
        targets: ['?쒖뼇?쨌以묒븰?쨌寃쏀씗? ?뷀븰怨듯븰 (?뚯떊)', '?명븯?쨌?꾩＜? ?뷀븰怨듯븰 (?곸젙)', '援???쨌?몄쥌? (?덉젙)'],
        status: 'complete',
        date: '2026.04.13',
        report: './reports/hwang/report.html',
        note: '由ы룷???꾨떖 ?꾨즺. ?숇?紐?留뚯”???뺤씤 ?덉젙. ?뷀븰怨듯븰 ?명듅 蹂닿컯 議곗뼵 ?꾨즺.',
        color: '#f59e0b',
    },
    {
        id: 5,
        name: '議곗씠??,
        school: '?곕낯怨좊벑?숆탳 3?숇뀈 (?쇰컲怨?',
        grade: '3?숇뀈',
        major: '?됱젙??/ 怨듦났 ?뺤콉 吏留?,
        gpa: 3.4,
        gpaHistory: [3.2, 3.5, 3.6, 3.3],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '援? / ?? / ?? / ??',
        mentors: ['?좎???(怨좊젮? 寃쎌쁺?숇?)', '怨좊???(寃쏀씗? ?닿낵???'],
        targets: ['?쒖슱?쒕┰?쨌寃쏀씗? ?됱젙??(?뚯떊)', '援???쨌?몄쥌?쨌?숇챸?щ? (?곸젙)', '?명븯?쨌?④뎅? (?덉젙)'],
        status: 'complete',
        date: '2026.04.13',
        report: './reports/cho/report.html',
        note: '由ы룷???꾨떖 ?꾨즺. 怨듯뻾 怨꾩뿴 ?앷린遺 留욎땄 ?꾩꽦.',
        color: '#ec4899',
    },
    {
        id: 6,
        name: '?뺤?吏?,
        school: '吏꾧굔怨좊벑?숆탳 3?숇뀈 (寃쎄린沅??쇰컲怨?',
        grade: '3?숇뀈',
        major: '踰뺥븰怨?吏留?,
        gpa: 3.39,
        gpaHistory: [3.0, 3.5, 3.8, 3.1],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '援? / ?? / ?? / ??',
        mentors: ['?좎???(怨좊젮? 寃쎌쁺?숇?)', '怨좊???(寃쏀씗? ?닿낵???'],
        targets: ['寃쏀씗?쨌?쒓뎅?몃? 踰뺥븰(?곹뼢)', '?숇챸?щ?쨌?숆뎅?(?뚯떊)', '?몄쥌?쨌援???(?덉젙)'],
        status: 'complete',
        date: '2026.04.12',
        report: './reports/jeong/report.html',
        note: '踰뺥븰 怨꾩뿴 理쒓퀬 ?꾩꽦?? 理쒖큹 ?덊띁?곗뒪 ?щ?. ?꾨떖 ?꾨즺.',
        color: '#14b8a6',
    },
    {
        id: 7,
        name: '?먯슜二?,
        school: '?⑸궓怨좊벑?숆탳 3?숇뀈 (異⑸궓 怨꾨！ 쨌 ?쇰컲怨?',
        grade: '3?숇뀈',
        major: '嫄댁꽕/?섍꼍怨듯븰 吏留?,
        gpa: 1.85,
        gpaHistory: [1.7, 1.9, 1.95, 1.85],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '援? / ?? / ?? / ??',
        mentors: ['?꾨룞??(?쒖뼇? 怨듦낵???', '怨좊???(寃쏀씗? ?닿낵???'],
        targets: ['?쒖뼇?쨌以묒븰? 嫄댁꽕?섍꼍怨듯븰 (?뚯떊)', '?명븯?쨌?꾩＜? (?곸젙)', '援???쨌?몄쥌? (?덉젙)'],
        status: 'complete',
        date: '2026.04.11',
        report: './reports/son/report.html',
        note: '異⑸궓 怨꾨！. ?띿뼱珥??꾪삎 ?쒗깮 ?щ? 寃???꾨즺. ?댁떊 1.85 ?덉젙沅? 嫄댁꽕?섍꼍怨듯븰 ?명듅 ?곗닔.',
        color: '#f97316',
    },
    {
        id: 8,
        name: '?ъ???,
        school: '?덉쨷怨?3?숇뀈 (?띿뼱珥????',
        grade: '3?숇뀈',
        major: '?뷀븰怨듯븰 湲곗닠??,
        gpa: 2.02,
        gpaHistory: [1.8, 2.1, 2.2, 2.0],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '援? / ?? / ?? / ??',
        mentors: ['?꾨룞??(?쒖뼇? 怨듦낵???', '諛곗젣??(?쒖뼇? ?먯뿰怨쇳븰???', '怨좊???(寃쏀씗? ?닿낵???'],
        targets: ['異⑸궓?쨌異⑸턿?쨌寃쎈턿? ?뷀븰怨듯븰 (?뚯떊, ?띿뼱珥?', '?쒖뼇?ERICA쨌?명븯?쨌?꾩＜? (?곸젙)', '援???쨌?몄쥌? (?덉젙)'],
        status: 'complete',
        date: '2026.04.10',
        report: './reports/shim/report.html',
        note: '?덉쨷???뚯옱 ???띿뼱珥??꾪삎 ??? ?뷀븰怨듯븰 ?명듅 蹂닿컯 議곗뼵 ?꾨즺.',
        color: '#6366f1',
    },
    {
        id: 9,
        name: '諛뺤젙?',
        school: '?⑦빐?쒖씪怨좊벑?숆탳 3?숇뀈 (?띿뼱珥??꾪삎 媛??',
        grade: '3?숇뀈',
        major: '?섍꼍怨듯븰 吏留?,
        gpa: 2.52,
        gpaHistory: [1.86, 2.5, 3.0, 2.88],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '援? / ?? / ?? / ??',
        mentors: ['?꾨룞??(?쒖뼇? 怨듦낵???', '諛곗젣??(?쒖뼇? ?먯뿰怨쇳븰???', '怨좊???(寃쏀씗? ?닿낵???'],
        targets: ['?쒓컯?쨌?깃퇏愿?쨌?쒖뼇? ?섍꼍怨듯븰 (?뚯떊, ?띿뼱珥?', '以묒븰? ?먭뎄?빧룰꼍?щ? ?ㅼ삤瑜대꽕?곸뒪 (?뚯떊)', '?명븯?쨌?꾩＜?쨌援??? (?덉젙)'],
        status: 'complete',
        date: '2026.04.09',
        report: './reports/park/report.html',
        note: '?⑦빐 ?뚯옱 ???띿뼱珥??꾪삎 媛?? 鍮꾩뒪?섎?A 45???ㅽ뿕, 二쎈갑???댁뼇?곕젅湲??ъ쭛 ???앷린遺 ?뺣룄?? ?섎뒫 理쒖? 由ъ뒪??留ㅼ슦 ?믪쓬. ?먭뎄??硫댁젒???숈쥌 ?곗꽑.',
        color: '#a855f7',
    },
    {
        id: 10,
        name: '源梨꾩쑄',
        school: '寃쎄린 ?쇰컲怨?3?숇뀈 吏꾪븰 ?덉젙',
        grade: '3?숇뀈 吏꾪븰 ?덉젙',
        major: '援?뼱援?Ц/誘몃뵒??,
        gpa: 2.02,
        gpaHistory: [1.9, 1.95, 2.0, 2.09],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '援? / ?? / ?? / ??',
        mentors: ['?좎???(怨좊젮? 寃쎌쁺???', '源?몃? (?쒖슱? 寃쎌젣?숇?)', '怨좊???(寃쏀씗? ?닿낵???'],
        targets: ['寃쏀씗?쨌?댄솕?щ?쨌?쒖슱?쒕┰? 誘몃뵒??援?뼱援?Ц 湲고쉶洹좏삎 (?곹뼢)', '?숇챸?щ?쨌?숆뎅? 理쒖??녿뒗 ?숈쥌 (?뚯떊)', '嫄닿뎅?쨌?띿씡?쨌?숇챸?щ? 援먭낵?꾪삎 (?곸젙)'],
        status: 'complete',
        date: '2026.04.08',
        report: './reports/kim/report.html',
        note: '援?뼱 4?숆린 ?곗냽 1?깃툒, ?섑븰 6?깃툒? ?꾪궗?덉뒪嫄? 移대뱶?댁뒪 ?쇰뱶諛?猷⑦봽 ?ㅻТ 湲고쉷 ??웾 ?곸썡. ?섎뒫 理쒖? ?녿뒗 ?쒕쪟???숈쥌 ?곗꽑. 湲고쉶洹좏삎/?띿뼱珥??꾪삎 ?쒖슜.',
        color: '#0ea5e9',
    },
];

// ---------- Utilities ----------
function getStatusLabel(s) {
    if (s === 'complete') return '<span class="status-badge complete">?꾨즺</span>';
    if (s === 'progress') return '<span class="status-badge progress">吏꾪뻾 以?/span>';
    return '<span class="status-badge pending">?湲?以?/span>';
}
function getInitials(name) { return name.slice(0, 1); }

// =============================================
// SPA Navigation
// =============================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            switchPage(page);
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('show');
            }
        });
    });
}

function switchPage(page) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item[data-page]').forEach(n => n.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) target.classList.add('active');
    const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (navItem) navItem.classList.add('active');
}

// =============================================
// Sidebar Toggle
// =============================================
function initSidebar() {
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    if (menuToggle) menuToggle.addEventListener('click', () => sidebar.classList.add('show'));
    if (closeSidebar) closeSidebar.addEventListener('click', () => sidebar.classList.remove('show'));
}

// =============================================
// Notification Dropdown
// =============================================
function initNotifDropdown() {
    const btn = document.getElementById('notifBtn');
    const dropdown = document.getElementById('notifDropdown');
    if (!btn || !dropdown) return;
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => dropdown.classList.remove('show'));
}

// =============================================
// KPI Count-up Animation
// =============================================
function countUp(el, target, prefix = '', suffix = '', format = 'number') {
    const duration = 1200;
    const start = Date.now();
    const step = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        let display;
        if (format === 'money') {
            display = prefix + current.toLocaleString('ko-KR');
        } else {
            display = prefix + current.toLocaleString() + suffix;
        }
        el.textContent = display;
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

function updateDynamicKPIs() {
    let total = STUDENTS.length;
    let complete = 0;
    let progress = 0;
    
    STUDENTS.forEach(s => {
        if (s.status === 'complete') complete++;
        if (s.status === 'progress') progress++;
    });

    const kpiTotal = document.getElementById('kpiTotalStudents');
    const kpiProgress = document.getElementById('kpiProgress');
    const kpiComplete = document.getElementById('kpiComplete');
    
    if (kpiTotal) countUp(kpiTotal, total, '', '紐?);
    if (kpiProgress) {
        countUp(kpiProgress, progress, '', '紐?);
        // Update progress bar width dynamically
        const progressFill = kpiProgress.nextElementSibling.nextElementSibling.querySelector('.kpi-fill');
        if(progressFill) progressFill.style.width = (total === 0 ? 0 : (progress/total)*100) + '%';
    }
    if (kpiComplete) {
        countUp(kpiComplete, complete, '', '嫄?);
        // Update complete bar width dynamically
        const completeFill = kpiComplete.nextElementSibling.nextElementSibling.querySelector('.kpi-fill');
        if(completeFill) completeFill.style.width = (total === 0 ? 0 : (complete/total)*100) + '%';
    }
    
    // Update sidebar badges
    const badgeStudents = document.getElementById('badgeStudents');
    const badgeReports = document.getElementById('badgeReports');
    if (badgeStudents) badgeStudents.textContent = total;
    if (badgeReports) badgeReports.textContent = complete;
}

function initKPICounters() {
    // Other legacy static KPI counters
    document.querySelectorAll('.kpi-value[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const format = el.dataset.format || 'number';
        setTimeout(() => countUp(el, target, prefix, suffix, format), 200);
    });
    
    // Call dynamic KPI
    updateDynamicKPIs();
}

function renderActivityTimeline() {
    const list = document.getElementById('activityList');
    if (!list) return;
    
    // Copy array and sort by date descending
    const sortedStudents = [...STUDENTS].sort((a,b) => new Date(b.date) - new Date(a.date));
    const recentStudents = sortedStudents.slice(0, 6); // show latest 6
    
    list.innerHTML = '';
    recentStudents.forEach(s => {
        const isComplete = (s.status === 'complete');
        const colorClass = isComplete ? 'green' : 'blue';
        const statusText = isComplete ? '由ы룷???꾨떖 ?꾨즺' : '而⑥꽕??吏꾪뻾 ?쒖옉';
        const tagHTML = getStatusLabel(s.status).replace('status-badge', 'a-tag');
        
        list.innerHTML += `
            <div class="activity-item">
                <div class="activity-dot ${colorClass}"></div>
                <div class="activity-body">
                    <p><strong>${s.name}</strong> ${statusText} ${tagHTML}</p>
                    <span class="a-time">${s.date}</span>
                </div>
            </div>
        `;
    });
}

// =============================================
// Charts
// =============================================
Chart.defaults.color = '#64748b';
Chart.defaults.font.family = "'Inter', sans-serif";

function initCharts() {
    // Grade Bar Chart ???ㅼ젣 ?숈깮 ?곗씠??湲곕컲
    const gradeCtx = document.getElementById('gradeChart');
    if (gradeCtx) {
        // ?ㅼ젣 STUDENTS 諛곗뿴?먯꽌 ?숇뀈 吏묎퀎
        const gradeCounts = { '1?숇뀈': 0, '2?숇뀈': 0, '3?숇뀈': 0 };
        STUDENTS.forEach(s => {
            if (s.grade.includes('1?숇뀈')) gradeCounts['1?숇뀈']++;
            else if (s.grade.includes('2?숇뀈')) gradeCounts['2?숇뀈']++;
            else if (s.grade.includes('3?숇뀈')) gradeCounts['3?숇뀈']++;
        });
        new Chart(gradeCtx, {
            type: 'bar',
            data: {
                labels: ['1?숇뀈', '2?숇뀈', '3?숇뀈'],
                datasets: [{
                    label: '?숈깮 ??,
                    data: [gradeCounts['1?숇뀈'], gradeCounts['2?숇뀈'], gradeCounts['3?숇뀈']],
                    backgroundColor: ['rgba(59,130,246,0.6)', 'rgba(139,92,246,0.6)', 'rgba(16,185,129,0.6)'],
                    borderRadius: 6, borderSkipped: false,
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false },
                    tooltip: { backgroundColor: '#1a2235', titleColor: '#f1f5f9', bodyColor: '#94a3b8', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 10, cornerRadius: 10 }
                },
                scales: {
                    x: { grid: { display: false, drawBorder: false } },
                    y: { grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false }, ticks: { stepSize: 1 }, beginAtZero: true }
                }
            }
        });
    }
}

// =============================================
// Student Table
// =============================================
function renderStudentTable(filter = '') {
    const tbody = document.getElementById('studentTableBody');
    if (!tbody) return;
    const filtered = filter
        ? STUDENTS.filter(s => s.name.includes(filter) || s.school.includes(filter))
        : STUDENTS;

    tbody.innerHTML = filtered.map((s, i) => `
        <tr>
            <td style="color:var(--text-3)">${i + 1}</td>
            <td>
                <div class="student-name-cell">
                    <div class="s-avatar" style="background:${s.color}22; color:${s.color};">${getInitials(s.name)}</div>
                    <strong>${s.name}</strong>
                </div>
            </td>
            <td>
                <div style="font-weight:500;">${s.school}</div>
                <div style="font-size:0.76rem; color:var(--text-3);">${s.grade}</div>
            </td>
            <td style="font-size:0.84rem; color:var(--text-2);">${s.major}</td>
            <td>
                <a class="report-link" href="${s.report}" target="_blank">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> ?닿린
                </a>
            </td>
            <td>${getStatusLabel(s.status)}</td>
            <td><button class="btn-action" onclick="openStudentModal(${s.id})">?곸꽭</button></td>
        </tr>
    `).join('');
}

// =============================================
// Report Grid
// =============================================
function renderReportGrid() {
    const grid = document.getElementById('reportGrid');
    if (!grid) return;
    const completed = STUDENTS.filter(s => s.status === 'complete');
    grid.innerHTML = completed.map(s => `
        <div class="card report-card">
            <div class="report-card-top">
                <div class="report-card-avatar" style="background:${s.color}22; color:${s.color};">${getInitials(s.name)}</div>
                <div class="report-card-info">
                    <h4>${s.name}</h4>
                    <p>${s.school} 쨌 ${s.grade}</p>
                </div>
            </div>
            <div style="font-size:0.78rem; color:var(--text-2);">${s.major}</div>
            <div class="report-card-bottom">
                <span class="report-card-date"><i class="fa-regular fa-calendar" style="margin-right:4px;"></i>${s.date}</span>
                <a href="${s.report}" target="_blank" class="report-link-btn">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> 由ы룷??蹂닿린
                </a>
            </div>
        </div>
    `).join('');
}

// =============================================
// Student Modal
// =============================================
function openStudentModal(id) {
    const s = STUDENTS.find(st => st.id === id);
    if (!s) return;
    document.getElementById('modalAvatar').style.cssText = `background:${s.color}22; color:${s.color};`;
    document.getElementById('modalAvatar').textContent = getInitials(s.name);
    document.getElementById('modalName').textContent = s.name;
    document.getElementById('modalSchool').textContent = `${s.school} 쨌 ${s.grade}`;
    document.getElementById('modalMajor').textContent = s.major;
    document.getElementById('modalStatus').innerHTML = getStatusLabel(s.status);
    document.getElementById('modalReport').innerHTML = `<a href="${s.report}" target="_blank" class="report-link"><i class="fa-solid fa-link"></i> 由ы룷???닿린</a>`;
    document.getElementById('modalDate').textContent = s.date;
    document.getElementById('modalNote').value = s.note || '';

    // Extended fields
    const extEl = document.getElementById('modalExtended');
    if (extEl) {
        const gpaColor = s.gpa <= 2.0 ? '#10b981' : s.gpa <= 3.0 ? '#f59e0b' : '#ef4444';
        const mentorHtml = s.mentors ? s.mentors.map(m => `<span class="modal-tag">${m}</span>`).join('') : '-';
        const targetHtml = s.targets ? s.targets.map((t, i) => `<div class="modal-target-row"><span class="modal-target-badge badge-t${i}">${['??,'??,'??,'??][i]||'湲?}</span>${t}</div>`).join('') : '-';
        extEl.innerHTML = `
            <div class="modal-ext-row">
                <span class="modal-ext-label">?뱤 ?댁떊 醫낇빀</span>
                <strong style="color:${gpaColor}; font-size:1.1rem;">${s.gpa ? s.gpa.toFixed(2) + '?깃툒' : '-'}</strong>
            </div>
            <div class="modal-ext-row">
                <span class="modal-ext-label">?뱷 紐⑥쓽怨좎궗</span>
                <span>${s.mock || '-'}</span>
            </div>
            <div class="modal-ext-row">
                <span class="modal-ext-label">?뫅?랅윊??대떦 硫섑넗吏?/span>
                <div class="modal-tags">${mentorHtml}</div>
            </div>
            <div class="modal-ext-row">
                <span class="modal-ext-label">?렞 吏???꾨왂</span>
                <div class="modal-targets">${targetHtml}</div>
            </div>
        `;
    }

    // Mini GPA chart in modal
    const modalChart = document.getElementById('modalGpaChart');
    if (modalChart && s.gpaHistory && s.gpaHistory.length) {
        if (window._modalChartInst) { window._modalChartInst.destroy(); }
        window._modalChartInst = new Chart(modalChart, {
            type: 'line',
            data: {
                labels: s.gpaLabels || s.gpaHistory.map((_, i) => `${i+1}?숆린`),
                datasets: [{
                    data: s.gpaHistory,
                    borderColor: s.color,
                    backgroundColor: s.color + '22',
                    borderWidth: 2.5,
                    pointBackgroundColor: s.color,
                    pointRadius: 4,
                    fill: true,
                    tension: 0.4,
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false },
                    tooltip: { callbacks: { label: ctx => ` ${ctx.raw}?깃툒` }, backgroundColor: '#1a2235', bodyColor: '#94a3b8', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, cornerRadius: 8 }
                },
                scales: {
                    x: { grid: { display: false, drawBorder: false }, ticks: { color: '#64748b', font: { size: 11 } } },
                    y: { reverse: true, min: 1, max: 5, grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false }, ticks: { color: '#64748b', font: { size: 11 }, callback: v => v + '?깃툒' } }
                }
            }
        });
    }

    document.getElementById('studentModal').classList.add('show');
}

function initModal() {
    const overlay = document.getElementById('studentModal');
    const close1 = document.getElementById('modalClose');
    const close2 = document.getElementById('modalClose2');
    const closeModal = () => overlay.classList.remove('show');
    if (close1) close1.addEventListener('click', closeModal);
    if (close2) close2.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

// =============================================
// Global Search
// =============================================
function initSearch() {
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                switchPage('students');
                const tableSearch = document.getElementById('tableSearch');
                if (tableSearch) {
                    tableSearch.value = globalSearch.value;
                    renderStudentTable(globalSearch.value);
                }
            }
        });
    }
    const tableSearch = document.getElementById('tableSearch');
    if (tableSearch) {
        tableSearch.addEventListener('input', e => renderStudentTable(e.target.value));
    }
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSidebar();
    initNotifDropdown();
    initKPICounters();
    initCharts();
    renderStudentTable();
    renderReportGrid();
    renderActivityTimeline();
    initModal();
    initSearch();
});
