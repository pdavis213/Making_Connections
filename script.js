
function removeAndAdd(element){
    // var current = element.parentElement;
    // console.log(current);
    var toddRow = document.querySelector("#toddRow");
    toddRow.remove();
    document.querySelector('#conReqs').innerHTML= "1";
    // need to subtract one from connection request field
    // need to add to existing connections accepted
}

function removeAndSub(element){
    // var current = element.parentElement;
    // console.log(current);
    var toddRow = document.querySelector("#toddRow");
    toddRow.remove();
    // need to subtract one from connection request field
}

function removeAndAdd1(element){
    // var current = element.parentElement;
    // console.log(current);
    var phillRow = document.querySelector("#phillRow");
    phillRow.remove();
    document.querySelector('#conReqs').innerHTML= "0";
    // need to subtract one from connection request field
    // need to add to existing connections accepted
}

function removeAndSub1(element){
    // var current = element.parentElement;
    // console.log(current);
    var phillRow = document.querySelector("#phillRow");
    phillRow.remove();
    // need to subtract one from connection request field
}



function changeName(element){
    // console.log(element);
    document.querySelector('#mainName').innerHTML="Walter White"
}