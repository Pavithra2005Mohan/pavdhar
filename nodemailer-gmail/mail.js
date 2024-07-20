const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  tls: {
    ciphers: 'SSLv3'
  },
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD
  }
});

function sendMail(formData) {
  const mailOptions = {
    from: formData.email,
    to: 'pavi261105@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nWebsite: ${formData.website}\nMessage: ${formData.message}`,
    html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Website: ${formData.website}</p><p>Message: ${formData.message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = {
  sendMail
};