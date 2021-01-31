let myImage = document.querySelector('img');

myImage.onClick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'image/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla はすばらしいよ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozillan はすばらしいよ' + storedName;
}