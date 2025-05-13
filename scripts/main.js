/*Click the button! I'm writing a script to change the social media card's color palette.
The new style will toggle on or off a new theme after the user clicks the Style Me button.*/

//Create new function
function darkMode() {
   const socialButtons = document.querySelectorAll(".social-button"); 
    socialButtons.forEach(button => button.classList.toggle("social-button-active-state"));

    const taglines = document.querySelectorAll(".tagline");
    taglines.forEach(tagline => tagline.classList.toggle("active"));

    const taglineText = document.querySelector(".tagline-default-state");

    const cardBackground = document.querySelector(".inner-container");
    cardBackground.classList.toggle("cardBackground-active-state");

    const cardContainer = document.querySelector(".social-container");
    cardContainer.classList.toggle("cardContainer-active-state");
    
    /*Checks the function is working */
    console.log('dark mode on');
  }

  let colorMode = darkMode();
  const switchStyleButton = document.getElementById("button");
  /*switchStyleButton.addEventListener("click", darkMode);*/