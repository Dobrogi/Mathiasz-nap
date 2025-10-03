/*const kepek = ["penz.jpg","piggy-bank-850607_1280.jpg","megjott_gdp_jelentes.jpg"]

const mottok = ["„Minden kis lépés közelebb visz a célhoz.”","„Ma spórolsz, holnap mosolyogsz.”","„Gazdaság: felfelé vagy lefelé rajtunk múlik.”"]

let kepkeres = document.getElementById("kepvetites")
let mottokeres = document.getElementById("motto")*/
/*
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
}, 3000);*/

const osszesMain = document.querySelectorAll("body main")
function navMenu(indeksz) {
    osszesMain.forEach(elem => elem.classList.remove("aktiv"))
    osszesMain[indeksz].classList.add("aktiv")
}

function kiir() {
    document.getElementById("kiiros").innerText = `${document.getElementById("evsz").value} év`
}
function kezdoErtekLimit(elem, azon) {
 
    let mezok = document.querySelectorAll("div input[name=kezdoAdat]:checked")
    let inputok = document.querySelectorAll("section.ertekAdo aside:not(.marad) input")
    let asideok = document.querySelectorAll("section.ertekAdo aside:not(.marad)")


    let hossz = 0
    mezok.forEach(e => {
        if (e.checked) hossz++
    });
    if (hossz > 2) {
        elem.checked = false;
        inputok[azon].disabled = true
        alert("Legfeljebb csak kettő kezdőérték lehet! Ugye nem akarsz kész feladatot csinálni?")
    }
    if (elem.checked) {
        inputok[azon].disabled = false
        asideok[azon].classList.add("enabled")
        asideok[azon].classList.remove("disabled")


    }
    else {
        inputok[azon].disabled = true
        inputok[azon].value = ''
        asideok[azon].classList.add("disabled")
        asideok[azon].classList.remove("enabled")
    }
}
function tablaGeneralas(){
    let tablaSzulo = document.getElementById("tablaSzulo")
    let ev = document.getElementById("evsz")
        tablaSzulo.innerHTML = <table id="linTabla"></table>
    let i = 0
    for (i = 0; i < ev.value; i++) {
        tablaSzulo.innerHTML = `<tr id="tablaRow${i}"></tr>`
        let tablaRow = document.getElementById("tablaRow${i}")
        for (let j = 0; j < 4; j++) {
            tablaRow.innerHTML = `<td id="tableData${i};${j}"></td>`
        }
    }
}
