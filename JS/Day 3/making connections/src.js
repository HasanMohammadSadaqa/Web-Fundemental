function accept(element) {
    deleteItem(element.parentElement.parentElement);
    decreaseConnectionreqsts();
    increaseConnectionreqsts();
    alert("Are you sure to accept the connection request?")
}
function deny(element) {
    deleteItem(element.parentElement.parentElement);
    decreaseConnectionreqsts();
    alert("Are you sure to delete the connection request?")
}
function deleteItem(item) {
    item.remove();
}
function decreaseConnectionreqsts() {
    let reqstsNumSpan = document.querySelector("#connections-reqsts-num");
    let reqstsNum = parseInt(reqstsNumSpan.innerText);
    reqstsNum--;
    reqstsNumSpan.innerText = reqstsNum;
}
function increaseConnectionreqsts() {
    let conNumSpan = document.querySelector("#connections-num");
    let conNum = parseInt(conNumSpan.innerText);
    conNum++;
    conNumSpan.innerText = conNum;
}
function changeName() {
    let userNameSpan = document.querySelector(".card-body h1");
    userNameSpan.textContent = "Hasan Sadaqa";
}
