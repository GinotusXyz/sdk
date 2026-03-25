import { parseIntent } from "./core/parser";
import { orchestrate } from "./core/orchestrator";

export async function runAgent(input: string) {
  console.log("Input:", input);

  const intent = await parseIntent(input);
  console.log("Parsed Intent:", intent);

  const result = await orchestrate(intent);
  console.log("Result:", result);

  return result;
}

// Example run
runAgent("Swap 1 ETH to USDC on Uniswap");
