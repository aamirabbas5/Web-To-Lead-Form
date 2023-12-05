function beforesubmit() {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value", inputdate.value);

    let formatedDate = new Date(inputdate.value).toLocaleDateString('ur-PK');
    outputdate.value = formatedDate;

}