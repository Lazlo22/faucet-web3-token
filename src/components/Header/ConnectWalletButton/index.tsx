import {FC} from "react";

const ConnectWalletButton: FC = () => {
    return (
        <div className="bg-white hover:bg-gray-200 rounded-2xl py-3 px-5 cursor-pointer">
            <span className="text-black font-semibold">Connect Wallet</span>
        </div>
    );
};

export default ConnectWalletButton;
