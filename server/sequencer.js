import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

dotenv.config({ path: '../.env' });

app.listen(PORT, () => {
  logSeq('is running on port: ', PORT);
});
