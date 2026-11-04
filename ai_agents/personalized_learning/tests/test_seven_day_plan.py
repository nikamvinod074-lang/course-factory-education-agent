from ai_agents.personalized_learning.learning_path.seven_day_planner import (
    create_seven_day_plan
)

sample_roadmap = {
    "student_id": "STU001",
    "subject": "Python",
    "roadmap": [
        {
            "topic_id": "PY01",
            "topic_name": "Introduction to Python",
            "estimated_minutes": 60
        },
        {
            "topic_id": "PY02",
            "topic_name": "Variables and Data Types",
            "estimated_minutes": 60
        },
        {
            "topic_id": "PY03",
            "topic_name": "Loops",
            "estimated_minutes": 90
        }
    ]
}

result = create_seven_day_plan(sample_roadmap, 60)

print("\n7-Day Personalized Learning Plan:")

for day in result["daily_plan"]:
    print(day)