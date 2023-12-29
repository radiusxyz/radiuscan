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
    'signature for user',
    'receiver',
    'orderer',
    'decrypted',
    'signature for rollup',
    'status',
  ];

  const entries = txs
    .filter((tx) => tx.block.height === height)
    .map(
      ({
        encrypted,
        decrypted,
        follower,
        leader,
        order,
        status,
        seqSig,
        block,
      }) => {
        return {
          encrypted: encrypted,
          order,
          'signature for user': seqSig,
          receiver: follower,
          orderer: leader,
          decrypted: decrypted,
          'signature for rollup': block.signature,
          status,
        };
      }
    );

  return <Table headers={headers} entries={entries} />;
};

export default BlockTxs;
