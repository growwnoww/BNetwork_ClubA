"use client";

import * as React from "react";
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets, darkTheme } from "@rainbow-me/rainbowkit";
import { argentWallet, trustWallet, ledgerWallet } from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bscTestnet, bsc } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains([bsc, bscTestnet], [publicProvider()]);

const projectId = "YOUR_PROJECT_ID";

const { wallets } = getDefaultWallets({
    appName: "Believe Network",
    projectId,
    chains,
});

const demoAppInfo = {
    appName: "Believe Network",
};

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: "Other",
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains }),
        ],
    },
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} appInfo={demoAppInfo} theme={darkTheme()} modalSize="compact">
                {mounted && children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}