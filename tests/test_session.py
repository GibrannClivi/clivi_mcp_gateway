import pytest
from core.session import SessionManager

def test_start_session():
    manager = SessionManager()
    session = manager.start_session("sess1", "alice")
    assert session.session_id == "sess1"
    assert session.user == "alice"
    assert session.progress == 0.0
    assert session.status == "pending"

def test_track_progress():
    manager = SessionManager()
    manager.start_session("sess2", "bob")
    manager.track_progress(42.5, "checkpoint1")
    assert manager.current_session.progress == 42.5
    assert manager.current_session.last_checkpoint == "checkpoint1"

def test_end_session():
    manager = SessionManager()
    manager.start_session("sess3", "carol")
    manager.end_session("done")
    assert manager.current_session.status == "done" 