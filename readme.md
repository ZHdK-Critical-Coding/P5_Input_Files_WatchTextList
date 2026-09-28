# P5.js: Watch Text List

[Deutsch](README_DE.md)

Reads the text file `assets/list.txt` every five seconds and draws its
lines on the canvas. Edit the file while the sketch is running and the
display follows the changes – useful when another program writes data into
a text file that a sketch should show.

## Installation

Requirements: a current browser.

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Open `assets/list.txt`, change, add or remove lines and save the file.
3. The canvas shows the new content within about five seconds.

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not
used).

## Coding Help

- **`sketch.js` → `watcher()`**: loads `assets/list.txt` with
  `loadStrings()` into the array `list`. Once the file has arrived, it
  schedules itself again with `setTimeout(..., 5000)`. Change the 5000 ms
  to poll faster or slower. Started once in `preload()`.
- **`setup()`**: creates a 400 × 400 canvas and sets the text size to 12.
- **`draw()`**: draws the lines one below the other, starting at y = 20
  with 10 px line spacing. Increase the step (`y += 10`) for larger text.
