let num = 0

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

function result_open(ans) {
    result.textContent = num
}

one.addEventListener("click", function() {
    if (num === 0) {
        num = "1";
    }
    else {
        num = num + "1";
    };
    console.log(num);
    result_open(num);
});
two.addEventListener("click", function() {
    if (num === 0) {
        num = "2";
    }
    else {
        num = num + "2";
    };
    console.log(num);
    result_open(num);
});
three.addEventListener("click", function() {
    if (num === 0) {
        num = "3";
    }
    else {
        num = num + "3";
    };
    console.log(num);
    result_open(num);
});
four.addEventListener("click", function() {
    if (num === 0) {
        num = "4";
    }
    else {
        num = num + "4";
    };
    console.log(num);
    result_open(num);
});
five.addEventListener("click", function() {
    if (num === 0) {
        num = "5";
    }
    else {
        num = num + "5";
    };
    console.log(num);
    result_open(num);
});
six.addEventListener("click", function() {
    if (num === 0) {
        num = "6";
    }
    else {
        num = num + "6";
    };
    console.log(num);
    result_open(num);
});
seven.addEventListener("click", function() {
    if (num === 0) {
        num = "7";
    }
    else {
        num = num + "7";
    };
    console.log(num);
    result_open(num);
});
eight.addEventListener("click", function() {
    if (num === 0) {
        num = "8";
    }
    else {
        num = num + "8";
    };
    console.log(num);
    result_open(num);
});
nine.addEventListener("click", function() {
    if (num === 0) {
        num = "9";
    }
    else {
        num = num + "9";
    };
    console.log(num);
    result_open(num);
});
add.addEventListener("click", function() {
    if (num === 0) {
        num = " + ";
    }
    else {
        num = num + " + ";
    };
    console.log(num);
    result_open(num);
});
sub.addEventListener("click", function() {
    if (num === 0) {
        num = " - ";
    }
    else {
        num = num + " - ";
    };
    console.log(num);
    result_open(num);
});
mul.addEventListener("click", function() {
    if (num === 0) {
        num = " * ";
    }
    else {
        num = num + " * ";
    };
    console.log(num);
    result_open(num);
});
div.addEventListener("click", function() {
    if (num === 0) {
        num = " / ";
    }
    else {
        num = num + " / ";
    };
    console.log(num);
    result_open(num);
});
equal.addEventListener("click", function() {
    console.log(num);
});