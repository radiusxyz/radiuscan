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

export const useTxs = () => useContext(TxsContext);

export const TxsProvider = ({ children }) => {
  //   const data = useData();
  const [txs, setTxs] = useState(useData());

  const handleTxs = (handler) => {
    setTxs(handler);
  };

  return (
    <TxsContext.Provider value={{ txs, handleTxs }}>
      {children}
    </TxsContext.Provider>
  );
};
