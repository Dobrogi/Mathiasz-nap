const kepek = ["penz.jpg","piggy-bank-850607_1280.jpg","megjott_gdp_jelentes.jpg"]

const mottok = ["„Minden kis lépés közelebb visz a célhoz.”","„Ma spórolsz, holnap mosolyogsz.”","„Gazdaság: felfelé vagy lefelé rajtunk múlik.”"]

let kepkeres = document.getElementById("kepvetites")
let mottokeres = document.getElementById("motto")

let i = 0


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

}, 3500)