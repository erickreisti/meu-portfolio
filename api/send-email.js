const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // CORS headers
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

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Validação
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    // Verifica se as variáveis de ambiente estão configuradas
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("Variáveis de ambiente não configuradas");
      return res
        .status(500)
        .json({ error: "Configuração do servidor incompleta" });
    }

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      subject: `Novo contato: ${name}`,
      html: `
        <h2>Novo contato do portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    });

    console.log("Email enviado com sucesso:", data);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({
      error: "Erro interno do servidor",
      details: error.message,
    });
  }
};
