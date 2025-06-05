from pydantic import BaseModel
from typing import Optional

class SessionState(BaseModel):
    """
    Represents the state of a TaskMaster MCP session.
    Why: Encapsulates all session-related data for persistence and recovery.
    """
    session_id: str
    user: str
    progress: float = 0.0
    status: str = "pending"
    last_checkpoint: Optional[str] = None

class SessionManager:
    """
    Manages TaskMaster MCP sessions: start, track progress, end, and recover context.
    Why: Centralizes session logic for testability, audit, and integration with Memory MCP.
    """
    def __init__(self):
        self.current_session: Optional[SessionState] = None

    def start_session(self, session_id: str, user: str) -> SessionState:
        """
        Start a new session and initialize state.
        """
        self.current_session = SessionState(session_id=session_id, user=user)
        return self.current_session

    def track_progress(self, progress: float, checkpoint: Optional[str] = None):
        """
        Update session progress and checkpoint.
        """
        if self.current_session:
            self.current_session.progress = progress
            if checkpoint:
                self.current_session.last_checkpoint = checkpoint

    def end_session(self, status: str = "done"):
        """
        Mark the session as complete and persist state.
        """
        if self.current_session:
            self.current_session.status = status
            # TODO: Integrate with TaskMaster MCP and Memory MCP for persistence

    def recover_session(self, session_id: str) -> Optional[SessionState]:
        """
        Recover session state from persistent storage (stub).
        """
        # TODO: Implement actual recovery logic
        return None 