from ai_agents.personalized_learning.student_profiling.student_profile import (
    StudentProfilingAgent
)
from ai_agents.personalized_learning.shared.schemas import StudentProfile


def analyze_student(data: dict):
    profile = StudentProfile(**data)

    agent = StudentProfilingAgent()

    result = agent.analyze(profile)

    return result


if __name__ == "__main__":

    student_data = {
        "student_id": "STU001",
        "subject": "Python",
        "goal": "Improve programming skills",
        "current_level": "Beginner",
        "learning_preferences": ["Examples", "Practice"],
        "daily_study_minutes": 60
    }

    result = analyze_student(student_data)

    print("\nStudent Learning Profile:")
    print(result)