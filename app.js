const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const fs = require("fs");

fs.readFile("./index.html", function (err, html) {
  if (err) {
    throw err;
  }
  http
    .createServer(function (request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(3000);
});

const words = fs.readFileSync("sowpods.txt").toString().split("\n");

let answer1 = [];
const ques1 = words.forEach((word) => {
  let wordArray = word.split("");
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === "U" && wordArray[i + 1] === "U") {
      answer1.push(word);
    }
  }
});

let answer2 = [];
const ques2 = words.forEach((word) => {
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    answer2.push(word);
  }
});

let answer3 = [];
const ques3 = words.forEach((word) => {
  if (word.includes("Q") && !word.includes("U")) {
    answer3.push(word);
  }
});

let answer4 = [];
const ques4 = words.forEach((word) => {
  if (word.includes("CAT") && word.length === 5) {
    answer4.push(word);
  }
});

let answer5 = [];
const ques5 = words.forEach((word) => {
  if (!word.includes("E") && !word.includes("A") && word.length === 15) {
    answer5.push(word);
  }
});

let answer6 = [];
const ques6 = words.forEach((word) => {
  if (word.includes("B") && word.includes("X") && word.length < 5) {
    answer6.push(word);
  }
});

let answer7 = [];
const ques7 = words.forEach((word) => {
  if (word.charAt(0) === "Y" && word.charAt(word.length - 1) === "Y") {
    answer7.push(word);
  }
});

let answer8 = [];
const ques8 = words.forEach((word) => {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    answer8.push(word);
  }
});

let answer9 = [];
const ques9 = words.forEach((word) => {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    answer9.push(word);
  }
});

let answer10 = [];
const ques10 = words.forEach((word) => {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U") &&
    word.indexOf("A") < word.indexOf("E") &&
    word.indexOf("E") < word.indexOf("I") &&
    word.indexOf("I") < word.indexOf("O") &&
    word.indexOf("O") < word.indexOf("U")
  ) {
    answer10.push(word);
  }
});

let answer11 = 0;
const ques11 = words.forEach((word) => {
  if (word.includes("TYPE")) {
    answer11 += 1;
  }
});

let answer12 = [];
const ques12 = words.forEach((word) => {
  if (word.slice(-5) === "GHTLY") {
    answer12.push(word);
  }
});

let answer13;
const ques13 = words.forEach((word) => {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (!answer13 || word.length < answer13.length) {
      answer13 = word;
    }
  }
});

let answer14;
const ques14 = words.forEach((word) => {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (!answer14 || word.length > answer14.length) {
      answer14 = word;
    }
  }
});

let answer15;
let Q = 0;
let X = 0;
let Z = 0;
const ques15 = words.forEach((word) => {
  if (word.includes("Q")) Q++;
  if (word.includes("X")) X++;
  if (word.includes("Z")) Z++;
  if (Q > X && Q > Z) {
    answer15 = `Q is the most common with ${Q} words.`;
  } else if (X > Q && X > Z) {
    answer15 = `X is the most common with ${X} words.`;
  } else if (Z > Q && Z > X) {
    answer15 = `Z is the most common with ${Z} words.`;
  }
});

let answer16;
const ques16 = words.forEach((word) => {
  let revWord = word.split("").reverse().join("");
  if (word === revWord) {
    if (!answer16 || word.length > answer16.length) {
      answer16 = word;
    }
  }
});
