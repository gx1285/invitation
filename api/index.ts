import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { web } from './web';
import { rest } from './rest';
import { discord } from './discord';
export const config = {
  runtime: 'edge',
};
const app = new Hono();

app.route('/', web);
app.route('/api', rest);
app.route('/dapi', discord);

export default handle(app);
