const subMenus = document.querySelectorAll(".chapter > ul > li > ul")

function hideMenus(){
    for(let i=0;i<subMenus.length;i++){
        subMenus[i].className = "hide-menu";
    }
}
hideMenus();

const menuLink = document.querySelectorAll(".dropDown")
for( let i=0;i<menuLink.length;i++){
    menuLink[i].addEventListener('click',function(e){
        e.preventDefault();
        const thisMenu = this.parentNode.querySelector('li ul');
        if(thisMenu.classList.contains('hide-menu')){
            hideMenus();
            thisMenu.className = 'show-menu'
        } else {
            thisMenu.className = 'hide-menu'
        }
    })
}

// Try to make this a toggle
function showMenus(){
    for(let i=0; i< subMenus.length;i++){
        subMenus[i].className = "show-menu";
    }
}
const allMenus = document.querySelector("#openMenus");
allMenus.addEventListener("click",showMenus);