import {WagmiAdapter} from "@reown/appkit-adapter-wagmi";
import {sepolia, type AppKitNetwork} from '@reown/appkit/networks';

export const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

export const metadata = {
    name: 'MDN Faucet',
    description: 'Official MDN Token faucet page',
    url: 'https://reown.com/appkit',
    icons: ['https://assets.reown.com/reown-profile-pic.png']
};

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [sepolia];

export const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    ssr: false
});

export const wagmiConfig = wagmiAdapter.wagmiConfig;
