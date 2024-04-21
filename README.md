# IGT task 1

This program is a React component named DashBoard responsible for displaying paper company sales data by date.
The component uses react-date-range to allow users to select a date range.
It fetches sample transaction data from ../data/transactions.json.
It utilizes useEffect hooks to update the filtered data and calculate totals data whenever the date filter or filtered data changes.
The UI consists of a heading, a date range selector, and info cards displaying various totals data.
Each info card shows different metrics such as the most popular product, total products sold, and total revenue.
Calculate functions are in services folder.