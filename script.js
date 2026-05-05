// 初期のメイン内容を保存
let mainContent = '';

window.onload = function() {
    mainContent = document.getElementById('main').innerHTML;
};

function showMain() {
    history.pushState(null, null, "mainPage");
    document.getElementById('main').innerHTML = mainContent;
    // cal.js を削除
    const calScript = document.getElementById('cal-script');
    if (calScript) {
        calScript.remove();
    }
}

function showCal() {
    history.pushState(null, null, "calPage");
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
    document.getElementById('main').innerHTML = calHTML;

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
}