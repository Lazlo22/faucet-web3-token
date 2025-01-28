import {FC, useMemo} from "react";
import {useReadContract} from "wagmi";
import {formatUnits} from "viem";
import {FAUCET_BALANCE_REFETCH_INTERVAL, faucetAddress, tokenAddress} from "../../constants";
import {MIDNIGHT_TOKEN_FAUCET_ABI} from "../../contracts/abi/MidnightTokenFaucet";
import {MIDNIGHT_TOKEN_ABI} from "../../contracts/abi/MidnightToken";
import {formatNumber} from "../../utils/formatter";
import useInterval from "../../hooks/useInterval";

const Title: FC = () => {
    const {data: tokenDecimals} = useReadContract({
        abi: MIDNIGHT_TOKEN_ABI,
        address: tokenAddress,
        functionName: 'decimals',
    });

    const {data: faucetBalance, refetch} = useReadContract({
        abi: MIDNIGHT_TOKEN_FAUCET_ABI,
        address: faucetAddress,
        functionName: 'faucetBalance',
    });

    useInterval(refetch, FAUCET_BALANCE_REFETCH_INTERVAL);

    const formattedBalance = useMemo(() => {
        if (!tokenDecimals || !faucetBalance) return 0;

        const ethersFormattedBalance = formatUnits(faucetBalance, tokenDecimals);

        return formatNumber(Number(ethersFormattedBalance));
    }, [tokenDecimals, faucetBalance]);

    return (
        <div className="text-white text-6xl font-bold flex flex-col gap-6">
            <h2>Faucet</h2>
            <h3 className="text-2xl font-semibold">Fast and reliable | 500 MDN/day</h3>
            <h3 className="text-2xl font-semibold">
                Faucet balance: {formattedBalance} MDN
            </h3>
        </div>
    );
};

export default Title;
