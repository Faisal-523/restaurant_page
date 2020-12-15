import { clearDiv, updateCurrentTab } from "./initial";

function loadMenu(){
    let content = document.querySelector('.content');
    let buttons = Array.from(content.querySelectorAll('.nav-button'));
    let mainArea = document.getElementById('mainArea');

    clearDiv(mainArea);
    updateCurrentTab('Menu');

}

export default loadMenu;