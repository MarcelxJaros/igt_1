// Import necessary CSS files for styling
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// Import required libraries and components
import React, { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range'; // Component for selecting date range
import { addDays } from 'date-fns'; // Utility function for date manipulation
import InfoCard from '../components/InfoCard'; // Component to display information cards
import calculateProductData from '../services'; // Function to calculate product data
import transactions from '../data/transactions.json'; // Sample transaction data
import ITransaction from '../intefaces/ITransaction'; // Interface for transaction data
import IDateFilter from '../intefaces/IDateFilter'; // Interface for date filter
import ITotalsData from '../intefaces/ITotalsData'; // Interface for totals data

// Dashboard component to display paper company sales by date
const DashBoard = () => {
  // State for storing date filter
  const [dateFilter, setDateFilter] = useState<IDateFilter>({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  });

  // Default totals data
  const defaultData = {
    mostPopularPaperProduct: '-',
    totalProductsSold: 0,
    totalRevenue: 0
  };

  // State for storing totals data
  const [totalsData, setTotalsData] = useState<ITotalsData>(defaultData);

  // State for storing filtered transaction data
  const [filteredData, setFilteredData] = useState<ITransaction[]>(transactions);

  // filterTransactionsByDateRange is a utility function to filter transactions based on a given date range.
  const filterTransactionsByDateRange = (transactions: ITransaction[], startDate: Date, endDate: Date) => {
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.transaction_date).getTime();
      return transactionDate >= startTimestamp && transactionDate <= endTimestamp;
    });
  };

  // Effect to update filtered data when date filter changes
  useEffect(() => {
    if (dateFilter.startDate !== dateFilter.endDate) {
      setFilteredData(filterTransactionsByDateRange(transactions, dateFilter.startDate, dateFilter.endDate));
    }
  }, [dateFilter]);

  // Effect to calculate totals data when filtered data changes
  useEffect(() => {
    if (filteredData.length) {
      setTotalsData(calculateProductData(filteredData));
    } else {
      setTotalsData(defaultData);
    }
  }, [filteredData]);

  // Render the dashboard UI
  return (
    <div className='page-wrapper'>
      <div className='heading'>Paper Company Sales by Date</div>
      <div className='dashboard'>
        <div className='dashboard-left'>
          <div>
            {/* Date Range component for selecting date range */}
            <DateRange
              className='date-range'
              editableDateInputs={true}
              onChange={(item: any) => setDateFilter(item.selection)}
              moveRangeOnFirstSelection={false}
              ranges={[dateFilter]}
            />
          </div>
        </div>
        <div className='dashboard-right'>
          <div className='totals'>
            {/* InfoCards to display totals data */}
            <InfoCard heading={'Most popular product'} data={totalsData.mostPopularPaperProduct}></InfoCard>
            <InfoCard heading={'Total products sold'} data={totalsData.totalProductsSold}></InfoCard>
            <InfoCard heading={'Total revenue'} data={totalsData.totalRevenue}></InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
