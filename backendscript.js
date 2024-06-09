const questions = [
    {
        "text": "What excites you the most about working with technology?",
        "type": "multiple",
        "choices": [
        {"text": "Designing and building the logic behind applications.", "category": "Backend developer"},
        {"text": "Managing and organizing large sets of data efficiently.", "category": "Database administrator"},
        {"text": "Ensuring servers and networks run smoothly and securely.", "category": "System administrator"},
        {"text": "Crafting scalable and robust backend systems.", "category": "Backend architect"},
        {"text": "Developing integrations between different software systems.", "category": "Middleware developer"}
        ]
        },
        {
        "text": "When faced with a technical problem, what's your approach?",
        "type": "multiple",
        "choices": [
        {"text": "Dive into code to identify and fix the issue.", "category": "Backend developer"},
        {"text": "Analyze data structures and database queries for optimization.", "category": "Database administrator"},
        {"text": "Check server logs and network configurations for anomalies.", "category": "System administrator"},
        {"text": "Evaluate the architecture to identify potential improvements.", "category": "Backend architect"},
        {"text": "Investigate middleware components for compatibility and performance.", "category": "Middleware developer"}
        ]
        },
        {
        "text": "What aspect of technology interests you the most?",
        "type": "multiple",
        "choices": [
        {"text": "Programming languages and algorithms.", "category": "Backend developer"},
        {"text": "Data modeling and database management.", "category": "Database administrator"},
        {"text": "Networking and server administration.", "category": "System administrator"},
        {"text": "System architecture and scalability.", "category": "Backend architect"},
        {"text": "Integration and interoperability between systems.", "category": "Middleware developer"}
        ]
        },
        {
        "text": "Which task sounds most appealing to you?",
        "type": "multiple",
        "choices": [
        {"text": "Developing APIs and implementing business logic.", "category": "Backend developer"},
        {"text": "Designing and optimizing database schemas.", "category": "Database administrator"},
        {"text": "Configuring servers and maintaining system security.", "category": "System administrator"},
        {"text": "Designing scalable backend infrastructure.", "category": "Backend architect"},
        {"text": "Creating middleware components for seamless communication.", "category": "Middleware developer"}
        ]
        },
        {
        "text": "What do you enjoy most about problem-solving?",
        "type": "multiple",
        "choices": [
        {"text": "Finding elegant solutions through code.", "category": "Backend developer"},
        {"text": "Analyzing and optimizing data structures.", "category": "Database administrator"},
        {"text": "Troubleshooting complex network issues.", "category": "System administrator"},
        {"text": "Architecting systems to handle high loads.", "category": "Backend architect"},
        {"text": "Integrating diverse systems for seamless functionality.", "category": "Middleware developer"}
        ]
        },
        {
        "text": "When working on a project, what aspect do you prioritize?",
        "type": "multiple",
        "choices": [
        {"text": "Implementing efficient algorithms and code.", "category": "Backend developer"},
        {"text": "Ensuring data integrity and security.", "category": "Database administrator"},
        {"text": "Maintaining server uptime and reliability.", "category": "System administrator"},
        {"text": "Designing a flexible and scalable backend architecture.", "category": "Backend architect"},
        {"text": "Building middleware for smooth communication between systems.", "category": "Middleware developer"}
        ]
        },
        {
        "text": "What motivates you to learn new technologies?",
        "type": "multiple",
        "choices": [
        {"text": "The opportunity to expand my programming skills.", "category": "Backend developer"},
        {"text": "The chance to delve deeper into data management techniques.", "category": "Database administrator"},
        {"text": "The necessity of keeping up with evolving network technologies.", "category": "System administrator"},
        {"text": "The desire to architect more efficient and scalable systems.", "category": "Backend architect"},
        {"text": "The goal of enhancing integration between disparate systems.", "category": "Middleware developer"}
        ]
        },
        {
        "text": "What do you find most satisfying about your work with technology?",
        "type": "multiple",
        "choices": [
        {"text": "Creating functional and efficient code.", "category": "Backend developer"},
        {"text": "Organizing and optimizing data for better performance.", "category": "Database administrator"},
        {"text": "Ensuring systems operate smoothly without downtime.", "category": "System administrator"},
        {"text": "Designing architectures that can handle large-scale operations.", "category": "Backend architect"},
        {"text": "Facilitating seamless communication between different software components.", "category": "Middleware developer"}
        ]
        },
        {
        "text": "What skill do you consider most important for your role?",
        "type": "multiple",
        "choices": [
        {"text": "Proficiency in programming languages.", "category": "Backend developer"},
        {"text": "Expertise in database management.", "category": "Database administrator"},
        {"text": "Knowledge of network administration.", "category": "System administrator"},
        {"text": "Understanding of system architecture principles.", "category": "Backend architect"},
        {"text": "Ability to develop and integrate middleware components.", "category": "Middleware developer"}
        ]
        },
        {
        "text": "What aspect of technology would you like to specialize in?",
        "type": "multiple",
        "choices": [
        {"text": "Backend development and application logic.", "category": "Backend developer"},
        {"text": "Database management and optimization.", "category": "Database administrator"},
        {"text": "System administration and network operations.", "category": "System administrator"},
        {"text": "Architecting scalable and efficient backend systems.", "category": "Backend architect"},
        {"text": "Middleware development and integration.", "category": "Middleware developer"}
        ]
        }
]
 
