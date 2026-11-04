from agents.tutor_agent import TutorAgent

tutor = TutorAgent()

print("\n===== PARIVESTRA AI TUTOR =====")

while True:

    question = input("\nAsk your question (type exit to stop): ")

    if question.lower() == "exit":
        print("Thank you for learning with Parivestra!")
        break

    answer = tutor.explain(question)

    if answer["success"]:

        print("\nTopic:", answer["topic"])
        print("\n", answer["type"].capitalize(), ":")
        print(answer["response"])

    else:
        print("\n", answer["message"])