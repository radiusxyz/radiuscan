import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Table from '../components/Table';
import { useTxs } from '../contexts/TxsContext';
import axios from 'axios';

const BlockTxs = () => {
  const { height } = useParams();
  const { txs } = useTxs();
  const [entries, setEntries] = useState(
    txs
      .filter((tx) => tx.block.height === height)
      .map(
        ({
          encrypted,
          decrypted,
          order,
          status,
          seqSig,
          block,
        }) => {
          return {
            encrypted: encrypted,
            order,
            'sig for user': seqSig,
            orderer: block.sequencer,
            decrypted,
            'sig for rollup': block.signature,
            status,
          };
        }
      )
  );

  const headers = [
    'encrypted',
    'order',
    'sig for user',
    'orderer',
    'decrypted',
    'sig for rollup',
    'rolex',
    'status',
  ];

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blockNumber = '114125955'; // Replace with dynamic value as needed
        const response = await axios.get(
          `http://localhost:3333/rollup/block/${blockNumber}`
        );
        setData(response.data);
        console.log(response.data);
        setEntries((prevState) => {
          return prevState.map((entry, index) => ({
            ...entry,
            rolex: response.data[index].decrypted,
          }));
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once after the component mounts

  if (error) return 'An error occurred.';
  if (!data) return 'Loading...';

  return <Table headers={headers} entries={entries} />;
};

export default BlockTxs;
