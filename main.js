let firstArray =  [];

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("ChangeWords").style.visibility = "hidden";
    document.getElementById("ChangeWords").style.visibility = "none";
    document.getElementById("Start").addEventListener("click", ChangeWords, false);
    document.getElementById("ChangeWords").addEventListener("Click", ChangeWords, false);

    });


// list data variables
let firstUl = [];
firstUl.push('apple');
firstUl.push('grape');
firstUl.push('banana');


function makeList() {
let ul = document.createElement('ul');
document.getElementById('firstUl').appendChild(ul);
for (let i = 0; i < firstArray.length; i++) {
let li = document.createElement('li');
ul.appendChild(li);
li.innerHTML =  firstArray[i];
};
}

//Usage
makeList();

function StartProgram() {
    for (let i = 0; i < 3; i++) {
    firstArray.push(prompt("Please enter a word"));
    let anotherLi =document.createElement("li");
anotherLi.appendChild(document.createTextNode (firstArray [i]));
document.getElementById("firstUl").appendChild(anotherLi);
    }
    document.getElementById("changeWords").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";
}
function  ChangeWords () {
document.getElementById("GetWords").style.display = "none";
document.getElementById("ChangeWords").style.display = "block";

let secondArray = firstArray.map(function (oneWord) {
return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1)

})


for (let i = 0; i < 3; i++)  {
    let anotherLi =  document.createElement("li");
    anotherLi.appendChild(document.createElement.createTextNode (secondArray [i]));
    document.getElementById("secondUl").appendChild(anotherLi);
    }
}


