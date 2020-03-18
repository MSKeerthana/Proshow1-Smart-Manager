var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
function inputLength(){
	return input.value.length;
} 
function listLength(){
	return item.length;
}
	var tasks = [];
	function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	var val = input.value;
	tasks.push(val);
	console.log(tasks);
	input.value = ""; //Reset text input field

	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
	localStorage.setItem("listitems", JSON.stringify(tasks));
}

function storevalues()
{
	console.log(localStorage.getItem("listitems"))
	var tasks = localStorage.getItem("listitems")
	var taskdisplay = JSON.parse(tasks);
	console.log(taskdisplay.length)
	console.log("task display =>"+ taskdisplay);
     ul = document.createElement('ul');
	 document.getElementById('listItems').appendChild(ul);
	 taskdisplay.forEach(function (item) {
	 var x = document.createElement("INPUT");
	 x.setAttribute("type", "checkbox");
	 x.id = "check";
	 ul.appendChild(x);
     let li = document.createElement('li');
     ul.appendChild(li);
     li.innerHTML += item;
	});
}
function assign()
{
	alert("The Tasks has been assigned! Redirecting to original page...");
	redirect();
}
function redirect() {
	setTimeout(function(){ window.location.href="login.html" }, 3000);
  }

function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}
enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function display()
{
	document.body.innerHTML(li);
}
function statusdashboard()
{
	console.log(localStorage.getItem("listitems"))
	var tasks = localStorage.getItem("listitems")
	var taskdisplay = JSON.parse(tasks);
	console.log(taskdisplay.length)
	console.log("task display =>"+ taskdisplay);
	var tasklength = taskdisplay.length;
	var completed = (document.querySelectorAll('input[type="checkbox"]:checked').length)
	var comper = (completed/tasklength)*100;
	var pendingcount = tasklength-completed;
	console.log(comper,pendingcount);
	localStorage.setItem("comper",comper);
	localStorage.setItem("pendingcount",pendingcount);
	console.log(localStorage.getItem("comper"));
	console.log(localStorage.getItem("pendingcount"));
	alert("Tasks has been updated.Redirecting to login..")
	redirect();
}
function viewstatus()
{
	var label1 = document.createElement("label");
	label1.innerText="Percentage Completion";
	label1.id="l";
	document.body.appendChild(label1);
	var btn = document.createElement("BUTTON");   // Create a <button> element
	btn.innerHTML = localStorage.getItem("comper");                   // Insert text
	document.body.appendChild(btn);
	btn.id="b";
	var br = document.createElement("br");
	document.body.appendChild(br);
	var label2 = document.createElement("label");
	label2.innerText="Pending Tasks";
	label2.id="l";
	document.body.appendChild(label2);
	var btn1 = document.createElement("BUTTON");
	btn1.innerHTML = localStorage.getItem("pendingcount"); 
	document.body.appendChild(btn1)
	btn1.id="b";
	console.log(localStorage.getItem("comper"));
	console.log(localStorage.getItem("pendingcount"));
}