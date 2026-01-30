let amountInput = document.getElementById("amount");
let categorySelect = document.getElementById("category_chart");
let addExpenseBtn = document.getElementById("add_btn");
let expensedisplay = document.getElementById("expense_display")

addExpenseBtn.addEventListener("click",expenseadd);


function expenseadd () {
    let amount = amountInput.value.trim();
    let category = categorySelect.value;
    if (amount === "") return;
    if (category === "") return;

    amount = Number(amount);
    if (amount <= 0 ) return;  
    
    const obj = {
    amount: amount,    
    category: category, 
    id: Date.now(),      
    date: new Date()  
};
    data.push(obj);
    amountInput.value = "";
    categorySelect.value = "";

    let display = document.createElement("div")
    display.classList.add("task");

    let span1 = document.createElement("span");
    span1.innerText = `₹ ${obj.amount}`;

    let span2 = document.createElement("span")
    span2.innerText = obj.category;

    display.appendChild(span1);
    display.appendChild(span2);


    expensedisplay.appendChild(display);

}

const data = [];

