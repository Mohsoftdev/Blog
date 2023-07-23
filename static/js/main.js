let nav = document.querySelector("nav.navbar"),
    menu = document.querySelector("nav.navbar .navbar-container ul"),
    bars = document.querySelector("nav.navbar .navbar-container .phone-menu")

document.addEventListener("scroll", (e) => {
    let pageSccroll = document.scrollingElement.scrollTop,
        navPosition = nav.offsetTop;
        
    if(pageSccroll > navPosition + 0.5){
        nav.classList.add("nav-show")
    }
    else{
        nav.classList.remove("nav-show")
    }

})

bars.addEventListener("click", (n) => {
    menu.classList.toggle("navbar-phone-menu")
})


