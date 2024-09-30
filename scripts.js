// Mod10Les02

// Exploring Conditional Statements and Loops

// Task 1

//user_signin must be set to true to proceed
let user_signin = false;

if (user_signin == true) {
    console.log("User signed in.");
    console.log()

    // Task 2 and 3

    products = {"apple": 4.00, "banana": 3.50, "watermelon": 5.00, "grapes": 4.50, "pineapple": 3.00};

    for (product in products) {
        console.log("Product: ", product, "| Cost: $" + products[product]);
    }
    console.log()

    //user selection
    cart = ['apple', 'banana'];
    cartPrice = 0

    const product_names = Object.keys(products)

    for (i in cart) {
        item = cart[i]
        if (product_names.includes(item)) {
            cartPrice += products[item]
            console.log("Product: ", item, "| Cost: $" + products[item])
            console.log("Total cart price: $"+ cartPrice)
        } else {
            console.log("An item within your cart is not an available product.")
        }
    }

} else {
    console.log("User not signed in. Please sign in.");
}

//--------------------------------------------------------------------

// Exploring Functions in JavaScript

// Task 1

bankAccount = 0

function checkBalance(bankAccount) {
    console.log("Bank account balance: $"+bankAccount)
}

function deposit(amount) {
    if (amount <= 0) {
        console.log("Deposit amount cannot be less than or equal to $0.")
    } else {
    bankAccount += amount
    return bankAccount }
}

deposit(100)
checkBalance(bankAccount)

function withdrawl(amount) {
    if (amount <= 0) {
        console.log("Withdrawl amount cannot be less than or equal to $0.");
    } else if (amount >= bankAccount) {
            console.log("Insufficient bank account balance for withdrawl amount requested.")
        } else {
            bankAccount -= amount
            return bankAccount
        }
    }

withdrawl(150)
checkBalance(bankAccount)