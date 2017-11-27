
function _format(e) {
//Сброс предупреждение о неправильном вводе в поле + делает первую букву заглавное, а остальные -- маленькими
    var $t = $(e.target);
    $t.val($t.val().slice(0, 1).toUpperCase() + $t.val().slice(1).toLowerCase());
    _reset($t);
}

function _reset(e) {
//Сброс предупреждение о неправильном вводе в поле
    $(e).css("background", $cor);
    $error.css("display", "none");
    $errorInfo.html("");
}

function _mark(e) {
//Отображение ошибки о неправильном вводе в поле и ее описание
    $(e).css("background", $er);
    $error.css("display", "block");
    var $erText = "";
    if (!$regName.test($("#name").val().trim()))
        $erText += "- Введите имя кириллицей<br>";
    if (!$regName.test($("#surname").val().trim()))
        $erText += "- Введите фамилию кириллицей<br>";
    if (!$regMobile.test($("#mobile").val()))
        $erText += "- Введите мобильный телефон<br>";
    if (!$regID.test($("#ID").val().trim()))
        $erText += "- Введите десять цифр идентификационного кода<br>";
    if ($regJob.test($(":selected", "#job").text()))
        $erText += "- Выберите чем занимаетесь<br>";
    $errorInfo.html($erText);
}

function _check() {
//Проверка правильности ввода в поля и отправка формы если все правильно (функция для кнопки отправить)
    var $correct = true;
    if (!$regName.test($("#name").val().trim())) {
        _mark($("#name"))
        $correct = false;
    }
    if (!$regName.test($("#surname").val().trim())) {
        _mark($("#surname"))
        $correct = false;
    }
    if (!$regMobile.test($("#mobile").val())) {
        _mark($("#mobile"))
        $correct = false;
    }
    if (!$regID.test($("#ID").val().trim())) {
        _mark($("#ID"))
        $correct = false;
    }
    if ($regJob.test($(":selected", "#job").text())) {
        _mark($("#job"))
        $correct = false;
    }
    if ($correct) {
        $formData.first_name = $("#name").val().trim();
        $formData.last_name = $("#surname").val().trim();
        $formData.inn = $("#ID").val().trim();
        $formData.placement = $(":selected", "#job").val();
        $formData.phone = $("#mobile").val().trim();
        _sendForm();
    }
}

function _sendForm() {
//Отправка формы на сервер и обработка ответа от сервера, вызов pop-up, если все отлично
 /*   $.get($formUrl, $formData, function(data) {
        $formResponse = data
    }).done(function() {
        if ($formResponse.status == "error")
            alert($formResponse.error)
        else if ($formResponse.status == "success" && $formResponse.id == 0)
            alert("Банк не принял заявку")
        else if ($formResponse.status = "sended sms") {
            $modal = window.open("modal.html", "Confirm", "width=300,height=200");
        }
    })*/

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            $data = this.responseText;
       }
    };
    xhttp.open("POST", $formUrl, true);
    xhttp.send();
    $modal = window.open("modal.html", "Confirm", "width=300,height=200");

}

function _sendSms() {
//Отправка кода из смс на сервер и обработка ответа от сервера
    if ($("#sms").val().trim() != "") {
        $.get("https://alfa-credits.com.ua/sms_submit", {
            sms_id: $formResponse.sms_id,
            sms_code: $("#sms").val().trim(),
            id: $formResponse.id
        }, function(data) {
            $smsResponse = data
        }).done(function() {
                if ($smsResponse.status == "error")
                    alert($smsResponse.error)
                else if ($smsResponse.status == "success")
                    if ($smsResponse.id == 0)
                        alert("Банк не принял заявку")
                    else {
                        $modal.close();
                        alert("Заявка оформлена, Ваш ID " + $smsResponse.id)
                    }
        })
}
}
