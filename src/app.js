/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { randomgenerator } from "./randomgenerator";

let who = [" The dog", " My grandma", " His turtle", " My bird"];
let action = [" ate", " peed", " crushed", " broke"];
let what = [" my homework", " the keys", " the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let array1 = Math.floor(Math.random() * who.length);
  document.getElementById("excuse").innerHTML =
    who[randomgenerator(who)] +
    " " +
    action[randomgenerator(action)] +
    " " +
    what[randomgenerator(what)] +
    " " +
    when[randomgenerator(when)];
  console.log("Hello Rigo from the console!");
};
