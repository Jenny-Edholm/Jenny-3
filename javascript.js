function formSubmit(event) {
    event.preventDefault();

    var formData = event.srcElement;

    var thankYouMessage = document.getElementById("thankYou");

    thankYouMessage.innerText = "Awesome " + formData.formName.value + "! I will be in contact shortly. Have a great day!";

    console.log(formData.formName.value);
    console.log(formData.formEmail.value);
    console.log(formData.formPhone.value);
    console.log(formData.formMessage.value);
    console.log(formData.formConsent.checked);
}