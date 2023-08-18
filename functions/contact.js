const e = require("express");
const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.body) {
    let data = JSON.parse(event.body);
    console.log(data);
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

    smtpTransporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent:" + info.response);
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "Thank you for contacting me!",
      }),
    };
  }
};
