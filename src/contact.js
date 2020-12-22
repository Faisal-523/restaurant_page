//import { createDiv, initialSetup } from "./initial";

import {clearDiv, updateCurrentTab, createDiv} from './initial.js'


function loadContact(){
    let mainArea = document.getElementById('mainArea');
    clearDiv(mainArea);
    updateCurrentTab('Contact');

    let address = createDiv('div');
    address.textContent = "Address"
    address.classList.add('homeScript');
    let line1 = createDiv('div');
    line1.textContent = "185 Cedar St";
    line1.classList.add('homeText');
    address.append(line1);
    mainArea.append(address);
}

export default loadContact;