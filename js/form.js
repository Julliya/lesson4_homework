$(function() {
    $("form input[type='submit']").click(sendForm);
});
function sendForm(e) {
    e.preventDefault();
    if ($('input[type=text]').val() == "" || $('input[type=email]').val() == "") {
        $("#help").html("<h4>Заповніть поля форми!</h4>");
    } else {
        $.ajax({
            url: "https://formspree.io/julli.babenko@gmail.com",
            method: "POST",
            data: {
                clientName: $('#clientName').val(),
                email: $('#email').val(),
                comment: $('#comment').val()
            },
            dataType: 'json'
        }).done(function() {
            $('form').html('<h2>Ваше повідомлення успішно відправлено</h2>');
            $("#help").html("");
        }).fail(function() {
            $('form').html('<h2>Помилка відправлення</h2>');
            $("#help").html("");
        })

    }

}
