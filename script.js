/*Add your JavaScript here*/
var summerScore = 0;
var winterScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var restart = document.getElementById("restart");

// Event listeners
q1a1.addEventListener("click", Winter);

q1a2.addEventListener("click", Summer);


q2a1.addEventListener("click", Winter);

q2a2.addEventListener("click", Summer);


q3a1.addEventListener("click", Winter);

q3a2.addEventListener("click", Summer);


restart.addEventListener("click", clear);

//Winter and Summer scores-functions
function Winter() {
  winterScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " winterScore = " + winterScore);

  if (questionCount == 3) {
  console.log("The quiz is done!");
    updateResult();}}
function Summer() {
  summerScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " summerScore = " + summerScore);

  if (questionCount == 3) {
  console.log("The quiz is done!");
    updateResult();}}

if (summerScore >= 2) {
  console.log ("You're a summer!");} 
else if (winterScore >= 2) {
  console.log("You're a winter!");}

function updateResult() {
    if (summerScore >= 2) {
      result.innerHTML = "You are a summer!"
    console.log ("You're a summer!");} 
    else if (winterScore >= 2) {
      result.innerHTML = "You are a winter!"
    console.log("You're a winter!");}}

//function clear() {
  //result.innerHTML = "Your result is..."
  //summerScore = 0;
  //winterScore = 0;
 // questionCount = 0;

  //console.log(" questionCount = " + questionCount);
  //console.log(" summerScore = " + summerScore);
  //console.log(" winterScore = " + winterScore);}

function updateResult() {
  if (summerScore <= 7) {
    result.innerHTML = "You are a summer!"
  console.log ("You are a summer!");} 
  else if (winterScore <= 7) {
    result.innterHTML = "You are a winter!"
  console.log("You are a winter!");}}
