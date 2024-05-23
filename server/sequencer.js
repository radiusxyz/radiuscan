import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

dotenv.config({ path: "../.env" });

function shuffleArray(array) {
  // Make a copy of the array to avoid modifying the original array
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const defEnts = [
  {
    "role": "leader",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1000,
      "leader": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
      "timestamp": "0",
      "status": "pending",
      "reward": 0.00009269,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1001,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "1",
      "status": "success",
      "reward": 0.00009246,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1002,
      "leader": "0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF",
      "timestamp": "2",
      "status": "fail",
      "reward": 0.00006734,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1003,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "3",
      "status": "pending",
      "reward": 0.00001753,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1004,
      "leader": "0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF",
      "timestamp": "4",
      "status": "fail",
      "reward": 0.00004561,
      "violation": 1,
    },
  },
  {
    "role": "leader",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1005,
      "leader": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
      "timestamp": "5",
      "status": "success",
      "reward": 0.00002307,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1006,
      "leader": "0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF",
      "timestamp": "6",
      "status": "pending",
      "reward": 0.00000454,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1007,
      "leader": "0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF",
      "timestamp": "7",
      "status": "success",
      "reward": 0.00003427,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1008,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "8",
      "status": "pending",
      "reward": 0.00005634,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1009,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "9",
      "status": "success",
      "reward": 0.00006243,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1010,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "10",
      "status": "fail",
      "reward": 0.00009057,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1011,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "11",
      "status": "fail",
      "reward": 0.00009849,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1012,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "12",
      "status": "success",
      "reward": 0.00008624,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1013,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "13",
      "status": "pending",
      "reward": 0.00006721,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1014,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "14",
      "status": "fail",
      "reward": 0.00001,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1015,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "15",
      "status": "fail",
      "reward": 0.00003895,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1016,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "16",
      "status": "pending",
      "reward": 0.00006479,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1017,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "17",
      "status": "pending",
      "reward": 0.00009907,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1018,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "18",
      "status": "success",
      "reward": 0.00006738,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1019,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "19",
      "status": "pending",
      "reward": 0.00001956,
      "violation": 1,
    },
  },
  {
    "role": "leader",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1020,
      "leader": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
      "timestamp": "20",
      "status": "pending",
      "reward": 0.00003332,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1021,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "21",
      "status": "pending",
      "reward": 0.00000381,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1022,
      "leader": "0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF",
      "timestamp": "22",
      "status": "pending",
      "reward": 0.00009469,
      "violation": 0,
    },
  },
  {
    "role": "leader",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1023,
      "leader": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
      "timestamp": "23",
      "status": "success",
      "reward": 0.00007457,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1024,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "24",
      "status": "pending",
      "reward": 0.0000498,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1025,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "25",
      "status": "success",
      "reward": 0.00000162,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1026,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "26",
      "status": "fail",
      "reward": 0.00004247,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1027,
      "leader": "0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF",
      "timestamp": "27",
      "status": "success",
      "reward": 0.0000951,
      "violation": 0,
    },
  },
  {
    "role": "leader",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1028,
      "leader": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
      "timestamp": "28",
      "status": "pending",
      "reward": 0.00008794,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1029,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "29",
      "status": "success",
      "reward": 0.00008783,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1030,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "30",
      "status": "fail",
      "reward": 0.00009214,
      "violation": 1,
    },
  },
  {
    "role": "leader",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1031,
      "leader": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
      "timestamp": "31",
      "status": "success",
      "reward": 0.00002836,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1032,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "32",
      "status": "fail",
      "reward": 0.00004464,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1033,
      "leader": "0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF",
      "timestamp": "33",
      "status": "pending",
      "reward": 0.00009007,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1034,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "34",
      "status": "pending",
      "reward": 0.0000994,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1035,
      "leader": "0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF",
      "timestamp": "35",
      "status": "success",
      "reward": 0.00000296,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1036,
      "leader": "0x255fAfc42E5939acB15BD310F9e74DedeD3e9a44",
      "timestamp": "36",
      "status": "pending",
      "reward": 0.00003012,
      "violation": 0,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1037,
      "leader": "0x525B40A69f67Ce9939F69EC0CDa00B830c2fF9bF",
      "timestamp": "37",
      "status": "fail",
      "reward": 0.0000796,
      "violation": 1,
    },
  },
  {
    "role": "follower",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1038,
      "leader": "0xD81Bac23aa1E4e75080d7C5a7D52F8D8f41144c4",
      "timestamp": "38",
      "status": "fail",
      "reward": 0.00003878,
      "violation": 0,
    },
  },
  {
    "role": "leader",
    "address": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
    "block": {
      "height": 1039,
      "leader": "0x28964BFBB7b2EE431d873d9A6302d9c9e5B22a55",
      "timestamp": "39",
      "status": "success",
      "reward": 0.00005092,
      "violation": 1,
    },
  },
];

app.get("/blocks", (req, res) => {
  const response = {
    entries: shuffleArray(defEnts).map((ent, i) => ({ ...ent, block: { ...ent.block, height: 1000 + i } })),
  };

  console.log(response.entries);
  res.json(response.entries);
});

app.listen(PORT, () => {
  console.log("is running on port: ", PORT);
});
