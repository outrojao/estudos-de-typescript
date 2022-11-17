//* EXERCISE 1

//TODO: Declare the Loan interface.
interface Loan {
    principal: number,
    interestRate: number
}

//TODO: Declare the ConventionalLoan interface.
interface ConventionalLoan extends Loan {
    months: number
}

//TODO: Update the calculateInterestOnlyLoanPayment function.
function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    let interest = loanTerms.interestRate / 1200;
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00"

//TODO: Update the calculateConventionalLoanPayment function.
function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    let interest: number = loanTerms.interestRate / 1200;
    let payment: number;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let conventionalPayment = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"