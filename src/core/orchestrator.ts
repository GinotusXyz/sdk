import { swapAgent } from "../agents/swapAgent";

export async function orchestrate(intent: any) {
  if (intent.includes("swap")) {
    return swapAgent(intent);
  }

  throw new Error("No matching agent found");
}
