var $er = "#ea8585";
var $cor = "white";
var $error = null;
var $errorInfo = null;
var $modal = null;
var $formUrl = "https://alfa-credits.com.ua/card/submit";
var $smsUrl = "https://alfa-credits.com.ua/sms_submit";
var $formData = {
    first_name: "",
    last_name: "",
    phone: "",
    inn: "",
    placement: "",
    url: "https://ad.admitad.com/g/5351d3d56e7145ae5681e6dcee139a0ef8bffa25/",
    confirmation: "1"
};
var $formResponse = {};
var $smsResponse = {
};
var $regName = new RegExp("^([а-яА-ЯЁёіІєЄїЇґҐ -])+$");
var $regMobile = new RegExp("^[0](39|50|6[3,6-8]|9[1-9])\\d{7}$");
var $regPass = new RegExp("^([А-я]{2}[0-9]{6})+$");
var $regID = new RegExp("[0-9]{10}");
var $regJob = new RegExp("(\\-)+");

$(function() {

    $error = $(".error");
    $errorInfo = $(".error#info")

})
