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

const clickedCheckbox = document.body.addEventListener("change", (event) => {
  switch (event.target.id) {
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
  }
});
console.log(
  "clickedCheckbox: ",
  clickedCheckbox
); /* Warum bleibt clickedCheckbox stets undefined?? */

/*
let listCheckedBoxes = [];

if (clickedCheckbox.checked) {
    listCheckedBoxes.push()

} else { 

}




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