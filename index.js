function calculateTax(amount) {
    return amount * 0.1; // Assuming a tax rate of 10%
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findmaximum(num1 , num2) {
    return Math.max(num1, num2);
}
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
        else {
        return num2;
    }   
}

function isPalindrome(word) {
    if (word === word.split('').reverse().join('')) {
        return true;
    }
    else {
        return false;
    }
}

function calculateDiscountedPrice(originalprice, discountPercentage) {
    const discountedAmount = originalprice * (discountPercentage / 100);
    return originalprice - discountedAmount;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };