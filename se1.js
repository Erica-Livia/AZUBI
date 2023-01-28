const form = document.getElementById('message-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const recipient = document.getElementById('recipient').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  sendMessage(recipient, subject, message);
});

async function sendMessage(recipient, subject, message) {
  const response = await fetch('https://api.whatsapp.com/send', {
    method: 'POST',
    body: JSON.stringify({
      recipient: recipient,
      subject: subject,
      message: message,
    }),
  });
  const result = await response.json();
  if (result.success) {
    alert('Message sent successfully!');
  } else {
    alert('Error sending message: ' + result.error);
  }
}
