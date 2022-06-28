var feedbacks = require('../models/feedbackModel');
var gradeAngles = require('../models/anglesModel');


module.exports = function(app){

        app.get('/test', function(req, res) {

            // add to database
            var feedbackForm = 
            [   {

                    feedbackName: ['thingy'],
                    emailAddress: ['complete@all.com'],
                    feedback: ['stuff I write']
            }
            ];
            feedbacks.create(feedbackForm, function (err, results){
                console.log(feedbackForm);     
                    res.send(results);
            });


                // add to database
                var anglesGrade = 
                [   {
    
                        correct: [3],
                }
                ];
                gradeAngles.create(anglesGrade, function (err, results){
                    console.log(anglesGrade);     
                        res.send(results);
                });
    
          

        });

    
        


}