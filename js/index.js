let navList = document.querySelector(".nList");
let phoneNav = document.querySelector("header .Container nav");

navList.onclick = function () {
	navList.classList.toggle("navList");
	phoneNav.classList.toggle("exbend");
};
