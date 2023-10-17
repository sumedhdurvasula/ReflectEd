import moviepy.editor as mp
import speech_recognition as sr
import os

from moviepy.editor import VideoFileClip

def convert_mp4_to_mp3(mp4_file, mp3_output_file):
    video = VideoFileClip(mp4_file)
    audio = video.audio
    audio.write_audiofile(mp3_output_file)

if __name__ == "__main__":
    mp4_file_path = "Lecture_8.mp4" 

    mp3_output_path = "output_audio.mp3"

    # Convert MP4 to MP3
    convert_mp4_to_mp3(mp4_file_path, mp3_output_path)
