
function createCard(){
    var textValue = document.getElementById('textBox').value;
    const card = document.createElement("div")
    card.classList = "new-card"
    const bgColorLabel = document.createElement("label");
    bgColorLabel.setAttribute("for", "bgColor");
    bgColorLabel.textContent = "Change Background Color:  "
    const bgColorInput = document.createElement("input")
    bgColorInput.setAttribute("type", "color");
    bgColorInput.setAttribute("value", "#ff0000");
    bgColorInput.addEventListener("change", changeBgColor, false);
    bgColorInput.id = "bgColor";
    const fontColorLabel = document.createElement("label");
    fontColorLabel.setAttribute("for", "fontColor");
    fontColorLabel.textContent = "Change Font Color:  "
    const fontColorInput = document.createElement("input")
    fontColorInput.setAttribute("type", "color");
    fontColorInput.setAttribute("value", "#3325e6");
    fontColorInput.addEventListener("change", changeFontColor, false);
    fontColorInput.id = "fontColor";
    const btn = document.createElement('button')
    btn.style.display = "block";
    btn.value = "Delete";
    btn.textContent = "Delete";
    btn.addEventListener("click", deleteCard, false)
    const cardContent = document.createElement("p")
    cardContent.textContent = textValue; 
    card.appendChild(bgColorLabel)
    card.appendChild(bgColorInput)
    card.appendChild(fontColorLabel)
    card.appendChild(fontColorInput)
    card.appendChild(btn);
    card.appendChild(cardContent)
    document.querySelector("#newCards").appendChild(card);
    document.getElementById('textBox').value = '';
}

function changeBgColor(event){
    var cardDiv = event.target.parentElement;
    cardDiv.style.background = event.target.value;
}
function changeFontColor(event){
    var cardDiv = event.target.parentElement;
    cardDiv.lastChild.style.color = event.target.value;
}
function deleteCard(event){
    var cardToDelete = event.target.parentElement;
    cardToDelete.parentNode.removeChild(cardToDelete);
}