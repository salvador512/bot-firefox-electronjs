const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url  = require('url')

let win

function createWindow(){
	win = new BrowserWindow ({width: 1300, height:768})
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))

	// win.webContents.openDevTools()
}

exports.openWindow = () => {
	let newWin = new BrowserWindow ({width: 400, height:200})
	newWin.loadURL(url.format({
		pathname: path.join(__dirname, 'enupal.html'),
		protocol: 'file',
		slashes: true
	}))
}

exports.openBat = function(script) {
	require('child_process').exec(__dirname + "\\scripts\\" + script, function (err, stdout, stderr) {
	    if (err) {
	        // Ooops.
	        // console.log(stderr);
	        return console.log(err);
	    }

	    // Done.
	    console.log(stdout);
	});	
}

app.on('ready', createWindow)