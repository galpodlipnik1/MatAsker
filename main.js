let corect = 0;
let wrongNumber = 0;
const wrong = document.querySelector('.wrong');
const body = document.querySelector('body');
const correcttext = document.querySelector(".correct");
const text = document.querySelector(".questionText");


function giveQuestions(){
    let lenght = questions.length;

    randQuestion(lenght,questions);
    //Average();
}

function randQuestion(lenght,questions){
    let rand = Math.trunc(Math.random() *  lenght);
    text.innerText = `Question: ${questions[rand]}`;
}
function Correct() {
    corect++;
    correcttext.innerHTML = `Correct: ${corect}`
    Average(corect, wrongNumber);
    if(wrongNumber > corect) {
        body.style.background = 'red'
    } else if (corect === wrongNumber){
        body.style.background = 'url(https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/Color-Pride-Flag?qlt=82&wid=1024&ts=1625042756595&fit=constrain&fmt=png-alpha)'
    } else {
        body.style.background = 'green'
    }
    
}

function Wrong() {
        wrongNumber = wrongNumber + 1;;
        wrong.textContent = `Wrong: ${wrongNumber}`
        Average(corect, wrongNumber);
        if(wrongNumber > corect) {
            body.style.background = 'red'
        } else if (corect === wrongNumber){
            body.style.background = 'url(https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/Color-Pride-Flag?qlt=82&wid=1024&ts=1625042756595&fit=constrain&fmt=png-alpha)'
        } else {
            body.style.background = 'green'
        }
        
}

function resetPoints() {
    body.style.background = 'whitesmoke'
    wrong.textContent= 'Wrong: '
    wrongNumber = 0;
    corect = 0;
    correcttext.textContent = 'Correct: '
    text.textContent = 'Question: '
}


document.querySelector('.reset').addEventListener('click', resetPoints)
document.querySelector('.givewrong').addEventListener('click', Wrong);
    
function Average(corect, wrongNumber) {
    let average = (corect + wrongNumber)
    document.querySelector('.avrege').textContent = `Average: ${percent}%`;
}


let questions = [
    "Formula za pitagorov izrek",
    "Formula za kosinusov izrek",
    "Formula za sinusni izrek",
    "Formula za ploščine pravokotni trikotnik",
    "Formula za ploščine trikotnika",
    "Formula za sinusa",
    "Formula za kosinusa",
    "Formula za tangesa",
    "Formula za površino enakostraničnega trikotnika",
    "Formula za izračun fi(n-kotnik)",
    "Formula za ploščino romb",
    "Formula za ploščino trapez",
    "Formula za središčnico trapeza",
    "Formula za ploščino deltoid",
    "Formula za ploščino deltoida z diagonalama",
    "Formula za ploščino paralelograma",
    "Formula za obseg kroga",
    "Formula za ploščino kroga",
    "Formula za dolžino krožnega loka(l)",
    "Formula za krožni izsek(Sl)",
    "Formula za krožni odsek(So)",
    "Formula za krožni kolobar(Sk)",
    "Formula za volumen prizme",
    "Formula za površino prizme",
    "Formula za plašč prizme",
    "Formula za telesno diagonalo kocke",
    "Formula za ploskovno diagonalo kocke",
    "Formula za volumen piramide",
    "Formula za površino piramide",
    "Formula za plašč piramide",
    "Formula za volumen tetraedra",
    "Formula za poveršino tetraedra",
    "Formula za višino tetraedra",
    "Formula za volumen vlaja",
    "Formula za površino vlaja",
    "Formula za plašč valja",
    "Formula za višino valja, če je valj enakostraničen",
    "Formula za notranji trikotnik pri šestkotniku"
];