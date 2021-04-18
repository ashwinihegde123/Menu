function toggleSubItems(el){
    let subMenu = el.parentElement.lastElementChild;
    if(subMenu.style.display === 'block'){
        subMenu.style.display = 'none';
    }else{
        subMenu.style.display = 'block';
    }
    let navMenu = document.getElementsByClassName('nav-menu')[0];
    for(let i=0; i<navMenu.children.length; i++){
        if(navMenu.children[i].firstElementChild !== el){
            let subMenuToClose = navMenu.children[i].lastElementChild;
            subMenuToClose.style.display = 'none';
        }
    }
}

function alertMenuItemName(el){
    let menuItem = el.parentElement.parentElement.previousElementSibling.innerHTML;
    alert("Name of the menu item: " + menuItem);

}