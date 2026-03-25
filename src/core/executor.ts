export async function execute(tx: any) {
  console.log("Executing transaction:", tx);

  // simulate execution
  return {
    status: "success",
    txHash: "0x123...",
  };
}
