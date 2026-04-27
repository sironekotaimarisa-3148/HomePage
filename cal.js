let num = 0
let onFirstNum = false
let onSecondNum = false
let numFirst
let numSecond
let ope

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

function result_open(ans, it_num) {
    if (it_num === "1" || it_num === "2" || it_num === "3"|| it_num === "4" || it_num === "5" || it_num === "6" || it_num === "7" || it_num === "8" || it_num === "9"){
        result.textContent = ans
    }else if (it_num == " + " || it_num == " - " || it_num == " * " || it_num == " / ") {
        if (onFirstNum == false) {
            numFirst = ans;
            ope = it_num; //演算子を保存
            onFirstNum = true;
            result.textContent = "null"
            num = 0
            console.log(numFirst);
        }
        // else if (onSecondNum == false) {
        //     numSecond = ans;
        //     onSecondNum = true
        //     num = 0
        // };
    };
    if (it_num == " = ") {
        if (ope == " + ") {
            result.textContent = Number(numFirst) + Number(num)
        }
        else if (ope == " - ") {
            result.textContent = Number(numFirst) - Number(num)
        }
        else if (ope == " * ") {
            result.textContent = Number(numFirst) * Number(num)
        }
        else if (ope == " / ") {
            result.textContent = Number(numFirst) / Number(num)
        }
    };
    if (onSecondNum == true) {
        num = 0
    }
};

// **************************************************************
// 数字ボタンエリア
// **************************************************************
one.addEventListener("click", function() {
    if (num === 0) {
        num = "1";
    }
    else {
        num = num + "1";
    };
    console.log(num);
    result_open(num, "1");
}); // 1ボタン押下処理
two.addEventListener("click", function() {
    if (num === 0) {
        num = "2";
    }
    else {
        num = num + "2";
    };
    console.log(num);
    result_open(num, "2");
}); // 2ボタン押下処理
three.addEventListener("click", function() {
    if (num === 0) {
        num = "3";
    }
    else {
        num = num + "3";
    };
    console.log(num);
    result_open(num, "3");
}); // 3ボタン押下処理
four.addEventListener("click", function() {
    if (num === 0) {
        num = "4";
    }
    else {
        num = num + "4";
    };
    console.log(num);
    result_open(num, "4");
}); // 4ボタン押下処理
five.addEventListener("click", function() {
    if (num === 0) {
        num = "5";
    }
    else {
        num = num + "5";
    };
    console.log(num);
    result_open(num, "5");
}); // 5ボタン押下処理
six.addEventListener("click", function() {
    if (num === 0) {
        num = "6";
    }
    else {
        num = num + "6";
    };
    console.log(num);
    result_open(num, "6");
}); // 6ボタン押下処理
seven.addEventListener("click", function() {
    if (num === 0) {
        num = "7";
    }
    else {
        num = num + "7";
    };
    console.log(num);
    result_open(num, "7");
}); // 7ボタン押下処理
eight.addEventListener("click", function() {
    if (num === 0) {
        num = "8";
    }
    else {
        num = num + "8";
    };
    console.log(num);
    result_open(num, "8");
}); // 8ボタン押下処理
nine.addEventListener("click", function() {
    if (num === 0) {
        num = "9";
    }
    else {
        num = num + "9";
    };
    console.log(num);
    result_open(num, "9");
}); // 9ボタン押下処理

// **************************************************************
// 演算子ボタンエリア
// **************************************************************
add.addEventListener("click", function() {
    console.log(num);
    result_open(num, " + ");
}); // +ボタン押下処理
sub.addEventListener("click", function() {
    console.log(num);
    result_open(num, " - ");
}); // -ボタン押下処理
mul.addEventListener("click", function() {
    console.log(num);
    result_open(num, " * ");
}); // *ボタン押下処理
div.addEventListener("click", function() {
    console.log(num);
    result_open(num, " / ");
}); // /ボタン押下処理
equal.addEventListener("click", function() {
    console.log(num);
    result_open(num, " = ")
});// =ボタン押下処理