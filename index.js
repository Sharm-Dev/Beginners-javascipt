// document.getElementById("count").innerText = 5



// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");
console.log(countEl);
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
  // console.log(count);
}

// 1. Create a function, save(), which logs out the count when it's called
// const saveEl = document.getElementById("save");

 // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

function save() { 

  let countAndDash = ` ${count} -`;
  saveEl.innerText += countAndDash;


  console.log(count)
}