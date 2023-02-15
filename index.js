const items = document.getElementsByClassName("items")
const accord_p = document.getElementsByClassName("accord-p")


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => {
       let result = accord_p[i].classList.toggle('active-para')
       if(result == true){
        items[i].style.backgroundColor = "#397fb0"
        items[i].style.color = "white"
       }
       else{
        items[i].style.backgroundColor = "white"
        items[i].style.color = "#397fb0"
       }
    })
}




const header = document.querySelector('.header')
const mobile_btn = document.querySelector('.mobile-btn')
const navlinks = document.getElementsByClassName('nav-links')

mobile_btn.addEventListener("click",()=>{
    header.classList.toggle('active')
})

for (let x = 0; x < navlinks.length; x++) {
    navlinks[x].addEventListener("click", () => {
        header.classList.remove('active')
    })
}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });