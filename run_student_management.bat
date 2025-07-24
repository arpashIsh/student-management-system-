@echo off
REM Compile all Java files in src/student/management/system with dependencies
setlocal

REM Set classpath to include jars in lib folder
set CLASSPATH=lib\jcalendar-1.4.jar;lib\rs2xml-1.0.0.jar;.

REM Compile Java files
echo Compiling Java source files...
javac -d out -cp %CLASSPATH% src\student\management\system\*.java

if errorlevel 1 (
    echo Compilation failed.
    pause
    exit /b 1
)

REM Run the main class
echo Running the Student Management System...
java -cp out;%CLASSPATH% student.management.system.Main_class

endlocal
