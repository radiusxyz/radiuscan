import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
import fs from 'fs';
import cheerio from 'cheerio';

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

dotenv.config({ path: '../.env' });

app.get('/rollup/block/:blockNumber', async (req, res) => {
  const blockNumber = req.params.blockNumber;

  const data4explorer = [];

  const { data } = await axios.get(
    'https://optimistic.etherscan.io/txs?block=114125955'
  );
  const htmlString = data; //
  const $ = cheerio.load(htmlString);

  $('.myFnExpandBox_searchVal').each((index, element) => {
    data4explorer.push({ decrypted: $(element).text() });
  });

  $('.showDate').each((index, element) => {
    data4explorer[index] = {
      ...data4explorer[index],
      timestamp: $(element).text(),
    };
  });

  let arrIndex = 0;

  $('a[href^="/address/0x"]').each((index, element) => {
    const href = $(element)
      .attr('href')
      .replace('/address/', '');

    if (index % 2 === 0) {
      data4explorer[arrIndex] = {
        ...data4explorer[arrIndex],
        from: href,
      };
    } else {
      data4explorer[arrIndex] = {
        ...data4explorer[arrIndex],
        to: href,
      };
      ++arrIndex;
    }
  });

  data4explorer.pop();
  res.send(data4explorer);
});

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
