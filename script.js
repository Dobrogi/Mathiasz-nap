const kepek = ["penz.jpg","piggy-bank-850607_1280.jpg","Megjött a friss GDP-jelentés.jpg"]
const mottok = ["„Minden kis lépés közelebb visz a célhoz.”","„Ma spórolsz, holnap mosolyogsz.”","„Gazdaság: felfelé vagy lefelé  rajtunk múlik.”"]

let kepkeres = document.getElementById("kepvetites")
let mottokeres = document.getElementById("motto")

let i = 0
setInterval(() => {
    
    kepkeres.innerHTML = `<img src="img/${kepek[i]}" alt="${mottok[i]}" class="mozgokepek">`
    mottokeres.innerHTML = `<p>${mottok[i]}</p>`
    
    i++

    if (i == kepek.length)
    {
        i = 0
    }

}, 3500);