const api_url = "https://api.chucknorris.io/jokes/categories";
async function getapi(url) {
    const response = await fetch(url);
    var categories = await response.json();
    show(categories);
}
getapi(api_url);

function show(categories) {
    let tab = `<option value="all"></option>`;
    categories.forEach(item => tab += `<option value="${item}">${item}</option>`);
    document.getElementById("category").innerHTML = tab;
}

const generateQuote = () => {
    let url = "https://api.chucknorris.io/jokes/random";
    let category = document.getElementById("category").value;

    if (category !== "all") {
        url = "https://api.chucknorris.io/jokes/random?category=" + category;
    } else {
        url = "https://api.chucknorris.io/jokes/random";
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            this.data = data;
            document.getElementById("quote").innerHTML = this.data.value;
        }).catch();

}

function changeStyle() {
    document.querySelector(".container").style.paddingTop = '5px';
    document.querySelector(".container").style.paddingBottom = '30%';
    document.querySelector(".container").style.paddingLeft = '20px';
    document.querySelector(".container").style.paddingRight = '20px';
    document.querySelector(".container").style.overflowY = 'auto';
    let allNote = document.querySelectorAll(".rightNote");
    let last = allNote[allNote.length - 1];
    last.remove();
}


const freeText = () => {
    let searchTerm = document.getElementById("searchText").value;
    let url = `https://api.chucknorris.io/jokes/search?query=${searchTerm}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            this.data = data;
            data.result.forEach(function (index) {
                document.getElementById('quote').innerHTML = data.result.map(index =>
                    `<div id="leftNote">${index.created_at}</div>
                <p id="freeText">${index.value}</p>
                <div class="rightNote">Joke Page</div>`).join('');
            });
        }).catch();

}

window.onload = () => {
    document.getElementById("generate").addEventListener('click', generateQuote);
    document.getElementById("generateFreeText").addEventListener('click', freeText);
    setTimeout(
        () => {
            document.getElementById("generate").click();
        }, 200);
}


// Answer number 2: Code which counts a character occurrence in a repeated string

let S = "abcd";
let N = 10;
let C = "a";

function char_count(letter) {
    let letter_Count = 0;
    var String = S.repeat(10).substr(0, N);
    console.log(`Final String: ` + String);
    for (var position = 0; position < String.length; position++) {
        if (String.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(`Result: ` + `${char_count(C)}` + ` occurrences`);

// 3: Bonus - Sumerizing unknown amount of variables

function sum(...args) {
    return args.reduce((acc, cur) => acc + cur);
}

console.log(`Bonus answer: 
Add as much parameters as you want: 
All adds up to: ` + sum(3, 10, 15, 4, 3, 5, 7));  