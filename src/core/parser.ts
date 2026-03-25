import OpenAI from "openai";
import { config } from "../config/env";

const client = new OpenAI({
  apiKey: config.openaiKey,
});

export async function parseIntent(input: string) {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Extract structured blockchain intent (action, token, amount, protocol).",
      },
      {
        role: "user",
        content: input,
      },
    ],
  });

  return res.choices[0].message.content;
}
