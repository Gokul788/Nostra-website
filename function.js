let heartIcon = document.getElementById('heartIcon');

        heartIcon.addEventListener('click', () => {
            heartIcon.classList.toggle('liked');
        });


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


var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)