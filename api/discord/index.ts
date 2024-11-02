import { Hono } from 'hono';
import { env } from 'hono/adapter';
import { verifyKey } from 'discord-interactions';
import { InteractionResponseType } from 'discord-api-types/v10';
export const config = {
  runtime: 'edge',
};
const app = new Hono();

app.post('/interactions', async (c) => {
  const signature = c.req.header('X-Signature-Ed25519');
  const timestamp = c.req.header('X-Signature-Timestamp');
  const body = c.req.raw.body as any;
  const { DISCORD_KEY } = env<{ DISCORD_KEY: string }>(c);
  if (!verifyKey(body, signature ?? '', timestamp ?? '', DISCORD_KEY)) {
    c.status(401);
    return c.json({ message: 'invalid request signature' });
  } else {
    const body = await c.req.json();
    if (body.type === InteractionResponseType.Pong) {
      return c.json({ type: InteractionResponseType.Pong });
    } else {
      return c.json({
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          content: 'Hello world',
        },
      });
    }
  }
});

export const discord = app;
