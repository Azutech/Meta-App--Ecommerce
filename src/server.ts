import express, { Application, Request, Response } from 'express';
import indexRoutes from './index';

const port = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('*', (req: Request, res: Response) =>
  res.status(404).send('404 Not Found')
);

app.listen(port, () => {
  console.log(`App now running and listening on port ${port}`);
});

export default app;
