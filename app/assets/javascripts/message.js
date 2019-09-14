$(function(){
  function buildHTML(message){
    var image = (message.image.url) ?  `<img src =${message.image.url}> `: "";

    var html = `<div class= "message" data-meesage-id=${message.id}> 
                 <div class="upper-message"> 
                   <div class="upper-message__user-name">
                    ${message.user_name }
                   </div>
                   <div class="upper-message__date">
                     ${message.date}
                   </div>
                 </div>
                 <div class="lower-message">
                   <p class="lower-message__content">
                    <div>
                     ${message.content}
                    </div>
                    ${image}
                   </p>
                 </div>
                </div>`       
                 return html;
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .always(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })
  })
})