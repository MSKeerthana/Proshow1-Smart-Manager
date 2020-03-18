function validate()
{
    var x = document.getElementById("fname").value;
    console.log(x);
    sessionStorage.setItem("managername",x);
    console.log(sessionStorage.getItem("managername"));
    var flag = false;
    var y = document.getElementById("pswd").value;
    console.log(y);
    if (x == "keerthana" && y == "keer2014") 
    {
        alert("login successful");
        window.open("manager.html");
        return true;
    }
    if(x == "reportee1" && y == "keer2014") 
    {
        alert("login successful");
        window.open("reportee.html");
        return true;
    }
    else
    {
        alert("check the credentials");
        return false;
    }
}
function reporteecount()
{
    var anchors = document.getElementById("myDropdown").getElementsByTagName("a");
    console.log(anchors);
    return anchors.length;
}
function setelements()
{
    console.log(sessionStorage.getItem("managername"));
    myyFunction()
    //document.getElementById("background").onload = function() {myFunction()};
}
function myyFunction() {
    var values = sessionStorage.getItem("managername");
    document.getElementById("name").value = values;
    document.getElementById("count").value = reporteecount();
}