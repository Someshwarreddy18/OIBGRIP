var isOpened = false;
var funFacts = ["The initial name of java was “Oak”. It was changed to Java by Sun's marketing department changed it to “java” when they found that name was already registered for some computer company.", "Java is the second most popular language and is very popular among the developers.", "Java is used by 95% of the enterprises as their primary language. It is much more than C and the other languages.", "A Java developer’s median salary is $83, 975.00. It pays to be a Java developer.", "The main technology site of Sun is java.sun.com. The name of Collaborative site which is run by Sun is java.net. A news site which is run by Sun is java.com. If you want to know about Java programs related news, just log on to the www.javaworld.com."];
function myFunction() {
    var c = document.getElementById("close");
    if (!isOpened) {
        c.style.display = "block";
        isOpened = true;
    } else {
        c.style.display = "none";
        isOpened = false;
    }

}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbardesktop").style.backgroundColor = "#424242";
        document.getElementById("navbar").style.backgroundColor = "#424242";
    } else {
        document.getElementById("navbardesktop").style.backgroundColor = "#3f3e3e";
        document.getElementById("navbar").style.backgroundColor = "#3f3e3e";
    }
}


function callFunctionsHere() {
    loadFunFact();
}


function loadFunFact() {
    var item = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("funfact").innerText = item;
}
