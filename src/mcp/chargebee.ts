import { BaseMCPClient } from './base';
import { config } from '../utils/config';
import * as Chargebee from 'chargebee';

export class ChargebeeMCPClient implements BaseMCPClient {
  async connect(): Promise<void> {
    Chargebee.configure({ site: config.chargebee.site, api_key: config.chargebee.apiKey });
    console.log('Connected to Chargebee MCP server.');
  }

  async disconnect(): Promise<void> {
    // No explicit disconnect needed for Chargebee
    console.log('Disconnected from Chargebee MCP server.');
  }
} 