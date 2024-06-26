var conversionRates = {
    Dollar: 3.5,
    Dinar: 5,
    Nis: 1
};

function changeCurrency(event) {
    event.preventDefault();
    var amount = parseFloat(document.querySelector('.input').value);
    var currencyType = document.querySelector('select').value;
    var convertedAmount = amount * conversionRates[currencyType];
    var result = document.querySelector('.result');
    result.textContent = `${amount} Nis is equal to ${convertedAmount} ${currencyType}.`;
}

document.querySelector('.exchangeForm').onsubmit = changeCurrency;