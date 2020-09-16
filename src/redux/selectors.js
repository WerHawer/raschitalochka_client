export const getModalSelector = (state) => state.modal;

export const getLoaderSelector = (state) => state.loader;

export const getLocalErrorSelector = (state) => state.localError;

export const getIsAuthSelector = (state) => state.isAuth;

export const getUserBalance = (state) => state.user.balance;

export const getTransactionsSummary = (state) => state.transactionsSummary.stats;

export const getIncomeSummary = (state) =>
  state.transactionsSummary.stats.reduce((acc, item) => (item.type === 'Income' ? (acc += item.totalAmount) : acc), 0);

export const getCostsSummary = (state) =>
  state.transactionsSummary.stats.reduce((acc, item) => (item.type === 'Expense' ? (acc += item.totalAmount) : acc), 0);

export const getUserSelector = (state) => state.user;

export const getTransactionsSelector = (state) => state.transactions;

export const getTransactionsCategoriesSelector = (state) => state.transactionsCategories;
