import React from 'react';
import Table from '../components/Table';
import { useTxs } from '../contexts/TxsContext';

const TotalTxs = () => {
  const { txs } = useTxs();

  const headers = [
    'user',
    'encrypted',
    'decrypted',
    'follower',
    'leader',
    'block',
    'order',
    'age',
    'rollup',
    'operator',
    'status',
    'fee',
  ];

  return <Table headers={headers} entries={txs} />;
};

export default TotalTxs;
