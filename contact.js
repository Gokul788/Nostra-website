var cancel = document.getElementById("Cancel");
var ad = document.querySelector(".ad")

cancel.addEventListener('click',function(){
   ad.style.display = "none"  
})

var menu = document.getElementById("menu");
var cbtn = document.getElementById("closed");
var navbar = document.querySelector(".Navbar");
  
menu.addEventListener("click",function(){
    navbar.style.left = "0"
})

cbtn.addEventListener("click",function(){
    navbar.style.left = "-60%"
})
