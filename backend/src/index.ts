import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the server');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});