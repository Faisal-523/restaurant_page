import loadHome from './home.js';
import loadMenu from './menu.js';

function createDiv(name){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id',name);
    newDiv.setAttribute('class',name);
    return newDiv;
}

function clearDiv(myDiv){
    while(myDiv.firstChild)
        myDiv.removeChild(myDiv.firstChild);
}

function updateCurrentTab(name){
    let buttons = Array.from(document.querySelectorAll('.nav-button'));
    buttons.forEach((element) => {
        element.classList.remove('nav-current');
    });

    let menuButton = document.getElementById(name);
    menuButton.classList.add('nav-current'); 
}

function initialSetup(){

function createButton(argument){
        let rButton = document.createElement('button');
        rButton.setAttribute('id', argument);
        rButton.setAttribute('class', 'nav-button');
        rButton.textContent = argument;
        return rButton;
}

let content = document.querySelector('.content');
let header = createDiv('header');
let mainArea = createDiv('mainArea');
let footer = createDiv('footer');

content.append(header);
content.append(mainArea);
content.append(footer);

let rName = createDiv('title');
rName.textContent = "Good Food Inc";
header.append(rName);
let rNav = document.createElement('nav');
rNav.setAttribute('class', 'nav');

let home = createButton('Home');
home.addEventListener('click',loadHome);
rNav.append(home);

let menu = createButton('Menu')
menu.addEventListener('click', loadMenu);
rNav.append(menu);

rNav.append(createButton('Contact'));
header.append(rNav);


let footText = document.createElement('h4');
footText.textContent = "Good Food Inc, 2020";
footer.append(footText);
}

export {initialSetup, createDiv, clearDiv, updateCurrentTab};