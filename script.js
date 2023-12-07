function beforesubmit() {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value", inputdate.value);

    let formatedDate = new Date(inputdate.value).toLocaleDateString('ur-PK');
    outputdate.value = formatedDate;

    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Please check reCAPTCHA before submitting the form!");
        return false;
    }
    return true;
}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    }
}
setInterval(timestamp, 500);

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("leadForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var response = grecaptcha.getResponse();
        if (response.length === 0) {
            alert("Please check reCAPTCHA before submitting the form!");
            return false;
        } else {
            form.submit();
        }
    });
});