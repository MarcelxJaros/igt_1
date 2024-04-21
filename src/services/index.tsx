import ITransaction from "../intefaces/ITransaction";
import getMostPopularPaperProduct from "./getMostPopularProduct";
import getTotalProductsSold from "./getTotalProductsSold";
import getTotalRevenue from "./getTotalRevenue";


const calculateProductData = (transactions: ITransaction[]) => {
  return {
    mostPopularPaperProduct: getMostPopularPaperProduct(transactions),
    totalProductsSold: Number(getTotalProductsSold(transactions)),
    totalRevenue: Number(getTotalRevenue(transactions))
  };
};

export default calculateProductData;