import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  console.log('RECEIVED REQUEST');
  res.send('<h1>Hello World</h1>');
});

app.listen(port, () => {
  console.log('Server Listening on port ', port);
})