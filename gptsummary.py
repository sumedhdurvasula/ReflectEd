import requests
import openai
openai.api_key = 'ENTER API KEY'

text = '''SUMMARY'''

set_engine = 'text-davinci-003'

prompt = "Can you give a quiz based on the text above?"

completion = openai.Completion.create(

    engine = set_engine,
    prompt = prompt + text, 
    max_tokens = 1024,
    n = 1,
    stop = None,
    temperature = 0.5
)

response = completion.choices[0].text

print(response)