import unittest

from ai_agents.personalized_learning.learning_path.prerequisite_checker import (
    check_prerequisites
)


class TestPrerequisiteChecker(unittest.TestCase):

    def test_correct_topic_order(self):

        topics = [
            {
                "topic_id": "PY03",
                "topic_name": "Loops",
                "prerequisites": ["PY02"]
            },
            {
                "topic_id": "PY01",
                "topic_name": "Introduction",
                "prerequisites": []
            },
            {
                "topic_id": "PY02",
                "topic_name": "Variables",
                "prerequisites": ["PY01"]
            }
        ]

        result = check_prerequisites(topics)

        ids = [topic["topic_id"] for topic in result]

        self.assertEqual(ids, ["PY01", "PY02", "PY03"])

    def test_unknown_prerequisite(self):

        topics = [
            {
                "topic_id": "PY01",
                "topic_name": "Loops",
                "prerequisites": ["PY99"]
            }
        ]

        with self.assertRaises(ValueError):
            check_prerequisites(topics)

    def test_circular_prerequisite(self):

        topics = [
            {
                "topic_id": "PY01",
                "topic_name": "Topic A",
                "prerequisites": ["PY02"]
            },
            {
                "topic_id": "PY02",
                "topic_name": "Topic B",
                "prerequisites": ["PY01"]
            }
        ]

        with self.assertRaises(ValueError):
            check_prerequisites(topics)


if __name__ == "__main__":
    unittest.main()