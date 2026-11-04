from ai_agents.personalized_learning.shared.schemas import StudentProfile
from ai_agents.personalized_learning.learning_path.learning_path_agent import LearningPathAgent
from ai_agents.personalized_learning.learning_path.topic_sequencer import get_python_topics


student = StudentProfile(
    student_id="STU001",
    subject="Python",
    goal="Improve programming skills",
    current_level="Beginner",
    learning_preferences=["Examples", "Practice"],
    daily_study_minutes=60
)

agent = LearningPathAgent()

topics = get_python_topics()

roadmap = agent.generate_path(student, topics)

print("\nStudent Learning Roadmap:")
print(roadmap)