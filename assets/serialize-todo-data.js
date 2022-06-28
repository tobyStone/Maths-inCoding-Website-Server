function getData() {
    var todos = { 
      todo : [],
      completed : []
    }; 
    $('#todo-list').each( function() {
      var task = $(this).find('.task').text();   
      todos.todo.push(task);
    });
    $('#completed-list').each( function() {
      var task = $(this).find('.task').text();   
      todos.completed.push(task);
    });
    return $.param(todos);
  }