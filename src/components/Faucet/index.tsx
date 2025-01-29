import {FC, useEffect} from "react";
import { useAppKitAccount } from '@reown/appkit/react';
import {useWriteContract} from "wagmi";
import {Address} from "viem";

import FaucetForm from "./FaucetForm/index";
import TransactionData from "./TransactionData/index";
import ConnectWalletBoundary from "./ConnectWalletBoundary/index";
import {faucetAddress} from "../../constants";
import {MIDNIGHT_TOKEN_FAUCET_ABI} from "../../contracts/abi/MidnightTokenFaucet";
import {showErrorToast, showSuccessToast} from "../../utils/toast";

const Faucet: FC = () => {
    const { isConnected } = useAppKitAccount();
    const { writeContract, isSuccess, isError, isPending, data } = useWriteContract();

    const handleGetTokens = (address: Address) => {
        writeContract({
            abi: MIDNIGHT_TOKEN_FAUCET_ABI,
            address: faucetAddress,
            functionName: 'claimTokens'
        });
    };

    useEffect(() => {
        if (isSuccess) showSuccessToast('Successfully requested tokens');
    }, [isSuccess]);

    useEffect(() => {
        if (isError) showErrorToast('Something went wrong');
    }, [isError]);

    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-6 dark:bg-gray-800 dark:border-gray-700">
            <FaucetForm isPending={isPending} handleGetTokens={handleGetTokens} />
            {isConnected ? <TransactionData /> : <ConnectWalletBoundary />}
        </div>
    );
};

export default Faucet;
