function getFormData() {
    var feedbackForm = { 
        feedbackName: [],
        emailAddress: [],
        feedback: []
    }; 


    var nameResults = $('#feedbackForm').find('#feedbackName').val();
    feedbackForm.feedbackName.push(nameResults);
    
    var emailResults = $('#feedbackForm').find('#emailAddress').val();
    feedbackForm.emailAddress.push(emailResults);

    var feedbackResults = $('#feedbackForm').find('#feedback').val();
    feedbackForm.feedback.push(feedbackResults);   
  


$.post("/", $.param(feedbackForm));

}