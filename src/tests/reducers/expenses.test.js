import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () =>{
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

// test('should edit an expense', () => {
//     const updates = {
//         id: '2',
//         description: 'Rent2',
//         note: '2',
//         amount: 109501,
//         createdAt: moment(0)
//     };
//     const action = {
//         type: 'EDIT_EXPENSE',
//         id: updates.id,
//         updates
//     };
//     const state = expensesReducer(expenses, action);
//     expect(state).toEqual([expenses[0], updates, expenses[2]]);
// });

test('should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});