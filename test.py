import io
from google.oauth2 import service_account
from google.cloud import speech
from storeaudio import upload_blob_from_memory

#upload_blob_from_memory(hackgtxbucket, trimmed2.mp3, )


client_file ='absolute-router-402003-eecdf3023dd8.json'
credentials = service_account.Credentials.from_service_account_file(client_file) 
client = speech.SpeechClient(credentials=credentials)

audio_file = 'trimmed2.mp3'
with io.open(audio_file, 'rb') as f:
    content = f.read()
    audio = speech.RecognitionAudio(content = content)

config = speech.RecognitionConfig(
    sample_rate_hertz=44100,
    enable_automatic_punctuation=True,
    language_code= 'en_US'
)


response = client.recognize(config = config, audio = audio)
out = ""
for result in response.results:
    out+=result.alternatives[0].transcript

print(out)

