# Solidity-Web3-dApp Template

---
## Documentations:

- Open-Campus Network Details: https://open-campus-docs.vercel.app/getting-started
- Open-Campus Faucet: https://drpc.org/faucet/open-campus-codex
- Open-Campus Explorer: https://opencampus-codex.blockscout.com/
- Deploy smart-contract using HardHat (Video Tutorial and Documentation included): https://github.com/bhupendra-chouhan/hardhat-tutorial

---

### Setup guid:
##### 1. Clone this template repository
```
git clone <repo-link>
```
##### 2. Install all the dependencies
```
npm i
or npm --force i
or npm --legacy-peer-deps
```

##### 3. Start the project
```
npm run start
```

---
### Inside pacakage.json file:
```
{
  "name": "web3_dapp_template",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@openzeppelin/contracts": "^4.9.6",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@thirdweb-dev/contracts": "^3.15.0",
    "@thirdweb-dev/react": "^4.9.4",
    "@thirdweb-dev/sdk": "^4.0.99",
    "ethers": "^6.13.3",
    "ipfs-http-client": "^60.0.1",
    "pinata-web3": "^0.5.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2",
    "react-scripts": "5.0.1",
    "react-syntax-highlighter": "^15.5.0",
    "thirdweb": "^5.61.6",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@nomicfoundation/hardhat-ignition": "^0.15.6",
    "@nomicfoundation/hardhat-toolbox": "^5.0.0",
    "autoprefixer": "^10.4.20",
    "dotenv": "^16.4.5",
    "hardhat": "^2.22.13",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.16"
  }
}

```

---
### Template feature:
- Mobile Responsive
- Connect Wallet Feature (for Metamask)
