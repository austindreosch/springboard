"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">${story.title}</a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
    //<button class="favorite-button">&hearts;</button>
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
  // $favoriteButton.on("click", addNewFavorite)
}


async function submitNewStoryForm(event){
  event.preventDefault();
  //get data from form
  let author = $submitFormAuthor.val();
  let title = $submitFormTitle.val();
  let url = $submitFormURL.val();
  let username = currentUser.username;

  //call the .addStory method we wrote
  let newStory = await storyList.addStory(currentUser, {title, author, url, username})

  let newStoryMarkup = generateStoryMarkup(newStory)
  console.log(newStoryMarkup)
  //put that new story on the page
  $allStoriesList.prepend(newStoryMarkup)

  //hide the form
  $submitForm.hide()
  // $submitForm.slideUp("slow");
  // $submitForm.trigger("reset");
}

$submitFormButton.on("click", submitNewStoryForm);

function putUserStoriesOnPage(){

}

function putFavoritesListOnPage(){

}

//
async function toggleFavorite(event){
  //when we click on favorite button, add this Story to favorite stories list
  console.log(event)
  //get data from inside the li clicked
  let $target = $(event.target);
  let $parentLi = $target.closest("li");
  let clickedStoryID = $parentLi.attr("id");
  let newFavoriteStory = storyList.stories.find(story => story.clickedStoryID === clickedStoryID);
  
  console.log(newFavoriteStory)
  //check if its already been favorited
  if ($target.hasClass("faved")) {
    // currently a favorite: remove from user's fav list and change star
    await currentUser.removeFavorite(story);
    $target.closest("i").toggleClass("faved notfaved");
  } else {
    // currently not a favorite: do the opposite
    await currentUser.addFavorite(story);
    $target.closest("i").toggleClass("faved notfaved");
  }
  //apply same markup generation - but enter it into favorites ol

}

$favoriteButton.on("click", addNewFavorite) //basic idea, but need event delegation