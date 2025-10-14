    const questions = [
        "Melyik állítás igaz?",
        "Melyik állítás igaz?",
        "Melyik állítás hamis?",
        "Milyen vagyontárgyaira számol el a vállalkozás érékcsökkenést?",
        "Mire nem számolhat el a vállalkozás értékcsökkenést?",
        "Melyik nem  az értékcsökkenés számítás módszere?",
        "Egészítsd ki a mondatot!  A tárgyi eszközök, immateriális javak élettartamának végén realizálható érték a/az ……………………………….",
        "Melyik állítás igaz?",
    ];

    const right_answers_index = [2, 1, 2, 2, 0, 0, 2, 0];

    const answers = [
        "Az értékcsökkenés a befektetett javak elhasználódásának, műszaki – gazdasági avulásának pénzben kifejezett értéke. ", "Az értékcsökkenés a forgóeszközök elhasználódásának, műszaki – gazdasági avulásának pénzben kifejezett értéke. ", "Egyik válasz sem igaz",
        "A számvitelben  az értékcsökkenést a bevételek között számoljuk el.", "A számvitelben  az értékcsökkenést a költségek között számoljuk el.", "A számvitelben  az értékcsökkenést a pénzeszközök között számoljuk el.",
        "Az értékcsökkenés azonos az értékcsökkenési leírással. ", "Az értékcsökkenés a vállalkozás eszközeinek fizikai kopásának és egyben erkölcsi avulásának pénzben kifejezett értéke", "Az értékcsökkenési leírás az értékcsökkenés költségként elszámolt része. ",
        "ingatlanok, műszaki gépek és berendezések, egyéb gépek és berendezések, járművek", "ingatlanok, műszaki berendezések, járművek", "találmányok, ingatlanok, műszaki gépek és berendezések, járművek ",
        "a földterület, a telkek", "a nullára leírt eszközök után", "mindkettő válasz helyes",
        "Egyösszegű leírás", "Időarányos leírás", "Teljesítmény-értékelő leírás",
        "maradványérték", "nettó érték", "mindkét válasz helyes",
        "Teljesítmény arányos  értékcsökkenést számolhatunk el bruttó érték alapján", "Teljesítmény arányos  értékcsökkenést számolhatunk el nettó érték alapján", "Mindkettő válasz helyes",
    ];

let sum = 0
const notallowed_number = []
let random_number = Math.floor(Math.random() * 7);
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

    if (notallowed_number.length!=7){
        do {
         random_number = Math.floor(Math.random() * 7);
    } while (notallowed_number.includes(random_number));
    }

    else{
        alert("Minden kérdés ki lett választva.\n\nÖsszesen: " + sum + " / 7 pontot értél el.");
        let founder = document.getElementById("quiz")
        let founder2 = document.getElementById("oklevel")
        founder.classList.add("eltuntet")
        founder2.classList.add("megjelenit")
    }



    document.getElementById("kerdes").innerHTML = questions[random_number]
    document.getElementById("valasz1").innerHTML = answers[(random_number*3)+2]
    document.getElementById("valasz2").innerHTML = answers[(random_number*3)+1]
    document.getElementById("valasz3").innerHTML = answers[random_number*3]

    
    notallowed_number.push(random_number)
}
