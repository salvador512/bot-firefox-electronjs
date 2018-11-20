@echo off
SET /A USERS = 0
IF NOT "%1"=="" (
	SET /A USERS = %1  
)

for /l %%x in (1, 1, %USERS%) do (
   	echo Ejecutando macro 1 en user%%x
	start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "-no-remote" "-P" "user%%x" "-new-tab" "-url" "%cd%\scripts\bookmark.html" "-new-tab" "-url" "%cd%\scripts\bookmark2.html"  	
   	rem %SystemRoot%\System32\timeout.exe /t 2
	rem for /l %%x in (1, 1, 1000000) do (
	rem 	rem
	rem )   	

)


