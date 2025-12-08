@echo off
echo Fixing Prisma 7+ Configuration...
echo.

cd /d C:\Users\hp\Documents\eurobudget_final

echo 1. Updating prisma/schema.prisma...
(
echo // prisma/schema.prisma
echo generator client {
echo   provider = "prisma-client-js"
echo }
echo.
echo datasource db {
echo   provider = "postgresql"
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

echo ✅ Updated schema.prisma
echo.

echo 2. Creating prisma.config.ts...
(
echo import { defineConfig } from '@prisma/client'
echo.
echo export default defineConfig({
echo   datasource: {
echo     postgresql: {
echo       url: process.env.DATABASE_URL!
echo     }
echo   }
echo })
) > prisma.config.ts

echo ✅ Created prisma.config.ts
echo.

echo 3. Creating lib/prisma.ts...
if not exist lib mkdir lib
(
echo import { PrismaClient } from '@prisma/client'
echo.
echo const prismaClientSingleton = () => {
echo   return new PrismaClient({
echo     datasourceUrl: process.env.DATABASE_URL,
echo   })
echo }
echo.
echo declare global {
echo   var prisma: undefined | ReturnType<typeof prismaClientSingleton>
echo }
echo.
echo const prisma = globalThis.prisma ?? prismaClientSingleton()
echo.
echo export default prisma
echo.
echo if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
) > lib\prisma.ts

echo ✅ Created lib/prisma.ts
echo.

echo 4. Installing required packages...
call npm install @prisma/client
echo.

echo 5. Generating Prisma client...
call npx prisma generate

if errorlevel 1 (
    echo ❌ Prisma generate failed!
    pause
    exit /b 1
)

echo ✅ Prisma client generated
echo.

echo 6. Pushing schema to database...
call npx prisma db push

if errorlevel 1 (
    echo ❌ Database push failed!
    echo Check your DATABASE_URL in .env.local
    pause
    exit /b 1
)

echo ✅ Database setup complete!
echo.
echo 🎉 Prisma 7+ is now configured correctly!
echo.
pause