import {createDiv, clearDiv, updateCurrentTab} from './initial.js'

function loadHome(){
let mainArea = document.getElementById('mainArea');

clearDiv(mainArea);
updateCurrentTab('Home');

let homeContent = createDiv('homeContent');
let homeScript = createDiv('homeScript');
homeScript.innerHTML = 'Eat Good, Spread Love.';
homeContent.append(homeScript);
let homeText = createDiv('homeText');
homeText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
homeContent.append(homeText);
let homeImage = document.createElement('img');
homeImage.setAttribute('src',"../assets/main_food.jpg");
homeImage.setAttribute('id',"main-food");
homeContent.append(homeImage);
mainArea.append(homeContent);
}

export default loadHome;