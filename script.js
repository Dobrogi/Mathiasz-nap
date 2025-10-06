/*const kepek = ["penz.jpg","piggy-bank-850607_1280.jpg","megjott_gdp_jelentes.jpg"]

const mottok = ["„Minden kis lépés közelebb visz a célhoz.”","„Ma spórolsz, holnap mosolyogsz.”","„Gazdaság: felfelé vagy lefelé rajtunk múlik.”"]

let kepkeres = document.getElementById("kepvetites")
let mottokeres = document.getElementById("motto")*/

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
    document.getElementById("kiiros").innerText = `${document.getElementById("linEvsz").value} év`
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
let linContenteditableCount = 0;
function tablaGeneralas() {
    let tablaSzulo = document.getElementById("linTablaSzulo")
    let ev = document.getElementById("linEvsz").value
    let maradvany = document.getElementById("linMaradvany").value
    let brutto = document.getElementById("linBrutto").value
    let tartalom = '<table id="linTabla" class="arnyek">'
    linContenteditableCount = 0;
    console.log(brutto, maradvany);

    if (parseInt(brutto) <= 0)
        alert("Számok nélkül nehéz számolni, tölts ki minden mezőt!")
    else if (parseInt(brutto) < parseInt(maradvany)) {
        console.log(brutto, maradvany);
        alert("Hogyan csökkentesz felfele? A maraványérték ne legyen nagyob a bruttónál!")
    }
    else {
        let i = 0
        let j = 0
        for (i = 0; i < (parseInt(ev) + 1); i++) {


            tartalom += `<tr id="linTableRow${i}">`

            for (j = 0; j < 5; j++) {

                if (i == 0) {
                    tartalom += `<td class="linTableHeader">`
                    switch (j) {
                        case 0: tartalom += "Évek"; break;
                        case 1: tartalom += "Bruttó"; break;
                        case 2: tartalom += "Értékcsökkenés"; break;
                        case 3: tartalom += "Halmozott Écs"; break;
                        case 4: tartalom += "Nettó"; break;
                    }
                    tartalom += `</td>`
                }
                else if (i == parseInt(ev) && j == 4 && !(parseInt(maradvany) == 0 || maradvany == "")) {

                    tartalom += `<td class="linTablaMaradvany">${parseInt(maradvany)} Ft</td>`
                }
                else {
                    switch (j) {
                        case 0: tartalom += `<td class="linEvek">${i}.év`; break;
                        case 1: tartalom += `<td class="defaultValue">${brutto} Ft`; break;
                        default: tartalom += `<td class="linEditableContent" contenteditable data-sor="${i}" data-oszlop="${j}"> `; linContenteditableCount++; break;
                    }
                    tartalom += "</td>"
                }
            }
            tartalom += "</tr>"
        }
        tartalom += "</table>"
        tablaSzulo.innerHTML = tartalom

        document.querySelectorAll(".linEditableContent").forEach(cella => {
            cella.addEventListener("keydown", key => {
                if (key.key === "Enter") {

                    key.preventDefault();
                    linTablaEllenorzes(cella, parseInt(cella.dataset.sor), parseInt(cella.dataset.oszlop), ev, maradvany, brutto)
                }
            })
        })
    };
}


function linTablaEllenorzes(cella, sor, oszlop, ev, maradvany, brutto) {
    const ecs = parseInt((sor - maradvany)/ev);
    if (cella.classList.contains("linEditableContent") && !cella.classList.contains("linTablaMaradvany"))
        switch (oszlop) {
            case 2: {
                if (parseInt(cella.innerText) == ecs) {
                    cella.classList.add("correctAwnser");
                    cella.classList.remove("wrongAwnser");
                }
                else {
                    cella.classList.add("wrongAwnser");
                    cella.classList.remove("correctAwnser");
                    console.log(parseInt(ecs));
                    setTimeout(() => {
                        cella.classList.remove("wrongAwnser");
                    }, 1000);
                }
                break;
            }
            case 3:
                if (parseInt(sor) == ev) {
                    if (parseInt(cella.innerText) == (sor * (ecs) - maradvany)) {
                        cella.classList.add("correctAwnser");
                        cella.classList.remove("wrongAwnser");
                    }
                    else {
                        cella.classList.add("wrongAwnser");
                        cella.classList.remove("correctAwnser");
                        console.log(sor * (ecs) - maradvany);
                        setTimeout(() => {
                            cella.classList.remove("wrongAwnser");
                        }, 1000);
                    }
                }
                else {
                    if (parseInt(cella.innerText) == sor * ecs) {
                        cella.classList.add("correctAwnser");
                        cella.classList.remove("wrongAwnser");
                    }
                    else {
                        cella.classList.add("wrongAwnser");
                        cella.classList.remove("correctAwnser");
                        cella.innerText = parseInt(sor * ecs)

                        setTimeout(() => {
                            cella.classList.remove("wrongAwnser");
                        }, 1000);
                    }
                }
                break;

            case 4:
                if (parseInt(sor) != ev) {
                    if (parseInt(cella.innerText) == (brutto - (sor * ecs))) {
                        cella.classList.add("correctAwnser");
                        cella.classList.remove("wrongAwnser");
                    }
                    else {
                        cella.classList.add("wrongAwnser");
                        cella.classList.remove("correctAwnser");
                        cella.innerText = parseInt(brutto - (sor * ecs))
                        setTimeout(() => {
                            cella.classList.remove("wrongAwnser");
                        }, 1000);
                    }
                }
                break;
        }
}