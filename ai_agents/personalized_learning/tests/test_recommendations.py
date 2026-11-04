from ai_agents.personalized_learning.recommendation.recommendation_agent import (
    RecommendationAgent
)


performance_data = [
    {"topic_id": "PY01", "score": 4, "max_score": 10},
    {"topic_id": "PY02", "score": 7, "max_score": 10},
    {"topic_id": "PY03", "score": 9, "max_score": 10}
]

agent = RecommendationAgent()

result = agent.generate_recommendations(performance_data)

print("\nStudent Recommendations:")
for item in result:
    print(item)