const answers = [];
let currentQuestion = 0;
let results = {
    "Backend developer": 0,
    "Database administrator": 0,
    "System administrator": 0,
    "Backend architect": 0,
    "Middleware developer": 0
};

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    
    document.getElementById('quiz').addEventListener('click', (event) => {
        if (event.target.type === 'radio') {
            const labels = event.target.parentElement.parentElement.querySelectorAll('label');
            labels.forEach(label => label.classList.remove('selected'));
            event.target.parentElement.classList.add('selected');
        }
    });

    document.getElementById('nextButton').addEventListener('click', function(event) {
        event.preventDefault(); 
        nextQuestion();
    });
});

function loadQuestion() {
    const quiz = document.getElementById('quiz');
    const currentQuestionData = questions[currentQuestion];
    let optionsHTML = '';
    
    if (currentQuestionData.type === 'yesno') {
        optionsHTML = `
            <label><input type="radio" name="answer" value="yes"> Yes</label>
            <label><input type="radio" name="answer" value="no"> No</label>
        `;
    } else if (currentQuestionData.type === 'multiple') {
        currentQuestionData.choices.forEach((choice, index) => {
            optionsHTML += `
                <label><input type="radio" name="answer" value="${choice.category}"> ${choice.text}</label><br>
            `;
        });
    }
    
    quiz.querySelector('.question').innerHTML = `
        <p>${currentQuestion + 1}. ${currentQuestionData.text}</p>
    `;
    quiz.querySelector('.options').innerHTML = optionsHTML;

    quiz.classList.add('show');
}

function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        answers.push(selected.value);

        currentQuestion++;
        if (currentQuestion < questions.length) { 
            const current = document.querySelector('.question');
            current.classList.remove('show');
            loadQuestion();
        } else {
            calculateResult();
        }
    } else {
        alert('Please select an answer.');
    }
}

function calculateResult() {
    answers.forEach(answer => {
        if (results.hasOwnProperty(answer)) {
            results[answer]++;
        }
    });

    let maxCategory = null;
    let maxCount = 0;
    for (const category in results) {
        if (results[category] > maxCount) {
            maxCount = results[category];
            maxCategory = category;
        }
    }

    document.body.style.backgroundColor = '#000'; 
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    let resultDescription = '';
    switch (maxCategory) {
        case 'Backend developer':
            resultDescription = "You're most suited for designing and building the logic behind applications.";
            break;
        case 'Database administrator':
            resultDescription = "Your strength lies in managing and organizing large sets of data efficiently.";
            break;
        case 'System administrator':
            resultDescription = "You're adept at ensuring servers and networks run smoothly and securely.";
            break;
        case 'Backend architect':
            resultDescription = "Your forte is crafting scalable and robust backend systems.";
            break;
        case 'Middleware developer':
            resultDescription = "Your passion lies in developing integrations between different software systems. You're pathway is quite complex, with many different routes and prerequisites, along the way. This won't disappoint!";
            break;
        default:
            resultDescription = "You have a diverse range of skills and interests in technology.";
            break;
    }

    const resultButton = document.createElement('button');
    resultButton.textContent = 'Where do I go from here?';
    resultButton.classList.add('result-button');
    resultButton.addEventListener('click', () => {
        let page = '';
        switch (maxCategory) {
            case 'Backend developer':
                page = 'backdevpath.html';
                break;
            case 'Database administrator':
                page = 'dbapath.html';
                break;
            case 'System administrator':
                page = 'sbapath.html';
                break;
            case 'Backend architect':
                page = 'backarchpath.html';
                break;
            case 'Middleware developer':
                page = 'middev.html';
                break;
        }
        window.location.href = page;
    });
    document.getElementById('result').appendChild(resultButton);

    let resultText = `<div class="result-intro">It seems you are more suited for:</div><div class="result-category">${maxCategory.toUpperCase()}</div><div class="result-description">${resultDescription}</div>`;
    document.getElementById('result-text').innerHTML = resultText;
}







document.addEventListener("DOMContentLoaded", function() {
    var welcomeScreen = document.getElementById("welcome-screen");
    var quizContainer = document.getElementById("quiz");

    var beginJourneyButton = document.getElementById("begin-journey");


    beginJourneyButton.addEventListener("click", function() {
        welcomeScreen.style.display = "none";
        quizContainer.style.display = "block";
        document.body.style.backgroundColor = "#3a3a3a";
    });
});