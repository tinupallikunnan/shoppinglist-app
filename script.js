
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// function for the add button click
function addList() {
    // if the value in the input text box is null
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); // creating span for cross icon
        span.innerHTML = '\u00d7'; // adding cross icon 
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData(); 
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");// if li is clicked, it will be checked
         saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();// delete the value when cross button is clicked
         saveData();
    }
}, false);

// function to save already addded values in 'data' in browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// function to show already added values from 'data' when browser is opened
function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();