import React, { useState } from 'react';
import styled from 'styled-components';

import cuid from 'cuid';
import { useTxs } from '../contexts/TxsContext';
import { Link } from 'react-router-dom';
import Copy from './Copy';

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

const TagText = styled(CellText)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 10px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.36px;
  background: ${({ status }) =>
    (status === 'fail' && 'var(--Red-0, #FAF0F3)') ||
    (status === 'pending' && 'rgba(214, 162, 67, 0.12)') ||
    (status === 'success' && 'var(--Green-0, #E1FCEF)')};
  color: ${({ status }) =>
    (status === 'fail' && 'var(--Red-500, #D12953)') ||
    (status === 'pending' && '#D6A243') ||
    (status === 'success' && 'var(--Green-500, #14804A)')};
`;

const shorten = (ethAddr) =>
  ethAddr.slice(0, 5) + '...' + ethAddr.slice(-3);

const Table = ({ headers, entries }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Body>
      <HeaderRow>
        {headers.map((header) => (
          <HeaderText key={cuid()}>{header}</HeaderText>
        ))}
      </HeaderRow>
      {entries.map((tx) => (
        <Row key={cuid()}>
          <CellWrapper>
            <CellText>{shorten(tx.user)}</CellText>
            <Copy handler={() => handleCopy(tx.user)} />
          </CellWrapper>

          <CellWrapper>
            <CellText>{shorten(tx.encrypted)}</CellText>
            <Copy
              handler={() => handleCopy(tx.encrypted)}
            />
          </CellWrapper>

          <CellWrapper>
            <CellText>{shorten(tx.decrypted)}</CellText>
            <Copy
              handler={() => handleCopy(tx.decrypted)}
            />
          </CellWrapper>

          <CellWrapper>
            <CellText>{shorten(tx.follower)}</CellText>
            <Copy handler={() => handleCopy(tx.follower)} />
          </CellWrapper>

          <CellWrapper>
            <CellText>{shorten(tx.leader)}</CellText>
            <Copy handler={() => handleCopy(tx.leader)} />
          </CellWrapper>

          <CellWrapper>
            <CellText>
              <StyledLink to={`/block/${tx.block.height}`}>
                {tx.block.height}
              </StyledLink>
            </CellText>
          </CellWrapper>

          <CellWrapper>
            <CellText>{tx.order}</CellText>
          </CellWrapper>
          <CellWrapper>
            <CellText>{tx.timestamp}</CellText>{' '}
          </CellWrapper>

          <CellWrapper>
            <CellText>{tx.rollup.title}</CellText>{' '}
          </CellWrapper>

          <CellWrapper>
            <CellText>
              {shorten(tx.rollup.operator)}
            </CellText>
            <Copy
              handler={() => handleCopy(tx.rollup.operator)}
            />
          </CellWrapper>

          {(tx.status === 'fail' && (
            <CellWrapper>
              <TagText status={tx.status}>Fail</TagText>
            </CellWrapper>
          )) ||
            (tx.status === 'pending' && (
              <CellWrapper>
                <TagText status={tx.status}>
                  Pending
                </TagText>
              </CellWrapper>
            )) ||
            (tx.status === 'success' && (
              <CellWrapper>
                <TagText status={tx.status}>
                  Success
                </TagText>
              </CellWrapper>
            ))}
          <CellWrapper>
            <CellText>{tx.fee}</CellText>
          </CellWrapper>
        </Row>
      ))}
    </Body>
  );
};

export default Table;
