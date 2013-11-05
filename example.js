$(function(){
  
  $('#submit_form').on('click', function(event){
    event.preventDefault();
    clearErrors();
    
    var form = $(this).closest('form');
    var url = form.attr('action');
    var results_list = $('#results');
    
    results_list.html('<li class="list-group-item">Searching..</li>');
    
    $.ajax({
      dataType: "json",
      url: url,
      data: form.serialize()
    })
      .done(function( data ) {
        renderResults(data);
      })
      .fail(function( jqxhr, textStatus, error ) {
        renderError(jqxhr);
    });
    
  });
  
  $('#clear_form').on('click', function(){
    clearErrors();
  });
  
});

function renderResults(data){
  var results_list = $('#results');
  
  results_list.html('');
  
  if( data.length > 0 ){
    $.each(data, function(i, obj) {
      results_list.append('<li class="list-group-item">'+ obj.full_address +'</li>');
    });
  }
  else {
    results_list.append('<li class="list-group-item">No results found</li>');
  }
}

function renderError(jqxhr){
  var results_list = $('#results');
  results_list.html('');
  
  if( jqxhr.status == 401 ){
    // Unauthorized
    results_list.append('<li class="list-group-item error-message">Unauthorized Access</li>');
  }
  else if( jqxhr.status == 422 ){
    
    var error = $.parseJSON(jqxhr.responseText);
    
    if( error.code == "validation_failed" ){
      results_list.append('<li class="list-group-item error-message">'+ error.message +'</li>');
    
      field_error_messages = $('<li class="list-group-item"></li>');
    
      $.each(error.errors, function(i, field_error) {
        $("#" + field_error.field).closest('.form-group').addClass('has-error');
        field_error_messages.append('<li class="field-error-message">'+ field_error.message +'</li>');
      });
    
      results_list.append(field_error_messages);
    }
  }
}

function clearErrors(){
  var results_list = $('#results');
  results_list.html('');
  $('.form-group').removeClass('has-error');
}