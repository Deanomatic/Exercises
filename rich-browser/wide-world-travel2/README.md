It is recommended that you complete the first Wide World Travel exercise before starting this one.

Setup

Add a factories directory to your existing file structure, and in that directory create a file named guideFactory.js to hold your new Angular factory module:

Instructions

Make a new branch called guide-factory
Separate the database interactions from the DOM interactions, and make your guidebook data available to your controller (and other, future controllers) by moving the http call for guides.json from bookCtrl.js into guideFactory.js
Inject your factory into bookCtrl.js as a dependency