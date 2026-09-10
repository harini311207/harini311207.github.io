@echo off
setlocal
set PATH=%PATH%;C:\Users\LENOVO\AppData\Local\Programs\Git\cmd;C:\Users\LENOVO\AppData\Local\Programs\gh\bin
echo =========================================================================
echo HARINI N PORTFOLIO - 1-CLICK GITHUB PAGES DEPLOYMENT
echo =========================================================================
echo.
echo Step 1: Checking GitHub authentication...
gh auth status >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Please log into GitHub in the browser window that opens...
    gh auth login -w -p https
)

echo.
echo Step 2: Ensuring repository exists on GitHub...
gh repo create harini311207.github.io --public --source=. --remote=origin --push >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Pushing code to origin main...
    git push -u origin main
)

echo.
echo Step 3: Enabling GitHub Pages...
gh repo edit --enable-pages --pages-branch main >nul 2>&1

echo.
echo =========================================================================
echo DEPLOYMENT COMPLETE!
echo Your portfolio is live at: https://harini311207.github.io/
echo =========================================================================
pause
