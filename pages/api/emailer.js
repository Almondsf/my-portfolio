import nodeMailer from "nodemailer";

export default async function emailer(req, res) {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
  });

  try {
    let response = "";
    response = await transporter.sendMail({
      to: "oloyedeoluwafemi22@gmail.com",
      from: "oloyedeoluwafemi22@gmail.com", // Use the email address or domain you verified above
      subject: req.body.subject,
      text: `I am ${req.body.fullName}. The reason for contacting you is this: ${req.body.message}. This is my email right here: ${req.body.email}. I contacted you through your portfolio`,
    });
    return res.status(200).json({ response });
  } catch (error) {
    console.error(error);

    if (error) {
      return res.status(500).json({ error });
    }
  }
}
