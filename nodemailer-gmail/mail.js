const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
    auth: {
      user: 'pavithra.web.developer@gmail.com',
      pass: 'hjhn xyse toyv otrf'
    }
});

// send mail with defined transport object
function sendMail(formData) {
    let mailOptions = {
        from: formData.email,
        to: 'pavi261105@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nWebsite: ${formData.website}\nMessage: ${formData.message}`,
        html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Website: ${formData.website}</p><p>Message: ${formData.message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: %s', info.messageId);
        }
    });
}

module.exports = {
    sendMail
};