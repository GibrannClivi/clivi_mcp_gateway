# DrClivi2 Project

This project is architected for advanced task and session management using TaskMaster MCP, following strict SOLID principles, Screaming Architecture, and robust quality standards.

## Features
- TaskMaster MCP integration for task, session, and progress management
- Screaming Architecture folder structure
- pydantic-based data validation
- Automated tests and quality checks
- Context recovery and audit trail via Memory MCP

## Folder Structure
See `PLANNING.md` for details.

## Getting Started
1. Clone the repo and install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Configure TaskMaster MCP and environment variables in `config/` and `.env`.
3. Run the CLI or API adapter to start a session.

## Quality Standards
- SOLID principles, design patterns, and code comments
- All code <500 lines/file, with docstrings and why-focused comments
- Tests and pydantic validation for all modules

## License
MIT 