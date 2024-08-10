(function () {
    emailjs.init("JkN2rApvWuANYe7Nn");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_99poy4a';
    const templateID = 'template_um13shp';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
        }, (err) => {
            alert(JSON.stringify(err));
        });
});