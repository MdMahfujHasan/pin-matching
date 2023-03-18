function randomNumberGenerator() {
    const randomNumber = Math.round(Math.random() * 10000);
    const randomNumberString = randomNumber + '';
    const arrayOfRandomDigits = randomNumberString.split('');
    if (arrayOfRandomDigits.length === 4) {
        const arrayOfRandomDigitsJoin = arrayOfRandomDigits.join('');
        const intRandomNumber = parseInt(arrayOfRandomDigitsJoin);
        return intRandomNumber;
    }
    else {
        return randomNumberGenerator();
    }
}

document.getElementById('btn-generate-pin').addEventListener('click', function () {
    const generatePinInputField = document.getElementById('generate-pin-input-field');
    generatePinInputField.value = randomNumberGenerator();
})

document.getElementById('digits-field').addEventListener('click', function (event) {
    const typedNumber = event.target.innerText;
    const digitsInputField = document.getElementById('digits-input-field');
    const digitsInputFieldValue = digitsInputField.value;
    if (isNaN(typedNumber)) {
        if (typedNumber === 'C') {
            digitsInputField.value = '';
        }
        else if (typedNumber === '<') {
            const arrayOfDigitsInputFieldValue = digitsInputFieldValue.split('');
            arrayOfDigitsInputFieldValue.pop();
            const remainingDigits = arrayOfDigitsInputFieldValue.join('');
            digitsInputField.value = remainingDigits;
        }
    }
    else {
        const newDigitsInputField = digitsInputField.value + typedNumber;
        digitsInputField.value = newDigitsInputField;
    }
})

document.getElementById('btn-submit').addEventListener('click', function () {
    const generatePinInputField = document.getElementById('generate-pin-input-field');
    const generatePinInputFieldValue = generatePinInputField.value;
    const digitsInputField = document.getElementById('digits-input-field');
    const digitsInputFieldValue = digitsInputField.value;
    const pinMatched = document.getElementById('pin-matched');
    const pinNotMatched = document.getElementById('pin-not-matched');
    const tryLeft = document.getElementById('try-left');
    const tryLeftString = tryLeft.innerText;
    const tryLeftNumeric = parseInt(tryLeftString);
    const tryLeftText = document.getElementById('try-left-text');
    if (generatePinInputFieldValue === digitsInputFieldValue) {
        pinMatched.style.display = 'block';
        pinNotMatched.style.display = 'none'
    }
    else if (isNaN(tryLeftNumeric)) {
        tryLeft.innerText = "You've exceeded the limit of attempts. Please try again in 1 hour.";
    }
    else if (tryLeftNumeric === 1) {
        tryLeft.innerText = "You've exceeded the limit of attempts. Please try again in 1 hour."
        tryLeftText.style.display = 'none';
    }
    else {
        pinNotMatched.style.display = 'block';
        pinMatched.style.display = 'none';
        tryLeft.innerText = tryLeftNumeric - 1;
    }
})