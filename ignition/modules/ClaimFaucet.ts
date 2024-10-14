// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ClaimFaucetModule = buildModule("ClaimFaucetModule", (m) => {
  const ClaimFaucetModule = m.contract("ClaimFaucet", ["DLTToken", "DLT"]);

  return { ClaimFaucetModule };
});

export default ClaimFaucetModule;

// ClaimFaucetModule#ClaimFaucet - 0x04DF0e08cedFb29050718bE707f375D07681424D