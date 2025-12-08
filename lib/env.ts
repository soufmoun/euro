// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url().min(1),
  RESEND_API_KEY: z.string().optional(),
  CONTACT_EMAIL: z.string().email().optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// Validate on import
export const env = envSchema.parse(process.env);

// Safe check for client-side
export const clientEnv = {
  NODE_ENV: process.env.NODE_ENV,
} as const;