import {FC} from "react";
import ConnectWalletButton from "./ConnectWalletButton/index";

const Header: FC = () => {
    return (
        <div className="tracking-wide w-full flex justify-between bg-black/[0.8] absolute top-0 left-0 py-6 px-12">
            <p className="text-white text-3xl font-semibold">Midnight Token (MDN)</p>
            <ConnectWalletButton />
        </div>
    );
};

export default Header;
