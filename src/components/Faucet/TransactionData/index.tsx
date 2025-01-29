import {FC} from "react";
import {TransactionDataProps} from "./interfaces";
import {useAppKitNetwork} from "@reown/appkit/react";

const TransactionData: FC<TransactionDataProps> = ({txHash}) => {
    const {caipNetwork} = useAppKitNetwork();

    return (
        <div className="flex flex-col">
            <div className="w-full bg-black text-white rounded-t-md py-2">
                <span className="text-xl font-medium">Transaction Data</span>
            </div>
            <div className="text-black rounded-b-md py-2 shadow-lg outline outline-black/[0.03]">
                {txHash ? (
                    <a
                        target='_blank'
                        href={`${caipNetwork?.blockExplorers?.default?.url}/tx/${txHash}`}
                        className='no-underline underline-offset-2 decoration-2 decoration-pink-800 hover:underline'
                    >
                        {txHash}
                    </a>
                ) : <span>Empty</span>}
            </div>
        </div>
    );
};

export default TransactionData;
