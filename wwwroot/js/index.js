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
});

