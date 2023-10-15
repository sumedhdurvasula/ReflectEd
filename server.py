from flask import Flask, render_template
import os

currentDir = os.getcwd()

print(currentDir)

print("Hello")


app = Flask(__name__, template_folder=currentDir)


@app.route('/')

@app.route('/home')

def home():

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)