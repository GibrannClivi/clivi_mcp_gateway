export interface BaseMCPClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  // Add additional methods as needed for your specific use cases
} 