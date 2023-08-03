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

    smtpTransporter.sendMail(mailOptions, (error) => {
      try {
        if (error) {
          return {
            statusCode: 400,
            body: JSON.stringify({
              msg: "please fill all the fields",
            }),
          };
        }
        return {
          statusCode: 200,
          body: JSON.stringify({
            msg: "Thank you for contacting me!",
          }),
        };
      } catch (error) {
        if (error) {
          return {
            statusCode: 500,
            body: JSON.stringify({
              msg: "There is server error.",
            }),
          };
        }
      }
    });
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Thank you for contacting me!",
    }),
  };
};
