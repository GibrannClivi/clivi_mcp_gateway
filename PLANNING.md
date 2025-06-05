# PLANNING.md

## Project Overview
This project leverages TaskMaster MCP for advanced task and session management, following SOLID principles, Screaming Architecture, and strict quality standards.

## Architecture
- **Screaming Architecture**: Folders are named by feature/responsibility, not technical type.
- **Layered/Hexagonal**: Business logic, interfaces, and infrastructure are separated.
- **TaskMaster MCP**: Central engine for task management, session persistence, and progress tracking.
- **pydantic**: Used for all data validation.

## Initial Folder Structure
```
/DrClivi2
|-- planning/           # Architecture docs, design decisions
|-- tasks/              # TaskMaster MCP tasks, session state
|-- core/               # Business logic, use cases
|-- adapters/           # CLI, API, or UI adapters
|-- infrastructure/     # Persistence, external services, MCP integration
|-- tests/              # Unit and integration tests
|-- config/             # Configuration files
|-- scripts/            # Utilities, setup scripts
|-- PLANNING.md         # This file
|-- pyproject.toml      # Project metadata and dependencies
|-- README.md           # Project overview
```

## TaskMaster MCP Integration
- All task/session state is managed via TaskMaster MCP.
- Session start/end, progress, and completion are tracked and persisted.
- Memory MCP is used for context recovery and audit trail.

## Quality Standards
- SOLID, design patterns, and code comments required.
- All code <500 lines/file, with docstrings and why-focused comments.
- Tests and pydantic validation required for all modules.

## Next Steps
- Scaffold folder structure and config files.
- Implement TaskMaster MCP session workflow.
- Add example business logic and test cases. 