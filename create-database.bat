@echo off
echo 🗄️  Creating EuroBudget Travel Database in Supabase...
echo.

cd /d C:\Users\hp\Documents\eurobudget_final

echo 1. Checking configuration...
if not exist .env.local (
    echo ❌ ERROR: .env.local not found!
    echo Create .env.local with your Supabase DATABASE_URL
    pause
    exit /b 1
)

if not exist prisma\schema.prisma (
    echo ❌ ERROR: prisma/schema.prisma not found!
    echo Create the schema file first
    pause
    exit /b 1
)

echo ✅ Configuration OK
echo.

echo 2. Installing Prisma 6 (simpler)...
npm uninstall prisma @prisma/client 2>nul
npm install prisma@6.2.0 --save-dev
npm install @prisma/client@6.2.0

echo ✅ Prisma 6 installed
echo.

echo 3. Generating Prisma client...
npx prisma generate

if errorlevel 1 (
    echo ❌ Failed to generate Prisma client
    echo Check prisma/schema.prisma file
    pause
    exit /b 1
)

echo ✅ Prisma client generated
echo.

echo 4. Creating tables in Supabase...
echo This will create ContactSubmission and AnalyticsEvent tables
echo.
npx prisma db push

if errorlevel 1 (
    echo ❌ Failed to create database tables!
    echo.
    echo Common issues:
    echo 1. Wrong DATABASE_URL in .env.local
    echo 2. Wrong Supabase password
    echo 3. Internet connection problem
    echo.
    echo Check your .env.local file:
    type .env.local
    echo.
    pause
    exit /b 1
)

echo ✅ Database tables created successfully!
echo.

echo 5. Creating sample data...
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createSampleData() {
  try {
    console.log('Creating sample contact submissions...');
    
    const samples = [
      {
        name: 'Travel Enthusiast',
        email: 'traveler@eurobudget.com',
        subject: 'Europe Summer Trip Planning',
        message: 'Hi! I need help planning a 3-week summer trip across Europe. Best countries to visit?',
        inquiryType: 'travel-advice'
      },
      {
        name: 'Budget Backpacker',
        email: 'backpacker@example.com',
        subject: 'Hostel Recommendations',
        message: 'Looking for affordable hostels in Berlin, Prague, and Budapest.',
        inquiryType: 'general-inquiry'
      },
      {
        name: 'First Time Visitor',
        email: 'firsttimer@example.com',
        subject: 'First Europe Trip Advice',
        message: 'Never been to Europe before. Where should I start? How much budget for 2 weeks?',
        inquiryType: 'travel-advice'
      }
    ];

    for (const data of samples) {
      await prisma.contactSubmission.create({ data });
      console.log('   ✅ Created: ' + data.name);
    }

    const count = await prisma.contactSubmission.count();
    console.log('\\n📊 Total submissions in database: ' + count);
    
    console.log('\\n🎉 Sample data created!');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.\$disconnect();
  }
}

createSampleData();
"

echo.
echo 6. Opening Prisma Studio to verify...
start cmd /k "npx prisma studio"

echo.
echo ===========================================
echo 🎉 DATABASE CREATION COMPLETE!
echo ===========================================
echo.
echo ✅ Created in Supabase:
echo    - ContactSubmission table
echo    - AnalyticsEvent table
echo    - Sample data (3 submissions)
echo.
echo 🔍 To verify:
echo    1. Prisma Studio: http://localhost:5555
echo    2. Supabase Dashboard: app.supabase.com
echo    3. Run: npm run dev
echo.
echo 🚀 Start your app: npm run dev
echo    Then visit: http://localhost:3000/contact
echo.
pause