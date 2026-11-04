def get_python_topics():

    topics = [
        {
            "topic_id": "PY01",
            "topic_name": "Introduction to Python",
            "level": "Beginner",
            "estimated_minutes": 60,
            "prerequisites": []
        },
        {
            "topic_id": "PY02",
            "topic_name": "Variables and Data Types",
            "level": "Beginner",
            "estimated_minutes": 60,
            "prerequisites": ["PY01"]
        },
        {
            "topic_id": "PY03",
            "topic_name": "Loops",
            "level": "Beginner",
            "estimated_minutes": 90,
            "prerequisites": ["PY02"]
        },
        {
            "topic_id": "PY04",
            "topic_name": "Functions",
            "level": "Intermediate",
            "estimated_minutes": 90,
            "prerequisites": ["PY03"]
        },
        {
            "topic_id": "PY05",
            "topic_name": "Object Oriented Programming",
            "level": "Advanced",
            "estimated_minutes": 120,
            "prerequisites": ["PY04"]
        }
    ]

    return topics