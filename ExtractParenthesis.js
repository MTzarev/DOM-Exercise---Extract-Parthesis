function extract(content) {
let text = document.getElementById(`content`).textContent;

const regex = /\(([^)]+)\)/g;
const matches = text.match(regex);
const wordsInParentheses = matches.map(match => match.replace(/[()]/g, ''));





//console.log(wordsInParentheses.join(`; `));
}