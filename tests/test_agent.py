from core.agent import GoogleADKAgent
 
def test_agent_act():
    agent = GoogleADKAgent(name="TestAgent")
    result = agent.act("hello world")
    assert "TestAgent" in result
    assert "hello world" in result 