(function () {
    emailjs.init("JkN2rApvWuANYe7Nn");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_99poy4a';
    const templateID = 'template_um13shp';
    const formData = new FormData(this);

    const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message')
    }


    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            alert('Message sent successfully!')
            // Clear the form fields
            document.getElementById('contact-form').reset();
        }, (err) => {
            alert('Failed to send message: ' + JSON.stringify(err));
        })
})
