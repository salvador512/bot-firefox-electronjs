@echo off
SET /A USERS = 0
IF NOT "%1"=="" (
	SET /A USERS = %1   
)

for /l %%x in (1, 1, %USERS%) do (
   	echo Ejecutando macro 2 en user%%x
	start "" "C:\Program Files\Mozilla Firefox\firefox.exe"  "-no-remote"  "-P" "user%%x" "-new-tab" "%cd%\scripts\bookmark2.html"   	


)


