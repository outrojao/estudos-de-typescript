function loanCalculator (principle: number, interestRate: number, months = 12): string {
    let interest: number = interestRate / 1200;   // Calculates the monthly interest rate 
    let payment: number;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}

let myLoan = loanCalculator(1000, 5);
console.log(myLoan);