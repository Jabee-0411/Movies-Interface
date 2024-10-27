let gonjam = document.querySelectorAll('.movies .list')
let title = document.getElementById('title')
let background = document.getElementById('background')
let texts = document.getElementById('text')


gonjam.forEach(heyy => {
    heyy.addEventListener("click", function(){
        
        title.src = "./media/title/" + heyy.id + ".png"

        const image = new Image();
        imgSrc = "url(./media/background/" +  heyy.id 
        image.src = imgSrc
        
        image.onload = () => {
    
            background.style.backgroundImage = imgSrc + ".png)"
        }
        image.onerror = () => {
    
            background.style.backgroundImage = imgSrc + ".jpg)"
        }

        description(heyy.id).then(result => {
            texts.innerHTML = result
        })
    });
});

async function description(description) {
    
    const response = await fetch('description/' + description +'.txt')
    const text = await response.text();
    return text
}








