from pydantic import BaseModel
from typing import List


class LearningTopic(BaseModel):
    topic_id: str
    topic_name: str
    level: str
    estimated_minutes: int


class LearningRoadmap(BaseModel):
    student_id: str
    subject: str
    roadmap: List[LearningTopic]