let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// Create a function that logs out the sum of all the lap times

function totalLapTime() {
    let totalTime = lap1 + lap2 + lap3;
    console.log(totalTime);
}

totalLapTime();

//or

function grandTotal() {
    console.log(lap1 + lap2 + lap3);
}

grandTotal()