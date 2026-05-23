// 汎用ページルーター
let mainContent = '';
const registeredPages = {};

window.onload = function() {
    mainContent = document.getElementById('main').innerHTML;
    // 初期状態を履歴に登録
    history.replaceState({ page: 'mainPage' }, '', 'mainPage');
};

function registerPage(id, renderFn) {
    registeredPages[id] = renderFn;
}

function navigateTo(id) {
    history.pushState({ page: id }, '', id);
    renderPage(id);
}

function renderPage(id) {
    const container = document.getElementById('main');
    if (!container) return;

    if (id === 'mainPage') {
        container.innerHTML = mainContent;
        const calScript = document.getElementById('cal-script');
        if (calScript) calScript.remove();
        return;
    }

    // 既定の電卓ページをサポート
    if (id === 'calPage') {
        const calHTML = `
        <h2>電卓</h2>
        <div class="cal">
            <div class="result">
                <h3 class="card" id="result">null</h3>
            </div>
            <div class="btn_con">
                <button type="button" class="cal_btn" id="one">1</button>
                <button type="button" class="cal_btn" id="two">2</button>
                <button type="button" class="cal_btn" id="three">3</button>
                <button type="button" class="cal_btn" id="four">4</button>
                <button type="button" class="cal_btn" id="five">5</button>
                <button type="button" class="cal_btn" id="six">6</button>
                <button type="button" class="cal_btn" id="seven">7</button>
                <button type="button" class="cal_btn" id="eight">8</button>
                <button type="button" class="cal_btn" id="nine">9</button>
                <button type="button" class="cal_btn" id="add">+</button>
                <button type="button" class="cal_btn" id="sub">-</button>
                <button type="button" class="cal_btn" id="mul">*</button>
                <button type="button" class="cal_btn" id="div">/</button>
                <button type="button" class="cal_btn" id="equal">=</button>
            </div>
        </div>
    `;
        container.innerHTML = calHTML;

        const calScript = document.getElementById('cal-script');
        if (!calScript) {
            const script = document.createElement('script');
            script.src = './cal.js';
            script.id = 'cal-script';
            script.onload = function() {
                if (window.initializeCalCalculator) {
                    window.initializeCalCalculator();
                }
            };
            document.head.appendChild(script);
        } else if (window.initializeCalCalculator) {
            window.initializeCalCalculator();
        }
        return;
    }
    if (id === 'stampPage') {
        const stampHTML = `
        <h2>スタンプ</h2>
        <div class="stamp">
            <a class="stamp"">ありがとう<img src="./images/stamp/thank_you.png" alt="ありがとう" width="60%" /></a>
            <a class="stamp">いいね<img src="./images/stamp/sure.png" alt="いいね" width="60%" /></a>
            <a class="stamp">いってらっしゃい<img src="./images/stamp/have_good_trip.png" alt="いってらっしゃい" width="60%" /></a>
            <a class="stamp">うーん<img src="./images/stamp/umm.png" alt="うーん" width="60%" /></a>
            <a class="stamp">うん<img src="./images/stamp/yeah.png" alt="うん" width="60%" /></a>
            <a class="stamp">おかえり<img src="./images/stamp/welcome_back.png" alt="おかえり" width="60%" /></a>
            <a class="stamp">お疲れ様<img src="./images/stamp/well_done.png" alt="お疲れ" width="60%" /></a>
            <a class="stamp">こんにちは<img src="./images/stamp/hello.png" alt="こんにちは" width="60%" /></a>
            <a class="stamp">ごめん<img src="./images/stamp/sorry.png" alt="ごめん" width="60%" /></a>
            <a class="stamp">ただいま<img src="./images/stamp/im_home.png" alt="ただいま" width="60%" /></a>
        </div>
    `;
        container.innerHTML = stampHTML;
        return;
    }

    // 登録されたページがあれば実行
    if (registeredPages[id]) {
        registeredPages[id](container);
        return;
    }

    // 未登録ページの場合は簡易メッセージを表示
    container.innerHTML = `<h2>ページ: ${id}</h2><p>このページはまだ登録されていません。</p>`;
}

// 既存 API 互換（index.html 内の onclick から呼ばれている関数）
function showMain() {
    navigateTo('mainPage');
}

function showCal() {
    navigateTo('calPage');
}

function showStamp() {
    navigateTo('stampPage');
}

window.onpopstate = function(event) {
    const state = event.state;
    const page = (state && state.page) ? state.page : 'mainPage';
    renderPage(page);
};

// 使い方の例（必要ならコメント解除して使用）
// registerPage('about', (container) => { container.innerHTML = '<h2>About</h2><p>自己紹介ページ</p>'; });