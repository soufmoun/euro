@echo off
echo ===========================================
echo   EuroBudget Travel - Database Setup
echo ===========================================
echo.

cd /d C:\Users\hp\Documents\eurobudget_final

echo 🔍 Checking prerequisites...
echo.

REM 1. Check if in correct directory
if not exist package.json (
    echo ❌ ERROR: Not in project root!
    echo Run from: C:\Users\hp\Documents\eurobudget_final
    pause
    exit /b 1
)

REM 2. Check .env.local exists
if not exist .env.local (
    echo ❌ ERROR: .env.local not found!
    echo.
    echo 📝 CREATE .env.local file with:
    echo DATABASE_URL="postgresql://postgres:YOUR_REAL_PASSWORD@db.YOUR_PROJECT_REF.supabase.co:5432/postgres"
    echo.
    echo 💡 Get your DATABASE_URL from:
    echo 1. Login to supabase.com
    echo 2. Select your project
    echo 3. Click Settings (gear icon)
    echo 4. Click Database in left menu
    echo 5. Copy "Connection URI"
    echo.
    echo After creating .env.local, run this script again.
    echo.
    pause
    exit /b 1
)

echo ✅ .env.local exists
echo ⚠️  Make sure it contains your REAL Supabase DATABASE_URL
echo.

REM 3. Create prisma folder if needed
echo 📁 Setting up Prisma...
if not exist prisma mkdir prisma

REM 4. Create/update schema.prisma
echo 📄 Creating schema.prisma...
(
echo // prisma/schema.prisma
echo generator client {
echo   provider = "prisma-client-js"
echo }
echo.
echo datasource db {
echo   provider = "postgresql"
echo   url      = env("DATABASE_URL")
echo }
echo.
echo model ContactSubmission {
echo   id           String   @id @default(cuid())
echo   name         String
echo   email        String
echo   subject      String
echo   message      String
echo   inquiryType  String   @default("general")
echo   status       String   @default("pending")
echo   createdAt    DateTime @default(now())
echo   updatedAt    DateTime @updatedAt
echo.  
echo   @@index([email])
echo   @@index([createdAt])
echo   @@index([status])
echo }
echo.
echo model AnalyticsEvent {
echo   id        String   @id @default(cuid())
echo   event     String
echo   data      Json
echo   timestamp DateTime
echo   userId    String?
echo   sessionId String?
echo   ip        String
echo   userAgent String
echo   createdAt DateTime @default(now())
echo.  
echo   @@index([event])
echo   @@index([timestamp])
echo   @@index([userId])
echo   @@index([sessionId])
echo }
) > prisma\schema.prisma

echo ✅ Schema file created
echo.

REM 5. Install Prisma if needed
echo 📦 Installing Prisma...
call npm install @prisma/client 2>nul
call npm install prisma --save-dev 2>nul

REM 6. Generate Prisma client
echo 🔧 Generating Prisma client...
call npx prisma generate

if errorlevel 1 (
    echo ❌ Prisma generate failed!
    echo Check: prisma/schema.prisma
    pause
    exit /b 1
)

echo ✅ Prisma client generated
echo.

REM 7. Push to database
echo 🚀 Pushing schema to Supabase...
echo This will create tables in your Supabase database.
echo.
call npx prisma db push

if errorlevel 1 (
    echo ❌ Database push failed!
    echo.
    echo 💡 Common issues:
    echo 1. Wrong DATABASE_URL in .env.local
    echo 2. Wrong Supabase password
    echo 3. Internet connection problem
    echo 4. Supabase project paused
    echo.
    echo Check your .env.local file!
    pause
    exit /b 1
)

echo ✅ Database tables created in Supabase!
echo.

REM 8. Create sample data
echo 📊 Creating sample data...
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function setup() {
  try {
    console.log('Creating sample contact submissions...');
    
    const submissions = [
      {
        name: 'Travel Enthusiast',
        email: 'traveler@example.com',
        subject: 'Europe Summer Trip',
        message: 'Planning a 3-week trip across Europe. Need budget tips!',
        inquiryType: 'travel-advice'
      },
      {
        name: 'Backpacker Mike',
        email: 'mike@example.com',
        subject: 'Hostel Recommendations',
        message: 'Looking for best hostels in Berlin and Amsterdam.',
        inquiryType: 'general-inquiry'
      },
      {
        name: 'First Timer',
        email: 'newbie@example.com',
        subject: 'First Europe Trip',
        message: 'Never been to Europe. Where should I start?',
        inquiryType: 'travel-advice'
      }
    ];

    let created = 0;
    for (const data of submissions) {
      try {
        await prisma.contactSubmission.create({ data });
        created++;
        console.log('✅ Created: ' + data.name);
      } catch (err) {
        // Skip if already exists
      }
    }

    const count = await prisma.contactSubmission.count();
    console.log('\\n📊 Total submissions in database: ' + count);
    
    if (created > 0) {
      console.log('🎉 Created ' + created + ' sample submissions');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.\$disconnect();
  }
}

setup();
"

echo.
echo ===========================================
echo 🎉 DATABASE SETUP COMPLETE!
echo ===========================================
echo.
echo ✅ What was done:
echo    1. Created Prisma schema
echo    2. Generated Prisma client
echo    3. Created tables in Supabase
echo    4. Added sample data
echo.
echo 🔍 To verify:
echo    1. Run: npx prisma studio
echo    2. Visit: http://localhost:5555
echo    3. Or check Supabase dashboard
echo.
echo 🚀 To start your app:
echo    1. Run: npm run dev
echo    2. Visit: http://localhost:3000/contact
echo    3. Test the contact form
echo.
pause