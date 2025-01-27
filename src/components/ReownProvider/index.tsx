import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {FC, PropsWithChildren} from "react";
import {wagmiAdapter, networks, metadata, projectId, wagmiConfig} from "../../config";

const queryClient = new QueryClient();

createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata,
    features: {
        analytics: true,
        socials: false,
        email: false
    }
});

const ReownProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default ReownProvider
