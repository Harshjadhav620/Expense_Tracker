let amountInput = document.getElementById("amount");
let categorySelect = document.getElementById("category_chart");
let addExpenseBtn = document.getElementById("add_btn");
let expensedisplay = document.getElementById("expense_display")


addExpenseBtn.addEventListener("click",expenseadd);

const data = [];
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


    let display = document.getElementById("displayscreen");

    let span1 = document.createElement("span");
    span1.innerText = `₹ ${obj.amount}`;

    let span2 = document.createElement("span")
    span2.innerText = obj.category;

    display.appendChild(span1);
    display.appendChild(span2);

    expensedisplay.appendChild(display);

}

function calculateTotalAndAverage() {
    if (data.length === 0) return;
    let total = 0
    for (let i=0; i<data.length; i++) {
        total = total+data[i].amount;
    } 
    let average = total/data.length;


    let span1 = document.getElementById("total");
    span1.innerText=total;

    let span2 = document.getElementById("average");
    span2.innerText = average;
}



