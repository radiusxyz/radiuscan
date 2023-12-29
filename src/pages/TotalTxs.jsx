import React from 'react';
import Table from '../components/Table';
import { useTxs } from '../contexts/TxsContext';

const TotalTxs = () => {
  const { txs } = useTxs();

  const headers = [
    'user',
    'encrypted',
    'decrypted',
    'sequencer',
    'block',
    'order',
    'age',
    'rollup',
    'operator',
    'status',
    'fee',
  ];

  const entries = txs.map(
    ({
      user,
      encrypted,
      decrypted,
      block,
      order,
      timestamp,
      leader,
      rollup,
      status,
      fee,
    }) => {
      return {
        user,
        encrypted,
        decrypted,
        sequencer: leader,
        block: block.height,
        order,
        age: timestamp,
        rollup: rollup.title,
        operator: rollup.operator,
        status,
        fee,
      };
    }
  );

  return <Table headers={headers} entries={entries} />;
};

export default TotalTxs;
