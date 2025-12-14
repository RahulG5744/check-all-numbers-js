// Program to check if all elements in an array are numbers

function areAllNumbers(arr) {
    return arr.every(item => typeof item === "number");
}

const data = [10, 25, 40, 5];

const result = areAllNumbers(data);

console.log("Array:", data);
console.log(
    result
        ? "All elements are numbers ✅"
        : "Array contains non-number values ❌"
);
