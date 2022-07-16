const imageContainer = $("#imagecontainer");
const searchBar = $("#searchbar");
const deleteButton = $("#deletebutton");
let apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

//search value pulls img from giphy api and places it in image container
//delete button empties image container

//set search value to searchVal
function addGif(response){
    let numResults = response.data.data.length;
    let randomIndex = Math.floor(Math.random() * numResults);
    console.log(randomIndex);

    // response.data[randomIndex].images.original.url
    // let newImg = $("#imagecontainer").add("img").attr("src", response.data.data[randomIndex].images.original.url);
    let newImg = $("<img>", {src: response.data.data[randomIndex].images.original.url});
    imageContainer.append(newImg);
}

// on form submit, 
$("form").on("submit", async function(event) {
    event.preventDefault();
    let searchInput = document.querySelector('#searchbar').value;
    let apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${apiKey}`;
    let response = await axios.get(apiUrl);
    console.log(response);
    console.log(searchBar);
    console.log(searchInput);
    
    addGif(response);
});

$("#deletebutton").on("click", function(event){
    event.preventDefault();
    imageContainer.empty();
})