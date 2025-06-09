import { BaseMCPClient } from './base';
import { config } from '../utils/config';
import * as HubSpot from '@hubspot/api-client';

export class HubSpotMCPClient implements BaseMCPClient {
  private client: HubSpot.Client;

  constructor() {
    this.client = new HubSpot.Client({ accessToken: config.hubspot.apiKey });
  }

  async connect(): Promise<void> {
    // HubSpot client is initialized in the constructor
    console.log('Connected to HubSpot MCP server.');
  }

  async disconnect(): Promise<void> {
    // No explicit disconnect needed for HubSpot
    console.log('Disconnected from HubSpot MCP server.');
  }
} 