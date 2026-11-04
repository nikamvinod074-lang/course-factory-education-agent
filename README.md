# Parivestra AI Tutor

**Parivestra AI Tutor** is an AI-powered educational assistant designed to help students understand concepts through simple explanations, examples, and interactive conversations.

## Features

- AI-powered responses using Ollama and Qwen3.
- Educational knowledge base covering multiple subjects.
- Dynamic answers to questions beyond the knowledge base.
- Conversational context for follow-up questions.
- FastAPI integration for communication with other applications.
- Interactive API documentation using Swagger UI.

## Technologies Used

- Python
- Ollama
- Qwen3
- FastAPI
- Uvicorn
- JSON

## Run the Project

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the AI Tutor:

```bash
python app.py
```

Start the API server:

```bash
uvicorn api:app --reload
```

Open API documentation:

http://127.0.0.1:8000/docs

## API Endpoint

**POST /ask**

Example request:

```json
{
  "question": "Explain Artificial Intelligence simply."
}
```

## Project Structure

```text
course-factory-education-agent/
├── agents/
│   └── tutor_agent.py
├── knowledge_base/
│   └── topics.json
├── tests/
├── api.py
├── app.py
├── requirements.txt
└── README.md
```