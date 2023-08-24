/*Control de menu*/
window.addEventListener("scroll", function(){
	var header =document.querySelector("header")
	header.classList.toggle("abajo",window.scrollY>0)
})
window.addEventListener("load", function() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    });