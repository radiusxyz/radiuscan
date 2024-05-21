import React from "react";
import Table from "../components/Table";
import { useTxs } from "../contexts/TxsContext";

const TotalTxs = () => {
  const { txs } = useTxs();

  const headers = ["role", "address", "block", "age", "submitted to l1/aggregator"];

  const entries = txs.map(({ user, encrypted, decrypted, block, order, rollup, status }) => {
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
  });

  return <Table headers={headers} entries={entries} />;
};

export default TotalTxs;
