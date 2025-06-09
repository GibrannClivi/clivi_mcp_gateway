# Clivi MCP Gateway

## Project Overview
The Clivi MCP Gateway is a unified gateway that connects MCP servers from Chargebee, HubSpot, and Firebase. It provides a seamless interface for the PX department, Sales, and other initiatives to manage and synchronize data across these platforms.

## Objectives
- Develop a unified MCP client that connects to Chargebee, HubSpot, and Firebase MCP servers.
- Provide a seamless interface for the PX department, Sales, and other initiatives to manage and synchronize data across these platforms.
- Ensure robust error handling, logging, and monitoring for reliable operation.
- Follow best practices for scalability, maintainability, and security.

## Architecture
- **MCP Gateway**: Central component that manages connections to external MCP servers.
- **MCP Clients**: Individual clients for Chargebee, HubSpot, and Firebase, each handling specific API interactions.
- **Unified Interface**: A single client interface for all departments and initiatives to interact with connected services.

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/GibrannClivi/clivi_mcp_gateway.git
   cd clivi_mcp_gateway
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Copy `.env.example` to `.env` and fill in your credentials:
     ```
     CHARGEBEE_SITE=your-test-site
     CHARGEBEE_API_KEY=your-test-api-key
     CHARGEBEE_WEBHOOK_SECRET=your-test-webhook-secret

     HUBSPOT_API_KEY=your-test-api-key
     HUBSPOT_PORTAL_ID=your-test-portal-id

     FIREBASE_PROJECT_ID=your-project-id
     FIREBASE_PRIVATE_KEY=your-private-key
     FIREBASE_CLIENT_EMAIL=your-client-email
     ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

## Usage
- The gateway exposes a health check endpoint at `/health`.
- Additional endpoints and functionality will be added as the project evolves.

## Client Development
- The client will be developed in a separate repository to maintain a clear separation of concerns and allow independent development and deployment.

## Contributing
- Follow the guidelines in `CONTRIBUTING.md` for contributing to this project.

## License
- This project is licensed under the MIT License. See the `LICENSE` file for details. 