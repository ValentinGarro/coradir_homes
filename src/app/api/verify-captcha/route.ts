import { NextRequest, NextResponse } from 'next/server';

const RECAPTCHA_SECRET = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, ...formData } = body;

    // 1. Validar el token de reCAPTCHA con Google
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
      }
    );
    const recaptchaJson = await recaptchaRes.json();

    if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
      return NextResponse.json(
        { error: 'Fallo la verificación de reCAPTCHA.' },
        { status: 400 }
      );
    }

    // 2. Procesa el formulario (enviar mail, guardar en DB, etc.)
    // Aquí puedes hacer lo que necesites con formData

    return NextResponse.json({ ok: true, message: 'Formulario recibido' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error procesando la solicitud.' },
      { status: 500 }
    );
  }
}