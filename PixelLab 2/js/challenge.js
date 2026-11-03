let questions = [
  {
    question: "Which display can turn individual pixels off to show black?",
    options: ["IPS LCD", "OLED", "VA LCD", "TN LCD"],
    correct: 1,
    explanation:
      "OLED pixels emit their own light. A black pixel can stop emitting it.",
  },
  {
    question: "Where does the light in a conventional IPS LCD come from?",
    options: [
      "Each pixel creates it",
      "The HDMI cable",
      "A backlight behind the LCD",
      "The room alone",
    ],
    correct: 2,
    explanation:
      "An IPS LCD uses a backlight. The liquid-crystal layer controls how much light passes through.",
  },
  {
    question: "A 144 Hz monitor refreshes how many times per second?",
    options: [
      "144 times",
      "14.4 times",
      "1440 times",
      "It depends on the resolution",
    ],
    correct: 0,
    explanation:
      "Hertz counts refreshes per second. At a fixed 144 Hz, the interval is about 6.94 milliseconds.",
  },
  {
    question: "Is refresh rate the same thing as pixel response time?",
    options: [
      "Yes, always",
      "Only on OLED",
      "Only at 60 Hz",
      "No, they describe different things",
    ],
    correct: 3,
    explanation:
      "Refresh rate is how often the display updates. Response time is how quickly pixels change between levels or colours.",
  },
  {
    question:
      "Which LCD type often offers stronger native contrast than conventional IPS?",
    options: [
      "VA",
      "A smaller IPS",
      "All panels are identical",
      "The cable decides",
    ],
    correct: 0,
    explanation:
      "VA often blocks the backlight more effectively than conventional IPS, producing deeper blacks and stronger native contrast.",
  },
  {
    question: "What does Mini LED describe in an LCD monitor?",
    options: [
      "A smaller HDMI port",
      "A screen with no backlight",
      "A backlight approach using small LEDs",
      "A fixed refresh rate",
    ],
    correct: 2,
    explanation:
      "Mini LED is a backlight approach. The LCD still controls light passing through its pixels.",
  },
  {
    question: "What deserves extra attention with long-term static OLED use?",
    options: [
      "The number of USB ports",
      "Burn-in care and warranty guidance",
      "Whether the wallpaper is blue",
      "Only the screen size",
    ],
    correct: 1,
    explanation:
      "Repeated static elements can contribute to OLED burn-in. Check the manufacturer's care guidance and warranty.",
  },
  {
    question:
      "Two screens have the same white level. Which one has higher contrast?",
    options: [
      "The one with the larger stand",
      "The one with more ports",
      "The one with a thicker frame",
      "The one with the lower black level",
    ],
    correct: 3,
    explanation:
      "Contrast ratio is white level divided by black level. With the same white level, a lower black level produces higher contrast.",
  },
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
  let question = questions[currentQuestion];
  answered = false;
  document.getElementById("questionCounter").innerHTML =
    "QUESTION " + (currentQuestion + 1) + " / " + questions.length;
  document.getElementById("questionTitle").innerHTML = question.question;
  document.getElementById("quizProgress").style.width =
    (currentQuestion / questions.length) * 100 + "%";
  document.getElementById("runningScore").innerHTML =
    score + " / " + questions.length;
  document.getElementById("quizFeedback").innerHTML =
    "<p>Choose an answer to reveal the explanation.</p>";

  for (let i = 0; i < question.options.length; i++) {
    document.getElementById("option" + i).innerHTML = question.options[i];
    document.getElementById("answer" + i).className = "answer";
    document.getElementById("answer" + i).disabled = false;
  }
  document.getElementById("nextButton").disabled = true;
  document.getElementById("nextButton").innerHTML = "Next question →";
  if (currentQuestion === questions.length - 1) {
    document.getElementById("nextButton").innerHTML = "See my result →";
  }
}

function chooseAnswer(choice) {
  if (answered === true) {
    return;
  }
  answered = true;
  let question = questions[currentQuestion];
  let message = "<strong>Good question to learn from.</strong> ";
  if (choice === question.correct) {
    score++;
    message = "<strong>You've got it.</strong> ";
  } else {
    document.getElementById("answer" + choice).className = "answer wrong";
    message =
      message + "Correct answer: " + question.options[question.correct] + ". ";
  }
  document.getElementById("answer" + question.correct).className =
    "answer correct";
  for (let i = 0; i < question.options.length; i++) {
    document.getElementById("answer" + i).disabled = true;
  }
  document.getElementById("quizFeedback").innerHTML =
    "<p>" + message + question.explanation + "</p>";
  document.getElementById("runningScore").innerHTML =
    score + " / " + questions.length;
  document.getElementById("quizProgress").style.width =
    ((currentQuestion + 1) / questions.length) * 100 + "%";
  document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
  if (answered === false) {
    return;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("questionArea").style.display = "none";
  document.getElementById("quizResult").style.display = "block";
  document.getElementById("finalScore").innerHTML =
    score + "<span>/ " + questions.length + "</span>";
  let heading = "Curiosity is the first step.";
  let message =
    "Head back to Inside a Pixel, explore the explanations and give it another go.";
  if (score === questions.length) {
    heading = "Picture perfect.";
    message =
      "Eight out of eight. You've got the core ideas in focus. Try changing the conditions in Compare Lab next.";
  } else if (score >= 5) {
    heading = "A sharper eye.";
    message =
      "You've got a solid feel for the basics. Revisit the explanations you missed and try for a clean sweep.";
  }
  document.getElementById("resultHeading").innerHTML = heading;
  document.getElementById("resultMessage").innerHTML = message;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("questionArea").style.display = "block";
  document.getElementById("quizResult").style.display = "none";
  showQuestion();
}

showQuestion();
