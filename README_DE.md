# P5.js: Watch Text List

[English](readme.md)

Liest die Textdatei `assets/list.txt` alle fünf Sekunden und zeichnet ihre
Zeilen auf die Zeichenfläche. Wird die Datei geändert, während der Sketch
läuft, folgt die Anzeige den Änderungen – nützlich, wenn ein anderes
Programm Daten in eine Textdatei schreibt, die ein Sketch anzeigen soll.

## Installation

Voraussetzungen: ein aktueller Browser.

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. `assets/list.txt` öffnen, Zeilen ändern, hinzufügen oder löschen und die
   Datei speichern.
3. Die Zeichenfläche zeigt den neuen Inhalt nach etwa fünf Sekunden.

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

## Coding-Hilfe

- **`sketch.js` → `watcher()`**: lädt `assets/list.txt` mit
  `loadStrings()` in das Array `list`. Sobald die Datei da ist, plant es
  sich mit `setTimeout(..., 5000)` erneut ein. Die 5000 ms ändern, um
  schneller oder langsamer abzufragen. Wird einmal in `preload()` gestartet.
- **`setup()`**: erstellt eine Zeichenfläche von 400 × 400 Pixeln und setzt
  die Textgrösse auf 12.
- **`draw()`**: zeichnet die Zeilen untereinander, beginnend bei y = 20 mit
  10 px Zeilenabstand. Bei grösserer Schrift den Schritt (`y += 10`)
  erhöhen.
