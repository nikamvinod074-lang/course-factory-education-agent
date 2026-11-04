from fastapi import FastAPI
from pydantic import BaseModel
from agents.tutor_agent import TutorAgent

app = FastAPI(title="Parivestra AI Tutor API")

tutor = TutorAgent()


class Question(BaseModel):
    question: str


@app.get("/")
def home():
    return {"message": "Parivestra AI Tutor API is running!"}


@app.post("/ask")
def ask_tutor(data: Question):
    result = tutor.explain(data.question)
    return result