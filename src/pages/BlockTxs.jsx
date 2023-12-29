import React from 'react';
import { useParams } from 'react-router';
import Table from '../components/Table';
import { useTxs } from '../contexts/TxsContext';

const BlockTxs = () => {
  const { height } = useParams();
  const { txs } = useTxs();
  const headers = [
    'encrypted',
    'order',
    'sig for user',
    'orderer',
    'decrypted',
    'sig for rollup',
    'status',
  ];

  const entries = txs
    .filter((tx) => tx.block.height === height)
    .map(
      ({
        encrypted,
        decrypted,
        leader,
        order,
        status,
        seqSig,
        block,
      }) => {
        return {
          encrypted: encrypted,
          order,
          'sig for user': seqSig,
          orderer: leader,
          decrypted: decrypted,
          'sig for rollup': block.signature,
          status,
        };
      }
    );

  return <Table headers={headers} entries={entries} />;
};

export default BlockTxs;
