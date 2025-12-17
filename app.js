const numberInput = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const romanNumResult = document.querySelector("#output");

const convertToRoman = (num) => {
    const romanFigures = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" },
    ];

    let roman = "";

    for (let i = 0; i < romanFigures.length; i++) {
        while (num >= romanFigures[i].value) {
            roman += romanFigures[i].symbol;
            num -= romanFigures[i].value;
        }
    }
    romanNumResult.innerHTML = roman;
    return roman;
};

convertBtn.onclick = (e) => {
    e.preventDefault();
    if (numberInput.value > 3999) {
        romanNumResult.classList.remove("hidden");
        romanNumResult.innerHTML =
            "Please enter a number less than or equal to 3999";
        return;
    }
    if (!numberInput.value) {
        romanNumResult.classList.remove("hidden");
        romanNumResult.innerHTML = "Please enter a valid number";
        return;
    }
    if (numberInput.value <= 0) {
        romanNumResult.classList.remove("hidden");
        romanNumResult.innerHTML =
            "Please enter a number greater than or equal to 1";
        return;
    }

    convertToRoman(numberInput.value);
};
