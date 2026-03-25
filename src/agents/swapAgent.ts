import { execute } from "../core/executor";

export async function swapAgent(intent: string) {
  console.log("Running Swap Agent with intent:", intent);

  const tx = {
    type: "swap",
    detail: intent,
  };

  return execute(tx);
}
