import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DltTokenModule = buildModule("DltTokenModule", (t) => {
  const dltToken = t.contract("DltToken");

  return { dltToken };
});

export default DltTokenModule;
