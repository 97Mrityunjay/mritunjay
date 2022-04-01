let addbutton=document.querySelector(".add");
let dialogbox=document.querySelector("#dialog");
let crossbutton=document.querySelector(".close")
addbutton.addEventListener("click",function(){
    dialogbox.style.display="flex";
})
crossbutton.addEventListener("click",function(){
    dialogbox.style.display="none";
})
