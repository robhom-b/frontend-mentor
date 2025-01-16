/*
Click the button! I'm writing a script to change the social media card's color palette.
The new style will toggle on or off a new theme after the user clicks the Style Me button.

    1. Get the button - done
    2. Define the styles to toggle - done
    3. Function to toggle style
    4. Add event listener to button - done
*/

//Creates a new function called switchStyle that takes a parameter value
  function switchStyle(buttonGroup){
    const socialButtons = document.querySelectorAll(".social-button"); //the socialButtons variable is assigned a collection of elements with the .social-button class
    //element.classList.remove("social-button"); //Use the element API to remove any element with the social-button class?
    //console.log(element); //Use log to check the value of the element variable
    socialButtons.forEach(button => button.classList.toggle("social-button-active-state")) //iterate over the socialButtons objects to toggle on or off the social-button-active-state class

    const taglineText = document.querySelector(".tagline-default-state"); //the taglineText variable is assigned a collection of elements with the .tagline-state class
    console.log(taglineText.classList); //Use log to check the value of the taglineText variable
    taglineText.classList.toggle("tagline-active-state"); //Use the toggle method to remove the given argument from the DOMTokenList
    console.log(taglineText.classList);
    //how do I add the tagline-state class back into the DOMTokenList after the button has been clicked?

    const aboutText = document.querySelector(".about-text-default-state");
    aboutText.classList.toggle("about-text-active-state");

    const cardBackground = document.querySelector(".inner-container");
    cardBackground.classList.toggle("cardBackground-active-state");

    const cardContainer = document.querySelector(".social-container");
    cardContainer.classList.toggle("cardContainer-active-state");
  }

  /*
    Thoughts and reflections: Should I be using the default state method or should I just reuse the
    code that was established with the original class? Is my code being redundant? I think yes, because
    I have multiple classes that are repeating the same change.

    Question: Is it better to be redundant to get the idea out, and then clean up the code after?
    Because instead of haivng the default state class in the querySelector method, I could just dive
    straight into with the original element and CSS selector in the query selector.

    Having the default and active states though did help me figure it out quicker!
    */



  /*for(let i=0; i < 3, i++)
    {
    //const element = document.querySelector('div#socialButton.social-container.titillium-web-semibold a'); 
    // //gets the first element with the class social container
    element.forstyle = "background-color: red";
    };*/

    
  /*function switchStyle(elementId, styleName) {
    const element = document.querySelector('div#socialButton.social-container.titillium-web-semibold a'); //gets the first element with the class social container
    element.style = "background-color: red";
    
    console.log(element.style);
    console.log("The value of element is " + element);
    console.log("The function works");
  }
  
  const styles = {
    style1: "darkMode",
    style2: "lightMode"
  };
  
  */
