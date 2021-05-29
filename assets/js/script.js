function loadImgs(num) {
    let div = document.getElementById("pokemones");
    for (let i = 1; i <= num; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png");
        div.appendChild(img); 
    }
}

loadImgs(151); 