from transformers import AutoTokenizer, AutoModelForQuestionAnswering, AutoModelForCausalLM, pipeline

# Initialisation des pipelines
qa_model_name = "deepset/roberta-base-squad2"
qa_tokenizer = AutoTokenizer.from_pretrained(qa_model_name)
qa_model = AutoModelForQuestionAnswering.from_pretrained(qa_model_name)
qa_pipeline = pipeline("question-answering", model=qa_model, tokenizer=qa_tokenizer)

# Modèle de reformulation avec DialoGPT
dialogpt_tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-small")
dialogpt_model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-small")
dialogpt_pipeline = pipeline("text-generation", model=dialogpt_model, tokenizer=dialogpt_tokenizer)

def get_answer_from_text(question: str, context: str) -> str:
    """Trouve la réponse à la question dans le texte avec RoBERTa."""
    result = qa_pipeline(question=question, context=context)
    return result['answer']

def reformulate_answer(question: str, short_answer: str) -> str:
    """Utilise DialoGPT pour reformuler la réponse."""
    prompt = (f"Q: {question}\nA (rephrase and expand): {short_answer}"
    )

    result = dialogpt_pipeline(
        prompt,
        max_length=200,
        do_sample=True,
        top_k=50,
        temperature=0.8,
        pad_token_id=dialogpt_tokenizer.eos_token_id
    )

    generated_text = result[0]["generated_text"]
    split_token = f"A (rephrase and expand):"
    if split_token in generated_text:
        final_answer = generated_text.split(split_token)[-1].strip()
    else:
        final_answer = generated_text.strip()

    return final_answer
