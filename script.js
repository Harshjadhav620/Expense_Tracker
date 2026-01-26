let amountInput = document.getElementById("amount");
let categorySelect = document.getElementById("category_chart");
let addExpenseBtn = document.getElementById("add_btn");

addExpenseBtn.addEventListener("click",expenseadd);


function expenseadd () {
    amount = amountInput.value.trim();
    if (amount === "") return;
}