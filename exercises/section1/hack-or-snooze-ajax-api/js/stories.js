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

function generateStoryMarkup(story, showDeleteBtn = false) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  let showStar = Boolean(currentUser);
  // return $(`
  //     <li id="${story.storyId}">
  //       <a href="${story.url}" target="a_blank" class="story-link">${story.title}</a>
  //       <small class="story-hostname">(${hostName})</small>
  //       <small class="story-author">by ${story.author}</small>
  //       <small class="story-user">posted by ${story.username}</small>
  //     </li>
  //   `);


    //with favorites, not working  yet
  return $(`
    <li id="${story.storyId}">
      ${showDeleteBtn ? addFavoriteDelete() : ""}
      ${showStar ? addFavoriteStar(story, currentUser) : ""}
      <a href="${story.url}" target="a_blank" class="story-link">${story.title}</a>
      <small class="story-hostname">(${hostName})</small>
      <small class="story-author">by ${story.author}</small>
      <small class="story-user">posted by ${story.username}</small>
    </li>
  `);




    //<button class="favorite-button">&hearts;</button>
}


function addFavoriteStar(story, user){
  let isFavorite = user.isFavorite(story)
  let starType = isFavorite ? "fas" : "far";

  return `
    <span class="star">
      <i class="${starType} fa-star"></i>
    </span>`;

}

function addFavoriteDelete(){
  return `
      <span class="trash-can">
        <i class="fas fa-trash-alt"></i>
      </span>`;
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

// *******************************************************************
// ************* MINE ************************************************

function putUserStoriesOnPage(){
  $ownStories.empty();
  invalidMessage = "<h5>No stories added by user yet!</h5>"
  if (currentUser.ownStories.length === 0) {//dont have ownStories array in user?
    $ownStories.append(invalidMessage);
  }
  else{
    for(let story of currentUser.ownStories){
      let $story = generateStoryMarkup(story, true); //generate markup and show delete button
      $ownStories.append($story)
    }
  }

  $ownStories.show()
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


function putFavoritesListOnPage(){
  $favoritedStories.empty();


  if(currentUser.favorites.length === 0){
    $favoritedStories.append("<h5>No favorites added!</h5>")
  }
  else{
    for (let story of currentUser.favorites){
      const $story = generateStoryMarkup(story);
      $favoritedStories.append($story);
    }
  }
  $favoritedStories.show();
}



//
async function toggleFavorite(event){
  //when we click on favorite button, add this Story to favorite stories list
  console.log(event)

  const $tgt = $(event.target);
  const $closestLi = $tgt.closest("li");
  const storyId = $closestLi.attr("id");
  const story = storyList.stories.find(s => s.storyId === storyId);

  // see if the item is already favorited (checking by presence of star)
  if ($tgt.hasClass("fas")) {
    // currently a favorite: remove from user's fav list and change star
    await currentUser.removeFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  } else {
    // currently not a favorite: do the opposite
    await currentUser.addFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  }



  //get data from inside the li clicked
  // let $target = $(event.target);
  // let $parentLi = $target.closest("li");
  // let clickedStoryID = $parentLi.attr("id");
  // let newFavoriteStory = storyList.stories.find(story => story.clickedStoryID === clickedStoryID);
  
  // console.log(newFavoriteStory)
  // //check if its already been favorited
  // if ($target.hasClass("faved")) {
  //   // currently a favorite: remove from user's fav list and change star
  //   await currentUser.removeFavorite(story);
  //   $target.closest("i").toggleClass("faved notfaved");
  // } else {
  //   // currently not a favorite: do the opposite
  //   await currentUser.addFavorite(story);
  //   $target.closest("i").toggleClass("faved notfaved");
  // }
  // //apply same markup generation - but enter it into favorites ol

}


// $storiesLists.on("click", ".star", toggleFavorite);

$allStoriesList.on("click", ".star", toggleFavorite);
$favoritedStories.on("click", ".star", toggleFavorite);
$ownStories.on("click", ".star", toggleFavorite);