/*const kepek = ["penz.jpg","piggy-bank-850607_1280.jpg","megjott_gdp_jelentes.jpg"]

const mottok = ["„Minden kis lépés közelebb visz a célhoz.”","„Ma spórolsz, holnap mosolyogsz.”","„Gazdaság: felfelé vagy lefelé rajtunk múlik.”"]

let kepkeres = document.getElementById("kepvetites")
let mottokeres = document.getElementById("motto")*/

let i = 0

const carouselKepek = document.querySelectorAll("#kepvetites img")
const carouselMotto = document.querySelectorAll("#motto p")

setInterval(() => {
    const elozo = i
    i = (i + 1) % carouselKepek.length
    carouselKepek[elozo].classList.remove("aktiv")
    carouselMotto[elozo].classList.remove("aktiv")

    carouselKepek[elozo].classList.add("after")
    carouselMotto[elozo].classList.add("after")

    carouselKepek[i].classList.add("aktiv")
    carouselMotto[i].classList.add("aktiv")
    setTimeout(() => {
        carouselKepek[elozo].classList.remove("after")
        carouselMotto[elozo].classList.remove("after")
    }, 1000);
}, 3000);

const osszesMain = document.querySelectorAll("body main")
function navMenu(indeksz) {
    osszesMain.forEach(elem => elem.classList.remove("aktiv"))
    osszesMain[indeksz].classList.add("aktiv")
}
function kiir(){
    document.getElementById("kiiros").innerText = `${document.getElementById("evsz").value} év`
}


