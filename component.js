window.onscroll = function() {IScroll()}

function IScroll() {
let scroll = document.getElementById("nav")

    if(document.documentElement.scrollTop > 100){
        scroll.classList.add("scroll")
    }else{
        scroll.classList.remove("scroll")
    }


}