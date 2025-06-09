import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  chargebee: {
    site: process.env.CHARGEBEE_SITE,
    apiKey: process.env.CHARGEBEE_API_KEY,
    webhookSecret: process.env.CHARGEBEE_WEBHOOK_SECRET,
  },
  hubspot: {
    apiKey: process.env.HUBSPOT_API_KEY,
    portalId: process.env.HUBSPOT_PORTAL_ID,
  },
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  },
  nodeEnv: process.env.NODE_ENV,
  logLevel: process.env.LOG_LEVEL || 'info',
}; 