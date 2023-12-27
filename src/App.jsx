import './index.css';
import styled from 'styled-components';
import filter from './assets/images/filter.svg';
import search from './assets/images/search.svg';
import add from './assets/images/add.svg';
import magnifier from './assets/images/magnifier.svg';
import useData from './hooks/useData';
import cuid from 'cuid';
import down from './assets/images/down.svg';
import { useContext } from 'react';
import { TxsContext } from './contexts/TxsContext';
// import { ethers } from 'ethers';

// (async () => {
//   let addresses = [];
//   for (let i = 0; i < 100; i++) {
//     let wallet = ethers.Wallet.createRandom();
//     addresses.push(wallet.address);
//   }
//   console.log(addresses);
// })();

const Table = styled.div`
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
    filter: invert(75%);
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
  placeholder: Search...;
  &:focus {
    outline: none;
  }
`;

const TopRight = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Logo = styled.img`
  width: 32px;
`;
const Text = styled.span`
  font-family: Russo One;
  color: black;
  font-size: 22px;
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
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  flex: 1;
`;

const Body = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #f9fafc;
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

const Cell = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  flex: 1;
  color: var(--Gray-700, #464f60);
`;

const User = styled(Cell)`
  color: var(--Gray-900, #171c26);
  font-weight: 500;
  letter-spacing: 0.28px;
`;

const EncTxHash = styled(Cell)``;
const RawTxHash = styled(Cell)``;
const SeqF = styled(Cell)``;
const SeqL = styled(Cell)``;
const Block = styled(Cell)``;
const Order = styled(Cell)``;
const TimeStamp = styled(Cell)``;
const Rollup = styled(Cell)``;
const RollOp = styled(Cell)``;
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
    (status == -1 && 'var(--Red-0, #FAF0F3)') ||
    (status == 0 && 'rgba(214, 162, 67, 0.12)') ||
    (status == 1 && 'var(--Green-0, #E1FCEF)')};
  color: ${({ status }) =>
    (status == -1 && 'var(--Red-500, #D12953)') ||
    (status == 0 && '#D6A243') ||
    (status == 1 && 'var(--Green-500, #14804A)')};
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
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid lightgray;
  cursor: pointer;
`;

const LeftArr = styled.img`
  transform: rotate(90deg);
`;

const RightArr = styled.img`
  transform: rotate(-90deg);
`;

function App() {
  const txsCtx = useContext(TxsContext);
  const shorten = (ethAddr) =>
    ethAddr.slice(0, 6) + '...' + ethAddr.slice(-6);
  return (
    <Table>
      <Head>
        <HeadTop>
          <HeadTopLeft>
            <FilterBtn>
              <img src={filter} />
            </FilterBtn>
            <Search>
              <img src={search} />
              <SearchInput placeholder='Search...' />
            </Search>
          </HeadTopLeft>
          {/* <AddCustomerBtn>
            <img src={add} />
            Add customer
          </AddCustomerBtn> */}
          <TopRight>
            <Logo src={magnifier} />
            <Text>RADIUSCAN</Text>
          </TopRight>
        </HeadTop>
        <HeadBottom>
          <HeaderText>User</HeaderText>
          <HeaderText>EncTxHash</HeaderText>
          <HeaderText>RawTxHash</HeaderText>
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
            <User>{shorten(tx.user)}</User>
            <EncTxHash>{shorten(tx.encTxHash)}</EncTxHash>
            <RawTxHash>{shorten(tx.decTxHash)}</RawTxHash>
            <SeqF>{shorten(tx.seqF)}</SeqF>
            <SeqL>{shorten(tx.seqL)}</SeqL>
            <Block>{tx.block}</Block>
            <Order>{tx.order}</Order>
            <TimeStamp>{tx.timestamp}</TimeStamp>
            <Rollup>{tx.rollup}</Rollup>
            <RollOp>{shorten(tx.rollOp)}</RollOp>
            {(tx.status === -1 && (
              <Tag>
                <TagText status={tx.status}>Fail</TagText>
              </Tag>
            )) ||
              (tx.status === 0 && (
                <Tag>
                  <TagText status={tx.status}>
                    Pending
                  </TagText>
                </Tag>
              )) ||
              (tx.status === 1 && (
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
            <LeftArr src={down} />
          </Element>
          <Element>Page 1 of 1000</Element>
          <Element>
            <RightArr src={down} />
          </Element>
          <Element>Last</Element>
        </Pagination>
      </Footer>
    </Table>
  );
}

export default App;
