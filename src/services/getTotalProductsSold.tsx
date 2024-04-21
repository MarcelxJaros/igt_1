import ITransaction from "../intefaces/ITransaction";

// Function to calculate the total number of products sold based on transaction data
const getTotalProductsSold = (transactions: ITransaction[]) => {
  // Variable to store the total number of products sold
  let totalProducts = 0;

  // Loop through transactions to sum up the amounts of all products sold
  transactions.forEach((transaction: ITransaction) => {
    totalProducts += transaction.amount;
  });

  // Return the total number of products sold
  return totalProducts;
};

export default getTotalProductsSold;
