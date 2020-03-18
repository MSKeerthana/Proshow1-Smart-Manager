function myFunction()
{
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    }
}
function showoptions() {
    var x = document.getElementById("options");
    if (x.style.display === "none") {
        x.style.display = "block";
        } 
    else{
         x.style.display = "none";
        }
}
function newElement()
{
    alert("you will be redirected to create tasks...");
    window.open("checklist.html");
}