import { betterAuth } from "better-auth";
import { env } from "cloudflare:workers";

export const auth = betterAuth({
    database: env.BND_MAIN_DB,
    emailOTP: {
        enabled: true,
    },
    phoneNumberOTP: {
        enabled: true,
    },
    // OTP configurations would go here (e.g., providers like Twilio/Resend)
});
