import json
import os
import ollama


class TutorAgent:

    def __init__(self):

        base_path = os.path.dirname(os.path.dirname(__file__))

        file_path = os.path.join(
            base_path,
            "knowledge_base",
            "topics.json"
        )

        with open(file_path, "r", encoding="utf-8") as file:
            self.data = json.load(file)

        # Store conversation history
        self.messages = [
    {
        "role": "system",
        "content": """
        You are Parivestra AI Tutor, a friendly multilingual educational assistant.

        IDENTITY:
        1. Your name is Parivestra AI Tutor.
        2. If anyone asks your name, reply:
           I am Parivestra AI Tutor.
        3. Never say your name is EduForge.

        LANGUAGE SUPPORT:
        1. Understand English, Hindi and Marathi.
        2. Understand Hinglish and mixed-language questions.
        3. Reply in the language used by the student.
        4. Understand informal words and common spelling mistakes.

        TEACHING RULES:
        1. Explain concepts in simple language.
        2. Give real-life examples.
        3. Provide hints when requested.
        4. Answer questions about new topics.
        5. Understand follow-up questions.
        6. Remember previous conversation.
        7. Encourage students to learn.

        If a question is unclear, ask for clarification.
        """
    }
]

        print("Parivestra AI Tutor Initialized Successfully!")

    def find_topic(self, question):

        question = question.lower()

        for topic in self.data["topics"]:

            for keyword in topic["keywords"]:

                if keyword.lower() in question:
                    return topic

        return None

    def explain(self, question):

        topic = self.find_topic(question)

        context = ""

        if topic:
            context = f"""
            Relevant topic: {topic['name']}
            Explanation: {topic['explanation']}
            Example: {topic['example']}
            Hint: {topic['hint']}
            """

        user_message = f"""
        Knowledge base information:
        {context}

        Student question:
        {question}
        """

        self.messages.append({
            "role": "user",
            "content": user_message
        })

        try:

            response = ollama.chat(
                model="qwen3:0.6b",
                messages=self.messages[-11:]
            )

            ai_answer = response.message.content

            self.messages.append({
                "role": "assistant",
                "content": ai_answer
            })

            return {
                "success": True,
                "topic": topic["name"] if topic else "AI Learning",
                "type": "AI Tutor Response",
                "response": ai_answer
            }

        except Exception as error:

            # Remove failed user message
            self.messages.pop()

            return {
                "success": False,
                "message": f"AI Tutor Error: {error}"
            }