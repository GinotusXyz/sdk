import { ethers } from "ethers";
import { config } from "../config/env";

export function getWallet() {
  const provider = new ethers.JsonRpcProvider(config.rpcUrl);
  return new ethers.Wallet(config.privateKey, provider);
}
