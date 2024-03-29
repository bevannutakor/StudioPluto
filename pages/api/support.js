const nodemailer = require('nodemailer');

export default async function support(req, res){
    if(req.method === "POST"){
        try{
            await fetch("https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.gRecaptchaToken}`
            })
            .then((reCaptchaRes) => reCaptchaRes.json())
            .then((reCaptchaRes) => {
                console.log(
                  reCaptchaRes,
                  "Response from Google reCaptcha verification API"
                );
                if (reCaptchaRes.score > 0.5) {
                    //send email using node mailer
                    let transporter = nodemailer.createTransport({
                        host: process.env.ZOHO_HOST,
                        secure: false,
                        port: 587,
                        auth: {
                            user: process.env.ZOHO_USER,
                            pass: process.env.ZOHO_PASSWORD
                        }
                    })
            
                    const mailOptions = {
                        from: process.env.ZOHO_USER,
                        to: process.env.ZOHO_USER,
                        subject: `Support: ${req.body.service}`,
                        text: `${req.body.name} <${req.body.email}> \n Shop Url: ${req.body.shop} \n
                        Description: ${req.body.description}`
                    }
            
                    transporter.sendMail(mailOptions, (error, data) => {
                        if(error){
                            return res.status(401).json({
                                status: "failure",
                                message: "There was an error submitting the form",
                            });
                        } else {
                            console.log("Email sent successfully")
                            return res.status(200).json({
                                status: "success",
                                message: "Form submitted successfully",
                            });
                        }
                    })

                } else {
                  return res.status(400).json({
                    status: "failure",
                    message: "Google ReCaptcha Failure",
                  });
                }
              })
        } catch(err) {
            res.status(err.status).json(err.response.data);
        }
    } else {
        res.status(405).json({
            status: "failure",
            message: "Method Not Allowed",
        });
    }
}