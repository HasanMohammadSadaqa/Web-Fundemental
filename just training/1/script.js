
function changetext(index) {
    //alert(x);
    if (index == 0) {
        //alert(index);
        var x = document.getElementById("osama");
        var text = x.innerHTML;

        changeBtnText(x, text)

    }
    else if (index == 1) {
        var y = document.getElementById("hasan");
        var text = y.innerHTML;
        changeBtnText(y, text)
    }
    else {
        alert("No one");
    }

}

function changeBtnText(element,text) {
    if (text == "YES!") {
        //alert("Test1");
        element.innerText = "Change Me!";
    }
    else {
        //alert("Test2");
        element.innerText = "YES!";

    }

}