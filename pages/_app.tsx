import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Mumbai } from "@thirdweb-dev/chains"
import { ConnectWallet } from "@thirdweb-dev/react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Mumbai}>
      <ConnectWallet />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
