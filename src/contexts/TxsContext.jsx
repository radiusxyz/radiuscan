import React, {
  createContext,
  useState,
  useContext,
} from 'react';

import useData from '../hooks/useData';

export const TxsContext = createContext({
  txs: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
export const useTxs = () => {
  const context = useContext(TxsContext);
  if (context === undefined) {
    throw new Error(
      'useTxs must be used within a TxsProvider'
    );
  }
  return context;
};

export const TxsProvider = ({ children }) => {
  const data = useData();
  const [txs, setTxs] = useState(data);

  const handleTxs = (handler) => {
    setTxs(handler);
  };

  return (
    <TxsContext.Provider value={{ txs, handleTxs }}>
      {children}
    </TxsContext.Provider>
  );
};

export default TxsContext;
