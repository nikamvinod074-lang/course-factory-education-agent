from pydantic import BaseModel, Field


class RecommendationInput(BaseModel):
    topic_id: str
    score: float = Field(ge=0)
    max_score: float = Field(gt=0)


class RecommendationOutput(BaseModel):
    topic_id: str
    accuracy: float
    recommendation: str