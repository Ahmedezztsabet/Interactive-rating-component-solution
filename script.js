let stars = document.querySelectorAll(".star");
let submitBtn = document.querySelector(".submit");
let thanksContainer =document.querySelector(".thanks");
let Rating = document.querySelector(".rating");
let mainContainer = document.querySelector(".main")
stars.forEach((star)=>{
    star.addEventListener("click",function(){
        star.style.backgroundColor="hsl(25, 97%, 53%)"
        star.style.color="hsl(0, 0%, 100%)"
        Rating.innerHTML = star.innerHTML;
    })

    submitBtn.addEventListener("click",()=>{
        thanksContainer.classList.remove("hidden");
        mainContainer.style.display = "none"
    })
});