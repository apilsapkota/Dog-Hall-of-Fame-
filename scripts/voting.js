// Apil Sapkota//
//December 07, 2024 implemented the voting system for herodog,workingdog, and companion dog//

// Wait for the document to load before executing
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the vote count to 0
  let voteCount = 0;

  // Grab the voting buttons and vote count display
  const upvoteButton = document.getElementById("upvote-btn");
  const downvoteButton = document.getElementById("downvote-btn");
  const voteDisplay = document.getElementById("votes");

  // Debugging step: log if the elements are correctly selected
  console.log("Upvote Button:", upvoteButton);
  console.log("Downvote Button:", downvoteButton);
  console.log("Vote Display:", voteDisplay);

  // Update the vote count displayed on the page
  function updateVoteDisplay() {
    voteDisplay.textContent = voteCount; // Update the displayed vote count
    console.log("Updated vote count:", voteCount); // Log for debugging
  }

  // Check if the upvote button exists and set up the event listener
  if (upvoteButton) {
    upvoteButton.addEventListener("click", function () {
      voteCount++; // Increase vote count on upvote click
      console.log("Upvote clicked"); // Debugging log
      updateVoteDisplay(); // Update vote count display
    });
  } else {
    console.log("Upvote button not found");
  }

  // Check if the downvote button exists and set up the event listener
  if (downvoteButton) {
    downvoteButton.addEventListener("click", function () {
      voteCount--; // Decrease vote count on downvote click
      console.log("Downvote clicked"); // Debugging log
      updateVoteDisplay(); // Update vote count display
    });
  } else {
    console.log("Downvote button not found");
  }
});
