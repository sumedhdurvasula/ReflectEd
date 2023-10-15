var img = document.getElementById("img");
var fixed_left = 450;
var messages = [
    "Concept 1 mastered",
    "Concept 2 mastered",
    "Concept 3 mastered",
    "Concept 4 mastered",
    "Concept 5 mastered",
    "Concept 6 mastered",
    "Concept 7 mastered",
    "Concept 8 mastered"
];
var questions = [
    "What is Dijkstra's algorithm used for?",
    "What is flooding used for in distributed versions of Dijkstra's algorithm?",
    "What information is included in the link state advertisement?",
    "How is the link state advertisement kept up to date?",
    "Which type of routing protocol computes the shortest path once and does not change it until a network modification occurs?",
    "In a network, if the shortest path is recalculated every time there is a change in the network, which type of routing protocol is being used?",
    "Which type of graph has the same cost for traversing from one node to another in both directions?"
];
var timer = document.getElementById("timer");
var created_time;
var clicked_time;
var reaction_time;
var count = 0;
var averageTime = 0.0;
var best_score;
var currentConcept = 0;

function random_images() {
    img.style.display = "block";
    img.style.width = "110px";
    img.style.height = "140px";
    timer.style.width = "220px";
    timer.style.height = "250px";
    img.style.backgroundImage = "url('images/img" + Math.floor(1 + 20 * Math.random()) + ".jpg')";
}

function randomImage_location() {
    img.style.position = "absolute";
    var location_left = Math.floor(Math.random() * 600);
    var location_top = Math.floor(Math.random() * 400);
    img.style.left = fixed_left + location_left + "px";
    img.style.top = location_top + "px";
}

function randomImage_box() {
    var time = Math.random();
    time = 1000 * time;

    setTimeout(function () {
        random_images();
        randomImage_location();
        created_time = Date.now();
    }, time);
}

document.getElementById("img").onclick = function () {
    clicked_time = Date.now();
    count++;
    reaction_time = (clicked_time - created_time) / 1000;

    if (count === 1) {
        best_score = reaction_time;
    } else if (reaction_time < best_score) {
        best_score = reaction_time;
    }

    averageTime = (Math.round(((count - 1) * averageTime + reaction_time) / count));

    document.getElementById("user_time").innerHTML = reaction_time.toFixed(3) + "s";
    document.getElementById("bestScore").innerHTML = best_score.toFixed(3);
    document.getElementById("Average").innerHTML = averageTime.toFixed(3);

    var left = parseInt(img.style.left, 10);
    var top = parseInt(img.style.top, 10);
    
    var container = document.createElement("div");
    container.style.position = "absolute";
    container.style.left = "10px";
    container.style.bottom = "10px";

    var question = document.createElement("p");
    question.innerText = questions[currentConcept];
    container.appendChild(question);

    var answerInput = document.createElement("input");
    answerInput.type = "text";
    container.appendChild(answerInput);

    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = function () {
        var answer = answerInput.value;
        if (answer.trim().length > 0) {
            displayMessage(messages[currentConcept], left, top);
            container.style.display = "none";

            fetch("http://localhost:3000/submitAnswer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "lesson=lesson1&question=" + questions[currentConcept] + "&answer=" + answer
            })
            .then(function (response) {
                if (response.ok) {
                    console.log('Data inserted successfully');
                    return;
                }
                throw new Error('Request failed.');
            })
            .catch(function (error) {
                console.log(error);
            });

            currentConcept = (currentConcept + 1) % messages.length;
            question.innerText = questions[currentConcept];
        } else {
            alert("Please provide an answer.");
        }
    };
    container.appendChild(submitButton);

    document.body.appendChild(container);

    img.style.display = "none";
    randomImage_box();
};

function displayMessage(message, left, top) {
    var messageElement = document.createElement("div");
    messageElement.innerHTML = message;
    messageElement.style.position = "absolute";
    messageElement.style.left = left + "px";
    messageElement.style.top = top + "px";
    messageElement.style.fontSize = "24px";
    messageElement.style.fontFamily = "Arial";
    messageElement.style.color = getRandomColor(); // Function to get a random color
    document.getElementById("background_image").appendChild(messageElement);

    // Animation
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos === 350) {
            clearInterval(id);
        } else {
            pos++;
            messageElement.style.top = top - pos + "px";
        }
    }

    // Remove the message after 2 seconds
    setTimeout(function () {
        messageElement.parentNode.removeChild(messageElement);
    }, 2000);
}

// Function to generate random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

randomImage_box();

