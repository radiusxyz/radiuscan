import './index.css';
import styled from 'styled-components';
import filter from './assets/images/filter.svg';
import search from './assets/images/search.svg';
import add from './assets/images/add.svg';
import useTxs from './assets/useData';
import cuid from 'cuid';
const Table = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(244, 247, 252, 0.75);
  backdrop-filter: blur(4px);
`;

const Head = styled.div`
  width: 100%;
  height: 104px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
`;

const Cell = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  flex: 1;
`;

const From = styled(Cell)`
  color: var(--Gray-900, #171c26);
  font-weight: 500;
  letter-spacing: 0.28px;
`;

const EncTxHash = styled(Cell)``;
const SeqF = styled(Cell)``;
const SeqL = styled(Cell)``;
const Block = styled(Cell)``;
const Order = styled(Cell)``;
const TimeStamp = styled(Cell)``;
const Rollup = styled(Cell)``;
const Fee = styled(Cell)``;

const Tag = styled.div`
  display: flex;
  flex: 1;
  width: auto;
  line-height: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
  color: ${({ status }) =>
    (status == -1 && 'var(--Red-500, #D12953)') ||
    (status == 0 && 'color: #D6A243') ||
    (status == 1 && 'var(--Green-500, #14804A)')};
  background: ${({ status }) =>
    (status == -1 && 'var(--Red-0, #FAF0F3)') ||
    (status == 0 && 'rgba(214, 162, 67, 0.12)') ||
    (status == 1 && 'var(--Green-0, #E1FCEF)')};
`;

const TagText = styled.span``;

function App() {
  const txs = useTxs();
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
          <AddCustomerBtn>
            <img src={add} />
            Add customer
          </AddCustomerBtn>
        </HeadTop>
        <HeadBottom>
          <HeaderText>From</HeaderText>
          <HeaderText>EncTxHash</HeaderText>
          <HeaderText>Sequencer(F)</HeaderText>
          <HeaderText>Sequencer(L)</HeaderText>
          <HeaderText>Block</HeaderText>
          <HeaderText>Order</HeaderText>
          <HeaderText>TimeStamp</HeaderText>
          <HeaderText>Rollup</HeaderText>
          <HeaderText>Status</HeaderText>
          <HeaderText>Fee</HeaderText>
        </HeadBottom>
      </Head>
      <Body>
        {txs.map((tx) => (
          <Row key={cuid()}>
            <From>{tx.from}</From>
            <EncTxHash>{tx.encTxHash}</EncTxHash>
            <SeqF>{tx.seqF}</SeqF>
            <SeqL>{tx.seqL}</SeqL>
            <Block>{tx.block}</Block>
            <Order>{tx.order}</Order>
            <TimeStamp>{tx.timestamp}</TimeStamp>
            <Rollup>{tx.rollup}</Rollup>
            {(tx.status && (
              <Tag status={tx.status}>Fail</Tag>
            )) ||
              (x.status && (
                <Tag status={tx.status}>Pending</Tag>
              )) ||
              (x.status && (
                <Tag status={tx.status}>Success</Tag>
              ))}
            <Fee>{tx.fee}</Fee>
          </Row>
        ))}
      </Body>
    </Table>
  );
}

export default App;
