/*const kepek = ["penz.jpg","piggy-bank-850607_1280.jpg","megjott_gdp_jelentes.jpg"]

const mottok = ["„Minden kis lépés közelebb visz a célhoz.”","„Ma spórolsz, holnap mosolyogsz.”","„Gazdaság: felfelé vagy lefelé rajtunk múlik.”"]

let kepkeres = document.getElementById("kepvetites")
let mottokeres = document.getElementById("motto")*/

let i = 0
const carouselKepek = document.querySelectorAll("#kepvetites img")
const carouselMotto = document.querySelectorAll("#motto p")
/*
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
    if (hossz > 1) {
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
function tablaGeneralas() {
    let tablaSzulo = document.getElementById("linTablaSzulo")
    let ev = document.getElementById("linEvsz")
    let maradvany = document.getElementById("linMaradvany")
    let brutto = document.getElementById("linBrutto").value
    let ecs = document.getElementById("linEcs").value
    let tartalom = '<table id="linTabla" class="arnyek">'

    if (brutto == "" || ecs == "")
        alert("Számok nélkül nehéz számolni, tölts ki minden mezőt!")
    else {
        let i = 0
        let j = 0
        for (i = 0; i < (parseInt(ev.value) + 1); i++) {


            tartalom += `<tr id="linTableRow${i}">`

            for (j = 0; j < 5; j++) {

                if (i == 0) {
                    tartalom += `<td id="linTableData${i}_${j}" class="linTableHeader">`
                    switch (j) {
                        case 0: tartalom += "Évek"; break;
                        case 1: tartalom += "Bruttó"; break;
                        case 2: tartalom += "Értékcsökkenés"; break;
                        case 3: tartalom += "Halmozott Écs"; break;
                        case 4: tartalom += "Nettó"; break;
                    }
                    tartalom += `</td>`
                }
                else if (i == parseInt(ev.value) && j == 4 && (maradvany.value != 0 || maradvany.value != "")) {

                    tartalom += `<td id="linTableData${i}_${j}" class="linTablaMaradvany">${parseInt(maradvany.value)}</td>`
                }
                else {
                    switch (j) {
                        case 0: tartalom += `<td id="linTableData${i}_${j}" class="linEvek">${i}`; break;
                        case 1: tartalom += `<td id="linTableData${i}_${j}" class="defaultValue">${brutto}`; break;
                        case 2: tartalom += `<td id="linTableData${i}_${j}" class="defaultValue">${ecs}`; break;
                        default: tartalom += `<td id="linTableData${i}_${j}" contenteditable>`; break;
                    }
                    tartalom += "</td>"
                }
            }
            tartalom += "</tr>"
        }
        tartalom += "</table>"
        tablaSzulo.innerHTML = tartalom
    }
}
