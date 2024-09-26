// Good Luck 💪🏾
function getTotalPrice(groceries) {
    return groceries.reduce((total, item) => total + item.quantity * item.price, 0);
}

// Example usage:
console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 }])); // ➞ 1.5
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
])); // ➞ 4


console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.50 }])); // ➞ 4.5