import ITransaction from "../intefaces/ITransaction";

// Function to calculate the most popular paper product based on transactions data
const getMostPopularPaperProduct = (transactions: ITransaction[]) => {
  // Object to store paper products and their total amounts
  let paperProducts: {[key: string]: number} = {};

  // Loop through transactions to aggregate total amounts for each product
  transactions.forEach((transaction: any) => {
    if (paperProducts[transaction.product_name]) {
      paperProducts[transaction.product_name] += transaction.amount;
    } else {
      paperProducts[transaction.product_name] = transaction.amount;
    }
  });

  // Variables to store the most popular paper product and its total amount
  let mostPopularPaperProduct: string | null = null;
  let maxAmount = 0;

  // Loop through paper products to find the most popular one
  for (const product in paperProducts) {
    if (paperProducts.hasOwnProperty(product)) {
      if (paperProducts[product] > maxAmount) {
        // Update most popular product if its amount is greater than current max
        maxAmount = paperProducts[product];
        mostPopularPaperProduct = product;
      }
    }
  }

  // Return the most popular paper product
  return mostPopularPaperProduct;
};

export default getMostPopularPaperProduct;
