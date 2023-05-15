/* Lösung elegant */
/*
let last;

document.querySelector("form").addEventListener("change", (event) => {
  console.log("-------");
  console.log("last: ", last);
  console.log("event.target.id: " + event.target.id);

  if (document.querySelectorAll("input:checked").length === 3) {
    last.checked = false;
  }

  last = event.target;
});
*/

/*----------------------------------------------------------------------------------------------------------*/

/* Welche Checkbox wurde geklickt? */

const changeHistory = [];

const clickedCheckbox = document.addEventListener("change", (event) => {
  if (event.target.checked) {
    changeHistory.push(event.target);
  }
  if (changeHistory.length === 3) {
    changeHistory[1].checked = false;
    changeHistory.splice(1, 1);
  }
  console.log(changeHistory);
  /*switch (event.target.id) {
    case "fast":
      console.log(event.target.id);
      console.log("clickedCheckbox: ", clickedCheckbox);
      break;
    case "cheap":
      console.log(event.target.id);
      console.log("clickedCheckbox: ", clickedCheckbox);
      break;
    case "good":
      console.log(event.target.id);
      console.log("clickedCheckbox: ", clickedCheckbox);
      break;
  }*/
});

/* Warum bleibt clickedCheckbox stets undefined?? 
weil ein eventListener nichts zurück gibt und 
eine Funktion die nichts zurück gibt den Wert undefined hat*/

/*
const cheapCheckbox = document.querySelector("#cheap");
cheapCheckbox.addEventListener("change", check(cheapCheckbox));

const goodCheckbox = document.querySelector("#good");
goodCheckbox.addEventListener("change", check(goodCheckbox));

let listChecked = [];
let lastChecked;

function check(item) {
  if (item.checked) {
    if (!listChecked.includes(item)) {
      listChecked.push(item);
    }

    if (listChecked.length === 3) {
      const ItemToDelete = listChecked.find(
        (element) => element === lastChecked
      );
    }

    lastChecked = item;
  }
}
*/
