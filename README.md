## Getting Started

ERC721 Airdorp frontend

```bash
git clone https://github.com/dturska12/thirdweb-Airdrop.git
```

After cloning the repo, we will need to deploy our ERC721Airdrop contract here https://thirdweb.com/thirdweb.eth/AirdropERC721

## Setup

Once deploying the contract, we will need to update our Addresses.ts with the new contract address

```export const AIRDROP_CONTRACT="0x000..000";```

Next, we need to update the `activeChain` in our `_app.tsx` with the chain our contract is deployed on

To do this, we will import the Network here ```
import { Ethereum } from "@thirdweb-dev/chains"```

and update our `activeChain` here ```<ThirdwebProvider activeChain={Ethereum}>```

## Set approval

Back on our thirdweb dashboard, we will need to copy the ERC721Airdrop contract address and set approval on our NFT collection contract. 

To do this, visit your collection dashboard page, select the explorer tab, and locate `setApprovalForAll`

Paste your ERC721Airdrop contract address in the input box, select `True` then click execute. 
<img width="1315" alt="Screenshot 2023-06-27 at 5 10 09 PM" src="https://github.com/dturska12/thirdweb-Airdrop/assets/86588710/a6196bef-a145-4acb-8e1c-1ae5c204cfc6">

Once approval is set, you can download the exampleAirdrop.csv file, and use the dapp!
### Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
