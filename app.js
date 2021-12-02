var inputButton = document.querySelector("#translate-btn");
var textInput = document.querySelector("#text-area")
var outputText = document.querySelector("#output")

var url = "https://api.funtranslations.com/translate/minion.json"

var tranlationURL = (text) => {
    return url + "?" + "text="+ text;
}

clickHandler = () => {
    //console.log("clicked")
    var inputText = textInput.value;

    fetch(tranlationURL(inputText))
        .then(response => response.json())
        .then(json=> {
            var translatedFinal = json.contents.translated;
            outputText.innerHTML = translatedFinal})
       // .then(json => console.log(json.contents.translated))
}


inputButton.addEventListener("click", clickHandler);

//console.log(inputButton);