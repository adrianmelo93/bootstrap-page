var x = document.querySelectorAll('li a');
var redButton = document.getElementById('Fancy');
redButton.addEventListener('click', function() {
    x[0].classlist.add('yellow-buton');
    x[1].classlist.add('yellow-buton');
    x[2].classlist.add('yellow-buton');
    x[3].classlist.add('yellow-buton');

});

var $form = $('#form');
var $formBtn = $('#formBtn');

$form.submit(function() {
    $.ajax({
        url: 'http://fvi-grad.com:4004/email',
        method: 'POST',
        data: $form.serialize()
    })
    .done(function() {
        $formBtn.html('Message sent!');
    })
    .fail(function() {
        $formBtn.html('Error sending message');
    });
});
