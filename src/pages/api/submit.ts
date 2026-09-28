import type { APIRoute } from "astro";
import { DISCORD_WEBHOOK_URL } from "astro:env/server";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  const email = data.get("email");
  const message = data.get("message");
  if (!(
    typeof email === "string" &&
    typeof message === "string" &&
    email.length > 0 &&
    message.length > 0 &&
    email.length <= 120 &&
    message.length <= 600
  ))
    return new Response("Invalid form data", { status: 400 });

  if (DISCORD_WEBHOOK_URL)
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: null,
        embeds: [
          {
            title: "New Contact Form Submission",
            fields: [
              {
                name: "Email",
                value: email,
              },
              {
                name: "Message",
                value: message,
              },
            ],
          },
        ],
      }),
    });

  return redirect("/thanks", 303);
};
