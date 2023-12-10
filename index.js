const mobile_nav=document.querySelector(".mobile-n-btnavbar");
const nav_header=document.querySelector(".header")

const toggleNavbar=()=>{
   
    if(nav_header.style.display==="none"){
    nav_header.style.display="block";
    }else{
        nav_header.style.display="none";
    }
   }



    

mobile_nav.addEventListener("click",()=> toggleNavbar())




    