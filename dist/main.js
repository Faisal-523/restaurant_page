!function(){function e(e){return rButton=document.createElement("button"),rButton.setAttribute("id",e.name),rButton.setAttribute("class","nav-button"),rButton.textContent=e.name,rButton.addEventListener("click",(()=>alert(`${e.name} button clicked`))),rButton}content=document.querySelector(".content"),header=document.createElement("div"),mainArea=document.createElement("div"),footer=document.createElement("div"),header.setAttribute("class","header"),rName=document.createElement("h1"),rName.textContent="Good Food Inc",header.append(rName),rNav=document.createElement("nav"),rNav.setAttribute("class","nav"),rNav.append(e({name:"Home"})),rNav.append(e({name:"Menu"})),rNav.append(e({name:"About us"})),header.append(rNav),content.append(header),mainArea.setAttribute("class","main-area"),homeImage=document.createElement("img"),homeImage.setAttribute("src","../assets/main_food.jpg"),homeImage.setAttribute("id","main-food"),mainArea.append(homeImage),content.append(mainArea),footer.setAttribute("class","footer"),footText=document.createElement("h4"),footText.textContent="Good Food Inc, 2020",footer.append(footText),content.append(footer)}();