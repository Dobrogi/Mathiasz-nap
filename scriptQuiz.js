    const questions = [
        "Melyik évben kezdődött a második világháború?",
        "Mi a víz kémiai képlete?",
        "Melyik bolygó van a Naphoz legközelebb?",
        "Ki írta a 'Hamlet' című művet?",
        "Mi Magyarország fővárosa?",
        "Melyik szám prímszám?",
        "Mi az angol megfelelője a 'könyv' szónak?",
        "Melyik programnyelv?",
        "Melyik évszak következik az ősz után?",
        "Hány napból áll egy szökőév?"
    ];

    const right_answers_index = [1, 0, 1, 0, 2, 1, 0, 0, 0, 1];

    const answers = [
        "1937", "1939", "1941",
        "H₂O", "CO₂", "O₂",
        "Mars", "Merkúr", "Vénusz",
        "William Shakespeare", "Charles Dickens", "Jókai Mór",
        "Debrecen", "Pécs", "Budapest",
        "9", "11", "15",
        "book", "table", "chair",
        "Python", "HTML", "Google",
        "Tél", "Nyár", "Tavasz",
        "365", "366", "367"
    ];

let sum = 0
const notallowed_number = []
let random_number = Math.floor(Math.random() * 10);
document.getElementById("kerdes").innerHTML = questions[random_number]
document.getElementById("valasz1").innerHTML = answers[(random_number*3)+2]
document.getElementById("valasz2").innerHTML = answers[(random_number*3)+1]
document.getElementById("valasz3").innerHTML = answers[random_number*3]

notallowed_number.push(random_number)

function Valaszkezeles()
{ 
    
    let user_answer = parseInt(document.quiz.valasz.value)
    if (user_answer == right_answers_index[random_number])
    {
        sum += 1
    }

    if (notallowed_number.length!=10){
        do {
         random_number = Math.floor(Math.random() * 10);
    } while (notallowed_number.includes(random_number));
    }

    else{
        alert("Minden kérdés ki lett választva.\n\nÖsszesen: " + sum + " pontot értél el.");
        let founder = document.getElementById("quiz")
        founder.classList.add("eltuntet")
    }



    document.getElementById("kerdes").innerHTML = questions[random_number]
    document.getElementById("valasz1").innerHTML = answers[(random_number*3)+2]
    document.getElementById("valasz2").innerHTML = answers[(random_number*3)+1]
    document.getElementById("valasz3").innerHTML = answers[random_number*3]

    
    notallowed_number.push(random_number)
}
