import express from 'express';
import connectToDatabase from './db/config';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import routes from './routes/index';
import './db/models/index';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

// Connect to the database
connectToDatabase();

// Define routes
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
