@echo off

for /l %%x in (1, 1, 10) do (
   	echo creando usuario %%x
   	start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "-CreateProfile" "user%%x"
	start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "--no-remote" "-P" "user%%x" "-new-window" "https://addons.mozilla.org/firefox/downloads/file/1010021/imacros_for_firefox-10.0.2.1450-an+fx-windows.xpi"  
	for /l %%x in (1, 1, 1000000) do (
		rem
	)   

)

