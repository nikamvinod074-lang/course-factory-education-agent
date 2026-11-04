import unittest

from ai_agents.personalized_learning.recommendation.recommendation_rules import (
    get_recommendation
)


class TestRecommendationRules(unittest.TestCase):

    def test_low_accuracy(self):
        result = get_recommendation(40)
        self.assertIn("Revise", result)

    def test_medium_accuracy(self):
        result = get_recommendation(70)
        self.assertIn("Practice", result)

    def test_high_accuracy(self):
        result = get_recommendation(90)
        self.assertIn("Continue", result)


if __name__ == "__main__":
    unittest.main()