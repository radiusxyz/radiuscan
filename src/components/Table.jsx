import React, { useState } from 'react';
import styled from 'styled-components';
import filter from '../assets/images/filter.svg';
import search from '../assets/images/search.svg';
// import add from '../assets/images/add.svg';
import magnifier from '../assets/images/magnifier.svg';
import copy from '../assets/images/copy.svg';
import cuid from 'cuid';
import down from '../assets/images/down.svg';
import { useTxs } from '../contexts/TxsContext';
import Arrow from './Arrow';
import { Link } from 'react-router-dom';
import Copy from './Copy';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  border: none;
  outline: none;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #d6ebf2;
  backdrop-filter: blur(4px);
`;

const Head = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 104px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid var(--Gray-50, #e9edf5);
  background: #d6ebf2;
`;

const HeadTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const HeadTopLeft = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const FilterBtn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: var(--White, #fff);
  box-shadow: 0px 2px 5px 0px rgba(89, 96, 120, 0.1),
    0px 0px 0px 1px rgba(70, 79, 96, 0.16),
    0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    background: lightblue;
  }
`;
const Search = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 6px;
  background: var(--White, #fff);
  box-shadow: 0px 0px 0px 1px rgba(104, 113, 130, 0.16),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
  padding: 6px 12px;
  max-width: 320px;
  width: 100%;
`;

const SearchInput = styled.input`
  border: none;
  color: #5a9bb0;
  &:focus {
    outline: none;
  }
`;

const HeadTopRight = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Logo = styled.img`
  width: 32px;
`;
const Text = styled.span`
  font-family: Russo One;
  font-size: 22px;
  color: #5a9bb0;
`;

const AddCustomerBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  background: var(--Blue-500, #2264e5);
  box-shadow: 0px 2px 5px 0px rgba(34, 100, 229, 0.12),
    0px 0px 0px 1px #2264e5,
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 0px 0px #4b85fa inset;
  /* Button text */
  color: var(--White, #fff);
  /* Button/default */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.28px;
`;

const HeadBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  &:nth-child(odd) {
    background: #ffffff;
  }
`;

const CellWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 3px;
  align-items: center;
  color: #2b8492;
  cursor: pointer;
`;
const Cell = styled.span`
  font-family: Inter;
  flex: 1;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  // color: var(--Gray-700, #464f60);
  color: #2b8492;
`;

// const Copy = styled.img`
//   width: 12px;
//   cursor: pointer;
// `;

const User = styled(Cell)`
  color: #5a9bb0;
  font-weight: 500;
  flex: 0;
  letter-spacing: 0.28px;
`;

const EncTxHash = styled(Cell)`
  flex: 0;
`;
const DecTxHash = styled(Cell)`
  flex: 0;
`;
const SeqF = styled(Cell)`
  flex: 0;
`;
const SeqL = styled(Cell)`
  flex: 0;
`;
const Block = styled(Cell)``;
const Order = styled(Cell)``;
const TimeStamp = styled(Cell)``;
const Rollup = styled(Cell)``;
const RollOp = styled(Cell)`
  flex: 0;
`;
const Fee = styled(Cell)``;

const Tag = styled.div`
  display: flex;
  flex: 1;
`;

const TagText = styled.span`
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

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #d6ebf2;
`;

const Pagination = styled.div`
  display: flex;
  gap: 5px;
`;

const Element = styled.button`
  padding: 6px 11px;
  display: flex;
  color: #5a9bb0;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid lightgray;
  cursor: pointer;
`;

const LeftArr = styled.div`
  transform: rotate(90deg);
  color: #5a9bb0;
`;

const RightArr = styled.div`
  transform: rotate(-90deg);
  color: #5a9bb0;
`;

const shorten = (ethAddr) =>
  ethAddr.slice(0, 5) + '...' + ethAddr.slice(-3);

const Table = () => {
  const txsCtx = useTxs();
  const [value, setValue] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleChange = (e) => {
    setValue(e.target.value.trim());
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleFilter();
    }
  };

  const handleFilter = () => {
    if (!value) {
      txsCtx.handleTxs(() => txsCtx.data);
      return;
    }
    txsCtx.handleTxs(() =>
      txsCtx.data.filter((tx) => {
        return Object.values(tx).includes(value);
      })
    );
  };

  return (
    <TableWrapper>
      <Head>
        <HeadTop>
          <HeadTopLeft>
            <Search>
              <img src={search} />
              <SearchInput
                placeholder='Search...'
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </Search>
            <FilterBtn onClick={handleFilter}>
              <img src={filter} />
            </FilterBtn>
          </HeadTopLeft>
          {/* <AddCustomerBtn>
              <img src={add} />
              Add customer
            </AddCustomerBtn> */}
          <HeadTopRight>
            <Logo src={magnifier} />
            <Text>RADIUSCAN</Text>
          </HeadTopRight>
        </HeadTop>
        <HeadBottom>
          <HeaderText>User</HeaderText>
          <HeaderText>EncTxHash</HeaderText>
          <HeaderText>DecTxHash</HeaderText>
          <HeaderText>Follower</HeaderText>
          <HeaderText>Leader</HeaderText>
          <HeaderText>Block</HeaderText>
          <HeaderText>Order</HeaderText>
          <HeaderText>Age</HeaderText>
          <HeaderText>Rollup</HeaderText>
          <HeaderText>RollOp</HeaderText>
          <HeaderText>Status</HeaderText>
          <HeaderText>Fee</HeaderText>
        </HeadBottom>
      </Head>
      <Body>
        {txsCtx.txs.map((tx) => (
          <Row key={cuid()}>
            <CellWrapper>
              <User>{shorten(tx.user)}</User>
              <Copy handler={() => handleCopy(tx.user)} />
            </CellWrapper>
            <CellWrapper>
              <EncTxHash>{shorten(tx.encTxHash)}</EncTxHash>
              <Copy
                handler={() => handleCopy(tx.encTxHash)}
              />
            </CellWrapper>
            <CellWrapper>
              <DecTxHash>{shorten(tx.decTxHash)}</DecTxHash>
              <Copy
                handler={() => handleCopy(tx.decTxHash)}
              />
            </CellWrapper>
            <CellWrapper>
              <SeqF>{shorten(tx.seqF)}</SeqF>
              <Copy handler={() => handleCopy(tx.seqF)} />
            </CellWrapper>
            <CellWrapper>
              <SeqL>{shorten(tx.seqL)}</SeqL>
              <Copy handler={() => handleCopy(tx.seqL)} />
            </CellWrapper>
            <Block>
              <StyledLink to={`/block/${tx.block}`}>
                {tx.block}
              </StyledLink>
            </Block>
            <Order>{tx.order}</Order>
            <TimeStamp>{tx.timestamp}</TimeStamp>{' '}
            <Rollup>{tx.rollup}</Rollup>
            <CellWrapper>
              <RollOp>{shorten(tx.rollOp)}</RollOp>
              <Copy handler={() => handleCopy(tx.rollOp)} />
            </CellWrapper>
            {(tx.status === 'fail' && (
              <Tag>
                <TagText status={tx.status}>Fail</TagText>
              </Tag>
            )) ||
              (tx.status === 'pending' && (
                <Tag>
                  <TagText status={tx.status}>
                    Pending
                  </TagText>
                </Tag>
              )) ||
              (tx.status === 'success' && (
                <Tag>
                  <TagText status={tx.status}>
                    Success
                  </TagText>
                </Tag>
              ))}
            <Fee>{tx.fee}</Fee>
          </Row>
        ))}
      </Body>
      <Footer>
        <Pagination>
          <Element>First</Element>
          <Element>
            <LeftArr>
              <Arrow />
            </LeftArr>
          </Element>
          <Element>Page 1 of 1000</Element>
          <Element>
            <RightArr>
              <Arrow />
            </RightArr>
          </Element>
          <Element>Last</Element>
        </Pagination>
      </Footer>
    </TableWrapper>
  );
};

export default Table;
