import {FC} from "react";
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';

const ConnectWalletButton: FC = () => {
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount();

    return (
        <div className="bg-white hover:bg-gray-200 rounded-2xl py-3 px-5 cursor-pointer" onClick={open}>
            <span className="text-black font-semibold">
                {isConnected && address ? `${address.substring(0, 5)}...${address.substring(39)} / 12 MDN` : 'Connect Wallet'}
            </span>
        </div>
    );
};

export default ConnectWalletButton;
