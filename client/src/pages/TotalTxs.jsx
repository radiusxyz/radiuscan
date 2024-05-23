import React from "react";
import Table from "../components/Table";
import { useTxs } from "../contexts/TxsContext";

const TotalTxs = () => {
  const { txs } = useTxs();

  const headers = ["role", "block", "timestamp", "status", "reward", "leader", "violation"];

  const entries = txs.map(({ role, block }) => {
    return {
      role,
      block: block.height,
      timestamp: block.timestamp,
      status: block.status,
      reward: block.reward,
      violation: block.violation,
      leader: block.leader,
    };
  });

  console.log(entries);

  return <Table headers={headers} entries={entries} />;
};

export default TotalTxs;
