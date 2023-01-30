require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
console.log(process.env.REACT_APP_SENDGRID_API_KEY)
exports.handler = async function (event, context) {
    const { to, subject, text } = JSON.parse(event.body);
    const msg = {
        to,
        from: 'sender@example.com',
        subject,
        text
    };

    try {
        await sgMail.send(msg);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" }),
        };
    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }

};