def create_seven_day_plan(roadmap, daily_minutes):

    topics = roadmap["roadmap"]

    if not topics:
        raise ValueError("No topics available for the roadmap.")

    days = []

    for i in range(7):

        if i < len(topics):
            topic = topics[i]
            activity = "Learn concepts and practice examples"

            if topic["estimated_minutes"] > daily_minutes:
                activity = "Continue learning and practice"

            days.append({
                "day": i + 1,
                "topic": topic["topic_name"],
                "study_minutes": daily_minutes,
                "activity": activity
            })

        elif i == 6:
            days.append({
                "day": 7,
                "topic": "All completed topics",
                "study_minutes": daily_minutes,
                "activity": "Complete revision of all topics"
            })

        else:
            days.append({
                "day": i + 1,
                "topic": "Previously learned topics",
                "study_minutes": daily_minutes,
                "activity": "Practice questions and revision"
            })

    return {
        "student_id": roadmap["student_id"],
        "total_days": 7,
        "daily_plan": days
    }