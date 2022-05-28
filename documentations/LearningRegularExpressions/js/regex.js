const submenus = document.querySelectorAll("ul li ul")


function hideMenus(){
    for(let i=0; i< submenus.length; i++){
        submenus[i].className = "hide-menu";
    }
}
hideMenus();

const dropMenu = document.querySelectorAll(".dropmenu");
for (let i = 0; i< dropMenu.length;i++){
    dropMenu[i].addEventListener("click",function(e){
        e.preventDefault();
        var thisMenu = this.parentNode.querySelector("li ul")

        if(thisMenu.classList.contains("hide-menu")){
            hideMenus();
            thisMenu.className ="show-menu";
            }else {
            thisMenu.className ="hide-menu"                
            }
    })
}