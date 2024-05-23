import React from "react";
import Table from "../components/Table";
import { useTxs } from "../contexts/TxsContext";

const TotalTxs = () => {
  const { txs } = useTxs();

  const headers = ["role", "block", "timestamp", "submission status", "reward", "leader", "violation"];

  console.log(txs);

  const entries = txs.map(({ role, block }) => {
    return {
      role,
      block: block.height,
      timestamp: block.timestamp,
      "submission status": block.status,
      reward: block.reward,
      violation: block.violation,
      leader: block.leader,
    };
  });

  return <Table headers={headers} entries={entries} />;
};

export default TotalTxs;
