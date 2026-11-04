def detect_weak_topics(recommendations, threshold=60):

    weak_topics = []

    for item in recommendations:

        if item["accuracy"] < threshold:

            weak_topics.append({
                "topic_id": item["topic_id"],
                "accuracy": item["accuracy"],
                "status": "Weak Topic",
                "action": "Revision and extra practice required"
            })

    return weak_topics