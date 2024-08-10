(function () {
    emailjs.init("JkN2rApvWuANYe7Nn");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_99poy4a';
    const templateID = 'template_um13shp';
    const formData = new FormData(this);

    console.log('Form Data:', {
        to_name: 'Oyku',
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message')
    });
    // Create a formData object and append additional fields
    formData.append('to_name', 'Oyku');
    formData.append('from_name', formData.get('name'));
    formData.append('from_email', formData.get('email'));

    emailjs.sendForm(serviceID, templateID, formData)
        .then(() => {
            alert('Message sent successfully!')
            // Clear the form fields
            document.getElementById('contact-form').reset();
        }, (err) => {
            alert('Failed to send message: ' + JSON.stringify(err));
        })
})
