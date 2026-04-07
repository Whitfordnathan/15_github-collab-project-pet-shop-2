/* FEATURE: PET OF THE DAY & VOTING
  Goal: Add a "Like" button and highlight the pet with the most votes.
*/

// 1. ADD UI ELEMENTS:
// In the petImages loop, add a <span class="vote-count">0</span> and a <button class="like-btn">❤️</button>.

// 2. VOTE DATA (Arrays):
// Create an array or object to store vote counts for every pet in the petImages list.

// 3. THE "TOP PET" LOGIC (Loops & Conditionals):
// Write a function `findWinner()` that loops through your vote data.
// Use a conditional (if currentPetVotes > maxVotes) to find the filename with the highest number.

// 4. INTERACTIVE HIGHLIGHTING:
// Once the winner is found, use document.querySelectorAll('.pet-card') to find the matching card.
// Apply a special CSS class '.gold-medal' to that card.

// 5. ANIMATIONS:
// Use a CSS transform: scale(1.1) and a box-shadow pulse animation for the '.gold-medal' class
// to make the "Pet of the Day" stand out visually.
