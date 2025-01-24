import {FC, FormEvent} from "react";

const FaucetForm: FC = () => {
    const handleSubmitFaucet = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmitFaucet}>
            <div className="flex gap-6 font-medium">
                <input
                    type="text"
                    id="address"
                    class="w-[30rem] bg-gray-50 border border-2 border-gray-300 shadow-md text-gray-900 text-md placeholder-gray-400 rounded-lg outline-none hover:bg-gray-100 focus:ring-black focus:border-black block p-3.5"
                    placeholder="Enter your wallet address (0x...)"
                    required
                />
                <button type="submit" class="text-white bg-black hover:bg-black/[0.85] outline-none focus:ring-4 focus:ring-pink-700/[0.7] font-semibold rounded-lg text-lg w-auto px-5">
                    Get Tokens
                </button>
            </div>
        </form>
    );
};

export default FaucetForm;
