"use client";

import { WagmiConfig, createClient, configureChains, mainnet, goerli } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, provider } = configureChains([mainnet, goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
	  appName: "ChainCert",
	    chains,
});

const wagmiClient = createClient({
	  autoConnect: true,
	    connectors,
	      provider,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	  return (
		      <WagmiConfig client={wagmiClient}>
		            n Vim, write to a temp file
			    :w /data/data/com.termux/files/home/chaincert/layout_tmp.tsx<RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
			        </WagmiConfig>
				  );
}
