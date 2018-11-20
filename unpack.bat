@echo off

echo  -  Despaquetando Scripts
echo *****************************
mkdir %LOCALAPPDATA%\Programs\Firefox-Bot-desktop\scripts
robocopy /S scripts %LOCALAPPDATA%\Programs\Firefox-Bot-desktop\scripts
:choice
set /P c=Desea crear las sesiones de firefox [Y/N]?
if /I "%c%" EQU "Y" goto :createUsers
if /I "%c%" EQU "N" goto :salida
goto :choice


:createUsers
echo  -  Creando Perfiles de Firfox
echo **********************************
for /l %%x in (1, 1, 5) do (
   	echo creando usuario %%x
   	start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "-CreateProfile" "user%%x"
	start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "--no-remote" "-P" "user%%x" "-new-window" "https://addons.mozilla.org/firefox/downloads/file/1010021/imacros_for_firefox-10.0.2.1450-an+fx-windows.xpi"  
	for /l %%x in (1, 1, 1000000) do (
		rem
	)   

)
echo Primeros 5 perfiles creados
pause

echo  -  Creando Perfiles de Firfox
echo **********************************
for /l %%x in (5, 1, 10) do (
   	echo creando usuario %%x
   	start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "-CreateProfile" "user%%x"
	start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "--no-remote" "-P" "user%%x" "-new-window" "https://addons.mozilla.org/firefox/downloads/file/1010021/imacros_for_firefox-10.0.2.1450-an+fx-windows.xpi"  
	for /l %%x in (1, 1, 1000000) do (
		rem
	)   
)
echo
echo Todos los perfiles creados
pause
exit


:salida

echo  -  Proceso Terminado
echo **********************************
pause 
exit