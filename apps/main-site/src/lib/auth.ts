import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db"; // Assuming db is initialized elsewhere, will create if missing

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // Using PostgreSQL as per tech stack assumptions
    }),
    emailOTP: {
        enabled: true,
    },
    phoneNumberOTP: {
        enabled: true,
    },
    // OTP configurations would go here (e.g., providers like Twilio/Resend)
});
