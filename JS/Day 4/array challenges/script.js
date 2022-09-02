function alwaysHungry(arr) {
    var x=0;
    for(var i=0;i<arr.lenghth;i++){
        if(arr[i]=="food"){
            console.log("yummy");
        x=1;
        }
    }
    if(x==0){
        console.log("I'm hungry")
    }
    // your code here 
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

console.log