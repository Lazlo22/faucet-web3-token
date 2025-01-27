import {FC} from "react";
import {useReadContract} from "wagmi";
import {formatUnits} from "viem";
import {faucetAddress, tokenAddress} from "../../constants";
import {MIDNIGHT_TOKEN_FAUCET_ABI} from "../../contracts/abi/MidnightTokenFaucet";
import {MIDNIGHT_TOKEN_ABI} from "../../contracts/abi/MidnightToken";

const Title: FC = () => {
    const {data: tokenDecimals} = useReadContract({
        abi: MIDNIGHT_TOKEN_ABI,
        address: tokenAddress,
        functionName: 'decimals',
    });

    const {data: faucetBalance} = useReadContract({
        abi: MIDNIGHT_TOKEN_FAUCET_ABI,
        address: faucetAddress,
        functionName: 'faucetBalance',
    });

    return (
        <div className="text-white text-6xl font-bold flex flex-col gap-6">
            <h2>Faucet</h2>
            <h3 className="text-2xl font-semibold">Fast and reliable | 500 MDN/day</h3>
            {tokenDecimals && faucetBalance ? (
                <h3 className="text-2xl font-semibold">
                    Faucet balance: {formatUnits(faucetBalance, tokenDecimals)} MDN
                </h3>
            ) : null}
        </div>
    );
};

export default Title;
