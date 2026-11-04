from pydantic import BaseModel, Field
from typing import List


class StudentProfile(BaseModel):
    student_id: str
    subject: str
    goal: str
    current_level: str
    learning_preferences: List[str]
    daily_study_minutes: int = Field(gt=0)


class TopicPerformance(BaseModel):
    topic_id: str
    score: float = Field(ge=0)
    max_score: float = Field(gt=0)