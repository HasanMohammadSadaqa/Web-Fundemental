function increaselikes(){
    var x=document.querySelector("#Number");
    var z=document.querySelector("#Numbers");
    var H=parseInt(z.innerHTML);
    var y=parseInt(x.innerHTML);
    y++;
    H++
    x.innerText=y;
    z.innerText=H;

}

// var x=document.querySelectorAll("#Number");
// var y=[];
// function increaselikes(){
//     for(var i=0; i<x.length; i++) {
//         y[i]= parseInt(x[i]);
//         y[i]++;
//         y.push(y[i]);
//         x[i].innerText = y[i];
// } 
// return y;
// }

// function increaselikes();