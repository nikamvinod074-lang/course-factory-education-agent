from ai_agents.personalized_learning.shared.schemas import StudentProfile


class StudentProfilingAgent:

    def analyze(self, profile: StudentProfile):
        learning_needs = {
            "student_id": profile.student_id,
            "subject": profile.subject,
            "goal": profile.goal,
            "current_level": profile.current_level,
            "learning_preferences": profile.learning_preferences,
            "daily_study_minutes": profile.daily_study_minutes,
            "recommended_approach": self.get_approach(profile)
        }

        return learning_needs

    def get_approach(self, profile):
        if profile.current_level.lower() == "beginner":
            return "Start with basic concepts and simple examples."

        elif profile.current_level.lower() == "intermediate":
            return "Focus on practical examples and problem solving."

        else:
            return "Focus on advanced concepts and challenging exercises."