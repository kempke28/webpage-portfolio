// Send message
// data:
// User ID: user_oYN5lnoA1zgCrylHiDKug
// Access Token :a3ac7c6ed63f59f28d52d8e8a5577a57

const btn = document.getElementById('send-button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_1hu58bi';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});