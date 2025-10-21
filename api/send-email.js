const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // Configurar CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Lidar com preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      subject: `Novo contato: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Novo Contato - Portfolio</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #667eea; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎯 Novo Contato - Portfolio</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Nome:</span> ${name}
                </div>
                <div class="field">
                  <span class="label">Email:</span> ${email}
                </div>
                <div class="field">
                  <span class="label">Mensagem:</span><br>
                  ${message.replace(/\n/g, "<br>")}
                </div>
                <hr style="margin: 20px 0;">
                <p style="color: #666; font-size: 12px;">
                  Enviado em: ${new Date().toLocaleString("pt-BR")}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        NOVO CONTATO - PORTFOLIO

        Nome: ${name}
        Email: ${email}
        Mensagem: ${message}

        Enviado em: ${new Date().toLocaleString("pt-BR")}
      `,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
