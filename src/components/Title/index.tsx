import {FC, useMemo} from "react";
import {useReadContract} from "wagmi";
import {formatUnits} from "viem";
import {FAUCET_BALANCE_REFETCH_INTERVAL, faucetAddress, tokenAddress} from "../../constants";
import {MIDNIGHT_TOKEN_FAUCET_ABI} from "../../contracts/abi/MidnightTokenFaucet";
import {MIDNIGHT_TOKEN_ABI} from "../../contracts/abi/MidnightToken";
import {formatNumber} from "../../utils/formatter";
import useInterval from "../../hooks/useInterval";
import Spinner from "../../icons/Spinner";

const Title: FC = () => {
    const {data: tokenDecimals, isLoading: isLoadingTokenDecimals} = useReadContract({
        abi: MIDNIGHT_TOKEN_ABI,
        address: tokenAddress,
        functionName: 'decimals',
    });

    const {data: faucetBalance, refetch, isLoading: isLoadingFaucetBalance} = useReadContract({
        abi: MIDNIGHT_TOKEN_FAUCET_ABI,
        address: faucetAddress,
        functionName: 'faucetBalance',
    });

    useInterval(refetch, FAUCET_BALANCE_REFETCH_INTERVAL);

    const formattedBalance = useMemo(() => {
        if (!tokenDecimals || !faucetBalance) return 0;

        const ethersFormattedBalance = formatUnits(faucetBalance as bigint, tokenDecimals as number);

        return formatNumber(ethersFormattedBalance);
    }, [tokenDecimals, faucetBalance]);

    return (
        <div className="text-white text-2xl font-semibold flex flex-col gap-6">
            <h2 className="text-6xl font-bold">Faucet</h2>
            <h3>Fast and reliable | 500 MDN/day</h3>
            <div className="flex items-center justify-center gap-2">
                <h3>Faucet balance: </h3>
                {isLoadingFaucetBalance && isLoadingTokenDecimals ? (
                    <Spinner className="size-6" />
                ) : (
                    <span>{formattedBalance} MDN</span>
                )}
            </div>
        </div>
    );
};

export default Title;
