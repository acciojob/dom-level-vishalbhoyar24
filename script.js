//your JS code here. If required.
let element = document.querySelector("#level");
let level = 0;
while (element !== null) {
  console.log(element);
  element = element.parentNode;
  level++;
}
alert("The level of the element is: " + level);