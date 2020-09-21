import express, { json, Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import { ErrorHandler, NotFoundHanlder } from './middlewares';

import routes from './routes';

// Init
const app: Application = express();

// Settings
app.set('port', 5050);

// Middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());
app.use(helmet());

// Routes
app.use('/', routes);

// Error hanlders
app.use(NotFoundHanlder);
app.use(ErrorHandler);

// Exporting the app const
export default app;