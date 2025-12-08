@echo off
echo ========================================
echo   EuroBudget Travel - Environment Setup
echo ========================================
echo.

REM Check if we're in the right directory
if not exist package.json (
    echo ❌ ERROR: Not in project root!
    echo Run this script from: C:\Users\hp\Documents\eurobudget_final
    pause
    exit /b 1
)

echo 🔍 Checking environment files...
echo.

REM 1. Check .env.local
if exist .env.local (
    echo ✅ .env.local already exists
    echo    Location: %cd%\.env.local
) else (
    echo 📝 Creating .env.local from template...
    if exist .env.example (
        copy .env.example .env.local
        echo ✅ Created .env.local from .env.example
    ) else (
        echo ❌ .env.example not found. Creating basic .env.local...
        (
            echo # Supabase Database
            echo DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_REF.supabase.co:5432/postgres"
            echo.
            echo # Email Service (Resend)
            echo RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            echo CONTACT_EMAIL="your-email@gmail.com"
        ) > .env.local
        echo ✅ Created basic .env.local
    )
)

echo.

REM 2. Check .gitignore
echo 🔒 Checking .gitignore for security...
if exist .gitignore (
    findstr /C:".env.local" .gitignore >nul
    if errorlevel 1 (
        echo ⚠️  Adding .env.local to .gitignore...
        echo. >> .gitignore
        echo # Environment variables >> .gitignore
        echo .env.local >> .gitignore
        echo ✅ Added .env.local to .gitignore
    ) else (
        echo ✅ .env.local is already in .gitignore
    )
) else (
    echo ⚠️  Creating .gitignore file...
    (
        echo # Environment variables
        echo .env.local
        echo .env
        echo *.env
        echo.
        echo # Node.js
        echo node_modules/
        echo.
        echo # Next.js
        echo .next/
        echo out/
    ) > .gitignore
    echo ✅ Created .gitignore
)

echo.

REM 3. Instructions
echo 📋 NEXT STEPS:
echo.
echo 1. EDIT your .env.local file with real credentials:
echo    - Open: %cd%\.env.local
echo    - Add your Supabase DATABASE_URL
echo    - Add your Resend API key (optional)
echo.
echo 2. Install dependencies:
echo    npm install
echo.
echo 3. Setup database:
echo    npx prisma db push
echo.
echo 4. Run development server:
echo    npm run dev
echo.
echo 5. Open browser:
echo    http://localhost:3000
echo.

REM 4. Offer to open .env.local
echo Do you want to open .env.local now? (Y/N)
set /p choice=
if /i "%choice%"=="Y" (
    start notepad .env.local
    echo ✅ Opening .env.local in Notepad...
)

echo.
echo 🎉 Setup complete! Follow the steps above.
pause