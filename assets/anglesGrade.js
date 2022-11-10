/*global variables on which pass or fail of angles quiz is determined*/
var correct = 0;
var preventDefault = 0;
/*function to calculate score in angles quiz, and then determine
pass or fail*/
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
      alert( 'Well done. Back to the Scratch video...' )
      e.preventDefault();
      window.location.href ='JQPlayer.html';
    
 
   }

   if((correct<2)&&(preventDefault ==0)){
      alert('Let\'s learn more about angles...');
      e.preventDefault();
      window.location.href = 'JQPlayerAngles.html';
   }

   getAnglesResults(correct);

});
