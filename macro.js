const remote = require('electron').remote
const main = remote.require('./main.js')
fs = require('fs');
concat = require('concat-files');


let button_saveMacro = document.getElementById("saveMacro");
button_saveMacro.addEventListener('click', () => {
	fs.unlink('./scripts/bookmark.html', function (err) {
	  if (err) throw err;
	  console.log('Deletion sucessful bookmark.');
	});		
	fs.unlink('./scripts/bookmark/b.txt', function (err) {
	  if (err) throw err;
	  console.log('Deletion sucessful b.txt');
	});		

	fs.unlink('./scripts/bookmark/d.txt', function (err) {
	  if (err) throw err;
	  console.log('Deletion sucessful d.txt');
	});		
	fs.unlink('./scripts/bookmark2.html', function (err) {
	  if (err) throw err;
	  console.log('Deletion sucessful bookmark2.');
	});			



	let m64 = document.getElementById("m64").value;
	fs.writeFile('./scripts/bookmark/b.txt', m64, function(err) {
    if (err) throw err;
		})
  concat([
    './scripts/bookmark/a.txt',
    './scripts/bookmark/b.txt',
    './scripts/bookmark/c.txt'
  ], './scripts/bookmark.html', function(err) {
    if (err) throw err
    console.log('done bookmark');
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


// run

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
	let n_users = document.getElementById("workers").innerHTML
	n_users= parseInt(n_users )
	console.log(n_users);
	if (n_users <= 10) {
		main.openBat("exec_macro2.bat" + " " + n_users)
	}
})