import {FC} from "react";
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { useBalance } from 'wagmi';
import {TOKEN_BALANCE_REFETCH_INTERVAL, tokenAddress} from "../../../constants";
import {formatNumber} from "../../../utils/formatter";
import useInterval from "../../../hooks/useInterval";

const ConnectWalletButton: FC = () => {
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount();

    const { data, refetch } = useBalance({
        address,
        token: tokenAddress
    });

    useInterval(refetch, TOKEN_BALANCE_REFETCH_INTERVAL);

    const handleConnectWalletClick = () => {
        open({ view: isConnected ? 'Account' : 'Connect' });
    };

    return (
        <button className="bg-white hover:bg-gray-200 rounded-2xl py-3 px-5 cursor-pointer transform enabled:active:scale-[0.8] transition-transform" onClick={handleConnectWalletClick}>
            <span className="text-black font-semibold cursor-pointer">
                {isConnected && address ? `${address.substring(0, 5)}...${address.substring(39)} / ${formatNumber(data?.formatted ?? 0)} MDN` : 'Connect Wallet'}
            </span>
        </button>
    );
};

export default ConnectWalletButton;
