window.addEventListener("scroll", function(){
    var tesla_logo = document.querySelector("#cambio")
    tesla_logo.classList.toggle("color2", window.scrollY>0)
})
