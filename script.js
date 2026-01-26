let amountInput = document.getElementById("amount");
let categorySelect = document.getElementById("category_chart");
let addExpenseBtn = document.getElementById("add_btn");

addExpenseBtn.addEventListener("click",expenseadd);


function expenseadd () {
    let amount = amountInput.value.trim();
    let category = categorySelect.value;
    if (amount === "") return;
    if (category === "") return;

    amount = Number(amount);
    if (amount <= 0 ) return;
}