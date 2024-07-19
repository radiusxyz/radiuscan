import React from "react";
import Table from "../components/Table";
import { useTxs } from "../contexts/TxsContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
const TotalTxs = () => {
  const { txs } = useTxs();

  const rollup_headers = ["address", "id", "size"];
  const cluster_headers = ["address", "id", "role"];

  const rollup_entries = txs.map(({ address, id, size }) => {
    return {
      address,
      id,
      size,
    };
  });

  const cluster_entries = txs.map(({ address, id, role }) => {
    return {
      address,
      id,
      role,
    };
  });

  return (
    <Container>
      <Table headers={rollup_headers} entries={rollup_entries} />
      <Table headers={cluster_headers} entries={cluster_entries} />
    </Container>
  );
};

export default TotalTxs;
