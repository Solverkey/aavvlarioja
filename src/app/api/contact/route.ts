import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "federacion@aavvlarioja.org";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Federación AAVV La Rioja <noreply@aavvlarioja.org>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Web] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d; border-bottom: 2px solid #2563eb; padding-bottom: 12px;">
            Nuevo mensaje desde la web
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 120px; vertical-align: top;">Nombre:</td>
              <td style="padding: 8px 12px; color: #1f2937;">${name}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; vertical-align: top;">Email:</td>
              <td style="padding: 8px 12px; color: #1f2937;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; vertical-align: top;">Asunto:</td>
              <td style="padding: 8px 12px; color: #1f2937;">${subject}</td>
            </tr>
          </table>
          <div style="background-color: #f3f4f6; border-radius: 8px; padding: 16px; margin-top: 12px;">
            <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Mensaje:</p>
            <p style="color: #1f2937; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">
            Enviado desde el formulario de contacto de aavvlarioja.org
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Inténtalo más tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
