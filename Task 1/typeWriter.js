
var arr = ['Open Source', 'Secure', 'Free', 'Fast', '', 'Love'];
var b = "";
var c = 0;
var tim;
var bli = 0;
function f() {
    tim = setInterval(myFun, 100);
}
f();
var element = document.getElementById("javaSpan");
var cur = 0;
function myFun() {
    b = b + arr[cur][c]
    document.getElementById("javaSpan").innerHTML = b;
    c = c + 1;
    if (c == arr[cur].length) {
        c = 0;
        b = "";
        pause();
        cur = cur + 1;
    };
    if (cur == 4) { cur = 0 }
}

function pause() {
    clearInterval(tim);
    setTimeout(f, 2500);
}
