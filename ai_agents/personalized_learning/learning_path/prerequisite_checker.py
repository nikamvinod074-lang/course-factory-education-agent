def check_prerequisites(topics):

    topic_ids = {topic["topic_id"] for topic in topics}

    for topic in topics:
        for prerequisite in topic.get("prerequisites", []):

            if prerequisite not in topic_ids:
                raise ValueError(
                    f"Unknown prerequisite {prerequisite} "
                    f"for topic {topic['topic_id']}"
                )

    completed = set()
    visiting = set()
    ordered_topics = []

    topic_map = {
        topic["topic_id"]: topic for topic in topics
    }

    def visit(topic_id):

        if topic_id in visiting:
            raise ValueError("Circular prerequisite detected!")

        if topic_id in completed:
            return

        visiting.add(topic_id)

        for prerequisite in topic_map[topic_id].get("prerequisites", []):
            visit(prerequisite)

        visiting.remove(topic_id)
        completed.add(topic_id)
        ordered_topics.append(topic_map[topic_id])

    for topic in topics:
        visit(topic["topic_id"])

    return ordered_topics