let amountInput = document.getElementById("amount");
let categorySelect = document.getElementById("category_chart");
let addExpenseBtn = document.getElementById("add_btn");
let displayscreen = document.getElementById("displayscreen");

let totalSpan = document.getElementById("total");
let averageSpan = document.getElementById("average");

const data = JSON.parse(localStorage.getItem("save")) || [];

data.forEach(obj => renderExpense(obj));
calculateTotalAndAverage();

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
    localStorage.setItem("save",JSON.stringify(data));

    renderExpense(obj);
    calculateTotalAndAverage();


    amountInput.value = "";
    categorySelect.value = "";
}

function renderExpense(obj) {
    let task = document.createElement("div");
    task.classList.add("task");

    let amountSpan = document.createElement("span");
    amountSpan.innerText = `₹ ${obj.amount}`;

    let categorySpan = document.createElement("span")
    categorySpan.innerText = obj.category;

    task.appendChild(amountSpan);
    task.appendChild(categorySpan);

    displayscreen.appendChild(task);
}

function calculateTotalAndAverage() {
    if (data.length === 0) {
        totalSpan.innerText = "0";
        averageSpan.innerText = "0.00";
        return;
    }


    let total = 0
    for (let i=0; i<data.length; i++) {
        total = total+data[i].amount;
    } 
    let average = total/data.length;
    totalSpan.innerText = total;
    averageSpan.innerText = average.toFixed(2);
}

let reset_btn = document.getElementById("rst_btn");

reset_btn.addEventListener("click",reset_fun);

function reset_fun() {
    const ok = confirm("Are you sure you want to reset all the expense?");
    if (!ok) return;

    data.length=0;

    localStorage.removeItem("save");

    displayscreen.innerHTML = "";

    totalSpan.innerText = "0";
    averageSpan.innerText = "0.00";
}

function Uncategorized_list() {

}



