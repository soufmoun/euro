@echo off
echo 🎯 Final EuroBudget Travel Setup...
echo.

cd /d C:\Users\hp\Documents\eurobudget_final

echo 1. Installing dependencies...
call npm install prisma@6.2.0 --save-dev
call npm install @prisma/client@6.2.0

echo.
echo 2. Pulling database schema from Supabase...
call npx prisma db pull

echo.
echo 3. Generating Prisma client...
call npx prisma generate

echo.
echo 4. Creating lib/prisma.ts...
if not exist lib mkdir lib
(
echo import { PrismaClient } from '@prisma/client'
echo.
echo const globalForPrisma = globalThis as unknown as {
echo   prisma: PrismaClient ^| undefined
echo }
echo.
echo export const prisma = globalForPrisma.prisma ?? new PrismaClient({
echo   log: ['query'],
echo })
echo.
echo if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
) > lib\prisma.ts

echo ✅ Created lib/prisma.ts
echo.

echo 5. Testing database connection...
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    console.log('Testing connection to Supabase...');
    
    // Count submissions
    const count = await prisma.contactSubmission.count();
    console.log('✅ Connected! Contact submissions in database:', count);
    
    // List recent submissions
    if (count > 0) {
      const recent = await prisma.contactSubmission.findMany({
        take: 3,
        orderBy: { createdAt: 'desc' }
      });
      
      console.log('\\nRecent submissions:');
      recent.forEach(sub => {
        console.log(\`- \${sub.name} (\${sub.email}): "\${sub.subject}"\`);
      });
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  } finally {
    await prisma.\$disconnect();
  }
}

test();
"

echo.
echo 6. Starting development server...
echo.
echo 🚀 Your app is ready!
echo.
echo Open TWO terminals:
echo.
echo TERMINAL 1: Run development server
echo    npm run dev
echo.
echo TERMINAL 2: Run Prisma Studio (optional)
echo    npx prisma studio
echo.
echo Then visit: http://localhost:3000/contact
echo.
pause