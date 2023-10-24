const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
    console.log("Requête reçue");
    const { name, email, message } = req.body;
    
    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pablohassoun@gmail.com',
            pass: 'tjpi lmol lqwy gici'
        }
    });

    const mailOptions = {
        from: email,
        to: 'pablohassoun@gmail.com',
        replyTo: email,
        subject: `Message de ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email envoyé');
    } catch (error) {
        console.log(error);
        res.status(500).send('Erreur lors de l’envoi de l’email');
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
