from ai_agents.personalized_learning.recommendation.recommendation_rules import (
    get_recommendation
)

from ai_agents.personalized_learning.recommendation.weak_topic_detector import (
    detect_weak_topics
)


class RecommendationAgent:

    def generate_recommendations(self, performance_data):

        recommendations = []

        for item in performance_data:

            accuracy = (item["score"] / item["max_score"]) * 100

            recommendation = get_recommendation(accuracy)

            recommendations.append({
                "topic_id": item["topic_id"],
                "accuracy": round(accuracy, 2),
                "recommendation": recommendation
            })

        return recommendations

    def get_weak_topics(self, recommendations):

        return detect_weak_topics(recommendations)