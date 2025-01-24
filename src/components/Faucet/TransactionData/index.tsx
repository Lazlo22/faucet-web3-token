import {FC} from "react";

const TransactionData: FC = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full bg-black text-white rounded-t-md py-2">
                <span className="text-xl font-medium">Transaction Data</span>
            </div>
            <div className="text-black rounded-b-md font-normal py-2 shadow-lg outline outline-black/[0.03]">
                Empty
            </div>
        </div>
    );
};

export default TransactionData;
