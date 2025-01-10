import json

def add_sentence(sentence):
    with open('database.json', 'r+') as file:
        data = json.load(file)
        data['sentences'].append(sentence)
        file.seek(0)
        json.dump(data, file, indent=4)

if __name__ == "__main__":
    sentence = input("Enter a sentence to add: ")
    add_sentence(sentence)
    print("Sentence added successfully.")
