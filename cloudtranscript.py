from google.cloud import speech


def transcribe_gcs(gcs_uri: str) -> str:
    """Asynchronously transcribes the audio file specified by the gcs_uri.

    Args:
        gcs_uri: The Google Cloud Storage path to an audio file.

    Returns:
        The generated transcript from the audio file provided.
    """

    client = speech.SpeechClient()

    audio = speech.RecognitionAudio(uri=gcs_uri)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED,
        sample_rate_hertz=44100,
        language_code="en-US",
    )
    
    config.enable_automatic_punctuation = True

    operation = client.long_running_recognize(config=config, audio=audio)

    print("Waiting for operation to complete...")
    response = operation.result(timeout=600)

    transcript = ""

    for result in response.results:
        transcript+=result.alternatives[0].transcript

    print(transcript)

    return transcript

if __name__ == "__main__":
    transcribe_gcs('gs://hackgtxbucket/audio-files/trimmed2.mp3')
