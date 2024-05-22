import React, { useState } from "react";
import styled from "styled-components";

import cuid from "cuid";
import { Link } from "react-router-dom";
import Copy from "./Copy";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  border: none;
  outline: none;
`;

const HeaderText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  flex: 1;
  color: #5a9bb0;
`;

const Body = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #f4fcff;
  flex-direction: column;
  overflow-y: scroll;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  &:nth-child(even) {
    background: #ffffff;
  }
`;

const HeaderRow = styled(Row)`
  position: sticky;
  top: 0;
  background: #d6ebf2;
  border-bottom: 1px solid var(--Gray-50, #e9edf5);
`;

const CellWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 3px;
  align-items: center;
  color: #2b8492;
  cursor: pointer;
`;
const CellText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  color: #2b8492;
`;

const StatusText = styled(CellText)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  text-transform: capitalize;
  border-radius: 10px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.36px;
  background: ${({ status }) =>
    (status === "fail" && "var(--Red-0, #FAF0F3)") ||
    (status === "pending" && "rgba(214, 162, 67, 0.12)") ||
    (status === "success" && "var(--Green-0, #E1FCEF)")};
  color: ${({ status }) =>
    (status === "fail" && "var(--Red-500, #D12953)") ||
    (status === "pending" && "#D6A243") ||
    (status === "success" && "var(--Green-500, #14804A)")};
`;

const shorten = (ethAddr) => ethAddr.slice(0, 5) + "..." + ethAddr.slice(-3);

const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
};

const Table = ({ headers, entries }) => {
  return (
    <Body>
      <HeaderRow>
        {headers.map((header) => {
          return <HeaderText key={cuid()}>{header}</HeaderText>;
        })}
      </HeaderRow>
      {entries.map((tx) => {
        return (
          <Row key={cuid()}>
            {headers.map((header) => {
              return (
                <CellWrapper key={cuid()}>
                  {["fail", "success", "pending"].includes(tx[header]) ? (
                    <StatusText status={tx.status}>{tx.status}</StatusText>
                  ) : (
                    <>
                      <CellText>
                        <StyledLink to={`/${header}/${tx[header]}`}>
                          {tx[header].length > 14 ? shorten(tx[header]) : tx[header]}
                        </StyledLink>
                      </CellText>
                      <Copy handler={() => handleCopy(tx[header])} />
                    </>
                  )}
                </CellWrapper>
              );
            })}
          </Row>
        );
      })}
    </Body>
  );
};

export default Table;
