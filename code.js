


fetch('register.txt')
    .then(response => {

        return response.text()
    })
    .then(text => {
        const arr = text.split(",\r\n");

        arr.forEach(element => {
            const targetElement = document.querySelector('.movies');

            const list = document.createElement("div");
            list.className = 'list'
            list.id = element

            const img = document.createElement("img");
            img.src = "./media/movies/" + element + ".jpg";

            list.appendChild(img);
            targetElement.appendChild(list)

            start()

        });

    })


function start() {
    let gonjam = document.querySelectorAll('.movies .list')
    let title = document.getElementById('title')
    let background = document.getElementById('background')
    let texts = document.getElementById('text')

    gonjam.forEach(heyy => {
        heyy.addEventListener("click", function () {

            title.src = "./media/title/" + heyy.id + ".png"

            const image = new Image();
            imgSrc = "./media/background/" + heyy.id
            image.src = imgSrc + ".jpg"

            image.onload = () => {

                background.style.backgroundImage = "url(" + imgSrc + ".jpg)"
            }
            image.onerror = () => {

                background.style.backgroundImage = "url(" + imgSrc + ".png)"
            }

            description(heyy.id).then(result => {
                texts.innerHTML = result
            })
        });
    });

    async function description(description) {

        const response = await fetch('description/' + description + '.txt')
        const text = await response.text();
        return text
    }


}







