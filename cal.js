// 計算履歴を保持する配列
let calculationHistory = [];
// 現在の演算子
let currentOperator = null;
// 前の計算結果（連続計算用）
let previousResult = null;
// 新しい数値の入力開始フラグ
let isNewNumber = true;
// 最後に入力されたもの（演算子か数字か）
let lastInputType = null; // "number" or "operator"

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
const result = document.getElementById("result");

// 演算処理を行う関数
function calculate(num1, num2, operator) {
    switch(operator) {
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

function result_open(ans, it_num) {
    // 数字が入力された場合
    if (it_num === "1" || it_num === "2" || it_num === "3" || it_num === "4" || it_num === "5" || 
        it_num === "6" || it_num === "7" || it_num === "8" || it_num === "9") {
        
        // 新しい数値の入力開始時
        if (isNewNumber) {
            result.textContent = it_num;
            isNewNumber = false;
        } else {
            // 数値の桁を追加
            result.textContent = result.textContent + it_num;
        }
        lastInputType = "number";
    }
    // 演算子が入力された場合
    else if (it_num === " + " || it_num === " - " || it_num === " * " || it_num === " / ") {
        
        // 最初の数値がまだない場合
        if (previousResult === null) {
            previousResult = result.textContent;
            currentOperator = it_num;
            isNewNumber = true;
            lastInputType = "operator";
        } 
        // 前の入力も演算子の場合、演算子を更新
        else if (lastInputType === "operator") {
            currentOperator = it_num;
            lastInputType = "operator";
        }
        // 数値が入力されていた場合、計算を実行
        else if (lastInputType === "number") {
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
    }
    // = が入力された場合
    else if (it_num === " = ") {
        // 数値と演算子、両方がある場合に計算
        if (previousResult !== null && currentOperator !== null && lastInputType === "number") {
            const currentNum = result.textContent;
            const calcResult = calculate(previousResult, currentNum, currentOperator);
            
            if (calcResult === "Error") {
                result.textContent = "Error";
                previousResult = null;
                currentOperator = null;
            } else {
                result.textContent = calcResult;
                // 連続計算のために結果を保持
                previousResult = calcResult;
            }
            isNewNumber = true;
            lastInputType = "operator";
        }
    }
};

// **************************************************************
// 数字ボタンエリア
// **************************************************************
one.addEventListener("click", function() {
    result_open(result.textContent, "1");
}); // 1ボタン押下処理
two.addEventListener("click", function() {
    result_open(result.textContent, "2");
}); // 2ボタン押下処理
three.addEventListener("click", function() {
    result_open(result.textContent, "3");
}); // 3ボタン押下処理
four.addEventListener("click", function() {
    result_open(result.textContent, "4");
}); // 4ボタン押下処理
five.addEventListener("click", function() {
    result_open(result.textContent, "5");
}); // 5ボタン押下処理
six.addEventListener("click", function() {
    result_open(result.textContent, "6");
}); // 6ボタン押下処理
seven.addEventListener("click", function() {
    result_open(result.textContent, "7");
}); // 7ボタン押下処理
eight.addEventListener("click", function() {
    result_open(result.textContent, "8");
}); // 8ボタン押下処理
nine.addEventListener("click", function() {
    result_open(result.textContent, "9");
}); // 9ボタン押下処理

// **************************************************************
// 演算子ボタンエリア
// **************************************************************
add.addEventListener("click", function() {
    result_open(result.textContent, " + ");
}); // +ボタン押下処理
sub.addEventListener("click", function() {
    result_open(result.textContent, " - ");
}); // -ボタン押下処理
mul.addEventListener("click", function() {
    result_open(result.textContent, " * ");
}); // *ボタン押下処理
div.addEventListener("click", function() {
    result_open(result.textContent, " / ");
}); // /ボタン押下処理
equal.addEventListener("click", function() {
    result_open(result.textContent, " = ")
});// =ボタン押下処理
