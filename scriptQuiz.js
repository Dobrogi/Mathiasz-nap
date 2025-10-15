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
        alert("Minden kérdés ki lett választva.");
        let founder = document.getElementById("quiz")
        let founder2 = document.getElementById("oklevel")
        founder.classList.add("eltuntet")
        founder2.classList.add("megjelenit")
        
        let result = document.getElementById("okleveleredmeny");
        if (sum == 7)
        {
            result.innerHTML = "7 pont – 🧠 Tökéletes! Mester vagy a gazdaság és menedzsment témában!"
        }

        else if (sum == 6)
        {
            result.innerHTML = "6 pont – 💼 Nagyon jó! Csak egy hajszál választ el a tökéletestől."
        }

         else if (sum == 5)
        {
            result.innerHTML = "5 pont – 📈 Szép munka! A tudásod stabil és jól használható."
        }

         else if (sum == 4)
        {
            result.innerHTML = "4 pont – 📘 Nem rossz! Az alapok mennek, de van még mit csiszolni."
        }

        else if (sum == 3)
        {
            result.innerHTML = "3 pont – 🔍 Fejlődő szint. Jó kezdés, érdemes tovább gyakorolni."
        }

        else if (sum == 1 || sum == 2)
        {
            result.innerHTML = "1–2 pont – 🪄 Kezdő szint. Ne csüggedj, a gyakorlás meghozza a sikert!"
        }

        else
        {
            result.innerHTML = "0 pont – 💤 Hoppá! Itt az idő egy kis tanulásra – újra neki lehet futni!"
        }
    }



    document.getElementById("kerdes").innerHTML = questions[random_number]
    document.getElementById("valasz1").innerHTML = answers[(random_number*3)+2]
    document.getElementById("valasz2").innerHTML = answers[(random_number*3)+1]
    document.getElementById("valasz3").innerHTML = answers[random_number*3]

    
    notallowed_number.push(random_number)
}
