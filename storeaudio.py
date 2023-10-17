from google.cloud import storage


def upload_blob_from_memory(bucket_name, contents, destination_blob_name):
    """Uploads a file to the bucket."""


    destination_blob_name = 'audio-files/' + destination_blob_name
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(contents)

    print(
        f"{destination_blob_name} with contents {contents} uploaded to {bucket_name}."
    )


if __name__ == "__main__":
    bucket_name = 'hackgtxbucket'
    source_file_name = 'trimmed2.mp3'
    destination_blob_name = 'trimmed2.mp3'

    upload_blob_from_memory(bucket_name, source_file_name, destination_blob_name)
