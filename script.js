const img = document.querySelector(".dark-logo")
const body = document.querySelector("body")
const title = document.querySelectorAll(".title")

img.addEventListener("click", () => {
   
   body.classList.toggle("dark-mode")

   title.forEach(info =>{
        info.classList.toggle("dark-text")
   } )
})