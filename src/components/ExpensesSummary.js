import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import "numeral/locales/en-gb";
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    numeral.locale('en-gb');
    const expenseWord = expenseCount ===1 ? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$ #,##0.00');
   
return(
    <div>
<h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpensesTotal}</h1>
    </div>
)
};

const mapStateToProps = (state) => {
 const visibleExpenses = selectExpenses(state.expenses, state.filters);

 return {
     expenseCount: visibleExpenses.length,
     expensesTotal: selectExpensesTotal(visibleExpenses)
 };
};

export default connect (mapStateToProps) (ExpensesSummary);