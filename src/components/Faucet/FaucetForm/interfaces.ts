import {Address} from "viem";

export interface FaucetFormProps {
    isPending: boolean;
    handleGetTokens: (address: Address) => void;
}
