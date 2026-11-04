from ai_agents.personalized_learning.learning_path.prerequisite_checker import (
    check_prerequisites
)


class LearningPathAgent:

    def generate_path(self, profile, topics):

        ordered_topics = check_prerequisites(topics)

        roadmap = []

        for topic in ordered_topics:

            if topic["level"].lower() == profile.current_level.lower():

                roadmap.append({
                    "topic_id": topic["topic_id"],
                    "topic_name": topic["topic_name"],
                    "estimated_minutes": topic["estimated_minutes"]
                })

        return {
            "student_id": profile.student_id,
            "subject": profile.subject,
            "roadmap": roadmap
        }