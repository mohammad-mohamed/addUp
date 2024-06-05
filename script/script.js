function addUpNumbers(arrayString) {
    let numbersArray = arrayString.split(",").map(Number);
    let sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

document.addEventListener("DOMContentLoaded", function() {
    let numberListInput = document.getElementById("number_list");
    let calculateButton = document.getElementById("calculate_button");
    let resultParagraph = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        let arrayString = numberListInput.value.trim();
        if (arrayString === "") {
            resultParagraph.textContent = "Please provide a list of numbers.";
            return;
        }
        const sum = addUpNumbers(arrayString);
        resultParagraph.textContent = "Sum: " + sum;
    });
});