@echo off
start "ParaView - HURS" cmd /k call "%~dp0run-hurs.bat"
start "ParaView - TAS" cmd /k call "%~dp0run-tas.bat"
start "ParaView - UVW" cmd /k call "%~dp0run-uvw.bat"