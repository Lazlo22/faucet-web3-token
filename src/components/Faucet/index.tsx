import {FC} from "react";
import { useAppKitAccount } from '@reown/appkit/react';

import FaucetForm from "./FaucetForm/index";
import TransactionData from "./TransactionData/index";
import ConnectWalletBoundary from "./ConnectWalletBoundary/index";

const Faucet: FC = () => {
    const { isConnected } = useAppKitAccount();

    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-6 dark:bg-gray-800 dark:border-gray-700">
            <FaucetForm />
            {isConnected ? <TransactionData /> : <ConnectWalletBoundary />}
        </div>
    );
};

export default Faucet;
