// 現在の演算子
let currentOperator = null;
// 前の計算結果（連続計算用）
let previousResult = null;
// 新しい数値の入力開始フラグ
let isNewNumber = true;
// 最後に入力されたもの（演算子か数字か）
let lastInputType = null; // "number" or "operator"

function calculate(num1, num2, operator) {
    switch (operator) {
        case " + ":
            return Number(num1) + Number(num2);
        case " - ":
            return Number(num1) - Number(num2);
        case " * ":
            return Number(num1) * Number(num2);
        case " / ":
            if (Number(num2) === 0) {
                return "Error";
            }
            return Number(num1) / Number(num2);
        default:
            return num2;
    }
}

function result_open(it_num) {
    const result = document.getElementById("result");
    if (!result) {
        return;
    }

    if (it_num === "1" || it_num === "2" || it_num === "3" || it_num === "4" || it_num === "5" ||
        it_num === "6" || it_num === "7" || it_num === "8" || it_num === "9") {
        if (isNewNumber) {
            result.textContent = it_num;
            isNewNumber = false;
        } else {
            result.textContent = result.textContent + it_num;
        }
        lastInputType = "number";
    } else if (it_num === " + " || it_num === " - " || it_num === " * " || it_num === " / ") {
        if (previousResult === null) {
            previousResult = result.textContent;
            currentOperator = it_num;
            isNewNumber = true;
            lastInputType = "operator";
        } else if (lastInputType === "operator") {
            currentOperator = it_num;
            lastInputType = "operator";
        } else if (lastInputType === "number") {
            const currentNum = result.textContent;
            const calcResult = calculate(previousResult, currentNum, currentOperator);
            if (calcResult === "Error") {
                result.textContent = "Error";
                previousResult = null;
                currentOperator = null;
                isNewNumber = true;
            } else {
                result.textContent = calcResult;
                previousResult = calcResult;
                currentOperator = it_num;
                isNewNumber = true;
            }
            lastInputType = "operator";
        }
    } else if (it_num === " = ") {
        if (previousResult !== null && currentOperator !== null && lastInputType === "number") {
            const currentNum = result.textContent;
            const calcResult = calculate(previousResult, currentNum, currentOperator);
            if (calcResult === "Error") {
                result.textContent = "Error";
                previousResult = null;
                currentOperator = null;
            } else {
                result.textContent = calcResult;
                previousResult = calcResult;
            }
            isNewNumber = true;
            lastInputType = "operator";
        }
    }
}

function initializeCalCalculator() {
    currentOperator = null;
    previousResult = null;
    isNewNumber = true;
    lastInputType = null;

    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const add = document.getElementById("add");
    const sub = document.getElementById("sub");
    const mul = document.getElementById("mul");
    const div = document.getElementById("div");
    const equal = document.getElementById("equal");

    if (!one || !two || !three || !four || !five || !six || !seven || !eight || !nine || !add || !sub || !mul || !div || !equal) {
        return;
    }

    one.addEventListener("click", function() { result_open("1"); });
    two.addEventListener("click", function() { result_open("2"); });
    three.addEventListener("click", function() { result_open("3"); });
    four.addEventListener("click", function() { result_open("4"); });
    five.addEventListener("click", function() { result_open("5"); });
    six.addEventListener("click", function() { result_open("6"); });
    seven.addEventListener("click", function() { result_open("7"); });
    eight.addEventListener("click", function() { result_open("8"); });
    nine.addEventListener("click", function() { result_open("9"); });

    add.addEventListener("click", function() { result_open(" + "); });
    sub.addEventListener("click", function() { result_open(" - "); });
    mul.addEventListener("click", function() { result_open(" * "); });
    div.addEventListener("click", function() { result_open(" / "); });
    equal.addEventListener("click", function() { result_open(" = "); });
}

window.initializeCalCalculator = initializeCalCalculator;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCalCalculator);
} else {
    initializeCalCalculator();
}
