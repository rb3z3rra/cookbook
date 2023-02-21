async function getSimpsons(){
    const simpsons = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const dataS = await simpsons.json();
    console.log(dataS[0].character);

    document.getElementById('persona').innerHTML = dataS[0].character;
    document.getElementById('image').src = dataS[0].image;
}
getSimpsons();