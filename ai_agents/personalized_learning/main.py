from ai_agents.personalized_learning.learning_path.seven_day_planner import (
    create_seven_day_plan
)
from ai_agents.personalized_learning.shared.schemas import StudentProfile

from ai_agents.personalized_learning.student_profiling.student_profile import (
    StudentProfilingAgent
)

from ai_agents.personalized_learning.learning_path.learning_path_agent import (
    LearningPathAgent
)

from ai_agents.personalized_learning.learning_path.topic_sequencer import (
    get_python_topics
)

from ai_agents.personalized_learning.recommendation.recommendation_agent import (
    RecommendationAgent
)


def main():

    # Student Profile
    student = StudentProfile(
        student_id="STU001",
        subject="Python",
        goal="Improve programming skills",
        current_level="Beginner",
        learning_preferences=["Examples", "Practice"],
        daily_study_minutes=60
    )

    # Agent 1: Student Profiling
    profile_agent = StudentProfilingAgent()
    profile = profile_agent.analyze(student)

    print("\n1. STUDENT PROFILE")
    print(profile)

    # Agent 2: Learning Path
    path_agent = LearningPathAgent()
    topics = get_python_topics()
    roadmap = path_agent.generate_path(student, topics)

    print("\n2. LEARNING ROADMAP")
    print(roadmap)

       # 7-Day Personalized Learning Plan
    weekly_plan = create_seven_day_plan(
        roadmap,
        student.daily_study_minutes
    )

    print("\n4. SEVEN DAY LEARNING PLAN")

    for day in weekly_plan["daily_plan"]:
        print(day)
    # Agent 3: Recommendations
    performance = [
        {"topic_id": "PY01", "score": 4, "max_score": 10},
        {"topic_id": "PY02", "score": 7, "max_score": 10},
        {"topic_id": "PY03", "score": 9, "max_score": 10}
    ]

    recommendation_agent = RecommendationAgent()
    recommendations = recommendation_agent.generate_recommendations(
        performance
    )

    print("\n3. STUDENT RECOMMENDATIONS")
    for item in recommendations:
        print(item)
    # Weak Topic Detection
    weak_topics = recommendation_agent.get_weak_topics(
        recommendations
    )

    print("\n5. WEAK TOPICS IDENTIFIED")

    for topic in weak_topics:
        print(topic)

if __name__ == "__main__":
    main()