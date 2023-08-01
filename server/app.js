import bodyParser from 'body-parser';
import express from 'express';

import eventRouter from './routes/events.js';

const app = express();

app.use(bodyParser.json());

app.use(eventRouter);

app.listen(process.env.PORT);
console.log('Listening on port', process.env.PORT);
