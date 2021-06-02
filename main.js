const header = document.querySelector('header');
const section = document.querySelector('section');

//Send a request for data
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Wait for a respond, then deal with data
request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader (obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['squadName'];
    myH1.style.fontFamily = '\'Orbitron\', sans-serif';
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
    myPara.style.fontFamily = 'Arial, Helvetica, sans-serif';
    header.appendChild(myPara);
}

function showHeroes(obj) {
    
}