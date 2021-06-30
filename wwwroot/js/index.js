let referenceModal = null;

$(document).ready(function() {

    $('#call').submit(function (e){
        e.preventDefault();

        swal({
            title: "Спасибо за обращение!",
            text: " Мы перезвоним Вам в ближайшее время.",
            icon: "success",
            button: "Хорошо",
        });

        $(this).closest('form').find("input[type=text], textarea").val("");
    })

    let root = $('#social')

    $(root).find('a')
        .each(function() {
            new bootstrap.Tooltip($(this))
        });

    referenceModal = new bootstrap.Modal(document.getElementById('reference_modal'), {
        backdrop : 'static'
    });
});

function toggleRefModal(){
    referenceModal.toggle();
}

function sendRefModal(title){
    $('#reference_title').text(title);
    let content = $('#reference_content');

    content.append('<label for="name_input" class="form-label">Ваше имя:</label>')
    content.append('<input id="name_input" name="value" class="form-control" required="required">');
    content.append('<label for="phone_input" class="form-label mt-2">Телефон:</label>')
    content.append('<input id="phone_input" name="value" class="form-control" required="required">');
    content.append('<label class="mb-1 mt-2" for="textAsk">Текст сообщения:</label>')
    content.append('<textarea name="ask_text" required class="form-control" id="textAsk" rows="3"></textarea>');

    referenceModal.show();
}

$(document).on('hidden.bs.modal','#reference_modal', function () {
    $('#reference_content').empty();
    $('#info_msg_ref').empty();
})
