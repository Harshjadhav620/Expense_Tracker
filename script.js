let amountInput = document.getElementById("amount");
let categorySelect = document.getElementById("category_chart");
let addExpenseBtn = document.getElementById("add_btn");
let displayscreen = document.getElementById("displayscreen")

let totalSpan = document.getElementById("total");
let averageSpan = document.getElementById("average");

const data = [];

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


    let task = document.createElement("div");
    task.classList.add("task");

    let amountSpan = document.createElement("span");
    amountSpan.innerText = `₹ ${obj.amount}`;

    let categorySpan = document.createElement("span")
    categorySpan.innerText = obj.category;

    task.appendChild(amountSpan);
    task.appendChild(categorySpan);

    displayscreen.appendChild(task);

    calculateTotalAndAverage();

}

function calculateTotalAndAverage() {
    if (data.length === 0) return;
    let total = 0
    for (let i=0; i<data.length; i++) {
        total = total+data[i].amount;
    } 
    let average = total/data.length;


    totalSpan.innerText = total;
    averageSpan.innerText = average.toFixed(2);
}



