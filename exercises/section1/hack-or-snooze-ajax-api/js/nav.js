"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */
  function navSubmitClick(event){ 
    console.log("navSubmitClick", event) 
    $submitForm.show();  
  }

  $navSubmit.on("click", navSubmitClick); //mine

  // $submitFormButton.on("click", $submitForm.hide()); //mine
  // //later replace this with submit logic

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
  $navSubmit.show(); //mine
}
