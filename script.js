'use strict'
const btn=document.querySelector(".btn");


btn.addEventListener("click",function(){
    let pwd = document.getElementById("pwd").value;

    if(pwd.length<8){
       alert('Password length too small');
    }
    else{
        alert('You have been registered successfully!');
    }
})

