var correct = 0;
var preventDefault = 0;
function getAnglesResults(correct) {
  var anglesGrade = { 
      correct: []
  }; 

  anglesGrade.correct.push(correct); 

  
$.post("/assets/maths_questions.html", $.param(anglesGrade));
}

$( '#question-form' ).on('submit', function(e) {

if($( 'input[class^="1"]:checked' ).length === 0) {
   alert( 'Oops! You did not select an answer.' );
   preventDefault = preventDefault + 1;
   e.preventDefault();
}
if($( 'input[class^="1"]:checked' ).length > 1) {
   alert( 'Oops! You selected too many answers.' );
   preventDefault = preventDefault + 1;
   e.preventDefault();
}
if($( 'input[value="1a"]').is(':checked')&& $( 'input[class^="1"]:checked' ).length === 1 ) {
   correct = correct + 1;

}

if($( 'input[class^="2"]:checked' ).length === 0) {
   alert( 'Oops! You did not select an answer.' );
   preventDefault = preventDefault + 1;
   e.preventDefault();
}
if($( 'input[class^="2"]:checked' ).length > 1) {
   alert( 'Oops! You selected too many answers.' );
   preventDefault = preventDefault + 1;
   e.preventDefault();
}
if($( 'input[value="2a"]').is(':checked')&& $( 'input[class^="2"]:checked' ).length === 1 ) {
   correct = correct + 1;

}

if($( 'input[class^="3"]:checked' ).length === 0) {
   alert( 'Oops! You did not select an answer.' );
   preventDefault = preventDefault + 1;
   e.preventDefault();
}

if($( 'input[class^="3"]:checked' ).length > 1) {
   alert( 'Oops! You selected too many answers.' );
   preventDefault = preventDefault + 1;
   e.preventDefault();
}

if($( 'input[value="3d"]').is(':checked')&& $( 'input[class^="3"]:checked' ).length === 1 ) {
   correct = correct + 1;
  
}


if((correct >= 2)&&(preventDefault == 0)){
  alert( 'Well done. Back to the Scratch video...' );
  close('maths_questions.html', 'aWin', 'height = 900, width = 900');

}

if((correct<2)&&(preventDefault ==0)){

  alert('Let\'s learn more about angles...');

var angleWin = open('../assets/JQPlayerAngles.html', 'anglesWin', 'height = 600, width = 600');

}

getAnglesResults(correct);

});
