var feedbacks = require('./models/feedbackModel');
var gradeAngles = require('./models/anglesModel');
var bodyParser = require('body-parser');
const { get } = require('mongoose');


module.exports = function(app) {


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/', function(req, res,next) {

   //      add to database
        var databaseFeedback = 
        [   {

                feedbackName: req.body.feedbackName,
                emailAddress: req.body.emailAddress,
                  feedback: req.body.feedback
        }
        ];

        feedbacks.create(databaseFeedback, function (err, results){
            console.log(databaseFeedback);     
               res.redirect('/');
        });

      });


      app.post('/assets/maths_questions.html', function(req, res,next) {

        var databaseAngles = 
        [   {

                correct: req.body.correct,
        }
        ];

        gradeAngles.create(databaseAngles, function (err, results){
            console.log(databaseAngles);     
               res.redirect('/');
        });

      });


    app.get('/', function(req, res) {

//     var todos =   Todos.findOne().sort('-_id').exec({todos},
   //         function(){
  //                  if(err) throw err;    }
                    res.render('structure');
  
        
     
    });

  

        
}
