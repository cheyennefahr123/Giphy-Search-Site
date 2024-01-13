function formSubmitted(event) {
    event.preventDefault();
    const gifText = document.querySelector("#gifTextInput").value;
    const gifCount = Number.parseInt(document.querySelector("#numOfGifSelect").value);

    getData(gifText, gifCount);

    document.querySelector("#gifTextInput").value = '';   
}

const API_KEY = "3FS152xPXoeel1HptVWpLd5s8be34iRv";

function getData(gifText, gifCount) {
    fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${gifText}&limit=${gifCount}&`)
        .then(x => x.json())
        .then(renderData);
}

function renderData(response){
    console.log(response);
}

document.querySelector(".js-giphy-form").addEventListener('submit', formSubmitted);