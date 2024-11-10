window.onscroll = function () { IScroll() }

function IScroll() {
    let scroll = document.getElementById("nav")

    if (document.documentElement.scrollTop > 100) {
        scroll.classList.add("scroll")
    } else {
        scroll.classList.remove("scroll")
    }


}
let media = window.matchMedia("(max-width: 600px)")
let options = document.querySelectorAll(".options > ul > li");
let options2 = document.querySelectorAll(".options > ul > a");

function myMedia(media) {
    if (media.matches) {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
            options2[i].style.display = "block";
           
        }
    }else{
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "block";
            options2[i].style.display = "none";
        }

    }

}
myMedia(media);

media.addEventListener("change", function(){
    myMedia(media);
});

