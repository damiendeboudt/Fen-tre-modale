document.getElementById("top")

// script dès que la page est chargée entierement
document.addEventListener('DOMContentLoaded', function() {
    win.style.visibility = "visible"
    win.style.width = "100vw"
    win.style.height = "100vh"
    win.style.zIndex = "1";
});
let win = document.getElementById("top")


document.getElementById("close").addEventListener("click", ()=>{
    win.style.visibility = "hidden"
})

