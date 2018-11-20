const remote = require('electron').remote
const main = remote.require('./main.js')
fs = require('fs');
concat = require('concat-files');

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
	// borrar bookmark2 
	fs.unlink('./scripts/bookmark2.html', function (err) {
	  if (err) throw err;
	  console.log('Deletion sucessful bookmark2.');
	});	

	// Crear html de espera	
  concat([
    './scripts/esperarMacro.html'
  ], './scripts/bookmark2.html', function(err) {
    if (err) throw err
    console.log('done bookmark2');
  });


	let n_users = document.getElementById("n_users").innerHTML
	n_users= parseInt(n_users )
	console.log(n_users);
	if (n_users <= 10) {
		main.openBat("exec_macro.bat" + " " + n_users)
	}
})

let button_saveMacro = document.getElementById("saveMacro");
button_saveMacro.addEventListener('click', () => {		

	fs.unlink('./scripts/bookmark/d.txt', function (err) {
	  if (err) throw err;
	  console.log('Deletion sucessful d.txt');
	});		
	fs.unlink('./scripts/bookmark2.html', function (err) {
	  if (err) throw err;
	  console.log('Deletion sucessful bookmark2.');
	});			


	let m64b = document.getElementById("m64b").value;
	fs.writeFile('./scripts/bookmark/d.txt', m64b, function(err) {
    if (err) throw err;
		})
  concat([
    './scripts/bookmark/a.txt',
    './scripts/bookmark/d.txt',
    './scripts/bookmark/c.txt'
  ], './scripts/bookmark2.html', function(err) {
    if (err) throw err
    console.log('done bookmark2');
  });
})