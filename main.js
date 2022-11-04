//DECLARE THE UI ELEMENTS
var ul = document.getElementById("ul");
var nextButton = document.getElementById("btnNext");
var restartButton = document.getElementById("btnRestart");
var quizbox = document.getElementById("questionBox");
var scoreCard = document.getElementById("scoreCard");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

//APP OBJECT
var app = {
  questions: [
    {
      q: "Who invented JavaScript?",
      options: [
        "Brendan Eich",
        "James Gosling",
        "Anders Heljsberb",
        "Guido Van Rossum",
      ],
      answer: 1,
    },
    {
      q: "What is the name of the Deadly virus",
      options: ["Antrax", "Killvi", "Corona", "Wuhanvi"],
      answer: 3,
    },
    {
      q: "Which of them is an OOP language?",
      options: ["Java", "C", "Q-Basic", "Fortran"],
      answer: 1,
    },
    {
      q: "What is the scientific name for man? ",
      options: ["Agama agama", "Zea Maiz", "Papilio demodocus", "Homa Sapiens"],
      answer: 4,
    },
  ],
  index: 0,
  //LOAD THE QUESTIONS USING ITS INDEX
  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizbox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
      opt1.innerHTML = this.questions[this.index].options[0];
      opt2.innerHTML = this.questions[this.index].options[1];
      opt3.innerHTML = this.questions[this.index].options[2];
      opt4.innerHTML = this.questions[this.index].options[3];
    } else {
      quizbox.innerHTML = "Quiz Completed!";
      ul.style.display = "none";
      nextButton.style.display = "none";
      restartButton.style.display = "block";
    
    }
  },
  //NEXT BUTTON
  next: function () {
    this.index++;
    this.load();
  },
  
  //CHECK IF THE LAST VALUE OF EACH LI ELEMENT ID IS EQUAL TO THE ANSWER
  check: function (ele) {
    var id = ele.id.split("");
    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      this.scoreCard();
    } else {
      ele.className = "wrong";
    }
  },
  //CHECK WHEN AN OPTION IS CHOOSED AND PREVENT CLICK OF THE OTHER OPTIONS
  preventClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },
  //IF NOTHING IS SELECTED ALLOW CLICK TO OPTIONS
  allowClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = "";
    }
  },
  score: 0,

  //DISPLAY THE SCORE
  scoreCard: function () {
    scoreCard.innerHTML = this.score + "/" + this.questions.length;  
  },

  restart: function () {
    this.index = 0;
    this.score = 0;
    this.load();
    ul.style.display = "flex";
    nextButton.style.display = "block";
    scoreCard.innerText = "0";
    restartButton.style.display = "none";
  }
};

//LOAD APP WHEN THE WINDOW LOADS
window.load = app.load();

//BUTTON CLICK EVENTS
function button(ele) {
  app.check(ele);
  app.preventClick();
}

//FUNCTION TO CLICK NEXT
function next() {
  app.next();
  app.allowClick();
}

//RESTART FUNCTION
function restart() {
  app.restart();
}
