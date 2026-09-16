// ===============================
// Dynamic Text Viewer / Watcher
// ===============================

// Array to store the lines read from list.txt
let list = [];

// ===============================
// Watcher function: periodically reads list.txt
// ===============================
function watcher() {
  // Load the text file line by line
  loadStrings('assets/list.txt', (data) => {
    // Store each line into the `list` array
    list = data;

    // Call watcher again after 5 seconds to keep updating
    setTimeout(() => { watcher(); }, 5000);
  });
}

// ===============================
// p5.js preload function
// ===============================
function preload() {
  // Start watching the text file before setup
  watcher();
}

// ===============================
// p5.js setup function
// ===============================
function setup() {
  createCanvas(400, 400); // create canvas
  textSize(12);           // set default text size
}

// ===============================
// p5.js draw function
// ===============================
function draw() {
  background(220); // light gray background

  // Starting vertical position for text
  let y = 20;

  // Iterate through all lines in the list and display them
  list.forEach((zeile) => {
    text(zeile, 20, y); // draw text at x=20, y=current line
    y += 10;            // move down for the next line
  });
}