import { BaseMCPClient } from './base';
import { config } from '../utils/config';
import * as admin from 'firebase-admin';

export class FirebaseMCPClient implements BaseMCPClient {
  async connect(): Promise<void> {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: config.firebase.projectId,
        privateKey: config.firebase.privateKey,
        clientEmail: config.firebase.clientEmail,
      }),
    });
    console.log('Connected to Firebase MCP server.');
  }

  async disconnect(): Promise<void> {
    await admin.app().delete();
    console.log('Disconnected from Firebase MCP server.');
  }
} 