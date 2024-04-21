import ITransaction from "../intefaces/ITransaction";

// Function to calculate the total revenue based on transaction data
const getTotalRevenue = (transactions: ITransaction[]) => {
  // Variable to store the total revenue
  let totalRevenue = 0;

  // Loop through transactions to calculate the revenue for each transaction and sum them up
  transactions.forEach((transaction: { price: number; amount: number; }) => {
    totalRevenue += transaction.price * transaction.amount;
  });

  // Return the total revenue formatted to two decimal places
  return totalRevenue.toFixed(2);
};

export default getTotalRevenue;
