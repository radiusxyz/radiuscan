import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import TotalTxs from './pages/TotalTxs';
import BlockTxs from './pages/BlockTxs';
// import { ethers } from 'ethers';

// (async () => {
//   let addresses = [];
//   for (let i = 0; i < 100; i++) {
//     let wallet = ethers.Wallet.createRandom();
//     addresses.push(wallet.address);
//   }
//   console.log(addresses);
// })();

const router = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <TotalTxs />,
    loader: () => {
      window.scrollTo(0, 0);
      return null;
    },
  },
  {
    path: 'block/:height',
    element: <BlockTxs />,
    loader: () => {
      window.scrollTo(0, 0);
      return null;
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
