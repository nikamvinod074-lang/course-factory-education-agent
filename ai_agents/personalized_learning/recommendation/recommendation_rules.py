def get_recommendation(accuracy):

    if accuracy < 60:
        return "Revise this topic and practice more questions."

    elif accuracy < 80:
        return "Practice more questions to improve accuracy."

    else:
        return "Good performance! Continue to the next topic."