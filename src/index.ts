import express from 'express';
import connectToDatabase from './db/config';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import routes from './routes/index';
import './db/models/index';

const app = express();
const port = 3000;

//Middelwars
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

connectToDatabase();

app.use(routes)

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});