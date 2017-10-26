// Get total expenses amount
export default (expenses) => {
    return expenses
        .map(expense => expense.amount)
        .reduce((sum, curr) => sum + curr, 0);
};
