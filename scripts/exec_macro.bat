@echo off
SET /A USERS = 0
IF NOT "%1"=="" (
	SET /A USERS = %1   
)

for /l %%x in (1, 1, %USERS%) do (
   	echo Ejecutando macro 1 en user%%x
	start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "-no-remote" "-P" "user%%x" "-new-window" "%cd%\scripts\bookmark.html"   	
   	rem timeout 2

)


