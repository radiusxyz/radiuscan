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
    'rollup',
    'operator',
    'status',
  ];

  const entries = txs.map(
    ({
      user,
      encrypted,
      decrypted,
      block,
      order,
      rollup,
      status,
    }) => {
      return {
        user,
        encrypted,
        decrypted,
        sequencer: block.sequencer,
        block: block.height,
        order,
        rollup: rollup.title,
        operator: rollup.operator,
        status,
      };
    }
  );

  return <Table headers={headers} entries={entries} />;
};

export default TotalTxs;
