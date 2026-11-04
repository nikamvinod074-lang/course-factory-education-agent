# Member 6 – Personalized Learning Engine

## Project Overview
The Personalized Learning Engine provides personalized learning support through three AI agents.

## Features

### 1. Student Profiling Agent
- Accepts student information.
- Validates student profile using Pydantic.
- Suggests a learning approach based on the student's current level.

### 2. Learning Path Agent
- Selects topics according to the student's level.
- Checks topic prerequisites.
- Arranges topics in the correct learning sequence.
- Generates a sample 7-day learning plan.

### 3. Recommendation Agent
- Accepts topic-wise assessment scores.
- Calculates accuracy from supplied scores.
- Recommends revision, practice, or continuing to the next topic.
- Identifies weak topics.

## Technology Used
- Python
- Pydantic
- Object-Oriented Programming
- Python unittest

## Project Structure

```text
personalized_learning/
    student_profiling/
    learning_path/
    recommendation/
    shared/
    tests/
    main.py
    README.md
```

## How to Run

From the main project directory:

```bash
python -m ai_agents.personalized_learning.main
```

## How to Run Tests

```bash
python -m unittest discover -s ai_agents/personalized_learning/tests -p "test_*.py" -v
```

## Current Status
Working prototype using sample student profiles, Python topics, and demonstration assessment scores.

The sample topic catalogue and recommendation thresholds require confirmation from the project team before final integration.

## Future Integration
- Connect with the backend and approved topic catalogue.
- Receive actual assessment and progress data.
- Integrate with the main application.
