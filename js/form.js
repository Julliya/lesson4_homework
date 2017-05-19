$(function(){
   $("form input[type='submit']").click(sendForm);
});
function sendForm(e){
    e.preventDefault();
    $.ajax({
        url:"https://formspree.io/julli.babenko@gmail.com",
        method: "POST",
        data:{
            clientName: $('#clientName').val(),
            email: $('#email').val(),
            comment:  $('#comment').val()
        },
        dataType:'json'
    }).done(function(){
      $('form').html('<h1>Ваше повідомлення успішно відправлено</h1>'); 
    }).fail(function(){
        $('form').html('<h1>Помилка відправлення</h1>');
    })
        
    }
