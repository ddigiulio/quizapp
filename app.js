var state = { 
  questions :[
  {
    question: "What is the correct number of starting workers in LOTV?",
    answers: [6,9,12,10],
    correct: 2,
  },
  {
    question: "Whats the earliest pool timing Zerg can do for cheese?",
    answers: [2,6,17,1],
    correct: 1,
  },
  {
    question: "Which unit has Yamato cannon and Time-warp ability?",
    answers: ["Battlecruiser", "Seige-tank", "Viper", "Carrier"],
    correct: 0,
  },
  {
    question: "Who is the God of Terran?",
    answers: ["Zest", "Life", "Innovation", "Maru"],
    correct: 2,
  },
  {
    question: "Which race is OP?",
    answers: ["Terran", "Protoss", "Zerg", "Orc"],
    correct: 1,
  }, 
  ],

 count : 0,
 totalCorrect : 0,

 listItemTemplate : (

  '<li>' +
    '<span class="questionText"></span>' +
    '<div class="answers">' +
    '</div>' +  
    '<button type="button" class="nextQuestion">Next Question</button>' +
  '</li>'

  ),

  finalPageTemplate : (

   '<h1>Starcraft Quiz</h1>' +
   '<span class ="finalScoreText">Final score is: </span>'+
   '<br/>' + 
   '<button type="button" class="newGame">New Game</button>'
  ),

  firstPageTemplate : (


  '<h1>Starcraft Quiz</h1>' +
  '<button type="button" class="startButton">Start</button>' +
  '<form>' +
  '<ul class="myQuiz">' +
  '</ul>' +
  '</form>'

  ),


};


var checkAnswer = function(value, state, elementList){

  //var newValue = parseInt(value);
  //elementCurrent = $(elementList);

 // console.log("The current count is: " + state.count);
  //console.log("The current checked value is: " + value); 

  if(value === (state.questions[state.count].answers[state.questions[state.count].correct]).toString())
  {
   // elementCurrent.find(".answer:checked").append("<span>Correct!</span>");
    alert("Correct!");
    state.totalCorrect ++;
   
  }

  else alert("Incorrect!");

  //elementList.html(elementCurrent);
  state.count ++;


}

var renderItem = function(item, elementTemplate){

  var elementCurrent = $(elementTemplate);
  elementCurrent.find("span").text(state.questions[state.count].question);
  for(var i = 0 ; i < state.questions[state.count].answers.length ; i++)
  {
    elementCurrent.find(".answers").append(`<input type="radio" name="answer" value="${state.questions[state.count].answers[i]}"> ${state.questions[state.count].answers[i]} <br>`);   
  }

  return elementCurrent;
}

var renderList = function(state, element){

  var itemsHTML = renderItem(state[state.count],state.listItemTemplate);
  element.html(itemsHTML);
  
};

var renderLastPage = function(state, element){

  var elementCurrent = $(state.finalPageTemplate);
  elementCurrent.siblings(".finalScoreText").append(`<span class ="finalScore">${state.totalCorrect}</span>`);
  element.html(elementCurrent);

}

var renderFirstPage = function(state, element){
  state.count = 0;
  elementNew = $(state.firstPageTemplate);
  element.html(elementNew);
}


$(".container").on("click", ".startButton", function(event){
 
  $( "div button").toggleClass( "hidden");
  renderList(state, $('.myQuiz'));

});

$(".container").on("click", ".nextQuestion", function(event){

  if(state.count != 5){
  renderList(state, $('.myQuiz'));
  }

  else {
  renderLastPage(state, $('.container'));
  }

});

$(".container").on("click", ".newGame", function(event){

  //alert("NEW GAME");
  renderFirstPage(state, $('.container'));

});




$("ul").on('change', "input", function(){

  checkAnswer($(this).val(), state, $('.myQuiz'));

});






