import React from "react";
import Table from "../components/Table";
import { useTxs } from "../contexts/TxsContext";

const TotalTxs = () => {
  const { txs } = useTxs();

  const headers = ["role", "address", "block", "timestamp", "status", "reward"];

  const entries = txs.map(({ role, address, block, timestamp, status, reward }) => {
    return {
      role,
      address,
      block: block.height,
      timestamp,
      status,
      reward,
    };
  });

  console.log(entries);

  return <Table headers={headers} entries={entries} />;
};

export default TotalTxs;
