import React, {
  createContext,
  useContext,
  useState,
} from 'react';

import useData from '../hooks/useData';

export const TxsContext = createContext({
  txs: [],
  handleTxs: () => {},
});

const data = useData();
export const useTxs = () => useContext(TxsContext);

export const TxsProvider = ({ children }) => {
  const [txs, setTxs] = useState(data);

  const handleTxs = (handler) => {
    setTxs(handler);
  };

  return (
    <TxsContext.Provider value={{ data, txs, handleTxs }}>
      {children}
    </TxsContext.Provider>
  );
};
