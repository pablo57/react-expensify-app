import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// export the unconnected component as a named export to use for testing purposes.
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense}/>
                ))
            )
        }
    </div>
);

// map store state to component props
// fires every time the store changes
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// export the connected component which will be used in the application
export default connect(mapStateToProps)(ExpenseList);