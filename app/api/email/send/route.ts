import { NextResponse } from "next/server";
import sg from "@sendgrid/mail";
import { db } from "@/lib/db";

sg.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: Request) {
  const { to, subject, html } = await req.json();
  if (!to || !subject || !html) return NextResponse.json({error:'Missing fields'},{status:400});
  const convo = await db.conversation.create({ data:{ channel:'email', subject } });
  const msg = await db.message.create({ data:{ conversationId:convo.id, direction:'outbound', emailTo:to, emailSubject:subject, bodyHtml:html, emailStatus:'sending' } });
  return NextResponse.json({ ok:true, conversationId: convo.id });
}
