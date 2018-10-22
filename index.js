const remote = require('electron').remote
const main = remote.require('./main.js')
fs = require('fs');

let button_CreateUsers = document.getElementById("CreateUsers");
button_CreateUsers.addEventListener('click', () => {
	main.openBat("create_users.bat")
})

let button_openManager = document.getElementById("OpenManager");
button_openManager.addEventListener('click', () => {
	main.openBat("open_manager.bat")
})

let button_execMacro = document.getElementById("execMacro");
button_execMacro.addEventListener('click', () => {
	let n_users = document.getElementById("n_users").innerHTML
	n_users= parseInt(n_users )
	console.log(n_users);
	if (n_users <= 10) {
		main.openBat("exec_macro.bat" + " " + n_users)
	}
})

let button_execMacro2 = document.getElementById("execMacro2");
button_execMacro2.addEventListener('click', () => {
	let n_users = document.getElementById("n_users").innerHTML
	n_users= parseInt(n_users )
	console.log(n_users);
	if (n_users <= 10) {
		main.openBat("exec_macro2.bat" + " " + n_users)
	}
})