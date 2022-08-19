const hamburger= document.querySelector("#hamburger")
const close_btn= document.querySelector("#close")
const nav_links= document.querySelector(".nav-links")
const avatar= document.querySelector("#avatar")

function showNav(){
	nav_links.classList.toggle("active")
	close_btn.classList.toggle("show")
	hamburger.classList.toggle("hide")
	avatar.classList.toggle("displace")
	
}
function hideNav(){
	avatar.classList.toggle("displace")
	hamburger.classList.toggle("hide")
	nav_links.classList.toggle("active")
}

hamburger.addEventListener("click",showNav)
close_btn.addEventListener("click",showNav)