/* FEATURE: SMART FILTER SIDEBAR
  Goal: Create a search bar that filters pets by name or species in real-time.
*/

// 1. HTML STRUCTURE:
// In index.html, add an <input type="text" id="pet-search"> above the gallery.

// 2. CAPTURE INPUT:
// Select the input field and add an 'input' event listener.
// Hint: const searchInput = document.getElementById('pet-search');

const captureInput = document.getElementById("pet-search");
captureInput.addEventListener("input",filter);

// 3. ARRAY FILTERING (Arrays & Loops):
// Inside the event listener, use the .filter() method on the 'petImages' array.
// It should return only filenames that include the characters typed in the search bar.

function filter() {
const getPetImage = captureInput.value.toLocaleLowerCase();

const filteredImages = petImages.filter(function(fileName){
  return fileName.toLowerCase().includes(getPetImage);
});
console.log(filteredImages);
}




// let getPetImage = petImages.filter((petNames)) => petNames


// 4. CONDITIONAL SPECIES LOGIC:
// Create two buttons: "Show Cats" and "Show Dogs".
// In the event listener for these buttons, use .filter() with a condition:
// Hint: Check if (fileName.includes('cat')) or if (fileName.includes('dog')).

// 5. RE-RENDER & ANIMATION:
// Create a function `renderGallery(filteredArray)` that clears the gallery
// (gallery.innerHTML = "") and runs the forEach loop on the new array.
// Hint: Add a CSS transition 'opacity' to .pet-card so they fade in when the gallery updates.