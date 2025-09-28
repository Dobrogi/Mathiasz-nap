const kepek = ["penz.jpg","piggy-bank-850607_1280.jpg","megjott_gdp_jelentes.jpg"]

const mottok = ["„Minden kis lépés közelebb visz a célhoz.”","„Ma spórolsz, holnap mosolyogsz.”","„Gazdaság: felfelé vagy lefelé rajtunk múlik.”"]

let kepkeres = document.getElementById("kepvetites")
let mottokeres = document.getElementById("motto")

let i = 0

const carouselKepek = document.querySelectorAll("#kepvetites img")
const carouselMotto = document.querySelectorAll("#motto p")
setInterval(() => {
    const elozo = i
    i = (i+1) % carouselKepek.length
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


/*
function kepBetolt(index) {
    const img = document.createElement("img")
    img.src = `img/${kepek[index]}`
    img.alt = mottok[index]
    img.classList.add("mozgokepek")

    kepkeres.appendChild(img)

    setTimeout(() => {
        img.classList.add("megjelenik")
    }, 50)

    mottokeres.innerHTML = `<p>${mottok[index]}</p>`
}

kepBetolt(i)

setInterval(() => {
    const aktualisKep = kepkeres.querySelector("img")
    if (aktualisKep) {

        aktualisKep.classList.remove("megjelenik")
        aktualisKep.classList.add("kifakul")

        setTimeout(() => {
            if (aktualisKep && aktualisKep.parentNode) {
                kepkeres.removeChild(aktualisKep)
            }

            i = (i + 1) % kepek.length
            kepBetolt(i)

        }, 1000) 
    }

}, 3500)*/
