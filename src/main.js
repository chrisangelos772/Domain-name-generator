/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["my", "the", "our", "their"];
  var adj = ["huge", "small", "clean", "costly"];
  var noun = ["pillow", "house", "car", "swamp"];

  var domain = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let newDomain = pronoun[i] + adj[j] + noun[k] + ".com";
        domain.push(newDomain);
      }
    }
  }
  //console.log(domain);
  let ul = document.querySelector("#domain-list");
  ul.innerHTML = buildlist(domain);
};

function buildlist(list) {
  return list
    .map(item => {
      return "<li class='mb-2'>" + item + "</li>";
    })
    .join("");
}
