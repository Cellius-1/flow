const questions = [
    {
        "text": "When you use a new app or website, what aspect grabs your attention first?",
        "type": "multiple",
        "choices": [
          {"text": "The overall look and feel", "category": "frontend"},
          {"text": "How quickly it responds to my actions", "category": "backend"},
          {"text": "How smoothly it works without glitches", "category": "devops"},
          {"text": "The depth of information it provides", "category": "data"},
          {"text": "How secure it seems to be", "category": "cybersecurity"}
        ]
      },
    {
      "text": "If you were to create a new digital tool, what would be your main goal?",
      "type": "multiple",
      "choices": [
        {"text": "Making it appealing and easy to use", "category": "frontend"},
        {"text": "Ensuring it works reliably without crashing", "category": "backend"},
        {"text": "Making it easy to update and improve over time", "category": "devops"},
        {"text": "Helping users find valuable insights", "category": "data"},
        {"text": "Keeping user data safe from hackers", "category": "cybersecurity"}
      ]
    },
    {
      "text": "What excites you most about technology?",
      "type": "multiple",
      "choices": [
        {"text": "The ability to express creativity", "category": "frontend"},
        {"text": "Solving puzzles and challenges", "category": "backend"},
        {"text": "Making things work more efficiently", "category": "devops"},
        {"text": "Discovering new insights and patterns", "category": "data"},
        {"text": "Protecting against digital threats", "category": "cybersecurity"}
      ]
    },
    {
      "text": "When facing a problem with a digital tool, what's your first instinct?",
      "type": "multiple",
      "choices": [
        {"text": "Focus on how it looks and feels", "category": "frontend"},
        {"text": "Dive into figuring out what went wrong", "category": "backend"},
        {"text": "Look for ways to prevent it from happening again", "category": "devops"},
        {"text": "Analyze data to understand the issue better", "category": "data"},
        {"text": "Check if there are any security risks", "category": "cybersecurity"}
      ]
    },
    {
      "text": "What do you value most in a digital product or service?",
      "type": "multiple",
      "choices": [
        {"text": "An attractive design and easy navigation", "category": "frontend"},
        {"text": "Reliability and smooth performance", "category": "backend"},
        {"text": "How quickly and easily it can be updated", "category": "devops"},
        {"text": "Insights and information it provides", "category": "data"},
        {"text": "Confidence that my data is safe", "category": "cybersecurity"}
      ]
    },
    {
      "text": "Which aspect of technology do you find most challenging?",
      "type": "multiple",
      "choices": [
        {"text": "Designing interfaces that are both beautiful and intuitive", "category": "frontend"},
        {"text": "Solving technical problems and bugs", "category": "backend"},
        {"text": "Streamlining processes for efficiency", "category": "devops"},
        {"text": "Making sense of large amounts of data", "category": "data"},
        {"text": "Ensuring security against online threats", "category": "cybersecurity"}
      ]
    },
    {
      "text": "If you were to contribute to a digital project, what would you focus on?",
      "type": "multiple",
      "choices": [
        {"text": "Improving its visual appeal and user experience", "category": "frontend"},
        {"text": "Enhancing its performance and reliability", "category": "backend"},
        {"text": "Making it easier to update and maintain", "category": "devops"},
        {"text": "Adding features for better insights and analysis", "category": "data"},
        {"text": "Strengthening its defenses against hackers", "category": "cybersecurity"}
      ]
    },
    {
      "text": "What role do you see yourself playing in a digital team?",
      "type": "multiple",
      "choices": [
        {"text": "The creative mind behind the look and feel", "category": "frontend"},
        {"text": "The problem-solver who fixes issues", "category": "backend"},
        {"text": "The organizer who streamlines processes", "category": "devops"},
        {"text": "The analyzer who finds patterns in data", "category": "data"},
        {"text": "The guardian who protects against cyber threats", "category": "cybersecurity"}
      ]
    },
    {
      "text": "What aspect of technology would you like to learn more about?",
      "type": "multiple",
      "choices": [
        {"text": "Creating beautiful designs and interfaces", "category": "frontend"},
        {"text": "Solving technical problems and puzzles", "category": "backend"},
        {"text": "Automating tasks for efficiency", "category": "devops"},
        {"text": "Analyzing data for insights", "category": "data"},
        {"text": "Protecting against digital risks", "category": "cybersecurity"}
      ]
    },
    {
      "text": "When you think about technology, what aspect appeals to you the most?",
      "type": "multiple",
      "choices": [
        {"text": "Making things visually appealing", "category": "frontend"},
        {"text": "Solving complex problems", "category": "backend"},
        {"text": "Making things run smoothly", "category": "devops"},
        {"text": "Discovering hidden insights", "category": "data"},
        {"text": "Ensuring safety and security", "category": "cybersecurity"}
      ]
    },
    {
      "text": "What aspect of digital technology do you find most fascinating?",
      "type": "multiple",
      "choices": [
        {"text": "Creating engaging user experiences", "category": "frontend"},
        {"text": "Building reliable and robust systems", "category": "backend"},
        {"text": "Automating repetitive tasks", "category": "devops"},
        {"text": "Exploring and analyzing data trends", "category": "data"},
        {"text": "Safeguarding digital assets and privacy", "category": "cybersecurity"}
      ]
    },
    {
      "text": "When evaluating a digital product, what matters most to you?",
      "type": "multiple",
      "choices": [
        {"text": "Its aesthetic appeal and user interface", "category": "frontend"},
        {"text": "Its functionality and performance", "category": "backend"},
        {"text": "Its ease of maintenance and updates", "category": "devops"},
        {"text": "The insights and data it provides", "category": "data"},
        {"text": "The level of security it offers", "category": "cybersecurity"}
    ]
  },
  {
    "text": "If you could improve a digital tool, what would you prioritize?",
    "type": "multiple",
    "choices": [
      {"text": "Enhancing its visual design and user interaction", "category": "frontend"},
      {"text": "Optimizing its speed and efficiency", "category": "backend"},
      {"text": "Simplifying its management and updates", "category": "devops"},
      {"text": "Adding features for data analysis", "category": "data"},
      {"text": "Strengthening its security measures", "category": "cybersecurity"}
    ]
  },
  {
    "text": "What motivates you most in the digital realm?",
    "type": "multiple",
    "choices": [
      {"text": "Bringing creativity to life through design", "category": "frontend"},
      {"text": "Overcoming technical challenges", "category": "backend"},
      {"text": "Streamlining processes for better efficiency", "category": "devops"},
      {"text": "Uncovering meaningful insights from data", "category": "data"},
      {"text": "Protecting against cyber threats and vulnerabilities", "category": "cybersecurity"}
    ]
  },
  {
    "text": "When encountering a technical issue, what's your typical approach?",
    "type": "multiple",
    "choices": [
      {"text": "Focus on improving its visual appeal", "category": "frontend"},
      {"text": "Dive into troubleshooting to identify the cause", "category": "backend"},
      {"text": "Seek ways to automate or streamline the process", "category": "devops"},
      {"text": "Analyze relevant data to understand the problem", "category": "data"},
      {"text": "Evaluate potential security risks and vulnerabilities", "category": "cybersecurity"}
    ]
  }
]
 

const answers = [];
let currentQuestion = 0;
let results = {
    "frontend": 0,
    "backend": 0,
    "devops": 0,
    "data": 0,
    "cybersecurity": 0
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
    
    let resultText = `<div class="result-intro">It seems you are more suited for:</div><div class="result-category">${maxCategory.toUpperCase()}</div>`;
    document.getElementById('result-text').innerHTML = resultText;

    const resultButton = document.createElement('button');
    resultButton.textContent = 'Hmmm, where do I go from here?';
    resultButton.classList.add('result-button');
    resultButton.addEventListener('click', () => {
        let page = '';
        switch (maxCategory) {
            case 'frontend':
                page = 'frontend.html';
                break;
            case 'backend':
                page = 'backend.html';
                break;
            case 'devops':
                page = 'devops.html';
                break;
            case 'data':
                page = 'data.html';
                break;
            case 'cybersecurity':
                page = 'cybersecurity.html';
                break;
        }
        window.location.href = page;
    });
    document.getElementById('result').appendChild(resultButton);
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