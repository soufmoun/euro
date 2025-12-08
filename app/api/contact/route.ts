// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';  // Update this import

export async function POST(request: NextRequest) {
  console.log('🔵 CONTACT API: POST request received');
  
  try {
    const body = await request.json();
    console.log('🔵 CONTACT API: Data received:', body);
    
    // Validate required fields
    const { name, email, subject, message, inquiryType = 'general' } = body;
    
    if (!name || !email || !subject || !message) {
      console.log('❌ CONTACT API: Missing required fields');
      return NextResponse.json(
        { 
          success: false,
          message: 'Missing required fields',
        },
        { status: 400 }
      );
    }
    
    // Save to database
    console.log('💾 Saving to Supabase database...');
    
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        message,
        inquiryType,
        status: 'pending'
      }
    });
    
    console.log('✅ Saved to database with ID:', submission.id);
    
    // Return success
    return NextResponse.json({
      success: true,
      message: 'Message received successfully! We\'ll get back to you within 24 hours.',
      submissionId: submission.id,
      data: {
        name,
        email,
        subject,
        messageLength: message.length,
        receivedAt: submission.createdAt
      }
    }, { status: 200 });
    
  } catch (error) {
    console.error('❌ CONTACT API: Error processing request:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process your request',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}