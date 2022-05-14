import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import UserRoute from './routes/UserRoute.js';

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(UserRoute);

app.listen(5000, () => {
  console.log('Server up and running...');
});
