import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import hotelsRouter from './routes/hotels';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/hotels', hotelsRouter);

app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date() }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
