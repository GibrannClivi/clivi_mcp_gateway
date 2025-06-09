import { SubscriptionEvent } from '../models/SubscriptionEvent';
import { HubSpotMCPContext } from '../contexts/HubSpotMCPContext';
import { FirebaseMCPContext } from '../contexts/FirebaseMCPContext';

export class MCPServer {
  constructor(
    private hubspotContext: HubSpotMCPContext,
    private firebaseContext: FirebaseMCPContext
  ) {}

  async handle(event: SubscriptionEvent) {
    // Dispatch to HubSpot
    await this.hubspotContext.receive(event);
    // Dispatch to Firebase
    await this.firebaseContext.receive(event);
    // TODO: Add logging, error handling, retries
  }
} 