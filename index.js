// document.getElementById("count").innerText = 5



// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
  console.log(count);
}

// 1. Create a function, save(), which logs out the count when it's called
// const saveEl = document.getElementById("save");

function save() { 

  console.log(count)
}