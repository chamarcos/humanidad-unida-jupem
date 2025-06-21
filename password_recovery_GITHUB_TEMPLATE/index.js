const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>Recovery System Humanidad-UNIDA-JUPEM</h1>
    <form method="POST" action="/recover">
      <label for="email">Correo electrónico:</label><br>
      <input type="email" name="email" required><br><br>
      <button type="submit">Recuperar contraseña</button>
    </form>
  `);
});

app.post('/recover', (req, res) => {
  const email = req.body.email;

  // Simulación de envío de correo (no configurado aún)
  console.log(`Se solicitó recuperación para: ${email}`);
  res.send(`<p>Si el correo ${email} está registrado, se enviará un mensaje de recuperación.</p>`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
