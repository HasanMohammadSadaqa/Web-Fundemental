console.log("page loading...");



function loading() {
    alert("Loading weather report...")
}

function accept() {
    var cookieDiv = document.querySelector(".cookie-policy");
    cookieDiv.remove();
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    var tempSpans = document.querySelectorAll(".temp");
    for(var i=0; i<tempSpans.length; i++) {       
        var tempVal = parseInt(tempSpans[i].innerText);
        if(element.value == "°C") {
            tempSpans[i].innerText = f2c(tempVal);
        } else {
            tempSpans[i].innerText = c2f(tempVal);
        }
    }
}