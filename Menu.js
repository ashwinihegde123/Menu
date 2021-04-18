function toggleSubItems(el){
    let subMenu = el.parentElement.lastElementChild;
    subMenu.classList.toggle('submenu-open');
       
    let navMenu = document.getElementsByClassName('nav-menu')[0];
    for(let i=0; i<navMenu.children.length; i++){
        if(navMenu.children[i].firstElementChild !== el){
            let subMenuToClose = navMenu.children[i].lastElementChild;
            subMenuToClose.classList.remove('submenu-open')
        }
    }
}

function alertMenuItemName(el){
    let menuItem = el.parentElement.parentElement.previousElementSibling.innerHTML;
    alert("Name of the menu item: " + menuItem);

}