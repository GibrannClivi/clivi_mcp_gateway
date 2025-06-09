import { MCPServer } from '../../core/MCPServer';
import { HubSpotMCPContext } from '../../contexts/HubSpotMCPContext';
import { FirebaseMCPContext } from '../../contexts/FirebaseMCPContext';
import { normalizeChargebeePayload } from '../../infrastructure/chargebee';

const hubspotContext = new HubSpotMCPContext();
const firebaseContext = new FirebaseMCPContext();
const mcpServer = new MCPServer(hubspotContext, firebaseContext);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const event = normalizeChargebeePayload(req.body);
  await mcpServer.handle(event);
  res.status(200).json({ status: 'ok' });
} 