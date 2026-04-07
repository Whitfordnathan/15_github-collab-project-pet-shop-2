/* FEATURE: PET CARE DASHBOARD
  Goal: Add "Feed" and "Play" buttons to each card to update a pet's status.
*/

// 1. UPDATE THE LOOP:
// Modify the existing forEach loop in app.js.
// Inside the card's innerHTML, add two <button> elements with classes 'feed-btn' and 'play-btn'.
// Hint: Use template literals to add these alongside the existing pet info.

// 2. STATE MANAGEMENT:
// Create an object to track the "Happiness" of each pet.
// Hint: const petStats = { "alison_ninja.JPG": 50, ... };

// 3. EVENT LISTENERS (Loops & Interactivity):
// Use document.querySelectorAll('.feed-btn') to get all buttons.
// Use a .forEach loop to add a 'click' event listener to each one.
// Hint: You can find which pet was clicked by looking at the parent card's data or image src.

// 4. CONDITIONALS:
// Inside the click event, increase the happiness score.
// Write an if/else statement:
// - If happiness > 80, add a CSS class 'excited' to the pet image.
// - If happiness < 20, add a CSS class 'sad'.

// 5. ANIMATION:
// In style.css, create a @keyframes animation for 'bounce' and apply it to the '.excited' class.
