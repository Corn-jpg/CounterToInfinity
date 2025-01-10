import json

def get_sentences():
    with open('database.json', 'r') as file:
        data = json.load(file)
        return data['sentences']

if __name__ == "__main__":
    sentences = get_sentences()
    for idx, sentence in enumerate(sentences, 1):
        print(f"{idx}. {sentence}")
