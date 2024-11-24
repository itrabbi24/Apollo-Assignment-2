import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// parsers
app.use(express.json());
app.use(cors());


// routes
app.get('/', (req: Request, res: Response) => {
  res.send('Book Store Server is running........');
});


export default app;