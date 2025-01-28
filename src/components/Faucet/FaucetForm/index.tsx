import {ChangeEvent, FC, FormEvent, useState} from "react";
import {Address, isAddress} from "viem";
import {FaucetFormProps} from "./interfaces";
import Spinner from "../../../icons/Spinner";

const FaucetForm: FC<FaucetFormProps> = ({isPending, handleGetTokens}) => {
    const [userAddress, setUserAddress] = useState<string>('');

    const handleSubmitFaucet = (e: FormEvent) => {
        e.preventDefault();
        handleGetTokens(userAddress as Address);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserAddress(e.target.value);
    };

    return (
        <form onSubmit={handleSubmitFaucet}>
            <div className="flex gap-6 font-medium">
                <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-[30rem] bg-gray-50 border border-2 border-gray-300 shadow-md text-gray-900 text-md placeholder-gray-400 rounded-lg outline-none hover:bg-gray-100 focus:ring-black focus:border-black block p-3.5"
                    placeholder="Enter your wallet address (0x...)"
                    value={userAddress}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="text-white bg-black enabled:hover:bg-black/[0.85] outline-none transform enabled:active:scale-[0.8] transition-transform font-semibold rounded-lg text-lg w-auto px-5 disabled:opacity-50"
                    disabled={!isAddress(userAddress)}
                >
                    {isPending ? <Spinner className="size-8" /> : <span>Claim</span>}
                </button>
            </div>
        </form>
    );
};

export default FaucetForm;
