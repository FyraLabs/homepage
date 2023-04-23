interface Env {
  DISCORD_WEBHOOK_URL?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const data = await context.request.formData();
  const email = data.get("email");
  const message = data.get("message");
  if (
    !(
      email &&
      message &&
      email.length > 0 &&
      message.length > 0 &&
      email.length <= 120 &&
      message.length <= 600
    )
  )
    return new Response("Invalid form data", { status: 400 });

  // DISCORD_WEBHOOK_URL may not be set in preview deploys
  if ("DISCORD_WEBHOOK_URL" in context.env)
    await fetch(context.env.DISCORD_WEBHOOK_URL, {
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

  return Response.redirect("https://fyralabs.com/thanks", 303);
};
