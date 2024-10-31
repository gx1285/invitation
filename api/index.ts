import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { html } from 'hono/html';
export const config = {
  runtime: 'edge',
};

const app = new Hono();

app.get('/', (c) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./output.css" rel="stylesheet" />
        <title>Dinviter</title>
      </head>
      <body>
        <div class="p-2">
          <p class="text-5xl font-bold">Dinviter</p>
          <p>強化されたDiscord招待リンク<br />Coming Soon...</p>
        </div>
        <a
          href="https://discord.gg/qag762PXf2"
          class="border bg-indigo-700 p-2 m-2 rounded text-white hover:bg-indigo-800 hover:rounded-lg active:bg-indigo-900 active:rounded-xl focus:border-indigo-50 transition-all"
          >Support Server</a
        >
      </body>
    </html>
  `);
});

export default handle(app);
