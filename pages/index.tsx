import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Airdrop721 from "../components/ERC721Airdrop"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="http://thirdweb.com/">thirdweb</a> ERC721Airdrop
        </h1>
        <Airdrop721 />
      </main>
    </div>
  );
};

export default Home;
