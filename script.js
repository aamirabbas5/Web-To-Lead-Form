function beforesubmit() {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value", inputdate.value);

    let formatedDate = new Date(inputdate.value).toLocaleDateString('ur-PK');
    outputdate.value = formatedDate;
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

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Check if reCAPTCHA is checked
    var response = grecaptcha.getResponse();

    if (response.length === 0) {
        alert("Please check reCAPTCHA before submitting the form!");
    } else {
        // If reCAPTCHA is checked, submit the form
        document.getElementById("myForm").submit();
    }
}