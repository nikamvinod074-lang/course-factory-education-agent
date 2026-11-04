import ollama

print("Connecting to Qwen AI...")

response = ollama.chat(
    model="qwen3:0.6b",
    messages=[
        {
            "role": "system",
            "content": "You are a friendly educational tutor. Explain concepts in simple language with examples."
        },
        {
            "role": "user",
            "content": "Explain Deep Learning with a real-life example."
        }
    ]
)

print("\n===== QWEN AI RESPONSE =====")
print(response.message.content)