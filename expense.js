const expenseForm = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');

let expenses = [];

expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (description && !isNaN(amount)) {
    // Create a new expense object
    const expense = {
      description,
      amount
    };

    // Add the new expense to the expenses array
    expenses.push(expense);

    // Clear the input fields
    descriptionInput.value = '';
    amountInput.value = '';

    // Update the display
    updateExpenseList();
  }
});

// Update the list and total
function updateExpenseList() {
  // Clear the list
  expenseList.innerHTML = '';

  let total = 0;

  // Loop through expenses and add them to the list
  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${expense.description}: $${expense.amount.toFixed(2)} 
                    <button onclick="deleteExpense(${index})">Delete</button>`;
    expenseList.appendChild(li);
    total += expense.amount;
  });

  // Update the total
  totalAmount.textContent = total.toFixed(2);
}

// Delete an expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  updateExpenseList();
}
