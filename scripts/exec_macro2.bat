@echo off
SET /A USERS = 0
IF NOT "%1"=="" (
	SET /A USERS = %1   
)

for /l %%x in (1, 1, %USERS%) do (
   	echo Ejecutando macro 2 en user%%x
	rem start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "-P" "user%%x" "-new-tab" "%cd%\scripts\bookmark2.html"   	
	start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "-P" "user%%x" "-remote" "openURL(%cd%\scripts\bookmark2.html, new-tab)"
	for /l %%x in (1, 1, 1000000) do (
		rem
	) 

)


