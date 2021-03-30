
function removeAndAdd(element){
    // var current = element.parentElement;
    // console.log(current);
    var toddRow = document.querySelector("#toddRow");
    toddRow.remove();
    document.querySelector('#conReqs').innerHTML=
    parseInt(document.querySelector('#conReqs').innerHTML)-1;
    document.querySelector('#yourCons').innerHTML=
    parseInt(document.querySelector('#yourCons').innerHTML)+1;
}

function removeAndSub(element){
    // var current = element.parentElement;
    // console.log(current);
    var toddRow = document.querySelector("#toddRow");
    toddRow.remove();
    document.querySelector('#conReqs').innerHTML=
    parseInt(document.querySelector('#conReqs').innerHTML)-1;
}

function removeAndAdd1(element){
    // var current = element.parentElement;
    // console.log(current);
    var phillRow = document.querySelector("#phillRow");
    phillRow.remove();
    document.querySelector('#conReqs').innerHTML=
    parseInt(document.querySelector('#conReqs').innerHTML)-1;
    document.querySelector('#yourCons').innerHTML=
    parseInt(document.querySelector('#yourCons').innerHTML)+1;
    // need to add to existing connections accepted
}

function removeAndSub1(element){
    // var current = element.parentElement;
    // console.log(current);
    var phillRow = document.querySelector("#phillRow");
    phillRow.remove();
    document.querySelector('#conReqs').innerHTML=
    parseInt(document.querySelector('#conReqs').innerHTML)-1;
}

function changeName(element){
    // console.log(element);
    document.querySelector('#mainName').innerHTML="Walter White"
}