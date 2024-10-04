// checkboxEl is responsible for navBar OPen and Close.  invisible checkbox got selected when navbarIconButton are clicked.

let navbarCheckboxEl = document.getElementById("navi-toggle");
let navItemsList = document.getElementsByClassName("navigation__item");
let navItemsArr = [...navItemsList]; //htmlElements list to Array

navItemsArr.map((eachitem) => {
  eachitem.onclick = function () {
    // Uncheck the checkbox when a link is clicked
    navbarCheckboxEl.checked = false;
  };
});
