import argparse
from core.session import SessionManager

def main():
    """
    CLI entry point for managing TaskMaster MCP sessions.
    Why: Provides a user-friendly interface for session operations.
    """
    parser = argparse.ArgumentParser(description="TaskMaster MCP Session CLI")
    parser.add_argument("command", choices=["start", "progress", "end"], help="Session command")
    parser.add_argument("--session-id", required=True, help="Session ID")
    parser.add_argument("--user", help="User name")
    parser.add_argument("--progress", type=float, help="Progress value (0-100)")
    parser.add_argument("--checkpoint", help="Checkpoint description")
    parser.add_argument("--status", help="Session status")
    args = parser.parse_args()

    manager = SessionManager()

    if args.command == "start":
        session = manager.start_session(args.session_id, args.user or "unknown")
        print(f"Started session: {session}")
    elif args.command == "progress":
        manager.track_progress(args.progress or 0.0, args.checkpoint)
        print(f"Progress updated: {manager.current_session}")
    elif args.command == "end":
        manager.end_session(args.status or "done")
        print(f"Session ended: {manager.current_session}")

if __name__ == "__main__":
    main() 