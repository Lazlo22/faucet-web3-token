import {FC, useEffect} from "react";
import { useAppKitAccount } from '@reown/appkit/react';
import {useWaitForTransactionReceipt, useWriteContract} from "wagmi";

import FaucetForm from "./FaucetForm/index";
import TransactionData from "./TransactionData/index";
import ConnectWalletBoundary from "./ConnectWalletBoundary/index";
import {faucetAddress} from "../../constants";
import {MIDNIGHT_TOKEN_FAUCET_ABI} from "../../contracts/abi/MidnightTokenFaucet";
import {showErrorToast, showSuccessToast} from "../../utils/toast";

const Faucet: FC = () => {
    const { isConnected } = useAppKitAccount();
    const { writeContract, isSuccess: isSuccessClaimTokens, isError: isErrorClaimTokens, isPending: isPendingClaimTokens, data: txHash } = useWriteContract();
    const { isSuccess: isSuccessWaitTx, isError: isErrorWaitTx, isLoading: isLoadingWaitTx, data: txData } = useWaitForTransactionReceipt({
        hash: txHash
    });

    const handleGetTokens = () => {
        writeContract({
            abi: MIDNIGHT_TOKEN_FAUCET_ABI,
            address: faucetAddress,
            functionName: 'claimTokens'
        });
    };

    useEffect(() => {
        if (isSuccessClaimTokens && isSuccessWaitTx) showSuccessToast('Successfully requested tokens');
    }, [isSuccessClaimTokens, isSuccessWaitTx]);

    useEffect(() => {
        if (isErrorClaimTokens || isErrorWaitTx) showErrorToast('Something went wrong');
    }, [isErrorClaimTokens, isErrorWaitTx]);

    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-6 dark:bg-gray-800 dark:border-gray-700">
            <FaucetForm isPending={isPendingClaimTokens || isLoadingWaitTx} handleGetTokens={handleGetTokens} />
            {isConnected ? <TransactionData txHash={txData?.transactionHash} /> : <ConnectWalletBoundary />}
        </div>
    );
};

export default Faucet;
