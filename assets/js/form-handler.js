(function () {
    emailjs.init("JkN2rApvWuANYe7Nn");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_99poy4a';
    const templateID = 'template_um13shp';
    // Create a formData object and append additional fields
    const formData = new FormData(this);
    formData.append('to_name', 'Oyku'); // Update with actual recipient name if needed
    formData.append('from_name', formData.get('name'));
    formData.append('message', formData.get('message'));

    emailjs.sendForm(serviceID, templateID, formData)
        .then(() => {
            alert('Message sent successfully!');
            // Clear the form fields
            document.getElementById('contact-form').reset();
        }, (err) => {
            alert('Failed to send message: ' + JSON.stringify(err));
        });
});