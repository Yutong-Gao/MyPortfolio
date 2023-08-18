const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.body) {
    let data = JSON.parse(event.body);
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          msg: "please fill all the fields",
        }),
      };
    }

    let smtpTransporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465,
      auth: {
        user: "yutongg1999@gmail.com",
        pass: "kezezwzctxrdxlem",
      },
    });
    let mailOptions = {
      from: data.email,
      to: "yutongg1999@gmail.com",
      subject: `message from ${data.name}`,
      html: `
                
                <h3>Informations</h3>
                <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                </ul>
                
                <h3>Message</h3>
                <p>${data.message}</p>
                `,
    };

    var success = false;
    try {
      smtpTransporter.sendMail(mailOptions);
      success = true;
    } catch (error) {
      success = false;
      console.log(error);
    }

    if (success) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          msg: "Thank you for contacting me!",
        }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({
          msg: "Send failed due to service error.",
        }),
      };
    }
  }
};
