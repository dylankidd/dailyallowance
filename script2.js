const income = document.querySelector("#incomeinput");
const expenses = document.querySelector("#expensesinput");
const allowance = document.querySelector(".allowance");
const button = document.querySelector(".calculateButton");

let updateValue = () => {
  newAllowance  = "Allowance for the month is: " + 
						 "<br>" + 
						 "$" + 
						 Math.round(((Number(income.value) - Number(expenses.value)) /(30)) * 100)/100 + "/day";  
}


income.addEventListener('input', updateValue);
expenses.addEventListener('input', updateValue);

function displayAllowance () {
	allowance.innerHTML = newAllowance;
}










// (income - expenses)/30 days ===>>> output to allowance





// console.log(Number(income.value) + Number(expenses.value));
